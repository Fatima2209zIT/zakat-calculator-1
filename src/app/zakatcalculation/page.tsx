"use client";
import { useState } from "react";
import Footer from "../components/footer";

const Calculation = () => {
  const goldRatePerGram = 24297.0;
  const silverRatePerGram = 71;
  const [cash, setCash] = useState(0);
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [zakat, setZakat] = useState(0);
  const [goldWarning, setGoldWarning] = useState(false);
  const [silverWarning, setSilverWarning] = useState(false);

  const calculateZakat = () => {
    // Reset warnings before calculation
    setGoldWarning(false);
    setSilverWarning(false);

    // Gold and Silver thresholds
    const goldThreshold = 87.48;
    const silverThreshold = 612.36;

    let totalZakat = 0;

    if (gold >= goldThreshold) {
      const goldValue = gold * goldRatePerGram;
      const zakatGold = goldValue * 0.025;
      totalZakat += zakatGold;
    } else if (gold < goldThreshold && gold > 0) {
      setGoldWarning(true); // Show warning if gold is below the threshold
    }

    if (silver >= silverThreshold) {
      const silverValue = silver * silverRatePerGram;
      const zakatSilver = silverValue * 0.025;
      totalZakat += zakatSilver;
    } else if (silver < silverThreshold && silver > 0) {
      setSilverWarning(true); // Show warning if silver is below the threshold
    }

    const zakatCash = cash * 0.025;
    totalZakat += zakatCash;

    setZakat(totalZakat);
  };

  return (
    <div className="min-h-screen bg-lime-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl md:text-4xl text-blue-900 font-bold mb-6 text-center">
        Zakat Calculator (PKR)✨
      </h1>
      <div className="w-full max-w-md md:max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
        {/* Input For Cash */}
        <div className="flex flex-col">
          <label className="text-xl text-green-400 font-medium">Cash (PKR)</label>
          <input
            type="number"
            value={cash}
            onChange={(e) => setCash(Number(e.target.value))}
            placeholder="Enter cash amount"
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        {/* Input For Gold */}
        <div className="flex flex-col">
          <label className="text-xl text-green-400 font-medium">Gold (in grams)</label>
          <input
            type="number"
            value={gold}
            onChange={(e) => setGold(Number(e.target.value))}
            placeholder="Enter Gold amount"
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
          {/* Gold Warning */}
          {goldWarning && (
            <p className="text-red-500 text-sm mt-2">
              Below 87.48 grams of gold, zakat won't be calculated.
            </p>
          )}
        </div>
        {/* Input For Silver */}
        <div className="flex flex-col">
          <label className="text-xl text-green-400 font-medium">Silver (in grams)</label>
          <input
            type="number"
            value={silver}
            onChange={(e) => setSilver(Number(e.target.value))}
            placeholder="Enter Silver amount"
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
          {/* Silver Warning */}
          {silverWarning && (
            <p className="text-red-500 text-sm mt-2">
              Below 612.36 grams of silver, zakat won't be calculated.
            </p>
          )}
        </div>
        {/* Calculate Button */}
        <button
          onClick={calculateZakat}
          className="text-lg w-full bg-indigo-400 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
        >
          Calculate your Zakat
        </button>
        {/* Zakat Output */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-800">Your Total Zakat:</h2>
          <p className="text-lg text-gray-700 mt-2">{zakat.toFixed(2)} PKR</p>
        </div>
      </div>
      <Footer/>
    </div>
   
  );
};

export default Calculation;
