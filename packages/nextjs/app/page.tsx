"use client";

import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "@@/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold text-orange-500">Bharat Swap</span>
            <span className="block text-2xl mb-2">Powered by Bharat USD (BUSD)</span>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Wallet:</p>
            <Address address={connectedAddress} />
          </div>
          
          {/* Bharat Swap Widget Card */}
          <div className="mt-10 p-8 bg-base-300 rounded-3xl shadow-xl w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Swap BUSD</h2>
            <div className="bg-base-100 p-4 rounded-2xl mb-2 flex justify-between items-center">
              <input type="number" placeholder="0.0" className="bg-transparent text-2xl w-2/3 outline-none" />
              <span className="font-bold text-xl">ETH</span>
            </div>
            <div className="text-center my-2 text-2xl">↓</div>
            <div className="bg-base-100 p-4 rounded-2xl mb-6 flex justify-between items-center border-2 border-orange-400">
              <input type="number" placeholder="0.0" className="bg-transparent text-2xl w-2/3 outline-none" />
              <span className="font-bold text-xl text-orange-500">BUSD</span>
            </div>
            <button className="btn btn-primary w-full text-lg rounded-2xl">Swap Now</button>
            <p className="text-xs mt-4 text-center opacity-60">
              Contract: 0x25d34817D4205fE605b4C65Ed3Be83C85107d333
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
