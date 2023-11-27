"use client"
import { Fragment, useState, useEffect, Suspense } from "react";
import { client } from "../../../libs/contentfulClient";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { ThemeProvider } from "next-themes";
import Image from "next/image"
import Plane from "../plane";
import Experience from "../experience";
import Header from "../header";
import Footer from "../footer";

export const loadPosts = async () => {
    const res = await client.getEntries({
        content_type: "mixcar"
    })
    return res.items
}

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
            <div className="h-auto w-full flex justify-center p-[5dvw]">
                <section className="flex flex-col max-w-screen-xl justify-around gap-6 sm:gap-10 md:gap-16 lg:flex-row">

                    <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                        <p className="mb-4 font-semibold text-indigo-500 dark:text-indigo-300 md:mb-6 text-xs sm:text-base">一人でも多くの方に、安心な中古輸入車をお届けしたい。</p>

                        <h1 className="mb-8 font-bold md:mb-12 text-xs sm:text-base">従来の中古車では、高額な保証システムに入らない限り故障に対する安心を手に入れる事はできませんでした。MiXでは独自の保証システムをリーズナブルな価格で、お車の安心をお届けしています。</h1>

                        <p className="mb-8 leading-relaxed  md:mb-12 lg:w-4/5 text-xs sm:text-base">保証システムをご提供するために、業界オークションから良質な中古車を仕入れ、納車前の点検整備を徹底しています。さらに内外装の仕上げをしっかりした上で、リーズナブルな価格で販売しています。</p>

                        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                            <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">中古車を見る</a>

                            <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-700 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">MiX保証を見る</a>
                        </div>
                    </div>

                    <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12" >
                        <Image loading="lazy" priority={false} src={"/textures/camera_car_road_mazda_travel_fun_drive_view-624222.jpg"} alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center " width={1000} height={1000} />
                    </div>
                </section>
            </div>
        </div>
        <Footer />
    </Fragment>)
}