"use client";
import { useRouter } from "next/navigation";
import Footer from "./components/footer";

const HomePage = () => {
  const router = useRouter();

  const navigateToCalculator = () => {
    router.push("/zakatcalculation"); // Match the correct route
  };

  return (
    <div className="min-h-screen bg-blue-300 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">
        Zakat Guide and Calculator🕌
      </h1>

      {/* Rules Section */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 space-y-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-400 mb-4">Rules for Calculating Zakat:</h2>
          <ul className="list-disc pl-5 text-blue-400 space-y-2 fade-in">
            <li>The person giving zakat should Sahib - e - Nisab.</li>
            <li>Calculate 2.5% of your total wealth, including cash, gold, and silver.</li>
            <li>
              Zakat is only applicable if your wealth exceeds the Nisab threshold or matches the Nisab threshold:
              <ul className="list-disc pl-6 text-sm sm:text-base">
                <li>Gold: 87.48 grams</li>
                <li>Silver: 612.36 grams</li>
              </ul>
            </li>
            <li>Zakat must be paid annually.</li>
            <li>Charity given for non-Zakat purposes does not count as Zakat.</li>
            <li>The person should be Sahib - e - Nisab throughout the year till the end of the year.</li>
            <li>At the end of the year, 2.5% of the person's wealth is calculated and paid as zakat.</li>
            <li>Gold, Silver, and Cash in every form zakat will be calculated.</li>
            <li>Personal items will not be calculated, especially those items in use and kept as property.</li>
            <li>Business items will be calculated.</li>
            <li>Selling items will be calculated, but fixed assets will not be calculated unless they are in the form of Gold, Silver, and Cash.</li>
            <li>If diamonds or stones are part of your personal jewelry and not intended for business, they are not included in the Zakat calculation.</li>
            <li>Diamonds and Stones as business items will be calculated.</li>
          </ul>
        </div>

        {/* Masjid Image Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src="/masjid.png" // Replace with your actual path
            alt="Masjid"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Navigate to Calculator */}
      <button
        onClick={navigateToCalculator}
        className="mt-8 bg-indigo-400 text-white py-2 px-6 rounded-lg text-lg hover:bg-indigo-600 transition duration-300"
      >
        Go to Zakat Calculator
      </button>
      
    </div>
  );
};

export default HomePage;


  
