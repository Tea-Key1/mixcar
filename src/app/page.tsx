"use client"
import { Fragment } from "react"
import { ThemeProvider } from 'next-themes'
import { Canvas } from "@react-three/fiber"
import Experience from "./experience"
import { ScrollControls } from "@react-three/drei"
import Custom from "./custom"

export default function App() {
  return (<Fragment>
    <div className="h-[100dvh] w-[100dvw]">
      <Canvas
        className="h-auto w-[100dvw]"
        shadows
        orthographic
        camera={{ zoom: 40, position: [0, 20, 20], near: 0.01, far: 100 }}
      >
        <ScrollControls pages={3}>
          <Experience />
          <ThemeProvider attribute="class">
            <Custom />
          </ThemeProvider>
        </ScrollControls>
      </Canvas>
    </div>
  </Fragment>)
}