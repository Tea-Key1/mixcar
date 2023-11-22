import { Scroll } from "@react-three/drei";
import { ThemeProvider, useTheme } from "next-themes";
import { Fragment, useState } from "react";
import Body from "./body";

export default function Custom() {
    const { resolvedTheme } = useTheme();
    const [planeKey, setPlaneKey]:any = useState(resolvedTheme);
    const handleBodyUpdate:any = (e:string) => {
      setPlaneKey(e != 'light' ? 'light' : 'dark');
    };
    console.log(resolvedTheme)
    return (<Fragment>
        <Scroll html >
            <ThemeProvider attribute="class">
                <Body handleBodyUpdate={handleBodyUpdate}/>
            </ThemeProvider>
        </Scroll>
        { resolvedTheme || planeKey == "dark" ?
            (<Fragment>
                <mesh rotation-x={-45 * Math.PI / 2} scale={10}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={"#345A84"} />
                </mesh>
            </Fragment>)
            : null
        }
    </Fragment>)
}