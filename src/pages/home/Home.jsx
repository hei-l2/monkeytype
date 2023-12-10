import { Link } from "react-router-dom";

export function Home() {
    return (
        <header className="w-full h-screen d-c-c gap-2">
            <h2 className="text-lg-white font-semibold text-[40px]">
                Tongasoa ato @ 
                <span className="text-red-500 ml-1">
                    Monkeytype
                </span>
            </h2>
            <p className="text-lg-white opacity-[.8]">Ato zany tonga dia hoe mi-taper clavier fona e !!! XD</p>
            <button className="button-base bg-red-500 hover:bg-red-600 block mt-2">
                <Link to='/typing'>
                    Go ary hoe
                </Link>
            </button>
        </header>
    )
}