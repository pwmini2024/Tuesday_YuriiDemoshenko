import { useState } from "react";
import NameStep from "./NameStep";
import AddressStep from "./AddressStep";
import SummaryStep from "./SummaryStep";

function Form() {
  const [formSubmission, setFormSubmission] = useState({});
  const [currentStep, setCurrentStep] = useState(0)
  const nextStep = () => { setCurrentStep(currentStep + 1) } 
  const prevStep = () => { setCurrentStep(currentStep - 1) } 

  const nameStep = () => { setCurrentStep(0) } 
  const addresStep = () => { setCurrentStep(1) } 

  const handleNameSubmit = (data) => {
    console.log(data);
    setFormSubmission({ ...formSubmission, name: data });
    console.log(formSubmission);
    nextStep();
  }

  const handleAddressSubmit = (data) => {
    console.log(data);
    setFormSubmission({ ...formSubmission, address: data });
    console.log(formSubmission);
    nextStep();
  }

  return (
    <div>
      {currentStep == 0 && <NameStep onSubmit={handleNameSubmit} nameCurrent={formSubmission?.name}/> }
      {currentStep == 1 && <AddressStep onSubmit={handleAddressSubmit} prevStep={prevStep} addresCurrent={formSubmission?.address} /> }
      {currentStep == 2 && <SummaryStep nameStep={nameStep} addresStep={addresStep} formSubmission={formSubmission} /> }

    </div>
  )
}

export default Form;