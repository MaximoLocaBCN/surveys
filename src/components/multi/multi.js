import { useState } from "react";
import './multi.css'
export default function MultiChoice({ formData, setFormData }) {
  const [selectedOption, setSelectedOption] = useState(formData.option);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setFormData((prevFormData) => ({
      ...prevFormData,
      option: selectedValue,
    }));
  };

  return (
    <section>
      <h1>Pregunta</h1>
      <label className="container">
        A
        <input
          type="radio"
          name="radio"
          value="A"
          checked={selectedOption === "A"}
          onChange={handleOptionChange}
        />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        B
        <input
          type="radio"
          name="radio"
          value="B"
          checked={selectedOption === "B"}
          onChange={handleOptionChange}
        />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        C
        <input
          type="radio"
          name="radio"
          value="C"
          checked={selectedOption === "C"}
          onChange={handleOptionChange}
        />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        D
        <input
          type="radio"
          name="radio"
          value="D"
          checked={selectedOption === "D"}
          onChange={handleOptionChange}
        />
        <span className="checkmark"></span>
      </label>
    </section>
  );
}
