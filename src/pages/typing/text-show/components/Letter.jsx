import PropTypes from "prop-types"
import { LetterStatus } from "../utils"

export function Letter({ letter, status }) {
    let color = "text-lg-white";
    
    if(status === LetterStatus.CORRECT)
        color = "text-green-500"
    else if(status === LetterStatus.WRONG)
        color = "text-red-500"

    return (
        <span className={color}>{ letter }</span>
    )
}

Letter.propTypes= {
    letter: PropTypes.string.isRequired,
    status: PropTypes.oneOf(Object.values(LetterStatus))
}