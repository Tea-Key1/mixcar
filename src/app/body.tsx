import { useTheme } from "next-themes";
import { Fragment } from "react";

export default function Body({handleBodyUpdate}:any) {
    const { theme, setTheme } = useTheme();
    const handleThemeSwitch: any = () => {
        handleBodyUpdate(theme)
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (<Fragment>
        <div className="h-[100dvh] w-[100dvw]">
            <div className="h-[15dvh] w-[100dvw]">
                <button onClick={handleThemeSwitch} className="h-[5dvh] w-[10dvh] bg-red-200 dark:bg-blue-400"><span>Switch Theme</span></button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta iste pariatur tempore, vitae nesciunt voluptate, debitis doloremque minus similique corrupti ullam modi, natus nihil accusantium dolorum fugiat placeat rem!</p>
        </div>
        <div className="h-[100dvh] w-[100dvw]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta iste pariatur tempore, vitae nesciunt voluptate, debitis doloremque minus similique corrupti ullam modi, natus nihil accusantium dolorum fugiat placeat rem!</p>
        </div>
        <div className="h-[100dvh] w-[100dvw]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta iste pariatur tempore, vitae nesciunt voluptate, debitis doloremque minus similique corrupti ullam modi, natus nihil accusantium dolorum fugiat placeat rem!</p>
        </div>
    </Fragment>)
}