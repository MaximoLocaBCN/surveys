"use client"

import { useEffect, useState } from 'react'
import './numeros.css'

export default function Numeros({ formData, setFormData }) {

    // const [color, setColor] = useState("blue")
    // const click = color => {
    //   setColor(color)
    // } 

    // useEffect(() => {
    //   document.body.style.backgroundColor = color
    // }, [color])

    const [value, setValue] = useState(formData.num_rating);


    const handleClick = (event) => {
        const buttonId = event.target.id;
        setValue(buttonId);
        setFormData((prevFormData) => ({
            ...prevFormData,
            num_rating: buttonId,
        }));
    };

    useEffect(() => {
        console.log('valor:', value);
    }, [value]);

    return (
        <div className="pruebas">
            <section>
                <button
                    id='1'
                    className={`label ${value === '1' ? 'selected' : ''}`}
                    onClick={handleClick}
                >
                    1
                </button>
                <button
                    id='2'
                    className={`label ${value === '2' ? 'selected' : ''}`}
                    onClick={handleClick}
                >
                    2
                </button>
                <button
                    id='3'
                    className={`label ${value === '3' ? 'selected' : ''}`}
                    onClick={handleClick}
                >
                    3
                </button>
                <button
                    id='4'
                    className={`label ${value === '4' ? 'selected' : ''}`}
                    onClick={handleClick}
                >
                    4
                </button>
                <button
                    id='5'
                    className={`label ${value === '5' ? 'selected' : ''}`}
                    onClick={handleClick}
                >
                    5
                </button>
                <button
                    id='6'
                    className={`label ${value === '6' ? 'selected' : ''}`}
                    onClick={handleClick}
                >
                    6
                </button>
                <button
                    id='7'
                    className={`label ${value === '7' ? 'selected' : ''}`}
                    onClick={handleClick}
                >
                    7
                </button>
                <button
                    id='8'
                    className={`label ${value === '8' ? 'selected' : ''}`}
                    onClick={handleClick}
                >
                    8
                </button>
                <button
                    id='9'
                    className={`label ${value === '9' ? 'selected' : ''}`}
                    onClick={handleClick}
                >
                    9
                </button>
                <button
                    id='10'
                    className={`label ${value === '10' ? 'selected' : ''}`}
                    onClick={handleClick}
                >
                    10
                </button>
            </section>
        </div>
    )
}