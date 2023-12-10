import { KeyLine } from "./components";
import PropTypes from "prop-types";

export function Keyboard({ layout }) {
    return (
        <div className="flex-1 w-full">
            <div className="w-full flex justify-end pb-[50px] h-full flex-col gap-5">
                {layout.map((el,index) => <KeyLine key={index} letters={el}/>)}
                <KeyLine letters={[" "]}/>
            </div>
        </div>
    )
}

Keyboard.propTypes = {
    layout: PropTypes.array.isRequired
}