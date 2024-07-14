"use client";
import Image from "next/image";
import { FC } from 'react'; // Import FC type from React
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from "next/link";


// Define the props interface for your component
interface HeaderProps {
  WalletMultiButton: any; // Replace 'any' with the actual type of WalletMultiButton
}

// Define your functional component using FC and specify the props type
const Header: FC<HeaderProps> = () => {
  return (
    <div className="flex justify-between lg:px-[50px] py-[30px] px-[10px]">
      <div className=" text-[18px] font-bold items-center flex gap-2 text-[#2f261c]">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={30}
        height={30}
      />
                 Dashboard

      </div>
      <div className="bg-[#232324] p-[16px] text-[#fff] rounded-[30px] text-[14px] bg-gradient-to-r from-[#2f261c] to-[#232324] px-[25px] font-light lg:flex hidden ">
      🎉 Track your balance in real-time and stay updated with detailed transaction logs
    
      <span>

      </span>


      </div> 

      <div>
      

      <Link href={'/dashboard'}>
     <div className="bg-[#0c0c0c]  lg:px-[24px] lg:py-[12px] px-[15px] py-[7px] rounded-[12px] text-[#fff] cursor-pointer hover:opacity-85 text-[16px]">
     
       Get Started
      </div>
      </Link>
      
      </div>
    </div>
  );
};

export default Header;
