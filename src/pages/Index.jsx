import Web3 from 'web3'
import logo from '../logo.svg';

import { useState, useEffect, useCallback } from 'react'
// import lpAbi from './abis/lp_abi.json'
// import tarAbi from './abis/killswitch2_abi.json'
// import masterChefAbi from '../abis/masterchef_abi.json'
// const tarContractAddress = '0xD68a0Fc5E708bc1F70CdF2e19d64A5EcBEB8B01f' // old

import useWeb3, { Web3Provider } from "../hooks/useWeb3";
import { useKillSwitchContract } from '../hooks/useKillSwitchContract'
import { useLPContract } from '../hooks/useLPContract'
import { useAccounts } from '../hooks/useAccount'
import { useMasterChefContract } from '../hooks/useMasterChefContract';
import { ConfigProvider } from 'antd';

const masterChefAddress = '0x73feaa1eE314F8c655E354234017bE2193C9E24E'
const tarContractAddress = '0x0576961aAc8eb06F6A6A6975dFB70cE51065880D'

export const Index = () => {
  const [acc, setAcc] = useState('')
  const [transactionState, setTransactionState] = useState('')
  const [allowance, setAllowance] = useState(0)
  const [walletLp, setWalletLp] = useState(0)
  const [stakedLp, setStakedLp] = useState(0)
  const [reward, setReward] = useState(0)
  const lpContract = useLPContract();
  const killSwitchContract = useKillSwitchContract()
  const masterChefContract = useMasterChefContract()
  const { accounts, myAccount, balance } = useAccounts();
  const [web3Val] = useWeb3()
  const web3 = web3Val.web3;


  const fetch = useCallback(async (myAccount , lp, killSwitch) => {
    console.log('@ lp ', lp)
    console.log('@ kill', killSwitch)
    const result = await lp.methods.allowance(myAccount, tarContractAddress).call()
    setAllowance(result/10**18)
    if (result === 0) {
      console.log('Need to approve contract')
    } else {
      console.log('Already approve for', result / 10**18, 'BNB')
    }
    const bal = await lp.methods.balanceOf(myAccount).call()
    setWalletLp(bal)

    const staked = await killSwitch.methods.stakeBalance(myAccount).call()
    setStakedLp(staked)
  }, [])

  useEffect(() => {
    console.log('@ myAccount ', myAccount)
    console.log('@ lpContract ', lpContract)
    console.log('@ killswitchContract ', killSwitchContract)
    console.log('@ web3 ', web3)
    if(!myAccount || !lpContract || !killSwitchContract ) return;
    console.log('@ calling fetch')
    fetch(myAccount, lpContract, killSwitchContract)
  }, [myAccount, lpContract, killSwitchContract])
  
  function approve() {
    const amount = '0x' + (10*10**18).toString(16)
    let options = {
      from: myAccount
    }
    lpContract.methods.approve(tarContractAddress, amount).send(options)
      .on('error', (error) => setTransactionState(error))
      .on('transactionHash', (transactionHash) => setTransactionState('Submitted transaction: ' + transactionHash))
      .on('receipt', async (receipt) => {
        setTransactionState('Successfully approve contract, you can now stake LP')
        const result = await lpContract.methods.allowance(myAccount, tarContractAddress).call()
        setAllowance(result/10**18)
      })
  }

  async function calBalanceAndReward() {
    const bal = await lpContract.methods.balanceOf(myAccount).call()
    setWalletLp(bal)

    const staked = await killSwitchContract.methods.stakeBalance(myAccount).call()
    setStakedLp(staked)

    const userInfo = await masterChefContract.methods.userInfo(1, tarContractAddress).call()
    const poolInfo = await masterChefContract.methods.poolInfo(1).call()

    console.log(userInfo)
    console.log(poolInfo)
    let pendingReward = (userInfo.amount * poolInfo.accCakePerShare) / userInfo.rewardDebt
    setReward(pendingReward)
  }

  async function stake() {
    let options = {
      from: myAccount
    }
    killSwitchContract.methods.stakeLPAllow().send(options)
      .on('error', (error) => setTransactionState(error))
      .on('transactionHash', (transactionHash) => setTransactionState('Submitted transaction: ' + transactionHash))
      .on('receipt', async (receipt) => {
        setTransactionState('Successfully stake LP')
        calBalanceAndReward()
      })
  }

  async function liquidate() {
    let options = {
      from: myAccount
    }
    killSwitchContract.methods.AutoRemoveAll().send(options)
      .on('error', (error) => setTransactionState(error))
      .on('transactionHash', (transactionHash) => setTransactionState('Submitted transaction: ' + transactionHash))
      .on('receipt', async (receipt) => {
        setTransactionState('Successfully liquidate')
        calBalanceAndReward()
      })
  }

  return (
      <Web3Provider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          KillSwitch, Stop loss! and Liquidate 💧
        </p>
        {
          allowance === 0 ? (
            <button onClick={approve}>Approve</button>
          ) : (
            <div>
              <button onClick={stake}>Stake { (walletLp / 10**18).toFixed(3) } LP</button>
              <button onClick={liquidate}>Kill Switch</button>
            </div>
          )
        }
        <p>{ transactionState }</p>
        <p>You have staked { (stakedLp / 10**18).toFixed(3) } LP + { (reward / 10**18).toFixed(3) } Reward</p>
      </header>
      </Web3Provider>
  );
}

