import Image from "next/image";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, Connection, PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";
import {
    getAssociatedTokenAddress,
    getAccount,
    createAssociatedTokenAccount,
  } from "@solana/spl-token";
// import * as solanaWeb3 from '@solana/web3.js';
// import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";


const TopCards = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number>(0);
  const [usdcBalance, setUsdcBalance] = useState(0);
  

  useEffect(() => {
    if (publicKey) {
      (async function getBalanceEvery10Seconds() {
        const newBalance = await connection.getBalance(publicKey);
        setBalance(newBalance / LAMPORTS_PER_SOL);
        setTimeout(getBalanceEvery10Seconds, 10000);
      })();
    }
  }, [publicKey, connection, balance]);

  const USDC_MINT_ADDRESS = new PublicKey(
    "FSxJ85FXVsXSr51SeWf9ciJWTcRnqKFSmBgRDeL3KyWw"
  );
 

  useEffect(() => {
    const fetchBalances = async () => {
      console.log("Fetching balances...");
      console.log("PublicKey:", publicKey?.toBase58());
      console.log("Connection:", connection.rpcEndpoint);

      try {
        // Get associated token account for BONK
        const bonkTokenAccount = await getAssociatedTokenAddress(
          USDC_MINT_ADDRESS,
          publicKey
        );
        console.log("USDC Token Account:", bonkTokenAccount.toBase58());

        // Fetch BONK token balance
        const bonkAccountInfo = await connection.getTokenAccountBalance(
          bonkTokenAccount
        );
        console.log("USDC Account Info:", bonkAccountInfo);

        const bonkBalance = parseFloat(
          (bonkAccountInfo.value.amount)
        ); // Amount is in the smallest unit
        setUsdcBalance(bonkBalance);
      } catch (error) {
        console.error("Failed to fetch BONK balance:", error);

        // Attempt to create the associated token account if it doesn't exist
        try {
          const bonkTokenAccount = await createAssociatedTokenAccount(
            connection,
            publicKey,
            USDC_MINT_ADDRESS,
            publicKey
          );

          console.log(
            "Created BONK Token Account:",
            bonkTokenAccount.toBase58()
          );

          // Fetch usdc token balance again
          const bonkAccountInfo = await connection.getTokenAccountBalance(
            bonkTokenAccount
          );
          console.log("UsdcAccount Info:", bonkAccountInfo);

          const usdcBalance = bonkAccountInfo.value.amount; // Amount is in the smallest unit
          setUsdcBalance(usdcBalance);
        } catch (creationError) {
          console.error("Failed to create BONK token account:", creationError);
          setUsdcBalance(0);
        }
      }
    };

    fetchBalances();
  }, [connection, publicKey]);

   
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-[#2f261c] flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-[#fff]">{balance}</p>
          <p className="text-[#fff]">SOL </p>
        </div>
        <p className=" flex justify-center items-center p-2 rounded-lg">
          <span className="text-[#111] text-lg">
            <Image
              src="/images/sol.svg"
              alt="My SVG"
              width={40}
              height={40}
              className="rounded-[10px] "
            />
          </span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-[#2f261c] flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-[#fff]">$500</p>
          <p className=" text-[#fff]">USDC</p>
        </div>
        <p className=" flex justify-center items-center p-2 rounded-lg">
          <span className="text-[#111] text-lg">
            <Image src="/images/usdc.svg" alt="My SVG" width={40} height={40} />
          </span>
        </p>
      </div>
      <div className="bg-[#2f261c] flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold text-[#fff]">$7,000</p>
          <p className=" text-[#fff]">Total Assets</p>
        </div>
        <p className="bg-[#ffa44e] flex justify-center items-center p-2 rounded-lg">
          <span className="text-[#111] text-lg">+20%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
