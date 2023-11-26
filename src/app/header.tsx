import { useTheme } from "next-themes";
import { Fragment, useEffect, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image"
import { useThree } from "@react-three/fiber";

export default function Header() {

    const [width, setWidth] = useState(0);
    const [ themes, setThemes ] = useState("")
    const { theme, setTheme }:any = useTheme();
    useEffect(() => {
        setWidth(window.innerWidth);
        setThemes(theme)
    }, []);
    
    const handleThemeSwitch: any = () => {
        setThemes(theme == 'light' ? 'dark' : 'light')
        setTheme(theme == 'light' ? 'dark' : 'light')
    }
    const [isOpen, setOpen] = useState(false);
    const handleMenuOpen: any = () => {
        setOpen(!isOpen)
    }
    return (<Fragment>
        <header className="h-[15dvh] w-full flex flex-wrap justify-items-center border-gray-200 dark:bg-gray-800 dark:bg-opacity-[0.5]">
            <nav className="h-full w-full flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-8 lg:px-6 py-2.5">
                <a className="flex items-center">
                    <Image alt="logo" src={"/textures/mixlogo.png"} height={Math.min(300, width/3)} width={Math.min(300, width/3)} />
                </a>
                <div className="flex items-center lg:order-2">
                    <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
                        <span className='label flex items-center text-sm font-medium dark:text-gray-100'>
                            <Image alt='image' src={"/textures/light.svg"} height={Math.min(width * 3, 30)} width={Math.min(width * 3, 30)} />
                        </span>

                        <button onClick={handleThemeSwitch} className={`slider mx-4 flex h-5 md:h-8 w-[40px] md:w-[60px] items-center rounded-full p-1 duration-200 ${themes == "dark" ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'}`}>
                            <span className={`dot h-4 md:h-6 w-4 md:w-6 rounded-full bg-white duration-200 ${themes == "dark" ? 'translate-x-[18px] md:translate-x-[28px]' : ''}`}></span>
                        </button>
                        <span className='label flex items-center text-sm font-medium dark:text-gray-100'>
                            <Image alt='image' src={"/textures/dark.svg"} height={Math.min(width * 3, 30)} width={Math.min(width * 3, 30)} />
                        </span>
                    </label>

                    <button onClick={handleMenuOpen} className="inline-flex items-center p-2 ml-4 md:ml-8 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <svg className="h-5 md:w-8 w-5 md:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden h-5 md:w-8 w-5 md:h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li className="">
                            <a href="#" className=" inline py-2 px-4 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white hover:border-b-2 border-gray-500 duration-100">Company</a>
                        </li>
                        <li className="">
                            <a href="#" className=" inline py-2 px-4 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white hover:border-b-2 border-gray-500 duration-100">Marketplace</a>
                        </li>
                        <li className="">
                            <a href="#" className=" inline py-2 px-4 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white hover:border-b-2 border-gray-500 duration-100">Features</a>
                        </li>
                        <li className="">
                            <a href="#" className=" inline py-2 px-4 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white hover:border-b-2 border-gray-500 duration-100">Team</a>
                        </li>
                        <li className="">
                            <a href="#" className=" inline py-2 px-4 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white hover:border-b-2 border-gray-500 duration-100">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        {isOpen == true ? (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, }}
                transition={{ duration: 0.2 }}
                onViewportLeave={handleMenuOpen}
                className="absolute right-0 top-[10dvh] h-[40dvh] w-[30dvw] bg-white shadow-4xl p-5 pt-0 border-2 border-gray-200"
            >
                <div className="w-full h-full flex flex-col justify-around items-center">
                    <div className="text-black">first</div>
                    <div className="text-black">second</div>
                    <div className="text-black">third</div>
                    <div className="text-black">forth</div>
                </div>
            </motion.div>
        ) : null}
    </Fragment>)
}