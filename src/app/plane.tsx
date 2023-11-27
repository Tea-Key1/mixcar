import { Fragment } from "react";
import { useTheme } from "next-themes";

export default function Plane() {
    const { resolvedTheme } = useTheme();
    return (<Fragment>
        {resolvedTheme === 'light' ? null : (
            <mesh rotation-x={-45 * Math.PI / 2} scale={10}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color={"#326182"} />
            </mesh>
        )}
    </Fragment>)
}