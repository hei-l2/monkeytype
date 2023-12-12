import React from "react";
import { useState, useEffect } from "react";
import './file.css'

export const KeyHandler = ({sentence})=>{
    const [inputValue, setInputValue] = useState('');
    const [mistakes, setMistakes] = useState(0);
    const [count, setCount] = useState(30)


    setTimeout(() => {
        for (let i = 0; i < count; i++) {
            setCount(i)
        }
    }, 900);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key.length === 1) {
                handleInputChanges(e.key);
            } else if (e.key === 'Backspace') {
                handleBackspace();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [inputValue]);

    const handleInputChanges = (typedChar) => {
        const expectedChar = sentence[inputValue.length];

        let newMistakes = 0;
        const newInputValue = inputValue + typedChar;

        for (let i = 0; i < newInputValue.length; i++) {
            if (newInputValue[i] !== sentence[i]) {
                newMistakes += 1;
            }
        }

        setInputValue(newInputValue);
        setMistakes(newMistakes);
    };

    const handleBackspace = () => {
        if (inputValue.length > 0) {
            setInputValue(inputValue.slice(0, -1));
            setMistakes(0);
        }
    };

    const getCharClass = (expectedChar, typedChar, index) => {
        if (index < inputValue.length) {
            return expectedChar === typedChar ? 'correct' : 'incorrect';
        }
        return '';
    };

    return (
        <div  className="flex-1 w-full"> 
            <div className="flex text-lg-white px-10 text-[35px] w-full d-c-c h-full flex-row">
         {count}
                <p className="text-center">
                {sentence.split('').map((char, index) => (
                    <span key={index} className={getCharClass(char, inputValue[index], index)}>
                        {char}
                    </span>
                ))}
                </p>
            </div>
        </div>
    );
}
