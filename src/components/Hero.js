import React, { useState } from "react";
import ReferralModel from "./ReferralModel";

export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
    // Anniversery Mob on md and below and Anniversery on md and above
      className="bg-theme/10 bg-cover grow md:bg-[url('./images/Anniversery.svg')] bg-[url('./images/AnniverseryMob.svg')] rounded-[30px] max-w-[475px] md:max-w-[760px] xl:max-w-[1340px] flex flex-row relative"
    >
      <div className="text-[50px] md:text-left text-center md:text-[40px] xl:text-[80px] font-medium flex flex-col items-center md:items-start gap-6 xl:gap-10 py-[50px] xl:py-[110px] md:w-[40%] leading-[1.1] px-8 md:px-8 xl:px-12">
        Let’s Learn & Earn
        <p className="text-[25px] leading-snug md:text-[24px] xl:text-[40px]">Get a chance to win up-to <p className="text-[24px] md:text-[28px] xl:text-[46px] inline text-theme">Rs. 15,000</p></p>
        <button onClick={() => setIsMenuOpen(true)} className="bg-theme font-normal rounded-md text-white px-12 py-3 whitespace-nowrap text-lg w-max">
          Refer Now
        </button>
      </div>
      {isMenuOpen && (
        <ReferralModel setModalOpen={setIsMenuOpen} />
      )}
    </div>
  );
}
