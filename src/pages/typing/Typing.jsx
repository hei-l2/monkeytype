import { createContext, useEffect, useState } from "react";
import { azerty } from "../../utils/layouts";
import { Keyboard } from "./keyboard";
import { TextShow } from "./text-show";

export const ActiveKeyContext = createContext();

export function Typing() {
    const [typedText, setTypedText] = useState({active: "", text : ""})

    const resetActiveKey = async ()=>{
        setTimeout(()=>{
            setTypedText(prev =>({...prev, active: ""}));
        },10)
    }
    
    useEffect(()=>{
        window.addEventListener("keydown",(event)=>{
            setTypedText(({text, active})=> {
                if(active === ""){
                    if(event.key === " " || azerty.some(el=> el.indexOf(event.key.toLocaleLowerCase()) !== -1))
                        return { active: event.key, text: text + event.key.toLocaleLowerCase() }
                    if(event.key === "Backspace" && text.length > 0){
                        return { active: event.key, text:text.slice(0, text.length - 1) }
                    }
                }
                return  { text, active }
            })
            resetActiveKey()
        });

        return window.removeEventListener("keydown",undefined)
    },[])

    //TODO: generate text or get from any api
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate suscipit minima aspernatur magni iusto nisi atque sit. Tempora, vel quasi magnam tenetur est cupiditate voluptas eveniet, autem voluptatum itaque odio."
    
    return (
        <ActiveKeyContext.Provider value={typedText}>
            <div className="d-c-c w-screen h-screen">
                <TextShow printText={text} />
                <Keyboard layout={azerty} />
            </div>
        </ActiveKeyContext.Provider>
    )
}