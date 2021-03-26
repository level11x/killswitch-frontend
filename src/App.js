import Web3 from 'web3'
import logo from './logo.png';
import './App.css';
import { useState, useEffect, useCallback } from 'react'
import lpAbi from './abis/lp_abi.json'
import tarAbi from './abis/killswitch2_abi.json'
import masterChefAbi from './abis/masterchef_abi.json'

const masterChefAddress = '0x73feaa1eE314F8c655E354234017bE2193C9E24E'
const tarContractAddress = '0x0576961aAc8eb06F6A6A6975dFB70cE51065880D'
// const tarContractAddress = '0xD68a0Fc5E708bc1F70CdF2e19d64A5EcBEB8B01f' // old

function App() {
  const [acc, setAcc] = useState('')
  const [transactionState, setTransactionState] = useState('')
  const [allowance, setAllowance] = useState(0)
  const [walletLp, setWalletLp] = useState(0)
  const [stakedLp, setStakedLp] = useState(0)
  const [reward, setReward] = useState(0)

  const web3 = new Web3(window.ethereum)
  try {
    window.ethereum.enable().then(result => console.log('enable result', result))
  } catch (err) {
    console.log(err)
  }

  const fetch = useCallback(async () => {
    if (!web3) return

    const accs = await web3.eth.getAccounts()
    const acc = accs[0]
    if (acc) {
      setAcc(acc)
    }

    const lpContract = new web3.eth.Contract(lpAbi, '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6')
    const result = await lpContract.methods.allowance(acc, tarContractAddress).call()
    setAllowance(result/10**18)
    if (result === 0) {
      console.log('Need to approve contract')
    } else {
      console.log('Already approve for', result / 10**18, 'BNB')
    }
    const bal = await lpContract.methods.balanceOf(acc).call()
    setWalletLp(bal)

    const tarContract = new web3.eth.Contract(tarAbi, tarContractAddress)
    const staked = await tarContract.methods.stakeBalance(acc).call()
    setStakedLp(staked)
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])
  
  function approve() {
    const amount = '0x' + (10*10**18).toString(16)
    let options = {
      from: acc
    }
    const lpContract = new web3.eth.Contract(lpAbi, '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6')
    lpContract.methods.approve(tarContractAddress, amount).send(options)
      .on('error', (error) => setTransactionState(error))
      .on('transactionHash', (transactionHash) => setTransactionState('Submitted transaction: ' + transactionHash))
      .on('receipt', async (receipt) => {
        setTransactionState('Successfully approve contract, you can now stake LP')
        const result = await lpContract.methods.allowance(acc, tarContractAddress).call()
        setAllowance(result/10**18)
      })
  }

  async function calBalanceAndReward() {
    const lpContract = new web3.eth.Contract(lpAbi, '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6')
    const bal = await lpContract.methods.balanceOf(acc).call()
    setWalletLp(bal)

    const tarContract = new web3.eth.Contract(tarAbi, tarContractAddress)
    const staked = await tarContract.methods.stakeBalance(acc).call()
    setStakedLp(staked)

    const masterChefContract = new web3.eth.Contract(masterChefAbi, masterChefAddress)
    const userInfo = await masterChefContract.methods.userInfo(1, tarContractAddress).call()
    const poolInfo = await masterChefContract.methods.poolInfo(1).call()

    console.log(userInfo)
    console.log(poolInfo)
    let pendingReward = (userInfo.amount * poolInfo.accCakePerShare) / userInfo.rewardDebt
    setReward(pendingReward)
  }

  async function stake() {
    const lpContract = new web3.eth.Contract(lpAbi, '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6')
    let options = {
      from: acc
    }
    const tarContract = new web3.eth.Contract(tarAbi, tarContractAddress)
    tarContract.methods.stakeLPAllow().send(options)
      .on('error', (error) => setTransactionState(error))
      .on('transactionHash', (transactionHash) => setTransactionState('Submitted transaction: ' + transactionHash))
      .on('receipt', async (receipt) => {
        setTransactionState('Successfully stake LP')
        calBalanceAndReward()
      })
  }

  async function liquidate() {
    const lpContract = new web3.eth.Contract(lpAbi, '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6')
    let options = {
      from: acc
    }
    const tarContract = new web3.eth.Contract(tarAbi, tarContractAddress)
    tarContract.methods.AutoRemoveAll().send(options)
      .on('error', (error) => setTransactionState(error))
      .on('transactionHash', (transactionHash) => setTransactionState('Submitted transaction: ' + transactionHash))
      .on('receipt', async (receipt) => {
        setTransactionState('Successfully liquidate')
        calBalanceAndReward()
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{height:'5em'}} className="App-logo" alt="logo" />
        <p>
          {/* KillSwitch, Stop loss! and Liquidate 💧 */}
          {/* KillSwitch, Oneclick liquidate all 💧 */}
          💧 Fastest liquidations ever on DEFI 💧
        </p>
        <p style={{textDecoration: 'underline'}}>!!! Disclaimer (Alpha V0.0.1) - ลองกดเล่นได้ครับแต่ความเสี่ยงสูงที่จะมี Bug นะครับ !!!<br/> </p>
        <li>ตอนนี้ใช้ได้เฉพาะ lp CAKE-BNB เท่านั้นนะครับ </li>
        <li>ต้องทำ lp CAKE-BNB ก่อนที่จะใช้งานนะครับไม่งั้นจะ ERROR Web น่าจะพัง เดี๋ยวจะแก้ให้ใน Version หน้าครับ</li>
        <li>ถ้าอยากลองลองแค่นิดเดียวก่อนนะครับ จริงๆ ทีมงานสามารถคืน LP ให้ทุกคนได้หากมีอะไรผิดพลาด แต่ทางที่ดีอย่าเพิ่งรีบลองเยอะๆ นะครับ </li>
        <li>Bonus : การ liquidate position ประหยัดค่า Gas กว่าการทำปกติครับในอนาคตถ้ามีการ Optimize จะประหยัดค่า Gas มากกว่าปกติ อย่างน้อยครึ่งนึงครับ </li>
        <br/>
        {
          allowance === 0 ? (
            <button onClick={approve} style={{color: '#008CBA'}}>Approve</button>
          ) : (
            <div>
              <button onClick={stake} style={{backgroundColor: '#008CBA'}}>Stake { (walletLp / 10**18).toFixed(3) } LP</button>
              {/* <button onClick={liquidate} style={{backgroundColor: '#008CBA'}}>KillSwitch</button> */}
            </div>
          )
        }
        <p>{ transactionState }</p>
        <p>🏄 You have staked { (stakedLp / 10**18).toFixed(3) } LP + { (reward / 10**18).toFixed(3) } Reward 🏂</p>
        {
          allowance !== 0 ? (
            <div>
              <p>⛔⛔⛔ 1) กด Killswitch ต่อเมื่อมั่นใจว่ามีค่าใน You have staked ด้านบนแล้วเท่านั้นนะครับไม่งั้นจะเสีย Gas ฟรีๆ ⛔⛔⛔</p>
              <p>⛔⛔⛔ 2) กด Killswitch แล้ว LP จะหายไปทันที รวมถึง REWARD ที่ได้ (CAKE) และจะกลายเป็น BNB เลยครับอัตโนมัติ ⛔⛔⛔</p>
              <p>⛔⛔⛔ 3) ทิ้งไว้สัก 1-2 วันแล้วค่อยมากดก็ได้ครับ Killswitch ไม่ต้องรีบกด จะได้เห็น BNB ว่าเพิ่มขึ้นครับ :) ⛔⛔⛔</p>
              <button onClick={liquidate} style={{backgroundColor: '#008CBA'}}>KillSwitch (Liquidate all position)</button>
            </div>
          ) : (
            null
          )
        }
        <br/>
      </header>
    </div>
  );
}

export default App;
