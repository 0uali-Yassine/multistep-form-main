import React from 'react'
import { useGlobalContext } from '../Context';

function Finalstep() {
    const {steps} = useGlobalContext();
    
  return (
    <div className={`${!steps.stepFinal ? 'hidden':'block'} flex flex-col justify-center h-[466px] gap-3`}>
      <div className='bg-[url("./assets/images/icon-thank-you.svg")] bg-no-repeat bg-contain w-[80px] h-[80px] self-center'></div>
      <h1 className='text-primary-MarineBlue text-center font-bold text-[2rem]'>Thank you!</h1>
      <p className='text-secondary-CoolGray text-[1rem] text-center'>Thanks for confirming your sybscription!We hope you have fun using our platfrom. If you ever need support,please feel free to email us at support@loremgaming.com</p>
    </div>
  )
}

export default Finalstep;
