import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useActiveKey } from '../../useActiveKey';

export function Key({ letter = '' }) {
    const { active } = useActiveKey();
    const [isCapsLockActive, setIsCapsLockActive] = useState(false);
    const [isUpperCase, setIsUpperCase] = useState(false);

    useEffect(() => {
        const handleCapsLock = (event) => {
            setIsCapsLockActive(event.getModifierState('CapsLock'));
        };

        const handleKeyDown = (event) => {
            if (event.key === 'CapsLock') {
                setIsUpperCase(!isUpperCase);
            }
        };

      
        window.addEventListener('keydown', handleCapsLock);
        window.addEventListener('keydown', handleKeyDown);

 
        return () => {
            window.removeEventListener('keydown', handleCapsLock);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isUpperCase]);

    let className = letter !== ' ' ? 'key' : 'key space';

    if (letter.toLocaleLowerCase() === active.toLocaleLowerCase()) {
        className += ' active';
    }

    
    const displayedLetter = isUpperCase ? letter.toLocaleUpperCase() : letter.toLocaleLowerCase();

    return (
        <div className={className}>
            {displayedLetter}
        </div>
    );
}

Key.propTypes = {
    letter: PropTypes.string.isRequired,
};
