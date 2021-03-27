import { useState, useEffect, useCallback } from 'react'

import useWeb3, { Web3Provider } from "../hooks/useWeb3";
import { useKillSwitchContract } from '../hooks/useKillSwitchContract'
import { useLPContract } from '../hooks/useLPContract'
import { useAccounts } from '../hooks/useAccount'
import { useMasterChefContract } from '../hooks/useMasterChefContract';
import { PageLayout } from '../components/PageLayout/PageLayout';
import { Card } from 'antd';
import { TVL } from '../components/TVL/TVL';
import { Button } from '../components/Button/Button';
import { RouterPicker } from '../components/RouterPicker/RouterPicker';
import { PositionSummary } from '../components/PositionSummary/PositionSummary';
import { PoolSummary } from '../components/PoolSummary/PoolSummary';


export const Liquidate = () => {
  return (
     <PageLayout>
       <div className="flex justify-between">
         <TVL tvl="100"/>
         <Button>
           Connect To A Wallet
         </Button>
        </div>
        <div className="mt-4">
          <RouterPicker />
        </div>
        <div className="mt-4">
          <PositionSummary />
        </div>
        <div className="mt-4 mb-4">
          <PoolSummary />
        </div>
    </PageLayout>
  );
}

