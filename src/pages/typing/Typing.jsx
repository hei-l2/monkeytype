import { createContext, useEffect, useState } from "react";
import { azerty } from "../../utils/layouts";
import { Keyboard } from "./keyboard";
import { TextShow } from "./text-show";

export const ActiveKeyContext = createContext();

export function Typing() {
    const [activeKey, setActiveKey] = useState({ cursor: 0, key: "" })
    
    const resetActiveKey = async ()=>{
        setTimeout(()=>{
            setActiveKey(prev => ({cursor: prev.cursor++, key: ""}));
        },100)
    }
    
    useEffect(()=>{
        window.addEventListener("keydown",(event)=>{
            setActiveKey(prev => ({key: event.key, cursor: prev.cursor++}))
            resetActiveKey()
        });

        return window.removeEventListener("keydown",undefined)
    },[])

    //TODO: generate text or get from any api
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laborum sint delectus at neque. Nisi "

    return (
        <ActiveKeyContext.Provider value={activeKey}>
            <div className="d-c-c w-screen h-screen">
                <TextShow text={text} />
                <Keyboard layout={azerty} />
            </div>
        </ActiveKeyContext.Provider>
    )
}