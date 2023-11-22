import { ThemeProvider, useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";
import * as THREE from "three"

export default function Body() {
    const { theme, setTheme } = useTheme();
    const handleThemeSwitch: any = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    // console.log(theme)
    return (<Fragment>
        <div className="h-[100dvh] w-[100dvw]">
            <div className="h-[15dvh] w-[100dvw]">
                <button onClick={handleThemeSwitch} className="h-[5dvh] w-[10dvh] bg-red-200 dark:bg-blue-400"><span>Switch Theme</span></button>
            </div>
        </div>
        <div className="h-[100dvh] w-[100dvw]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta iste pariatur tempore, vitae nesciunt voluptate, debitis doloremque minus similique corrupti ullam modi, natus nihil accusantium dolorum fugiat placeat rem!</p>
        </div>
        <div className="h-[100dvh] w-[100dvw]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta iste pariatur tempore, vitae nesciunt voluptate, debitis doloremque minus similique corrupti ullam modi, natus nihil accusantium dolorum fugiat placeat rem!</p>
        </div>
    </Fragment>)
}