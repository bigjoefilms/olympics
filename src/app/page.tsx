"use client";

import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  // const network = process.env.REACT_APP_NETWORK as WalletAdapterNetwork;
  const endpoint = process.env.REACT_APP_SOLANA_RPC_HOST;
  return (
    <main className=" text-[#1b1b1c] bg-[url('/images/bg-pattern.svg')]">
      <Header WalletMultiButton="WalletMultiButton" />

      {/* <div className="border hover:border-slate-900 rounded">
        <WalletMultiButton  />
      
 
 
 
</div> */}

      <div className="flex  items-center flex-col justify-center pt-[0px] flex-wrap bg-[#232324] bg-gradient-to-r from-[#2f261c] to-[#232324] mx-[10px] px-[15px] lg:mx-[40px] rounded-[22px] lg:h-[50vh] h-[30vh]">
        <span className="text-[13px] text-[#09cbbf] p-[10px] px-[15px] rounded-[20px] bg-[#09cbbf] bg-opacity-10">
          {" "}
          MADE WITH ❤ ON SOLANA
        </span>
        <h1 className="lg:text-[64px] text-[18px]  text-[#fff]"> Introducing Check & Balance Data</h1>
        <div className="flex items-center gap-2 mt-[20px]">

     

<Image
          src="/images/svg-1.svg"
          alt="My SVG"
          width={100}
          height={100}
        />
        <Image
          src="/images/svg-2.svg"
          alt="My SVG"
          width={100}
          height={100}
        />
         <Image
          src="/images/svg-4.svg"
          alt="My SVG"
          width={100}
          height={100}
        />
         </div>
      </div>
   

      <div className="flex justify-between items-center lg:px-[200px] px-[10px] mb-[50px] h-[90vh] lg:flex-row flex-col py-[50px] lg:py-[10px] gap-[50px] lg:gap-[10px] ">
        <div className="max-w-[550px] ">
          <div>
            <p className="text-[#ffa44e] font-bold flex gap-2 items-center">
              <Image
                src="/images/dash.png"
                alt="My SVG"
                width={20}
                height={20}
              />
              Acitve
            </p>
            <h1 className="text-[50px] font-medium">
              Stay organized,
              <br />
              and informed
            </h1>
            <h3 className="text-[18px] opacity-85 leading-7 ">
              Stay organized, informed, and in control with our secure and
              user-friendly platform!
            </h3>
          </div>
          <button className="bg-[#0c0c0c] mt-[20px] px-[24px] py-[12px] rounded-[12px] text-[#fff] cursor-pointer hover:opacity-85 text-[16px]">
            Try it out
          </button>
        </div>
        <div className="">
        <Image
          src="/images/card.svg"
          alt="My SVG"
          width={500}
          height={500}
        />

        </div>
      </div>

      <footer className="flex items-center justify-between pt-[30px] pb-[10px] px-[50px] text-[16px] flex-col lg:flex-row gap-[20px] flex-wrap ">
        <div className=" text-[28px] font-bold items-center flex gap-2 text-[#2f261c]">
          <Image src="/images/logo.png" alt="logo" width={30} height={30} />
          Dashboard
        </div>
        <div className="flex gap-[20px] text-[12px]  lg:text-[16px]  items-center flex-col lg:flex-row">
          <span className="flex items-center gap-2">
            <Image
              src="/images/svg-t.svg"
              alt="My SVG"
              width={20}
              height={20}
            />
            Follow us{" "}
          </span>
          <span className="flex items-center gap-2">
            <Image
              src="/images/svg-d.svg"
              alt="My SVG"
              width={20}
              height={20}
            />
            Read about us
          </span>
          <span className="flex items-center gap-2">
            <Image
              src="/images/svg-m.svg"
              alt="My SVG"
              width={20}
              height={20}
            />
            Join the conversation{" "}
          </span>
        </div>
        <div className="text-[#888989] flex gap-[15px] text-[14px]  lg:text-[18px]">
          <span> Privacy Policy </span>
          <span>Terms of Service </span>
        </div>
      </footer>
    </main>
  );
}
