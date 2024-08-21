import { useState } from "react";

const messages = [
  "Learn React",
  "Apply for jobs",
  "Invest your new income",
];


export default function App() {
  return (
    <div>
      <Steps />
    </div>
  )
}

function Steps() {

  const [step, setStep] = useState(1)

  function handlePrevious() {
    if (step > 1) {
      setStep(() => step - 1)
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep(() => step + 1)
    }
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <div className="message">
        <h3>Step{step}{":"}{messages[step - 1]}</h3>
      </div>
      <div className="buttons">
        <button onClick={handlePrevious}>
          <span>Previous</span>
        </button>
        <button onClick={handleNext}>
          <span>Next</span>
        </button>

      </div>

    </div>
  )





}
