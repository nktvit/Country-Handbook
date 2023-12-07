import React, { useState, useEffect } from 'react';
import InputBox from './InputBox'; // Assuming this is a component you've created
import { IoIosArrowBack } from 'react-icons/io'; // Assuming you have this icon component

interface NavbarProps {
    country: string
}
const Navbar: React.FC<NavbarProps> = ({ country }) => {
    const [scrollBackground, setScrollBackground] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const viewportHeight = window.innerHeight;
            const triggerHeight = viewportHeight * 0.4;

            if (window.scrollY > triggerHeight) {
                setScrollBackground(true);
            } else {
                setScrollBackground(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);


    return (
        <nav className={`flex flex-row w-full fixed top-0 transition-colors px-2 md:px-12 lg:px-20 xl:px-32 2xl:px-48 ${scrollBackground ? 'bg-slate-100/60 backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="flex mr-3">
                <a href="/" className="text-2xl m-auto bg-slate-100 p-2 rounded-full border-0.5 border-slate-200 transition-colors hover:border-indigo-700 justify-self-start">
                    <IoIosArrowBack />
                </a>
            </div>

            <InputBox value={country} classNames={`md:justify-self-center ${scrollBackground ? 'my-2' : ''}`} />
        </nav>
    );
};

export default Navbar;
