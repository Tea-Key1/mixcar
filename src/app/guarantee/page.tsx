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
                    <p className="mb-4 font-semibold text-cyan-500 md:mb-6 md:text-lg xl:text-xl">CHARACTERISTIC</p>

                    <h1 className="mb-8 text-3xl font-bold sm:text-4xl md:mb-12 md:text-5xl">MiX 保証</h1>
                </div>
            </div>
        </div>

        <div className="w-[80dvw] lg:w-[60dvw] mx-auto py-6 sm:py-8 lg:py-12 bg-gray-200 dark:bg-gray-500 bg-opacity-25 dark:bg-opacity-25">
            <div className="flex flex-col justify-center max-w-screen-xl px-10 md:px-8">

                <div className="flex flex-col w-full justify-center items-center align-middle mb-5 overflow-hidden rounded-lg md:mb-10">
                    <Image loading="lazy" priority={false} src={"/textures/insurance_img001.jpg"} alt="coadinga1" className="w-full object-cover object-center block" width={1000} height={1000} />
                    <p className="w-full text-left">※1事故の場合、当該修理箇所に含まれる板金塗装修理が保証対象になります</p>
                    <p className="w-full text-left">※2ご利用可能な回数は規定があります</p>
                </div>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">1. MiX保証とは</h2>

                <p className="mb-6 text-gray-700 dark:text-gray-200 sm:text-lg md:mb-8">
                    Mix保証とは、お客様に安心で安全なカーライフをお届けする中古車専用の保証サービスです。<br />
                    この保証は、走行に支障が生じる（※自走不能）と判断される故障が生じた場合に適用されます。
                </p>

                <p className="mb-6 text-gray-700 dark:text-gray-200 text-sm md:mb-8">
                    ＊「走行不能」とは、ご契約のお車が動かなくなった状態、または法令等により走行してはいけない状態をいいます。
                    雪道や砂浜、ぬかるみ等でスリップして抜け出せない状態は、事故・故障 に該当しないため、サービスの対象外です。
                </p>

                <ul className="mb-6 list-inside list-disc text-gray-700 dark:text-gray-200 sm:text-lg md:mb-8">
                    <li className="mb-4">保証期間は3年間です。</li>
                    <li className="mb-4">車両走行距離の制限は年間20,000Kmです。</li>
                    <li className="mb-4">お客様がご加入中の自動車保険に設定されているレンタカー日額の金額によって保証条件が変わります。</li>
                    <li className="mb-4">保証範囲も業界最多水準に近い約350項目にも及ぶ幅広い部位を保証します。</li>
                    <li className="mb-4">Mix 保証は、輸入車だけでなく、国産車も大歓迎です。</li>
                    <li className="mb-4">保証料金は、車種によって異なり、3年間で、輸入車の場合10万円~15万円(税別)、国産車で3万円~10万円(税別)となります。これは他の業界大手が実施している保証と比較するとかなり安価に設定してあります。</li>
                    <li className="mb-4">事故等での鈑金修理に関しては、条件はありますが、保証の範囲に含まれているのは、他の保証制度に類を見ない業界唯一の保証制度と言っても過言ではありません。</li>
                </ul>

                <p className="mb-6 text-gray-700 dark:text-gray-200 sm:text-lg md:mb-8 leading-10">
                    保証サービスの利用に当たっては、お客様がご加入中の自動車保険のロードサービス特約にあるレッカー及び代車(レンタカー)の利用業者としてMiXあるいはMiXが指定する事業者を利用して頂く事になります。<br />
                    保証にご加入されていても、お客様ご自身で日頃のメンテナンスや定期点検はしっかり行ってください。整備記録簿等で確認できない場合は、保証対象外になる場合がありますのでご注意ください。
                </p>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">2. 保証修理の例</h2>

                <div className="relative flex flex-col items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                    <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
                        <div className="p-6 w-full border-2 border-cyan-500 flex flex-col items-center">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-cyan-600 dark:text-cyan-200 rounded-full bg-blue-50 bg-opacity-25">
                                <Image className="w-10 h-10" alt="issue" src={"/textures/issue001.svg"} width={1} height={1} />
                            </div>
                            <div className="mx-auto h-20 text-md font-semibold ">
                                <p className="text-center">エンジン異音</p>
                            </div>
                            <div className="mx-auto h-30 flex mb-5">
                                <p className="text-base leading-relaxed text-center"><span className="underline text-cyan-600 dark:text-cyan-200">修理内容<br /></span>[BMW320]<br />エンジン修理</p>
                            </div>
                            <div className="mx-auto h-30 flex">
                                <p className="text-base leading-relaxed text-center"><span className="underline text-cyan-600 dark:text-cyan-200">修理代金<br /></span>500,000円</p>
                            </div>
                        </div>
                        <div className="p-6 w-full border-2 border-cyan-500 flex flex-col items-center">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-cyan-600 dark:text-cyan-200 rounded-full bg-blue-50 bg-opacity-25">
                                <Image className="w-10 h-10" alt="issue" src={"/textures/issue002.svg"} width={1} height={1} />
                            </div>
                            <div className="mx-auto h-20 text-md font-semibold ">
                                <p className="text-center">エンジン警告灯<br />アイドリング不安定</p>
                            </div>
                            <div className="mx-auto h-30 flex mb-5">
                                <p className="text-base leading-relaxed text-center"><span className="underline text-cyan-600 dark:text-cyan-200">修理内容<br /></span>[BMW330]<br />インジェクター交換<br />Noxセンサー交換</p>
                            </div>
                            <div className="mx-auto h-30 flex">
                                <p className="text-base leading-relaxed text-center"><span className="underline text-cyan-600 dark:text-cyan-200">修理代金<br /></span>330,000円</p>
                            </div>
                        </div>
                        <div className="p-6 w-full border-2 border-cyan-500 flex flex-col items-center">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-cyan-600 dark:text-cyan-200 rounded-full bg-blue-50 bg-opacity-25">
                                <Image className="w-10 h-10" alt="issue" src={"/textures/issue003.svg"} width={1} height={1} />
                            </div>
                            <div className="mx-auto h-20 text-md font-semibold ">
                                <p className="text-center">オイル漏れ</p>
                            </div>
                            <div className="mx-auto h-30 flex mb-5">
                                <p className="text-base leading-relaxed text-center"><span className="underline text-cyan-600 dark:text-cyan-200">修理内容<br /></span>[ベンツ]<br />エンジン修理</p>
                            </div>
                            <div className="mx-auto flex">
                                <p className="text-base leading-relaxed text-center"><span className="underline text-cyan-600 dark:text-cyan-200">修理代金<br /></span>450,000円</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center text-center items-center px-5 py-8 max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex flex-col flex-wrap w-full max-w-3xl prose text-center prose-blue">
                            <p>MiX保証に加入した場合 <span className="text-2xl md:text-4xl text-red-500">修理代0円</span></p>
                            <div className="border-t-2"><p className="">※上記修理代の例はディーラー見積概算金額です。</p></div>
                        </div>
                    </div>
                </div>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">3. 安心安全の納車</h2>

                <p className="my-4 text-gray-700 dark:text-gray-200 sm:text-lg md:mb-8">
                    入庫後、納車前の2回の「コンピューター診断」で、ベストな状態でお客様に納車できるよう努力させて頂いています。
                </p>

                <section className="body-font">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex items-center w-full lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div className="md:w-[30dvw] lg:w-[20dvw] w-full sm:mr-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                                <Image alt="computer001" className="w-full" src={"/textures/computer001.png"} width={1000} height={1000} />
                            </div>
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-lg title-font font-medium mb-2">入庫後コンピューター診断</h2>
                                <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-base">車両が整備施設に入庫した際に、コンピューターを使用して車両の各種データやセンサーからの情報を読み取ります。</p>

                            </div>
                        </div>
                        <div className="flex items-center w-full lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-lg title-font font-medium mb-2">修理</h2>
                                <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-base">入庫後のコンピューター診断で特定された不具合や異常箇所に対して、必要な修理や調整を行います。</p>

                            </div>
                            <div className="md:w-[30dvw] lg:w-[20dvw] w-full sm:order-none order-first sm:ml-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                                <Image alt="computer002" className="w-full" src={"/textures/computer002.png"} width={1000} height={1000} />
                            </div>
                        </div>
                        <div className="flex items-center w-full lg:w-4/5 mx-auto sm:flex-row flex-col">
                            <div className="md:w-[30dvw] lg:w-[10dvw] w-full sm:mr-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                                <Image alt="computer003" className="w-full" src={"/textures/computer003.jpg"} width={1000} height={1000} />
                            </div>
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-lg title-font font-medium mb-2">納車前コンピューター診断</h2>
                                <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-base">確認作業を通じて、修理や整備が正しく実施されたかどうかを確認します。納車前の最終チェックとして、可能な限りの問題を事前に発見し、お客様に高品質なサービスを提供します。</p>

                            </div>
                        </div>

                    </div>
                </section>

                <p className="my-10 md:mb-20 text-gray-700 dark:text-gray-200 sm:text-lg">
                    コンピューター診断の結果表は、MiX保証書・会員規約と一緒にコンピューター診断の結果表を納車時にお客様に提供いたします。
                </p>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">4. コンピューター診断とは？</h2>

                <p className="mb-6 text-gray-700 dark:text-gray-200 text-sm md:mb-8">
                    熟練の診断修理のプロが※OBD診断判定システム(世界３０メーカー以上解析可能)を利用し、診断・リセット・修理が出来るようにする。<br /><br />
                    ※OBDとはオン・ボード・ダイアグノーシス(On-board diagnostics)の頭文字を取った世界基準の略称で、西暦2000年以降の世界各地で生産されている自動車の95%以上に装着され、自動車各部エンジンからヘッドライトに至るまで取り付けられたECU(Electrical Control Unit)にプログラミングされている自己診断機能である。
                </p>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">5. お客様の声</h2>

                <section className=" body-font overflow-hidden">
                    <div className="container px-5 py-5 mx-auto border-b-2 border-cyan-300">
                        <div className="w-full mx-auto flex flex-wrap">
                            <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">

                                <p className="leading-relaxed mb-4">
                                    MiXさんで、BMW320を購入して2週間ほどたったある雨の日。
                                    対向車線を走る車が急にこちらの車線にはみ出してきて、とっさにハンドルを左に切ったところ、車体の左前をぶつけてしまいました。
                                    ディーラーへ相談へしたら50万円を超える見積もりが…。
                                    MiXさんに相談したら、保証サービスを受けることができるとの事に！
                                    早速、レッカーで引き取りをしてもらいレンタカーの用意までしてもらいました。
                                    保証修理の上限を超えるため、担当者から詳しく説明を受け、超えた部分は自己負担で修理していただきました。
                                    本当にこの保証サービスに入っていて良かったと思います。
                                    私は実際に体験したことだから言えますが本当におすすめです！
                                </p>
                                <h2 className="text-sm title-font tracking-widest">お客様の声1</h2>
                            </div>
                            <div className="w-full flex justify-center">
                                <Image loading="lazy" priority={false} alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded-md" src={"/textures/client001.jpg"} width={1000} height={1000} />
                            </div>
                        </div>
                    </div>
                    <div className="container px-5 py-5 mx-auto">
                        <div className="w-full mx-auto flex flex-wrap">
                            <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">

                                <p className="leading-relaxed mb-4">
                                    【BMW3シリーズご購入の御殿場市在住のR.Aさんより頂きました。】<br /><br />

                                    購入後、NOXセンサーの不良がでましたが MiXさんの保証で修理を行って頂きました。
                                    社長様をはじめ、スタッフの方々には大変感謝しております。
                                    周りの知人にもMiXさんで車を購入することを勧めております。
                                    今後とも宜しくお願い致します！
                                </p>
                                <h2 className="text-sm title-font tracking-widest">お客様の声2</h2>
                            </div>
                            <div className="w-full flex justify-center">
                                <Image loading="lazy" priority={false} alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded-md" src={"/textures/client002.jpg"} width={1000} height={1000} />
                            </div>
                        </div>
                    </div>
                </section>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">6. 保証の流れ</h2>

                <div className="flex justify-center align-middle w-full mb-6 overflow-hidden rounded-lg md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/insurance_img002.jpg"} alt="coadinga1" className="w-full lg:w-[40dvw] object-cover object-center block" width={1000} height={1000} />
                </div>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">7. 保証対象項目</h2>

                <div className="flex justify-center align-middle w-full mb-6 overflow-hidden rounded-lg md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/insurance_img003.jpg"} alt="coadinga1" className="w-full lg:w-[40dvw] object-cover object-center block" width={1000} height={1000} />
                </div>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">8. MiX 保証対象地域</h2>

                <p className="mb-6 text-gray-700 dark:text-gray-200 sm:text-lg md:mb-8">
                    MiX保証の対象地域は次の色が付いている都道府県です。北海道、九州、東北、北陸、離島は対象地域外になります。
                </p>

                <div className="flex flex-col justify-center items-center align-middle w-full mb-6 overflow-hidden rounded-lg md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/newmap.jpg"} alt="coadinga1" className="w-full lg:w-[40dvw] object-cover object-center block" width={1000} height={1000} />
                    <p className="w-full text-left">※保証の対象地域から、上記の対象地域外へ引っ越された場合、保証サービスをご利用できなくなりますので、予めご了承ください。</p>
                    <p className="w-full text-left">※今後対象地域を拡大していく予定です。</p>
                </div>

            </div>
        </div>

        <Footer />
    </Fragment>)
}