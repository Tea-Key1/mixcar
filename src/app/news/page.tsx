"use client"

import { Fragment, useState, useEffect, Suspense } from "react";
import { loadPosts } from "../blog";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { ThemeProvider } from "next-themes";
import Image from "next/image"
import Plane from "../plane";
import Experience from "../experience";
import Header from "../header";
import Footer from "../footer";


export default function News() {
    const [items, setItems] = useState([])
    useEffect(() => {
        (async () => {
            let posts: any = await loadPosts()
            setItems(posts)
        })()
    }, [])

    return (<Fragment>
        <motion.div className="h-[100dvh] w-[100dvw] fixed z-[-10]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1}}
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
        <section className="flex justify-center items-center align-middle body-font">
            <div className="container px-5 py-10 mx-auto md:w-3/5">
                <div className="-my-8 divide-y-2 divide-gray-100 border-y-2">
                    {items.map((item: any) =>
                        <div key={item.sys.id} className="py-8 flex flex-wrap md:flex-nowrap">

                            <div className="md:flex-grow">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className={`mt-1 text-sm`}>{item.fields.date}{item == items[0] ? <span className="text-red-400 ml-2">new</span> : null}</span>
                                </div>
                                <h2 className="text-2xl font-medium title-font mb-2">{item.fields.title}</h2>
                                <p className="leading-relaxed ">{item.fields.body}</p>
                                {item.fields.picture ?
                                    <div className="w-full flex justify-center align-middle">
                                        <Image loading="lazy" priority={false} src={"https://images.ctfassets.net/gdenp27geme8/3p2KSN9mcaszisi4VrYlPs/46a478dfb1e27f8a64b94283d38246a1/bg_img001.jpg"} alt="Photo by Fakurian Design" className="w-[80dvw] lg:w-[50dvw] object-cover object-center block" width={1000} height={1000} />
                                    </div>
                                    : null
                                }
                            </div>
                        </div>
                    )}
                    <div className="py-8 flex flex-wrap md:flex-nowrap">

                        <div className="md:flex-grow">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="mt-1 text-sm">2023.09.25</span>
                            </div>
                            <h2 className="text-2xl font-medium0 title-font mb-2">MiXオーナーズクラブ</h2>
                            <div className="w-full flex justify-center align-middle">
                                <Image loading="lazy" priority={false} src={"/textures/kiyaku20230925a.png"} alt="Photo by Fakurian Design" className="w-[80dvw] lg:w-[50dvw] object-cover object-center block" width={1000} height={1000} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </Fragment>)
}