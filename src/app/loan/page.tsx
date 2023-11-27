"use client"
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { Fragment, Suspense } from "react";
import Experience from "../experience";
import Footer from "../footer";
import Header from "../header";
import Plane from "../plane";

export default function Loan(){
    return(<Fragment>
                <motion.div className="h-[100dvh] w-[100dvw] fixed z-[-10]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 1
            }}
        >
            <Suspense fallback={null}>
                <Canvas
                    className="h-full w-full"
                    shadows
                    orthographic
                    camera={{ zoom: 40, position: [0, 20, 20], near: 0.01, far: 100 }}
                >
                    <Experience />

                    <ThemeProvider attribute="class">
                        <Plane />
                    </ThemeProvider>

                </Canvas>
            </Suspense>

        </motion.div>
        <div className="h-auto w-[100dvw]">
            <ThemeProvider attribute="class">
                <Header />
            </ThemeProvider>
        </div>

        <Footer />
    </Fragment>)
}