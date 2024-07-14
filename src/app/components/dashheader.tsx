"use client";
import React from 'react'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from 'next/link';
import Sidenav from './sidenav';


const Dashheader = () => {
  return (
   
        
  
    <div className='flex items-center justify-between lg:px-[50px] px-[10px] '>
        <Link href="/">
        <h1 className="text-[18px] font-semibold">Dashboard</h1>
        </Link>

        <div className='flex items-center'>
        {/* <h1 className='text-[14px] font-normal'>Welcome back</h1> */}

        <div className='my-[20px] mx-[20px]'>
<WalletMultiButton style={{ background: '#111', color: '#fff',padding:'' }}/>
</div>
        </div>
        


    </div>
  
  )
}

export default Dashheader