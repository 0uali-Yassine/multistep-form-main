import './App.css';
import Info from './component/Info';
import Select from './component/Select';
import Add from './component/Add';
import Summary from './component/Summary';
import { useGlobalContext } from './Context';
import Finalstep from './component/Finalstep';

function App() {
  const {steps} = useGlobalContext();

  return (
    <div className='bg-secondary-Magnolia w-[100%] h-[100vh] relative font-body '>
      <main className='bg-secondary-White sm:w-[100%] sm:flex-col sm:m-0 sm:relative sm:p-0 sm:bg-secondary-LightGray sm:h-[100vh] lg:h-[500px] lg:w-[700px] lg:bg-secondary-White lg:flex-row lg:absolute lg:p-[10px] lg:mt-[50px]  w-[700px] h-[500px] flex absolute left-[50%] transform translate-x-[-50%] p-[10px] mt-[50px] drop-shadow-lg rounded-lg'>
        <section className='bg-[url("./assets/images/bg-sidebar-desktop.svg")] bg-no-repeat bg-contain sm:flex-row sm:justify-evenly sm:bg-cover sm:w-[100%] sm:p-[56px] sm:items-start  sm:h-[200px] sm:bg-[url("./assets/images/bg-sidebar-mobile.svg")] lg:bg-[url("./assets/images/bg-sidebar-desktop.svg")] lg:w-[243px] lg:h-[100%] lg:flex-col lg:p-[25px]  w-[243px] h-[100%] flex flex-col p-[25px] gap-[10px]'>
            
            <div className='flex flex-row items-center'>
              <span  className={`p-[5px] w-[28px] h-[28px] border ${steps.step1 ? 'border-0':'border-secondary-White'} ${steps.step1 ? 'text-[#000000]':'text-secondary-White'}  ${steps.step1 ? 'bg-primary-LightBlue':'transparent'} text-center pt-0 rounded-[50%]`}>1</span>
              <div className='ml-[10px] sm:hidden lg:block'>
                <p className='text-secondary-CoolGray'>STEP 1</p>
                <p className='text-secondary-White font-bold'>YOUR INFO</p>
              </div>
            </div>

            <div className='flex flex-row items-center'>
              <span  className={`p-[5px] w-[28px] h-[28px] border  ${steps.step2 ? 'border-0':'border-secondary-White'} ${steps.step2 ? 'text-[#000000]':'text-secondary-White'}  ${steps.step2 ? 'bg-primary-LightBlue':'transparent'} text-center pt-0 rounded-[50%]`}>2</span>
              <div className='ml-[10px] sm:hidden lg:block'>
                <p className='text-secondary-CoolGray'>STEP 2</p>
                <p className='text-secondary-White font-bold'>SELECT PLAN</p>
              </div>
            </div>

            <div className='flex flex-row items-center'>
              <span  className={`p-[5px] w-[28px] h-[28px] border  ${steps.step3 ? 'border-0':'border-secondary-White'} ${steps.step3 ? 'text-[#000000]':'text-secondary-White'}  ${steps.step3 ? 'bg-primary-LightBlue':'transparent'} text-center pt-0 rounded-[50%]`}>3</span>
              <div className='ml-[10px] sm:hidden lg:block'>
                <p className='text-secondary-CoolGray'>STEP 3</p>
                <p className='text-secondary-White font-bold'>ADD-ONS</p>
              </div>
            </div>

            <div className='flex flex-row items-center'>
              <span className={`p-[5px] w-[28px] h-[28px] border  ${steps.step4 || steps.stepFinal ? 'border-0':'border-secondary-White'} ${steps.step4 || steps.stepFinal ? 'text-[#000000]':'text-secondary-White'}  ${steps.step4 || steps.stepFinal ? 'bg-primary-LightBlue':'transparent'} text-center pt-0 rounded-[50%]`}>4</span>
              <div className='ml-[10px] sm:hidden lg:block'>
                <p className='text-secondary-CoolGray'>STEP 4</p>
                <p className='text-secondary-White font-bold'>SUMMARY</p>
              </div>
            </div>
        </section>
        <section className='w-[60%] sm:bg-secondary-White sm:w-[90%] sm:absolute sm:top-[21%] sm:left-[5%] sm:rounded-lg lg:relative lg:top-0 lg:left-0 lg:mx-auto lg:p-[10px] lg:w-[60%]  mx-auto p-[10px]'>
          <Info/>
          <Select/>
          <Add/>
          <Summary/>
          <Finalstep/>
        </section>
      </main>
    </div>
  );
}

export default App;
