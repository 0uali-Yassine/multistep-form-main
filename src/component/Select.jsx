import React from 'react'
import { useGlobalContext } from '../Context';

function Select() {
  const {steps,handlSelectPlan,selectPlan,setBilling,billing,handlclickStepTwo,setSteps} = useGlobalContext();

  function handlBack(){
    setSteps(prev => {
      return {...prev,step2:false,step1:true};
    })
  }
  return (
    <div className={`${!steps.step2 ? 'hidden':'block'} flex flex-col justify-evenly h-[466px]`}>

      <div>
        <h1 className='text-primary-MarineBlue font-bold text-2xl'>Select your plan</h1>
        <p className='text-secondary-CoolGray'>You have the option of monthly or yearly billing.</p>
      </div>

      <div className='flex gap-[5px]'>
        <input className='hidden' type="radio" name="plan" id="Acarde" value='Acarde' checked={selectPlan === 'Acarde'} onChange={(e)=> handlSelectPlan(e)}/>
        <label htmlFor="Acarde" className={`${selectPlan === "Acarde" ? 'bg-secondary-Alabaster border-primary-PurplishBlue':'border-secondary-CoolGray'} hover:border-primary-PurplishBlue w-[130px] h-[170px] flex flex-col justify-evenly pl-[10px] border-[2px] rounded-md`}>
          <div className='bg-[url("./assets/images/icon-arcade.svg")] bg-no-repeat bg-contain w-[50px] h-[50px]'></div>
            <div>
              <h1 className='text-primary-MarineBlue font-bold'>Acarde</h1>
              <p className='text-secondary-CoolGray text-[.9rem]'>${billing ? '90/yr' : '9/mo'}</p>
              <p className='text-primary-MarineBlue text-[.9rem]'>{billing ? '2 months free':null}</p>
            </div>
        </label>

        <input type="radio" className='hidden' name="plan" id="Advance" value='Advance'  checked={selectPlan === 'Advance'} onChange={(e)=> handlSelectPlan(e)}/>
        <label htmlFor="Advance"  className={`${selectPlan === "Advance" ? 'bg-secondary-Alabaster border-primary-PurplishBlue':'border-secondary-CoolGray'} hover:border-primary-PurplishBlue w-[130px] h-[170px] flex flex-col justify-evenly pl-[10px] border-[2px] rounded-md`}>
        <div className='bg-[url("./assets/images/icon-advanced.svg")] bg-no-repeat bg-contain w-[50px] h-[50px]'></div>
        <div>
              <h1 className='text-primary-MarineBlue font-bold'>Advance</h1>
              <p className='text-secondary-CoolGray text-[.9rem]'>${billing ? '120/yr' :'12/mo'}</p>
              <p className='text-primary-MarineBlue text-[.9rem]'>{billing ? '2 months free':null}</p>
            </div>
        </label>

        <input type="radio" className='hidden' name="plan" id="Pro" value='Pro'  checked={selectPlan === 'Pro'} onChange={(e)=> handlSelectPlan(e)}/>
        <label htmlFor="Pro"  className={`${selectPlan === "Pro" ? 'bg-secondary-Alabaster border-primary-PurplishBlue':'border-secondary-CoolGray'} hover:border-primary-PurplishBlue w-[130px] h-[170px] flex flex-col justify-evenly pl-[10px] border-[2px] rounded-md`}>
          <div className='bg-[url("./assets/images/icon-pro.svg")] bg-no-repeat bg-contain w-[50px] h-[50px]'></div>
          <div>
              <h1 className='text-primary-MarineBlue font-bold'>Pro</h1>
              <p className='text-secondary-CoolGray text-[.9rem]'>${billing ? '150/yr' :'15/mo'}</p>
              <p className='text-primary-MarineBlue text-[.9rem]'>{billing ? '2 months free':null}</p>
            </div>
        </label>
      </div>

      <div className='flex bg-secondary-Alabaster  rounded-sm p-[8px] justify-center'>
        <h1 className={`${billing ? 'text-secondary-CoolGray' :'text-primary-MarineBlue'} font-bold mr-[7px]`}>Monthly</h1>
        <input type="checkbox" id='billing' name='billing' className='hidden'  onChange={()=> setBilling(prev => !prev)} checked={billing} />
        <label  htmlFor="billing"  className='flex relative w-[40px] h-[17px] p-[1px] rounded-xl bg-primary-MarineBlue mr-[7px] self-center'>
          <div className={`w-[15px] h-[15px] bg-secondary-White rounded-[50%] absolute ${billing ? 'right-[2px]' : 'left-[2px]'} transition-all  `}></div>
        </label>
        <h1  className={`${!billing ? 'text-secondary-CoolGray' :'text-primary-MarineBlue'} font-bold`}>Yearly</h1>
      </div>

      <div className='flex justify-between'>
        <button onClick={handlBack} className='text-secondary-CoolGray hover:text-primary-MarineBlue font-[400]'>Go Back</button>
        <button onClick={handlclickStepTwo} className='border py-[5px] px-[10px] rounded-md text-secondary-White w-[100px] self-end bg-primary-MarineBlue hover:bg-primary-PastelBlue'>Next Step</button>
      </div>
    </div>
  )
}

export default Select;
