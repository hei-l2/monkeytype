import { useContext } from "react";
import { ActiveKeyContext } from "./Typing";

export function useActiveKey(){
    const { cursor, key }= useContext(ActiveKeyContext);
    return { cursor, key };
}