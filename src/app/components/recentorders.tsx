import React, {useEffect,useState} from 'react';
import { data } from '../data/data';
import { FaShoppingBag } from 'react-icons/fa';
const solanaWeb3 = require('@solana/web3.js');
import { Transaction, TransactionListProps } from '../types/types';

import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";


const RecentOrders: React.FC<TransactionListProps> =   ({ searchAddress, numTx }) => {
  const addressToUse = searchAddress || "";
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(transaction.signature.substring(0, 10));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
  };
  
  useEffect(() => {
    const endpoint = "https://dawn-weathered-tab.solana-devnet.quiknode.pro/4dc4791564c9683ee866a71ec1eee26d7d181f9e/";
    const solanaConnection = new solanaWeb3.Connection(endpoint);

    const getTransactions = async (address: string, numTransactions: number) => {
      try {
        const pubKey = new solanaWeb3.PublicKey(address);
        let transactionList = await solanaConnection.getSignaturesForAddress(pubKey, { limit: numTransactions });
     
        setTransactions(transactionList.map(transaction => ({
         
          signature: transaction.signature,
          blockTime: transaction.blockTime,
          confirmationStatus: transaction.confirmationStatus,
         
        })));
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    getTransactions(addressToUse, numTx);
  }, [addressToUse, numTx]);
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Recent Tranfers</h1>
      <ul>
      {transactions.map((transaction, index) => (
          <li
          key={transaction.signature}    
                  className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-[#fbcfa6] rounded-lg p-3'>
              <FaShoppingBag className='text-[#232324]' />
            </div>
            <div className='pl-4'>
              
              <p className='text-gray-800 text-sm' onClick={handleCopyToClipboard} >{copied ? 'Copied!' : transaction.signature.substring(0, 20)}</p>
              <p className='text-gray-400 text-sm'>{transaction.blockTime}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm p-[10px] bg-[#c4f9c3] rounded-[8px]'>{transaction.confirmationStatus}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;