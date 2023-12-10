import { Keyboard } from "./keyboard";
import { TextShow } from "./text-show";

export function Typing() {
    return (
        <div className="d-c-c w-screen h-screen">
            <TextShow />
            <Keyboard />
        </div>
    )
}