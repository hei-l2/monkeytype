import { Key } from "./Key";
import PropTypes from "prop-types"

export function KeyLine({letters = []}) {
    return (
        <div className="flex w-full gap-5 justify-center items-start flex-row">
            { letters.map((el, index) => <Key key={index} letter={el}/>) }
        </div>
    )
}

KeyLine.propTypes = {
    letters: PropTypes.array.isRequired
}