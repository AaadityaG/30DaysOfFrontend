import React from 'react'
import { useState, useRef, useEffect } from 'react'
import "../App.css"

const Stepper = ({stepsConfig = []}) => {

    const [currStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    const [margins, setMargins] = useState({
      marginLeft: 0,
      marginRight: 0,
    });
    // const stepRef = useRef([]);

    // useEffect(() => {
    //   setMargins({
    //     marginLeft: stepRef.current[0].offsetWidth / 2,
    //     marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
    //   });
    // }, [stepRef, stepsConfig.length]);

    const ActiveComponent = stepsConfig[currStep - 1]?.Component;

    if(!stepsConfig.length){
        return <></>
    }

    const handleNext = () => {
      setCurrentStep((prevStep) => {
        if (prevStep === stepsConfig.length) {
          setIsComplete(true);
          return prevStep;
        } else {
          return prevStep + 1;
        }
      });
    }

    const calculateProgressBarWidth = () => {
      return ((currStep - 1) / (stepsConfig.length - 1)) * 100;
    };

  return (

    <>
    <div className='stepper'>
      {stepsConfig.map((step, index) => {

        return (
            <div key={step.name} className={`step ${
                currStep > (index+1) || isComplete ? "complete" : ""
            } ${currStep === index + 1 ? "active" : "" }`}>
                <div className='step-number'>
                {currStep > (index+1) || isComplete ? <span>&#10003;</span> : (index + 1)}
                </div>
                <div className='step-name'>{step.name}</div>
            </div>
        )
      })}
      <div
          className="progress-bar"
          style={{
            width: `calc(100%-${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{width: `${calculateProgressBarWidth()}%`}}
          ></div>
        </div>
    </div>

    <ActiveComponent />

    {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
      )}

    </>
  )
}

export default Stepper
