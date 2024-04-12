import React from 'react'
import { useGlobalContext } from '../Context';

function Summary() {
  const {steps,setSteps,selectPlan,billing,isChecked} = useGlobalContext();
  let planFinale = 0;
  let Total = 0;

  if(selectPlan === 'Acarde'){
    if(!billing){
      planFinale = 9;
    }else{
      planFinale = 90;
    }
  }else if(selectPlan === "Advance"){
    if(!billing){
      planFinale = 12;
    }else{
      planFinale = 120;
    }
  }else{
    if(!billing){
      planFinale = 15;
    }else{
      planFinale = 150;
    }
  }

  Total += planFinale;

  if(isChecked.check1){
    if(!billing){
      Total += 1;
    }else{
      Total += 10;
    }
  }
  if(isChecked.check2){
    if(!billing){
      Total += 2;
    }else{
      Total += 20;
    }
  }
  if(isChecked.check3){
    if(!billing){
      Total += 2;
    }else{
      Total += 20;
    }
  }

  function ChangeSelectPlan(){
    setSteps(prev => {
      return {...prev,step4:false,step2:true}
    })
  }

  function goBackStepFinal(){
    setSteps(prev => {
      return {...prev,step3:true,step4:false};
    })
  } 
  function Confirm(){
    setSteps(prev => {
      return {...prev,step4:false,stepFinal:true}
    })
  }


  return (
    <div className={`${steps.step4  ? 'block':'hidden'} flex flex-col justify-evenly h-[466px]`}>
     <div>
        <h1 className='text-primary-MarineBlue font-bold text-2xl'>Finishing up</h1>
       <p className='text-secondary-CoolGray'>Double-check everything looks OK before confirming.</p>
     </div>

     <div className='flex flex-col bg-secondary-Alabaster p-[18px] rounded-md'>
        <div className='flex justify-between pb-[10px] border-b-[1px] border-secondary-CoolGray'>
          <div className='flex flex-col'>
            <h1 className='text-primary-MarineBlue font-medium'>{selectPlan}{!billing ? '(Monthly)':'(Yearly)'}</h1>
            <p onClick={ChangeSelectPlan} className='text-secondary-CoolGray text-[.8rem] underline cursor-pointer'>Change</p>
          </div>
          <p className='text-primary-MarineBlue font-bold self-center'>${planFinale}/{!billing ? 'Mo':'Yr'}</p>
        </div>
        <div className='flex flex-col pt-[10px]'>
          {
            isChecked.check1 && (
              <div className='flex justify-between'>
                <h1 className='text-secondary-CoolGray text-[.9rem]'>Online service</h1>
                <p className='text-primary-MarineBlue font-bold text-[.7rem]'>+${!billing ? '1':'10'}/{!billing ? 'Mo':'Yr'}</p>
              </div>
            )
          }
          {
            isChecked.check2 && (
              <div className='flex justify-between'>
                <h1 className='text-secondary-CoolGray text-[.9rem]'>Larger storage</h1>
                <p className='text-primary-MarineBlue font-bold text-[.7rem]'>+${!billing ? '2':'20'}/{!billing ? 'Mo':'Yr'}</p>
             </div>
            )
          }
          {
            isChecked.check3 && (
              <div className='flex justify-between'>
                <h1 className='text-secondary-CoolGray text-[.9rem]'>Customizable profile</h1>
                <p className='text-primary-MarineBlue font-bold text-[.7rem]'>+${!billing ? '2':'20'}/{!billing ? 'Mo':'Yr'}</p>
             </div>
            )
          }

          
        </div>

        
     </div>

     <div className='flex justify-between px-[18px]'>
        <h1 className='text-secondary-CoolGray text-[.9rem]'>Total {!billing ? '(per Month)' :'(per Year)'}</h1>
        <p className='text-primary-PurplishBlue font-bold'>+${Total}/{!billing ? 'Mo':'Yr'}</p>
      </div>

     <div className='flex justify-between'>
            <button onClick={goBackStepFinal}  className='text-secondary-CoolGray hover:text-primary-MarineBlue font-[400]'>Go Back</button>
            <button onClick={Confirm}  className='border py-[5px] px-[10px] rounded-md text-secondary-White w-[100px] self-end bg-primary-MarineBlue hover:bg-primary-PastelBlue'>Confirm</button>
      </div>
    </div>
  )
}

export default Summary;
