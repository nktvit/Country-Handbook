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

    const navClass = `flex flex-row w-full fixed top-0 md:px-12 lg:px-20 xl:px-32 2xl:px-48 ${scrollBackground ? 'bg-yourColorClass' : ''}`;

    return (
        <nav className={navClass}>
            <div className="flex">
                <a href="/" className="text-2xl m-auto bg-slate-100 p-2 rounded-full border-0.5 border-slate-200 transition-colors hover:border-blue-600 justify-self-start">
                    <IoIosArrowBack />
                </a>
            </div>

            <InputBox value={country} classNames="justify-self-center" />
        </nav>
    );
};

export default Navbar;
