

import { Fragment, useEffect, useState } from "react"
import { useTheme } from "next-themes"


export default function Plane() {
    const { theme } = useTheme();
    console.log(theme)
    return (<>
        {theme == "dark" ?
            (<Fragment>
                <mesh rotation-x={-45 * Math.PI / 2} scale={10}>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color={"#345A84"} />
                </mesh>
            </Fragment>)
            : null
        }</>
    )
}