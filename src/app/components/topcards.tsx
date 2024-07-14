import Image from "next/image";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, Connection, PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";
import {  GetProgramAccountsFilter } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
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
  const [usdcBalance, setUsdcBalance] = useState('');
  const walletToQuery = publicKey ? publicKey.toBase58() : '';
  const rpcEndpoint = 'https://dawn-weathered-tab.solana-devnet.quiknode.pro/4dc4791564c9683ee866a71ec1eee26d7d181f9e/';
  const solanaConnection = new Connection(rpcEndpoint);

      const MINT_TO_SEARCH = '2wYLrR96yEn5wPHvMFs7uULvgRJk7pWhzeXsDREtqn75'; //USDC Mint Address
 

  useEffect(() => {
    if (publicKey) {
      (async function getBalanceEvery10Seconds() {
        const newBalance = await connection.getBalance(publicKey);
        setBalance(newBalance / LAMPORTS_PER_SOL);
        setTimeout(getBalanceEvery10Seconds, 10000);
      })();
    }

    async function getTokenAccounts(wallet: string, solanaConnection: Connection) {
      const filters:GetProgramAccountsFilter[] = [
        {
          dataSize: 165,    //size of account (bytes)
        },
        {
          memcmp: {
            offset: 32,     //location of our query in the account (bytes)
            bytes: wallet,  //our search criteria, a base58 encoded string
          },            
        },
        //Add this search parameter
        {
            memcmp: {
            offset: 0, //number of bytes
            bytes: MINT_TO_SEARCH, //base58 encoded string
            },
        }];
    
    
        const accounts = await solanaConnection.getParsedProgramAccounts(
            TOKEN_PROGRAM_ID, //new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
            {filters: filters}
        );
        console.log(`Found ${accounts.length} token account(s) for wallet ${wallet}.`);
        accounts.forEach((account, i) => {
            //Parse the account data
            const parsedAccountInfo:any = account.account.data;
            const mintAddress:string = parsedAccountInfo["parsed"]["info"]["mint"];
            const tokenBalance: number = parsedAccountInfo["parsed"]["info"]["tokenAmount"]["uiAmount"];
            //Log results
            console.log(`Token Account No. ${i + 1}: ${account.pubkey.toString()}`);
            console.log(`--Token Mint: ${mintAddress}`);
            console.log(`--Token Balance: ${tokenBalance}`);
            setUsdcBalance(`${tokenBalance}`);
        });
    }
    getTokenAccounts(walletToQuery,solanaConnection);

  }, [publicKey, connection, balance]);

      
   
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
          <p className="text-2xl font-bold text-[#fff]">${usdcBalance}</p>
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
          <p className="text-2xl font-bold text-[#fff]">${usdcBalance}0</p>
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
