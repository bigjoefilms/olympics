import Image from 'next/image'
import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-[#2f261c] flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold text-[#fff]'>$7,846</p>
                <p className='text-[#fff]'>SOL BALANCE</p>
            </div>
            <p className=' flex justify-center items-center p-2 rounded-lg'>
                <span className='text-[#111] text-lg'>
                <Image
          src="/images/sol.svg"
          alt="My SVG"
          width={40}
          height={40}
        />
                    </span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-[#2f261c] flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold text-[#fff]'>$1,437,876</p>
                <p className=' text-[#fff]'>USDC Balance</p>
            </div>
            <p className=' flex justify-center items-center p-2 rounded-lg'>
                <span className='text-[#111] text-lg'>
                <Image
          src="/images/usdc.svg"
          alt="My SVG"
          width={40}
          height={40}
        />
                    </span>
            </p>
        </div>
        <div className='bg-[#2f261c] flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold text-[#fff]'>11,437</p>
                <p className=' text-[#fff]'>Total Revenue</p>
            </div>
            <p className='bg-[#ffa44e] flex justify-center items-center p-2 rounded-lg'>
                <span className='text-[#111] text-lg'>+20%</span>
            </p>
        </div>
    </div>
  )
}

export default TopCards