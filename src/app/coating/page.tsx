"use client"

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import { Fragment, Suspense } from "react";
import Experience from "../experience";
import Footer from "../footer";
import Header from "../header";
import Plane from "../plane";

export default function Coating() {
    return (<Fragment>
        <motion.div className="h-[100dvh] w-[100dvw] fixed z-[-10]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
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

        <div className=" py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                    <p className="mb-4 font-semibold text-cyan-500 md:mb-6 md:text-lg xl:text-xl">CAR COATING</p>

                    <h1 className="mb-8 text-3xl font-bold sm:text-4xl md:mb-12 md:text-5xl">MiX カーコーティング</h1>
                </div>
            </div>
        </div>

        <div className="w-[95dvw] md:w-[80dvw] lg:w-[60dvw] mx-auto py-6 sm:py-8 lg:py-12 bg-gray-200 dark:bg-gray-500 bg-opacity-25 dark:bg-opacity-25">
            <div className="flex flex-col justify-center max-w-screen-xl px-10 md:px-8">
                <h1 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">1. カーコーティングとは</h1>

                <p className="mb-6 text-gray-700 dark:text-gray-200 sm:text-lg md:mb-8">
                    車の塗装の上に、油脂や樹脂やガラスなどの成分でコーティングすることです。車の塗装面は、常に次のようなダメージにさらされています。屋内の車庫に入れてあっても防ぐことはできません。<br />

                    ① 車両走行による空気中の小さな塵や埃などの浮遊物による塗装の劣化<br />
                    ② 雨や雪などの水分による塗装の劣化<br />
                    ③ 洗車時のカルキによる塗装の劣化<br />
                    ④ 野鳥などによる糞害による塗装の劣化<br />
                    ⑤ 紫外線、酸性雨、花粉、黄砂、排気ガスなどによる塗装の劣化<br />
                </p>

                <div className="flex justify-center align-middle w-full mb-6 overflow-hidden rounded-lg md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/coatinga1.png"} alt="coadinga1" className="w-full lg:w-[30dvw] object-cover object-center block" width={1000} height={1000} />
                </div>

                <p className="mb-6 text-gray-700 dark:text-gray-200 sm:text-lg md:mb-8">
                    塗装の劣化によって、車は徐々に艶が失われ、色あせていきます。そうなると見た目の美しさが失われてしまうのはもちろん、塗装の大切な役割である保護機能も低下してしまいます。<br />
                    そうしたダメージを防ぐために施すのがカーコーティングです。車の塗装表面に保護膜を作ることで、劣化を防ぎ、美しさを保つことができます。
                </p>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">2. カーコーティングのメリット</h2>

                <ul className="mb-6 list-inside list-disc text-gray-700 dark:text-gray-200 sm:text-lg md:mb-8">
                    <li>塗装面の劣化を防止し、美しさを保つ。</li>
                    <li>外車はコーティングすると高級感が増す。</li>
                    <li>汚れ落ちが良くなり日々のお手入れ（洗車）が楽になる。</li>
                </ul>

                <div className="flex justify-center align-middle w-full mb-6 overflow-hidden rounded-lg md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/coatinga2.png"} alt="coadinga1" className="w-full lg:w-[30dvw] object-cover object-center block" width={1000} height={1000} />
                </div>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">3. MiXコーティングを勧める理由</h2>

                <p className="mb-6 text-gray-700 dark:text-gray-200 sm:text-lg md:mb-8">
                    当社のコーティングは、脱脂（ワックス、排ガス等による油汚れの処理）を３段階で実施します。<br />
                    ① 1段階目は1000番コンパウンド(粗目)を実施<br />
                    ② 2段階目は2000番コンパウンド(細目)を実施<br />
                    ③ 最後は超微粒子のコンパウンドで磨いてコーティング剤を施工<br />
                    しっかり脱脂しないとコーティング剤が塗装面に乗りません。結果として効果が長続きしません。当社のコーティングは、念入りに脱脂した上でコーティングするので、効果の持続力が違います。価格の安いコーティングでは、脱脂が不十分な上、粗目のコンパウンドなので、当社の細目のコンパウンドとは、仕上がりの艶が断然違います。
                </p>

                <div className="flex justify-center align-middle w-full mb-6 overflow-hidden rounded-lg md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/coatinga3.png"} alt="coadinga1" className="w-full lg:w-[30dvw] object-cover object-center block" width={1000} height={1000} />
                </div>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">4. 施工費</h2>

                <p className="mb-6 text-gray-700 dark:text-gray-200 sm:text-lg md:mb-8">
                    ＭｉＸコーティングの施工費は『１００，０００円（税別）』です。<br />
                    お申込みのお客様には、次の特典をご用意しております。<br />
                    ① 年に１回コーティング剤をお渡し可。お客様自身でコーティングできます。<br />
                    ② フロントガラスのコーティングは無料で施工します。<br />
                    ③ アルミホイルのコーティングは格安でお受けします。<br />
                </p>

                <div className="flex justify-center align-middle w-full mb-6 overflow-hidden rounded-lg md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/coatinga4.png"} alt="coadinga1" className="w-full lg:w-[30dvw] object-cover object-center block" width={1000} height={1000} />
                </div>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">5. 施工証明書</h2>

                <p className="mb-6 text-gray-700 dark:text-gray-200 sm:text-lg md:mb-8">
                    お客様にはMiXより施工証明書を発行させて頂きます。
                </p>

                <div className="flex justify-center align-middle w-full mb-6 overflow-hidden rounded-lg md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/sekousyoumeiV4.jpg"} alt="coadinga1" className="w-full lg:w-[30dvw] object-cover object-center block" width={1000} height={1000} />
                </div>

                <p className="mb-6 text-gray-700 dark:text-gray-200 sm:text-lg md:mb-8">
                    施工証明書はただの記念ではありません。<br />

                    コーティングが自動車保険の補償対象になっているのをご存知でしょうか？事故後に鈑金塗装すると、そこだけコーティングされていない状況となり、艶や光沢、撥水・防汚性などのバラつきが生じてしまいます。そこでコーティングも再施工することが望ましいのですが、その際、自損事故の場合は加入する車両保険、相手がいる事故の場合は相手が加入する任意保険を適用することができるのです。<br />

                    目に見えないコーティングの施工を証明してくれるのが、施工時にショップから発行される「施工証明書」なのです。
                </p>

            </div>
        </div>

        <Footer />
    </Fragment>)
}