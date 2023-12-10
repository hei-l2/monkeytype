import PropTypes from "prop-types"
import { Letter } from "./components"
import { LetterStatus } from "./utils"
import { useActiveKey } from "../useActiveKey"

export function TextShow({printText}) {
    const { text } = useActiveKey()
    return (
        <div className="flex-1 w-full">
            <div className="flex text-lg-white px-10 text-[35px] w-full d-c-c h-full flex-row">
                <p className="text-center">
                    {printText.split("").map((el, index)=>{
                        let status = LetterStatus.NONE;
                        if(index < text.length){
                            status = text[index] === el ? LetterStatus.CORRECT : LetterStatus.WRONG
                        }
                        return <Letter key={index} letter={el} status={status} />
                    })}
                </p>
            </div>
        </div>
    )
}

TextShow.propTypes = {
    printText: PropTypes.string.isRequired
}