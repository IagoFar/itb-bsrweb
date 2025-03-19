import React from "react";


export default function Home() {
  return (
    <div className="bg-blue-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="mt-20 text-7xl font-bold">Barcelona Server Restorers</h1>
      <div>
        <input type="text" placeholder="you@example.com" className="bg-white rounded-lg p-2 border-2 border-black" />
        <button className="bg-blue-800 rounded-lg p-2 border-2 border-black ml-5 text-white font-semibold">Entra</button>
      </div>
    </div>
  );
}
