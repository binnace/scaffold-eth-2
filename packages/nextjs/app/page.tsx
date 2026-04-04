"use client";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col pt-10">
      <h1 className="text-4xl font-bold text-orange-500">Bharat Swap</h1>
      <p className="text-xl mt-2 text-blue-900">Official Bharat USD (BUSD) Exchange</p>
      <div className="mt-10 p-10 bg-slate-200 rounded-2xl shadow-lg border-2 border-orange-500">
         <p className="font-bold">Token Address:</p>
         <p className="break-all text-sm">0x25d34817D4205fE605b4C65Ed3Be83C85107d333</p>
         <button className="btn btn-primary mt-4 w-full">Coming Soon</button>
      </div>
    </div>
  );
};

export default Home;
