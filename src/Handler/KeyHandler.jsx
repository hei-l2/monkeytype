import React, { useState } from "react";
import './file.css'

const KeyHandler = ({ sentence }) => {
    const [inputValue, setInputValue] = useState('');
    var [mistakes, setMistakes] = useState(0);
    const [started, setStarted] = useState(false);
    const [key, setKey] = useState()

    const handleInputChanges = (typedChar) => {
        if (!started) {
            return; 
        }

        const expectedChar = sentence[inputValue.length];
        setKey(expectedChar)

        let newMistakes = 0
            setInputValue(inputValue + typedChar);
            
            for (let i = 0; i < inputValue.length; i++) {
                if (inputValue[i] !== sentence[i]) {
                    newMistakes += 1;
                }
            }

        setMistakes(newMistakes)
    };

    const getCharClass = (expectedChar, typedChar, index) => {
        if (index < inputValue.length) {
            return expectedChar === typedChar ? 'correct' : 'incorrect';
        }
        return '';
    };

    const startGame = () => {
        setStarted(true);
        setMistakes(0);
    };

    const handleKeyDown = (e) => {
        if (started && e.key.length === 1) {
            handleInputChanges(e.key);
            setKey(e.key)
        }
    };
 

    return (
        <div onKeyDown={handleKeyDown} tabIndex="0">
            <p>
                {sentence.split('').map((char, index) => (
                    <span key={index} className={getCharClass(char, inputValue[index], index)}>
                        {char}
                    </span>
                ))}
            </p>
            
            <button onClick={startGame}>Start</button>
        </div>
    );
};

export default KeyHandler;
