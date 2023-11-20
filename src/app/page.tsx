"use client"
import { Fragment, useRef } from "react"
import * as THREE from "three"

import { Canvas, RootState, useThree } from "@react-three/fiber"
import Experience from "./experience"
import { ScrollControls, Scroll, Html } from "@react-three/drei"
import Body from "./body"

export default function App() {
  const scrollRef:any = useRef();
  return (<Fragment>
    <div className="h-[100dvh] w-[100dvw]">
      <Canvas
        className="h-[100dvh] w-[100dvw]"
        shadows
        orthographic
        camera={{ zoom: 40, position: [0, 20, 20], near: 0.01, far: 100 }}
      >
        <ScrollControls pages={3}>
          <Experience />
          <Scroll html ref={scrollRef}>
            <Body />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  </Fragment>)
}