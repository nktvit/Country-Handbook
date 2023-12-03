import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

interface InputBoxProps {
    value?: string
}

const InputBox: React.FC<InputBoxProps> = ({ value = "" }) => {
    const [inputText, setInputText] = useState(value)
    const [isInputFocused, setInputFocused] = useState(false);

    const shouldRedirect = true;

    const navigate = useNavigate()

    const searchCountry = (country: string) => {
        if (shouldRedirect) {
            navigate('/' + country);
        }
    }

    const handleInput = (input: string) => {
        setInputText(input)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchCountry(inputText)


    }

    return (
        <div className={`bg-slate-100 border my-6 max-w-fit m-auto rounded-2xl md:rounded-3xl shadow-xl transition-colors ${isInputFocused ? "border-blue-600" : "border-gray-300"}`}>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="flex items-center">
                    <input
                        className="flex-grow rounded-l-2xl focus:outline-none caret-gray-600 text-slate-800 bg-transparent text-md md:text-2xl text-center h-8 md:h-16 uppercase"
                        spellCheck="false" placeholder="find country" type="text"
                        value={inputText}
                        onChange={e => handleInput(e.target.value)}
                        onFocus={() => setInputFocused(true)}
                        onBlur={() => setInputFocused(false)}
                    />
                    <div className="p-1 pr-1.5 pl-2 rounded-r-lg border-l ">
                        <button className="text-xl md:text-3xl lg:text-4xl p-2 rounded-full transition-colors bg-slate-100 hover:bg-slate-200">
                            <CiSearch />
                        </button>
                    </div>

                </div>
            </form>
        </div>


    );
}

export default InputBox;