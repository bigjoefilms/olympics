"use client";
import React from 'react'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


const Sidenav = () => {
  return (
    <div className='border-r-2 h-[100%] w-[250px] flex flex-col justify-between items-center px-[20px]'>
        <div className='bg-[#fff] mt-[20px] px-[10px] py-[10px] text-[16px] w-full text-[#2a2a2b] border rounded-[8px] cursor-pointer'>
            Transaction
        </div>

<div className='my-[20px] mx-[20px]'>
<WalletMultiButton style={{ background: '#111', color: '#fff' }}/>
</div>

    </div>
  )
}

export default Sidenav