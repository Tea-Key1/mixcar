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
                    <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">GUARANTEE</p>

                    <h1 className="mb-8 text-3xl font-bold sm:text-4xl md:mb-12 md:text-5xl">MiX 保証</h1>
                </div>
            </div>
        </div>

        <div className="w-[80dvw] lg:w-[60dvw] mx-auto py-6 sm:py-8 lg:py-12 bg-gray-200 dark:bg-gray-500 bg-opacity-25 dark:bg-opacity-25">
            <div className="flex flex-col justify-center max-w-screen-xl px-10 md:px-8">

                <div className="flex flex-col w-full justify-center align-middle mb-5 overflow-hidden rounded-lg md:mb-10">
                    <Image loading="lazy" priority={false} src={"/textures/insurance_img001.jpg"} alt="coadinga1" className="w-full object-cover object-center block" width={1000} height={1000} />
                    <p>※1事故の場合、当該修理箇所に含まれる板金塗装修理が保証対象になります</p>
                    <p>※2ご利用可能な回数は規定があります</p>
                </div>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">1. MiX保証とは</h2>

                <p className="mb-6 text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8">
                    Mix保証とは、お客様に安心で安全なカーライフをお届けする中古車専用の保証サービスです。<br />
                    この保証は、走行に支障が生じる（※自走不能）と判断される故障が生じた場合に適用されます。
                </p>

                <p className="mb-6 text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8">
                    ＊「走行不能」とは、ご契約のお車が動かなくなった状態、または法令等により走行してはいけない状態をいいます。
                    雪道や砂浜、ぬかるみ等でスリップして抜け出せない状態は、事故・故障 に該当しないため、サービスの対象外です。
                </p>

                <ul className="mb-6 list-inside list-disc text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8">
                    <li>保証期間は3年間です。</li>
                    <li>車両走行距離の制限は年間20,000Kmです。</li>
                    <li>お客様がご加入中の自動車保険に設定されているレンタカー日額の金額によって保証条件が変わります。</li>
                    <li>保証範囲も業界最多水準に近い約350項目にも及ぶ幅広い部位を保証します。</li>
                    <li>Mix 保証は、輸入車だけでなく、国産車も大歓迎です。</li>
                    <li>保証料金は、車種によって異なり、3年間で、輸入車の場合10万円~15万円(税別)、国産車で3万円~10万円(税別)となります。これは他の業界大手が実施している保証と比較するとかなり安価に設定してあります。</li>
                    <li>事故等での鈑金修理に関しては、条件はありますが、保証の範囲に含まれているのは、他の保証制度に類を見ない業界唯一の保証制度と言っても過言ではありません。</li>
                </ul>

                <p className="mb-6 text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8">
                    保証サービスの利用に当たっては、お客様がご加入中の自動車保険のロードサービス特約にあるレッカー及び代車(レンタカー)の利用業者としてMiXあるいはMiXが指定する事業者を利用して頂く事になります。<br />
                    保証にご加入されていても、お客様ご自身で日頃のメンテナンスや定期点検はしっかり行ってください。整備記録簿等で確認できない場合は、保証対象外になる場合がありますのでご注意ください。
                </p>

                <div className="flex justify-center align-middle w-full mb-6 overflow-hidden rounded-lg md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/coatinga2.png"} alt="coadinga1" className="w-full lg:w-[30dvw] object-cover object-center block" width={1000} height={1000} />
                </div>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">2. 保証修理の例</h2>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">3. 安心安全の納車</h2>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">4. コンピューター診断とは？</h2>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">5. お客様の声</h2>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">6. 保証の流れ</h2>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">7. 保証対象項目</h2>

                <div className="flex justify-center align-middle w-full mb-6 overflow-hidden rounded-lg md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/insurance_img003.jpg"} alt="coadinga1" className="w-full lg:w-[40dvw] object-cover object-center block" width={1000} height={1000} />
                </div>

                <h2 className="mb-2 text-xl font-semibold sm:text-2xl md:mb-4">8. MiX 保証対象地域</h2>

                <div className="flex justify-center align-middle w-full mb-6 overflow-hidden rounded-lg md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/newmap.jpg"} alt="coadinga1" className="w-full lg:w-[40dvw] object-cover object-center block" width={1000} height={1000} />
                </div>

                <p className="mb-6 text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8">
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

                <p className="mb-6 text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8">
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

                <p className="mb-6 text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8">
                    お客様にはMiXより施工証明書を発行させて頂きます。
                </p>

                <div className="flex justify-center align-middle w-full mb-6 overflow-hidden rounded-lg md:mb-8">
                    <Image loading="lazy" priority={false} src={"/textures/sekousyoumeiV4.jpg"} alt="coadinga1" className="w-full lg:w-[30dvw] object-cover object-center block" width={1000} height={1000} />
                </div>

                <p className="mb-6 text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8">
                    施工証明書はただの記念ではありません。<br />

                    コーティングが自動車保険の補償対象になっているのをご存知でしょうか？事故後に鈑金塗装すると、そこだけコーティングされていない状況となり、艶や光沢、撥水・防汚性などのバラつきが生じてしまいます。そこでコーティングも再施工することが望ましいのですが、その際、自損事故の場合は加入する車両保険、相手がいる事故の場合は相手が加入する任意保険を適用することができるのです。<br />

                    目に見えないコーティングの施工を証明してくれるのが、施工時にショップから発行される「施工証明書」なのです。
                </p>

            </div>
        </div>

        <Footer />
    </Fragment>)
}