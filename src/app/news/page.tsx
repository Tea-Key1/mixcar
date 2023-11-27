"use client"
import { Fragment, useState, useEffect, Suspense } from "react";
import { client } from "../../../libs/contentfulClient";
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
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-10 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100 border-y-2">
                    {items.map((item: any) =>
                        <div key={item.sys.id} className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span className="mt-1 text-gray-500 text-sm">{item.fields.date}</span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{item.fields.title}</h2>
                                <p className="leading-relaxed ">{item.fields.body}</p>
                            </div>
                        </div>
                    )}
                    {/* <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                            <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                            <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                            <a className="text-blue-500 inline-flex items-center mt-4">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        <Footer />
    </Fragment>)
}