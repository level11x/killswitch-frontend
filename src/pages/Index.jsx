import logo from '../logo.svg';
import { useState, useEffect, useCallback } from 'react'
import useWeb3  from "../hooks/useWeb3";
import { useKillSwitchContract } from '../hooks/useKillSwitchContract'
import { useLPContract } from '../hooks/useLPContract'
import { useAccounts } from '../hooks/useAccount'
import { useMasterChefContract } from '../hooks/useMasterChefContract'
import { usePancakeRouterContract } from '../hooks/usePancakeRouterContract'
import { useTarCalPoolContract } from '../hooks/useTarCalPoolContract'
import { BUSD_CONTRACT_ADDRESS, WBNB_CONTRACT_ADDRESS, CAKE_CONTRACT_ADDRESS, LP_CONTRACT_ADDRESS } from "../config/contract";
import { PageLayout } from '../components/PageLayout/PageLayout';
import { TVL } from '../components/TVL/TVL';
import { Button } from '../components/Button/Button';
import { RouterPicker } from '../components/RouterPicker/RouterPicker';
import { PositionSummary } from '../components/PositionSummary/PositionSummary';
import { PoolSummary } from '../components/PoolSummary/PoolSummary';
const tarContractAddress = '0x0576961aAc8eb06F6A6A6975dFB70cE51065880D'

export const Index = () => {
  const [acc, setAcc] = useState('')
  const [transactionState, setTransactionState] = useState('')
  const [allowance, setAllowance] = useState(0)
  const [walletLp, setWalletLp] = useState(0)
  const [stakedLp, setStakedLp] = useState(0)
  const [tvl, setTvl] = useState(0)
  const [tvlCake, setTvlCake] = useState(0)
  const [tvlBnb, setTvlBnb] = useState(0)
  const [reward, setReward] = useState(0)
  const [bnbPrice, setBnbPrice] = useState(0)
  const [cakePrice, setCakePrice] = useState(0)
  const [tvlTotal, setTvlTotal] = useState(0)
  const lpContract = useLPContract();
  const killSwitchContract = useKillSwitchContract()
  const masterChefContract = useMasterChefContract()
  const pancakeRouterContract = usePancakeRouterContract()
  const tarCalPoolContract = useTarCalPoolContract()
  const { accounts, myAccount, balance } = useAccounts();
  const [web3Val] = useWeb3()
  const web3 = web3Val.web3;

  async function getBNBPrice(pancakeRouter) {
    const oneBnb = '0x' + (1*10**18).toString(16)
    const lpPair = (await pancakeRouter.methods.getAmountsOut(oneBnb, [WBNB_CONTRACT_ADDRESS, BUSD_CONTRACT_ADDRESS]).call())
    console.log('lpPair', lpPair)
    console.log('1 BNB is', lpPair[1]/lpPair[0], 'BUSD')
    return lpPair[1]/lpPair[0]
  }

  async function getCakePrice(pancakeRouter, bnbPrice ,tvl) {
    const oneBnb = '0x' + (1*10**18).toString(16)
    const lpPair = await pancakeRouter.methods.getAmountsOut(oneBnb, [CAKE_CONTRACT_ADDRESS, WBNB_CONTRACT_ADDRESS]).call()
    console.log('lpPair', lpPair)
    console.log('1 Cake is', lpPair[1]/lpPair[0]*bnbPrice, 'BUSD')
    return lpPair[1]/lpPair[0]*bnbPrice
  }

  const fetch = useCallback(async (web3, myAccount , lp, killSwitch, masterChef, pancakeRouter, tarCalPool) => {
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

    const tvl = await masterChef.methods.userInfo(1, tarContractAddress).call()
    setTvl(tvl.amount)

    const totalLpSupply = await lp.methods.totalSupply().call();
    console.log('totalLpSupply', totalLpSupply)

    if (tvl.amount > 0) {
      const bnbPrice = await getBNBPrice(pancakeRouter)
      const cakePrice = await getCakePrice(pancakeRouter, bnbPrice, tvl.amount)

      setBnbPrice(bnbPrice)
      setCakePrice(cakePrice)

      const tokens = await tarCalPool.methods.getToken(LP_CONTRACT_ADDRESS, tvl.amount).call()
      console.log('tokens', tokens)
      setTvlCake(tokens[0])
      setTvlBnb(tokens[1])

      console.log('cakePrice', cakePrice)
      console.log('bnbPrice', bnbPrice)
      setTvlTotal(tokens[0]*cakePrice + tokens[1]*bnbPrice)
    }
  }, [])

  useEffect(() => {
    if(!myAccount || !lpContract || !killSwitchContract || !masterChefContract || !pancakeRouterContract || !tarCalPoolContract) return;
    fetch(web3, myAccount, lpContract, killSwitchContract, masterChefContract, pancakeRouterContract, tarCalPoolContract)
  }, [web3, myAccount, lpContract, killSwitchContract, masterChefContract, pancakeRouterContract, tarCalPoolContract])
  
  function approve() {
    const amount = '0x' + (1000*10**18).toString(16)
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

  const formatAddress = (acc) => {
    return `${acc.substr(0,4)}...${acc.substring(acc.length - 4, acc.length)}`
  }
  
  return (
    <PageLayout>
       <div className="flex justify-between">
         <TVL tvl={ (tvlTotal / 10**18).toFixed(3) } />
         <Button>
           {myAccount &&formatAddress(myAccount)}
         </Button>
        </div>
        <div className="mt-4">
          <RouterPicker />
        </div>
        <div className="mt-4">
          <PositionSummary liquidate={liquidate} position={
            { value: ((stakedLp / tvl  * tvlTotal) / 10**18).toFixed(3),
              reward: (reward / 10**18).toFixed(3),
              lp: (stakedLp / 10**18).toFixed(3),
            }
          } />
        </div>
        <div className="mt-4 mb-4">
          <PoolSummary approve={approve} isApprove={allowance !== 0} stake={stake} lp={ (walletLp / 10**18).toFixed(3) } />
        </div>
    </PageLayout>
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     KillSwitch, Stop loss! and Liquidate 💧
      //   </p>
      //   {
      //     allowance === 0 ? (
      //       <button onClick={approve}>Approve</button>
      //     ) : (
      //       <div>
      //         <button onClick={stake}>Stake { (walletLp / 10**18).toFixed(3) } LP</button>
      //         <button onClick={liquidate}>Kill Switch</button>
      //       </div>
      //     )
      //   }
      //   <p>{ transactionState }</p>
      //   <p>You have staked { (stakedLp / 10**18).toFixed(3) } LP + { (reward / 10**18).toFixed(3) } Reward</p>
      //   <p>TVL: { (tvl / 10**18).toFixed(3) } LP</p>
      //   <p>{ (tvlCake / 10**18).toFixed(3) } Cake - { (tvlBnb / 10**18).toFixed(3) } BNB</p>
      //   <p>{ (tvlTotal / 10**18).toFixed(3) } BUSD</p>
      // </header>
  );
}

