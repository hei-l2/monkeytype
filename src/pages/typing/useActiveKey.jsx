import { useContext } from "react";
import { ActiveKeyContext } from "./Typing";

export function useActiveKey(){
    const { text, active }= useContext(ActiveKeyContext);
    return { text, active };
}