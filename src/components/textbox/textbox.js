import { useState, useEffect } from "react";
import "./textbox.css";

export default function TextBox({ formData, setFormData }) {
  const [validation, setValidation] = useState("");
  const [bars, setBars] = useState([
    { id: 1, solid: false },
    { id: 2, solid: false },
    { id: 3, solid: false },
    { id: 4, solid: false },
    { id: 5, solid: false }
  ]);

  useEffect(() => {
    const opinionLength = formData.opinion.length;
    let updatedBars = bars.map((bar) => ({
      id: bar.id,
      solid: bar.id <= Math.ceil(opinionLength / 10)
    }));

    if (opinionLength >= 0 && opinionLength <= 10) {
      setValidation("Escribe más...");
    } else if (opinionLength >= 11 && opinionLength <= 20) {
      setValidation("Un poco más...");
    } else if (opinionLength >= 21 && opinionLength <= 30) {
      setValidation("Vas bien...");
    } else if (opinionLength >= 31 && opinionLength <= 40) {
      setValidation("Casi...");
    } else if (opinionLength >= 41) {
      setValidation("Perfecto!");
    }

    setBars(updatedBars);
  }, [formData.opinion]);

  return (
    <div>
      <section className="pruebas">
        <textarea
          placeholder="Write your opinion..."
          id="first"
          name="first"
          value={formData.opinion}
          onChange={(event) =>
            setFormData({ ...formData, opinion: event.target.value })
          }
        />
        <div id="remaining-char-number">
            <div>
                {validation}
            </div>
            <div>

            </div>
                {bars.map((bar) => (
                    <div 
                    key={bar.id}
                    className={`text-bar ${bar.solid ? "solid" : "faded"}`}
                    >
                    </div>
                ))}
            </div>
      </section>
    </div>
  );
}
