import { azerty } from "../../utils/layouts";
import { Keyboard } from "./keyboard";
import { TextShow } from "./text-show";

export function Typing() {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laborum sint delectus at neque. Nisi "
    return (
        <div className="d-c-c w-screen h-screen">
            <TextShow text={text} />
            <Keyboard layout={azerty} />
        </div>
    )
}