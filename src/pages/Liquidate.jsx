import { useState, useEffect, useCallback } from 'react'

import useWeb3, { Web3Provider } from "../hooks/useWeb3";
import { useKillSwitchContract } from '../hooks/useKillSwitchContract'
import { useLPContract } from '../hooks/useLPContract'
import { useAccounts } from '../hooks/useAccount'
import { useMasterChefContract } from '../hooks/useMasterChefContract';
import { PageLayout } from '../components/PageLayout/PageLayout';
import { Card } from 'antd';


export const Liquidate = () => {
  return (
     <PageLayout>
       <Card>
         Kill
      </Card>
    </PageLayout>
  );
}

