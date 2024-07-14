"use client";
import React from 'react'
import Sidebar from '../components/sidenav';
import Dashheader from '../components/dashheader';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data';
import TopCards from '../components/topcards';
import BarChart from '../components/barchart';
import RecentOrders from '../components/recentorders';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";


export default function Dashboard (){
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number>(0);
  const numTx = 10;

  return (
    
    
   
   
  <Sidebar>
    
    <Dashheader/>
    
<TopCards />
<div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
  <BarChart />
  <RecentOrders searchAddress={publicKey?.toString()} numTx={numTx} />
  </div>
   
  </Sidebar>

  )
}
