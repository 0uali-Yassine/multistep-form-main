import React from 'react'
import { useGlobalContext } from '../Context';

function Info() {
  const {inptName,inptEmail,inptPhone,handlClickStepOne,visible,steps} = useGlobalContext();
  
  return (
    <div className={`flex flex-col h-[466px] justify-evenly ${!steps.step1 ? 'hidden':'block'}`}>
       <header>
        <h1 className='text-primary-MarineBlue font-bold text-[35px]'>Personal info</h1>
        <p className='text-secondary-CoolGray'>Please provide youe name,email address,and phone number.</p>
       </header>
       <form className='flex flex-col' >

        <div className='flex flex-col'>
          <label htmlFor="text" className='text-primary-MarineBlue font-bold'>Name</label>
          <input ref={inptName} className='peer-required border border-secondary-LightGray focus:outline-none focus:border-primary-PurplishBlue rounded-md p-[5px] text-primary-MarineBlue font-bold' id='text' type="text"name='name' />
          <p class={`mt-2 ${!visible.vs1 ? 'invisible':'visible'}  text-pink-600 text-sm  text-primary-StrawberryRed`}>
            Please provide a valid Name.
          </p>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="email" className='text-primary-MarineBlue font-bold'>Email Address</label>
          <input ref={inptEmail} className='peer border border-secondary-LightGray focus:outline-none focus:border-primary-PurplishBlue rounded-md p-[5px] text-primary-MarineBlue font-bold'  id='email' type="email" name='email' />
          <p class={`mt-2 ${!visible.vs2 ? 'invisible':'visible'}  text-pink-600 text-sm  text-primary-StrawberryRed`}>
            Please provide a valid Email address.
          </p>
        </div>
        
        <div className='flex flex-col'>
          <label htmlFor="phone" className='text-primary-MarineBlue font-bold'>Phone Number</label>
          <input ref={inptPhone} className='peer border border-secondary-LightGray focus:outline-none focus:border-primary-PurplishBlue rounded-md p-[5px] text-primary-MarineBlue font-bold' id='phone' type="number" name='phone' />
          <p class={`mt-2 ${!visible.vs3 ? 'invisible':'visible'}  text-pink-600 text-sm  text-primary-StrawberryRed`}>
            Please provide a valid Phone Number.
          </p>
        </div>
        <button onClick={(e)=> handlClickStepOne(e)} className='border py-[5px] px-[10px] rounded-md text-secondary-White w-[100px] self-end bg-primary-MarineBlue hover:bg-primary-PastelBlue'>Next Step</button>
       </form>
    </div>
  )
}

export default Info;
