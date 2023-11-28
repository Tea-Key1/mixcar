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

export default function Loan() {
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
                    <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">LOAN</p>

                    <h1 className="mb-8 text-3xl font-bold sm:text-4xl md:mb-12 md:text-5xl">自社ローン</h1>
                </div>
            </div>
        </div>

        <div className=" py-6 sm:py-8 lg:py-12 ">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">

                <div className="flex justify-center align-middle w-full mb-6 overflow-hidden md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/loan001.png"} alt="coadinga1" className="w-[70dvw] lg:w-[30dvw] object-cover object-center block rounded-lg" width={1000} height={1000} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">

                    <div className="flex divide-x rounded-lg border bg-gray-100 bg-opacity-25">
                        <div className="flex items-center p-2 text-indigo-500 md:p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <div className="p-4 md:p-6">
                            <h3 className="mb-2 text-lg font-semibold md:text-xl">来店不要</h3>
                            <p className="text-gray-500 dark:text-gray-200 ">神奈川県、東京都、埼玉県、千葉県、静岡県、山梨県、その他全国陸送納車対応可能です。面倒な来店手続きは不要です。下記のラインから簡単お申し込み受け付けています。</p>
                        </div>
                    </div>
                    <div className="flex divide-x rounded-lg border bg-gray-100 bg-opacity-25">
                        <div className="flex items-center p-2 text-indigo-500 md:p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <div className="p-4 md:p-6">
                            <h3 className="mb-2 text-lg font-semibold md:text-xl">協会認定</h3>
                            <p className="text-gray-500 dark:text-gray-200 ">当店は一般社団法人自社ローン協会認定の自社ローンスペシャリスト在籍店です。信頼と品質の証、安心してお申し込みいただけます。</p>
                        </div>
                    </div>
                    <div className="flex divide-x rounded-lg border bg-gray-100 bg-opacity-25">
                        <div className="flex items-center p-2 text-indigo-500 md:p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <div className="p-4 md:p-6">
                            <h3 className="mb-2 text-lg font-semibold md:text-xl">頭金不要</h3>
                            <p className="text-gray-500 dark:text-gray-200 ">ローンやクレジットを利用する際に、最初に支払う頭金が不要です。手軽にスタートできるため、予期せぬ支出にも対応可能です。</p>
                        </div>
                    </div>
                    <div className="flex divide-x rounded-lg border bg-gray-100 bg-opacity-25">
                        <div className="flex items-center p-2 text-indigo-500 md:p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <div className="p-4 md:p-6">
                            <h3 className="mb-2 text-lg font-semibold md:text-xl">保証人不要</h3>
                            <p className="text-gray-500 dark:text-gray-200 "> ローンやクレジットを利用する際に、他の人が保証人となる必要ありません。誰かに頼ることなく、個々のお客様が自分のペースでご利用いただけます。</p>
                        </div>
                    </div>
                    <div className="flex divide-x rounded-lg border bg-gray-100 bg-opacity-25">
                        <div className="flex items-center p-2 text-indigo-500 md:p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <div className="p-4 md:p-6">
                            <h3 className="mb-2 text-lg font-semibold md:text-xl">最大120回分割可</h3>
                            <p className="text-gray-500 dark:text-gray-200 ">最大で120回の分割払いが可能。柔軟で無理なく返済でき、お客様のライフスタイルに合わせたプランが選べます。</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center my-5 md:my-10">
                    <p className="sm:text-xl leading-10">
                        自社ローンでのご購入の流れ<br /><br />
                        ① <a href="https://www.carsensor.net/shop/kanagawa/322999001/stocklist/" className="underline text-red-500 font-semibold">在庫車両</a>から気になるお車をチェック<br />
                        ② ラインから仮審査を申込む<br />
                        ③ 簡単な電話でのヒアリング<br />
                        ④ 審査通過後お車商談<br />
                        ⑤ ご契約・納車<br />
                    </p>
                </div>

                <div className="flex justify-center align-middle w-full mb-6 overflow-hidden md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/loan002.png"} alt="coadinga1" className="w-[30dvw] lg:w-[10dvw] object-cover object-center block rounded-lg" width={1000} height={1000} />
                </div>

            </div>
        </div>

        <Footer />
    </Fragment>)
}