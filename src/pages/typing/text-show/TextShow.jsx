import PropTypes from "prop-types"
import { Letter } from "./components"
import { LetterStatus } from "./utils"

export function TextShow({text}) {
    return (
        <div className="flex-1 w-full">
            <div className="flex text-lg-white px-10 text-[35px] w-full d-c-c h-full flex-row">
                <p className="text-center">
                    {text.split("").map((el, index)=><Letter key={index} letter={el} status={LetterStatus.NONE} />)}
                </p>
            </div>
        </div>
    )
}

TextShow.propTypes = {
    text: PropTypes.string.isRequired
}