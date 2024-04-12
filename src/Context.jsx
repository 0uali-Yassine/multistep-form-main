import React, { createContext, useContext, useRef, useState } from 'react';

const myContext = createContext();

function Context({children}) {
  const [dataInfo,setDataInfo] = useState({});
  // for label that if invalid input the label show
  const [visible,setVisible] = useState({vs1:false,vs2:false,vs3:false});
  //step equale to single form 
  const [steps,setSteps] = useState({step1:true,step2:false,step3:false,step4:false,stepFinal:false});
  // what user select for plan
  const [selectPlan,setSelectPlan] = useState('Acarde');
  // for Monthly or Yearly
  const [billing,setBilling] = useState(false);
  // for the last from what the user checked
  const [isChecked,setIsChecked] = useState({check1:true,check2:true,check3:false});

  function handlSelectPlan(e){
    setSelectPlan(e.target.value);
  }
  /* inputs */
  const inptName = useRef();
  const inptEmail = useRef();
  const inptPhone = useRef();

 
  function handlClickStepOne(e){
    e.preventDefault();

    if(!inptName.current.value || !inptEmail.current.value || !inptPhone.current.value){
      if(!inptName.current.value){
        setVisible(prev => {
          return {...prev,vs1:true};
        })
      }else{
        setVisible(prev => {
          return {...prev,vs1:false}
        })
      }
  
      if(!inptEmail.current.value){
        setVisible(prev => {
          return {...prev,vs2:true};
        })
      }else{
        setVisible(prev => {
          return {...prev,vs2:false};
        })
      }
  
      if(!inptPhone.current.value){
        setVisible(prev => {
          return {...prev,vs3:true};
        })
      }else{
        setVisible(prev => {
          return {...prev,vs3:false}
        })
      }
  
    }else{
      setDataInfo({
        name:inptName.current.value,
        email:inptEmail.current.value,
        phone:inptPhone.current.value
      });
      setSteps(prev => {
        return {...prev,step1:false,step2:true};
      })
    }
  }

  function handlclickStepTwo(){
    setSteps(prev => {
      return {...prev,step2:false,step3:true};
    })
  }

  return (
    <myContext.Provider value={{inptName,inptEmail,inptPhone,handlClickStepOne,visible,
      steps,dataInfo,handlSelectPlan,selectPlan,
      setBilling,billing,handlclickStepTwo,setSteps,
      isChecked,setIsChecked}}>
      {children}
    </myContext.Provider>
  )
}

export function useGlobalContext(){
  return useContext(myContext);
}

export default Context;
