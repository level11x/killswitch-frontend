import Web3 from 'web3'
import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useCallback } from 'react'
import lpAbi from './abis/lp_abi.json'

function App() {
  const [allowance, setAllowance] = useState(0)
  const [lpValue, setLpValue] = useState(0)

  const fetch = useCallback(async () => {
    const web3 = new Web3(window.ethereum)
    try {
      window.ethereum.enable().then(result => console.log('enable result', result))
    } catch (err) {
      console.log(err)
    }
    if (!web3) return
    const accs = await web3.eth.getAccounts()
    const acc = accs[0]
    if (acc) {
      console.log('acc', acc)
    }

    const contract = new web3.eth.Contract(lpAbi, '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6')
    const result = await contract.methods.allowance(acc, '0xD68a0Fc5E708bc1F70CdF2e19d64A5EcBEB8B01f').call()
    setAllowance(result/10**18)
    if (result === 0) {
      console.log('Need to approve contract')
    } else {
      console.log('Already approve for', result / 10**18, 'BNB')
    }
    const bal = await contract.methods.balanceOf(acc).call()
    setLpValue(bal)
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          KillSwitch, Stop loss! and Liquidate 💧
        </p>
        {
          allowance === 0 ? (
            <button>Approve</button>
          ) : (
            <button>Stake { (lpValue/10**18).toFixed(3) } LP</button>
          )
        }
      </header>
    </div>
  );
}

export default App;
