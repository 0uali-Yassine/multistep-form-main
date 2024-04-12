import React from 'react'
import { useGlobalContext } from '../Context';

function Add() {
  const {steps,setSteps,billing,isChecked,setIsChecked} = useGlobalContext();

  function handlcheck(e){
    const idName = e.target.id;

    if(idName === 'online'){
      setIsChecked(prev => {
        return {...prev,check1:!prev.check1};
      })
    }else if(idName === 'storage'){
      setIsChecked(prev => {
        return {...prev,check2:!prev.check2}
      })
    }else{
      setIsChecked(prev => {
        return {...prev,check3:!prev.check3}
      })
    }
  }

  function handlGoBack(){
    setSteps(prev => {
      return {...prev,step2:true,step3:false}
    })
  }

  function handlClickstep4(){
    setSteps(prev =>{
      return {...prev,step3:false,step4:true};
    })
  }

  
  return (
    <div className={`${steps.step3 ? 'block':'hidden'} flex flex-col justify-evenly h-[466px]`}>
       <div>
          <h1 className='text-primary-MarineBlue font-bold text-2xl'>Pick add-ons</h1>
          <p className='text-secondary-CoolGray'>Add-ons help enhane your gaming experience.</p>
       </div>

        <div className='flex flex-col justify-between h-[231px]'>
          <label htmlFor="online"className={`${isChecked.check1 ? 'bg-secondary-Alabaster border-primary-PurplishBlue':'border-secondary-CoolGray'} h-[70px] hover:border-primary-PurplishBlue flex justify-evenly border rounded-md`} >
            <input onClick={(e)=> handlcheck(e)}  type="checkbox" id='online' name='add-ons' checked={isChecked.check1} className='accent-primary-PurplishBlue'  />
            <div className='flex flex-col self-center'>
              <h1 className='text-primary-MarineBlue text-[.9rem] font-bold'>Online sevice</h1>
              <p className='text-secondary-CoolGray text-[.9rem] '>Access to multiplayer games</p>
            </div>
            <p className='self-center text-primary-PurplishBlue text-[.8rem] font-medium'>{billing ? '+$10/yr':'+$1/mo'}</p>
            </label>

            <label htmlFor="storage" className={`${isChecked.check2 ? 'bg-secondary-Alabaster border-primary-PurplishBlue':'border-secondary-CoolGray'} h-[70px] hover:border-primary-PurplishBlue flex justify-evenly border rounded-md`} >
            <input onClick={(e)=> handlcheck(e)}  type="checkbox" id='storage' checked={isChecked.check2} name='add-ons' className='accent-primary-PurplishBlue'  />
            <div className='flex flex-col self-center'>
              <h1 className='text-primary-MarineBlue text-[.9rem] font-bold'>Larger storage</h1>
              <p className='text-secondary-CoolGray text-[.9rem] '>Extra 1TB of clous save of cloud</p>
            </div>
            <p className='self-center primary-PurplishBlue text-primary-PurplishBlue text-[.8rem] font-medium'>{billing ? '+$20/yr':'+$2/mo'}</p>
            </label>

            <label htmlFor="profile"className={`${isChecked.check3 ? 'bg-secondary-Alabaster border-primary-PurplishBlue':'border-secondary-CoolGray'} h-[70px] hover:border-primary-PurplishBlue flex justify-evenly border rounded-md`} >
            <input onClick={(e)=> handlcheck(e)}  type="checkbox" id='profile' name='add-ons' checked={isChecked.check3} className='accent-primary-PurplishBlue'  />
            <div className='flex flex-col self-center'>
              <h1 className='text-primary-MarineBlue text-[.9rem] font-bold'>Customizable profile</h1>
              <p className='text-secondary-CoolGray text-[.9rem] '>Custom theme on your profile</p>
            </div>
            <p className='self-center primary-PurplishBlue text-primary-PurplishBlue text-[.8rem] font-medium'>{billing ? '+$20/yr':'+$2/mo'}</p>
            </label>
        </div>
        <div className='flex justify-between'>
            <button onClick={handlGoBack} className='text-secondary-CoolGray hover:text-primary-MarineBlue font-[400]'>Go Back</button>
            <button onClick={handlClickstep4}  className='border py-[5px] px-[10px] rounded-md text-secondary-White w-[100px] self-end bg-primary-MarineBlue hover:bg-primary-PastelBlue'>Next Step</button>
        </div>
    </div>
  )
}

export default Add;
