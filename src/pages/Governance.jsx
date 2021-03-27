import logo from '../logo.svg';
import { useState, useEffect, useCallback } from 'react'
import useWeb3  from "../hooks/useWeb3";
import { useAccounts } from '../hooks/useAccount';
import { PageLayout } from '../components/PageLayout/PageLayout';
import { TVL } from '../components/TVL/TVL';
import { Button } from '../components/Button/Button';
import { RouterPicker } from '../components/RouterPicker/RouterPicker';


export const Governance = () => {
  const { accounts, myAccount, balance } = useAccounts();
  const [web3Val] = useWeb3()
  const web3 = web3Val.web3;

  const formatAddress = (acc) => {
    return `${acc.substr(0,4)}...${acc.substring(acc.length - 4, acc.length)}`
  }

  return (
    <PageLayout>
       <div className="flex justify-items-end">
         <Button>
           {myAccount &&formatAddress(myAccount)}
         </Button>
        </div>
        <div className="mt-4">
          <RouterPicker />
        </div>
    </PageLayout>
  );
}

