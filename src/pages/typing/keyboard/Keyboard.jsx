import { Key } from "./components";

export function Keyboard() {
  return (
    <div className="flex-1 w-full">
        <div className="flex w-full justify-center h-full items-start flex-row">
            <Key />
        </div>
    </div>
  )
}