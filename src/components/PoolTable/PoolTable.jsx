import React, { useState, useCallback, useEffect } from 'react'
import useWeb3  from "../../hooks/useWeb3";
import { KS_AGGREGATOR_POOL2 } from "../../config/contract";
import { useAccounts } from '../../hooks/useAccount'
import { useLPContract } from '../../hooks/useLPContract';
import { useWardenPairContract } from '../../hooks/useWardenPairContract'
import { useKSAggregatorContract2 } from '../../hooks/useKSAggregatorContract2'

import { Button } from '../Button/Button'

export const PoolTable = ({ approve }) => {
  const { accounts, myAccount, balance } = useAccounts();
  const [easterEgg, setEasterEgg] = useState(false)
  const [isApprove, setIsApprove] = useState({})
  const wardenLPContract = useWardenPairContract();
  const aggregatorContract2 = useKSAggregatorContract2();
  const pancakeLP1Contract = useLPContract();
  const [web3Val] = useWeb3()
  const web3 = web3Val.web3;

  const headerClass = 'pt-4 pb-4'
  const onHover = () => {
    setEasterEgg(!easterEgg)
  }

  const fetch = useCallback(async (account, lp) => {
    const result = await lp.methods.allowance(account, KS_AGGREGATOR_POOL2).call()
    console.log('result', result)
    setIsApprove({
      ...isApprove,
      [lp._address]: result > 0
    });
    console.log(lp._address, 'isApprove', isApprove)
  }, [])

  useEffect(() => {
    if (!myAccount || !wardenLPContract) return
    // fetch(pancakeLP1Contract)
    fetch(myAccount, wardenLPContract)
  }, [web3, myAccount, pancakeLP1Contract, wardenLPContract])

  function approve(lp, ksPoolContract) {
    const amount = '0x' + (1000*10**18).toString(16)
    let options = {
      from: myAccount
    }
    lp.methods.approve(ksPoolContract, amount).send(options)
      .on('error', (error) => console.log(error))
      .on('transactionHash', (transactionHash) => console.log('Submitted transaction: ' + transactionHash))
      .on('receipt', async (receipt) => {
        console.log('Successfully approve contract, you can now stake LP')
        const result = await lp.methods.allowance(myAccount, ksPoolContract).call()
        setIsApprove({
          ...isApprove,
          [lp]: result > 0
        });
      })
  }

  async function stake(ksPoolContract) {
    let options = {
      from: myAccount
    }
    ksPoolContract.methods.stakeLPAllow().send(options)
      .on('error', (error) => console.log(error))
      .on('transactionHash', (transactionHash) => console.log('Submitted transaction: ' + transactionHash))
      .on('receipt', async (receipt) => {
        console.log('Successfully stake LP')
        // calBalanceAndReward()
      })
  }

  return (
    <div className='p-4 text-sm' >
      <div className='flex border border-l-0 border-r-0 border-t-0 border-gray'>
        <div onClick={onHover} className={`w-3/12 ${headerClass}`}>
          Pool
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          APY
        </div>
        <div className={`w-3/12 ${headerClass}`}>
          Yield
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          Current LP
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          Action
        </div>
      </div>
      <div className='flex items-center'>
        <div className={`flex w-3/12 ${headerClass}`}>
          <div className='mr-1 relative'>
            <img  src='/img/BSC.png' />
            <img className='absolute top-0 right-4' src='/img/logo/pancake.png' />
          </div>
          Pancakeswap<br/>
          BNB-Cake
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          <span className='text-secondary'>883.92% </span>
        </div>
        <div className={`w-3/12 ${headerClass}`}>
          Yield Farming   :    442.74%<br />
          Trading Fees    :    45.95%<br />
          KillSwitch Reward :    404.78%<br />
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          {/* {lp} */}
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          <div className='w-26'>
            <Button type='secondary'>
                {'SUSPENDED ...UPGRADING'}
            </Button>
            {/* Due to incident V0.0.1 */}
            {/* <Button onClick={() => {isApprove ? stake() : approve() }} type='secondary'>
                { isApprove ? 'Farm' : 'Approve' }
            </Button> */}
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className={`flex w-3/12 ${headerClass}`}>
          <div className='mr-1 relative'>
            <img  src='/img/BSC.png' />
            <img className='absolute top-0 right-4' src='/img/logo/pancake.png' />
          </div>
          Wardenswap<br/>
          WAD-WBNB
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          <span className='text-secondary'>883.92% </span>
        </div>
        <div className={`w-3/12 ${headerClass}`}>
          Yield Farming   :    442.74%<br />
          Trading Fees    :    45.95%<br />
          KillSwitch Reward :    404.78%<br />
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          <div className='w-26'>
            <Button type='secondary'>
                {'SUSPENDED ...UPGRADING'}
            </Button>
            {/* Due to incident V0.0.1 */}
            <Button onClick={() => {isApprove['0xDc683Adb914EdF91df4A36c33EE4f59ca41bC263'] ? stake(aggregatorContract2) : approve(wardenLPContract, KS_AGGREGATOR_POOL2) }} type='secondary'>
                { isApprove['0xDc683Adb914EdF91df4A36c33EE4f59ca41bC263'] ? 'Farm' : 'Approve' }
            </Button>
          </div>
        </div>
      </div>
      {easterEgg && <div className='flex items-center' >
      <div className={`flex w-3/12 ${headerClass}`}>
          <div className='mr-1 relative'>
            <img  src='/img/BSC.png' />
            <img className='absolute top-0 right-4' src='/img/logo/killswitch.png' />
          </div>
          Pancakeswap<br/>
          BNB-KillSwitch
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          <span className='text-secondary'>883.92% </span>
        </div>
        <div className={`w-3/12 ${headerClass}`}>
          Yield Farming   :    442.74%<br />
          Trading Fees    :    45.95%<br />
          KillSwitch Reward :    404.78%<br />
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          {/* {lp} */}
        </div>
        <div className={`w-2/12 ${headerClass}`}>
          <div className='w-24'>
            <Button onClick={() => {isApprove['0xDc683Adb914EdF91df4A36c33EE4f59ca41bC263'] ? stake() : approve() }} type='secondary'>
                Coming Soon
            </Button>
          </div>
        </div>
      </div>
      }
   </div>
  )
}


