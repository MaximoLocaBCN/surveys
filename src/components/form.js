"use client"

import { useEffect, useState } from 'react'
import Numeros from './numeros/numeros';
import TextBox from './textbox/textbox';
import MultiChoice from './multi/multi';
import { useForm } from 'react-hook-form';


export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const Reference = () => (
    <footer className='reference'>
      <span className='markerBlue' />
      <span className='markerGray' />
      <span className='markerGray' />
    </footer>
  );

  
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    num_rating: null,
    opinion: "",
    option: ""
  })

  const handleNext = () => {
    if (step < fieldGroups.length - 1) {
      setStep(step + 1);
      setFormData((prevFormData) => ({
        ...prevFormData,
        num_rating: fieldGroups[step].props.formData.num_rating,
      }));
    }
  };
  

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSave = () => {
    handleSubmit(alert('Squack'));
  };

  const fieldGroups = [
    <Numeros formData={formData} setFormData={setFormData}/>, 
    <TextBox formData={formData} setFormData={setFormData}/>, 
    <MultiChoice formData={formData} setFormData={setFormData}/>
  ];

  const Navigation = () => (
    <>
      {step === fieldGroups.length - 1 ? (
        <button type='submit' onClick={handleSave}>
          Save
        </button>
      ) : (
        <button type='button' className='nextButton' onClick={handleNext}>
          Siguiente
        </button>
      )}

      {step > 0 && (
        <button type='button' className='backButton' onClick={handleBack}>
          Volver
        </button>
      )}
    </>
  );

  return (
    <section>
      <div className="progressbar">
        <div
          style={{ width: step === 0 ? "33.3%" : step == 1 ? "66.6%" : "100%" }}
        ></div> 
      </div>
      {fieldGroups[step]}
      <Navigation/>
    </section>
  );
}
