import { useState } from 'react';
import './OrderTracker.css';

const steps = [
  {
    title: 'Order Placed',
    description: 'May 28, 10:24 AM',
  },
  {
    title: 'Processing',
    description: 'May 29, 02:15 PM',
  },
  {
    title: 'Shipping',
    description: 'Estimated: May 30',
  },
  {
    title: 'Delivered',
    description: 'Pending',
  }
];

const OrderTracker = () => {
  const [currentStep, setCurrentStep] = useState(1); // 0-indexed, so 1 = step 2 (Processing) active

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const getStepClass = (index) => {
    if (index < currentStep) return 'stepper-completed';
    if (index === currentStep) return 'stepper-active';
    return 'stepper-pending';
  };

  const getStatusText = (index) => {
    if (index < currentStep) return 'Completed';
    if (index === currentStep) return 'In Progress';
    return 'Pending';
  };

  return (
    <div className="stepper-box">
      {steps.map((step, index) => (
        <div key={index} className={`stepper-step ${getStepClass(index)}`}>
          <div className="stepper-circle">
            {index < currentStep ? (
              <svg
                viewBox="0 0 16 16"
                className="bi bi-check-lg"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"></path>
              </svg>
            ) : (
                <span>{index + 1}</span>
            )}
          </div>
          <div className="stepper-line"></div>
          <div className="stepper-content">
            <div className="stepper-title">{step.title}</div>
            <div className="stepper-status">{getStatusText(index)}</div>
            <div className="stepper-time">{step.description}</div>
          </div>
        </div>
      ))}

      <div className="stepper-controls">
        <button 
            className="stepper-button" 
            onClick={handlePrev} 
            disabled={currentStep === 0}
            type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            ></path>
          </svg>
          Previous
        </button>
        <button 
            className="stepper-button stepper-button-primary" 
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            type="button"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OrderTracker;
