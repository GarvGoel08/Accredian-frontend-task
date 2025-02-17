import React from 'react'
import HowToReferImg from '../images/HowToRefer.svg'
import HowToReferMobImg from '../images/HowToReferMob.svg'

export default function HowToRefer() {
  return (
    <div className="flex flex-col justify-center items-center bg-theme/10 mt-10 py-6 gap-6 px-8">
        <div>
            <p className="text-[24px] md:text-[28px] font-semibold">How Do I <p className="inline text-theme">Refer?</p></p>
        </div>
        <img className="max-w-[1200px] w-full md:block hidden" src={HowToReferImg} alt="HowToRefer" />
        <img className="max-w-[290px] w-full md:hidden block" src={HowToReferMobImg} alt="HowToRefer" />
    </div>
  )
}
