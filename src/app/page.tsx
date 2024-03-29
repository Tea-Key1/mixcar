"use client"

import { Fragment, Suspense, useState, useEffect } from "react"
import { ThemeProvider } from 'next-themes'
import { Canvas } from "@react-three/fiber"
import Experience from "./experience"
import Image from "next/image"
import Header from "./header"
import { motion } from "framer-motion"
import Plane from "./plane"
import List from "./list"
import Blog from "./blog"
import Footer from "./footer"


export default function App() {
  return (<Fragment>
    <motion.div className="h-[100dvh] w-[100dvw] fixed z-[-30]"
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

    <div className="h-auto w-[100dvw] ">
      <ThemeProvider attribute="class">
        <Header />
      </ThemeProvider>
      {/* <Image loading="lazy" priority={false} src={"/textures/carloan-ad.png"} alt="Photo by Fakurian Design" className="h-full md:w-[80dvw] mx-0 md:mx-auto w-full object-cover object-center block rounded-md" width={1000} height={1000} /> */}

      <div id="default-carousel" className="relative w-full " data-carousel="slide">
        <div className="relative overflow-hidden rounded-lg h-[45dvw] w-[80dvw] md:h-[36dvw] md:w-[64dvw] mx-auto my-0 mt-5 z-[-10]">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image loading="lazy" priority={false} src={"/textures/carloan-ad.png"} alt="Photo by Fakurian Design" className="relative  h-[45dvw] w-[80dvw] md:h-[36dvw] md:w-[64dvw] mx-auto my-auto object-cover object-center block rounded-md" width={1000} height={1000} />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image loading="lazy" priority={false} src={"/textures/carloan-ad3.jpeg"} alt="Photo by Fakurian Design" className="relative  h-[45dvw] w-[80dvw] md:h-[36dvw] md:w-[64dvw] mx-auto my-auto object-cover object-center block rounded-md" width={1000} height={1000} />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image loading="lazy" priority={false} src={"/textures/carloan-ad.png"} alt="Photo by Fakurian Design" className="relative  h-[45dvw] w-[80dvw] md:h-[36dvw] md:w-[64dvw] mx-auto my-auto object-cover object-center block rounded-md" width={1000} height={1000} />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image loading="lazy" priority={false} src={"/textures/carloan-ad3.jpeg"} alt="Photo by Fakurian Design" className="relative  h-[45dvw] w-[80dvw] md:h-[36dvw] md:w-[64dvw] mx-auto my-auto object-cover object-center block rounded-md" width={1000} height={1000} />
          </div>
          {/* <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <Image loading="lazy" priority={false} src={"/textures/carloan-ad.png"} alt="Photo by Fakurian Design" className="relative  h-[45dvw] w-[80dvw] md:h-[36dvw] md:w-[64dvw] mx-auto my-auto object-cover object-center block rounded-md" width={1000} height={1000} />
          </div> */}
        </div>
        <div className="absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          {/* <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> */}
        </div>
        <button type="button" className="absolute top-0 start-[10dvw] flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none " data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 dark:text-white text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-[10dvw] flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none " data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 dark:text-white text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

    </div>

    {/* <div className="relative h-auto w-[100vw] mt-5">
      <div className="relative h-full md:w-[60dvw] mx-0 md:mx-auto w-full">

        <Image loading="lazy" priority={false} src={"/textures/carloan-ad2.jpeg"} alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center block rounded-md" width={1000} height={1000} />
        <div className="absolute bottom-[1dvh] right-[6dvw] px-[5dvw] py-[3dvh] md:py-[1dvh] lg:py-[6dvh]">
          <svg className="animate-bounce w-6 h-6 ...">
          </svg>
          <a href="/loan">
            <div className="w-full md:w-[20dvw] rounded-md border-4 bg-white text-xl md:text-3xl lg:text-5xl md:py-2 text-center border-cyan-500 text-slate-900 shadow-md  hover:-translate-y-1.5 duration-100">詳しく見る</div>
          </a>
        </div>
      </div>
    </div> */}


    <div className="h-auto w-[100dvw]">

      <motion.div className="h-auto w-full flex justify-center p-[5dvw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section className="flex flex-col max-w-screen-xl justify-around gap-6 sm:gap-10 md:gap-16 lg:flex-row">

          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <p className="mb-4 font-semibold text-cyan-500 dark:text-cyan-200 md:mb-6 text-xs sm:text-lg">一人でも多くの方に、安心な中古輸入車をお届けしたい。</p>

            <h1 className="mb-8 font-bold md:mb-12 text-xs sm:text-base">従来の中古車では、高額な保証システムに入らない限り故障に対する安心を手に入れる事はできませんでした。MiXでは独自の保証システムをリーズナブルな価格で、お車の安心をお届けしています。</h1>

            <p className="mb-8 leading-relaxed  md:mb-12 lg:w-4/5 text-xs sm:text-base">保証システムをご提供するために、業界オークションから良質な中古車を仕入れ、納車前の点検整備を徹底しています。さらに内外装の仕上げをしっかりした上で、リーズナブルな価格で販売しています。</p>



            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a href="https://www.carsensor.net/shop/kanagawa/322999001/stocklist/" className="inline-block rounded-lg bg-cyan-500 hover:bg-cyan-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-cyan-300 transition duration-100 focus-visible:ring md:text-base hover:translate-y-[-0.3go5dvh] hover:shadow-lg">中古車を見る</a>

              <a href="/guarantee" className="inline-block rounded-lg bg-gray-200 hover:bg-gray-300 px-8 py-3 text-center text-sm font-semibold text-gray-700 outline-none ring-cyan-300 transition duration-100 focus-visible:ring md:text-base hover:translate-y-[-0.3go5dvh] hover:shadow-lg">MiX保証を見る</a>
            </div>
          </div>

          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
            <Image loading="lazy" priority={false} src={"/textures/camera_car_road_mazda_travel_fun_drive_view-624222.jpg"} alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center block" width={1000} height={1000} />

          </div>
          {/* <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12" >
            <Image loading="lazy" priority={false} src={"/textures/pexels-kaboompics-com-6003.jpg"} alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center " width={1000} height={1000} />
          </div> */}

        </section>
      </motion.div>
    </div>

    <div className="h-auto w-[100dvw]">
      <List />

    </div>



    <div className="h-auto w-[100dvw] my-5">

      <Blog />

    </div>
    <div className="h-auto w-[100dvw]">
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 ">MiXのサービス</h1>
              <div className="h-1 w-20 bg-cyan-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed ">安心してお車をご購入いただけるように</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <motion.div className="xl:w-1/4 md:w-1/2 p-4"
              initial={{ opacity: 0, translateY: -50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 0 }}
            >
              <div className="bg-gray-100 bg-opacity-25 p-6 rounded-lg hover:translate-y-[-1dvh] duration-300">
                <Image className="rounded object-cover object-center mb-6" src={"/textures/top_img001.jpg"} alt="content" width={1000} height={1000} />
                <h3 className="tracking-widest text-cyan-500 dark:text-cyan-200 text-xs font-medium title-font">CLEANING</h3>
                <h2 className="text-lg font-medium title-font mb-4">クリーニング</h2>
                <p className="leading-relaxed text-base h-40 overflow-y-auto">当店の在庫車は全て専門スタッフが、心を込めてクリーニング、ボディ磨きを行っています。長年の経験で小傷などは磨きで綺麗に仕上げています。</p>
              </div>
            </motion.div>
            <motion.div className="xl:w-1/4 md:w-1/2 p-4"
              initial={{ opacity: 0, translateY: -50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <div className="bg-gray-100 bg-opacity-25 p-6 rounded-lg hover:translate-y-[-1dvh] duration-300">
                <Image className="rounded object-cover object-center mb-6" src={"/textures/top_img002.jpg"} alt="content" width={1000} height={1000} />
                <h3 className="tracking-widest text-cyan-500 dark:text-cyan-200 text-xs font-medium title-font">SUPPORT</h3>
                <h2 className="text-lg font-medium title-font mb-4">サポート</h2>
                <p className="leading-relaxed text-base h-40 overflow-y-auto">故障が起きた際は、代車を持ってレッカー車で引き取りに伺います。お車の引取りから代車の手配や修理まで一貫して行うのでお客様に面倒や負担は一切ありません。</p>
              </div>
            </motion.div>
            <motion.div className="xl:w-1/4 md:w-1/2 p-4"
              initial={{ opacity: 0, translateY: -50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="bg-gray-100 bg-opacity-25 p-6 rounded-lg hover:translate-y-[-1dvh] duration-300">
                <Image className="rounded object-cover object-center mb-6" src={"/textures/top_img003.jpg"} alt="content" width={1000} height={1000} />
                <h3 className="tracking-widest text-cyan-500 dark:text-cyan-200 text-xs font-medium title-font">REPAIR</h3>
                <h2 className="text-lg font-medium title-font mb-4">修理/点検整備</h2>
                <p className="leading-relaxed text-base h-40 overflow-y-auto">法定整備だけでは中古車の状態を見極めるのに安心とは言えません。独自の点検項目を定めて、しっかりと点検整備を行っております。MiXでは安全な車を安心して買う事ができる様に、適切な点検項目を加えています。</p>
              </div>
            </motion.div>
            <motion.div className="xl:w-1/4 md:w-1/2 p-4"
              initial={{ opacity: 0, translateY: -50 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="bg-gray-100 bg-opacity-25 p-6 rounded-lg hover:translate-y-[-1dvh] duration-300">
                <Image className="rounded object-cover object-center mb-6" src={"/textures/top_img004.jpg"} alt="content" width={1000} height={1000} />
                <h3 className="tracking-widest text-cyan-500 dark:text-cyan-200 text-xs font-medium title-font">INSURANCE</h3>
                <h2 className="text-lg font-medium title-font mb-4">返品保証</h2>
                <p className="leading-relaxed text-base h-40 overflow-y-auto">遠方のお客様のために到着した商品に問題があった場合は「返品」をお受付しています。詳しくはお気軽にお問い合わせください。</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    <div className="h-auto w-[100dvw] flex justify-items-center">
      <Image className="w-[70dvw] lg:w-[50dvw] rounded-md object-cover object-center mb-6 mx-auto" src={"/textures/bg_img001.jpg"} alt="content" width={1000} height={1000} />
    </div>
    <div className="h-auto w-[100dvw]">
      <section>
        <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="w-full mx-auto">
              <p className="sm:text-3xl text-2xl font-medium title-font mb-5">お客様の声</p>
              <ol>
                <li className="sm:text-md text-xl mb-2 p-5 bg-red-300 bg-opacity-25 rounded-md">お客様一人目の声
                  <Image className="rounded object-cover object-center mb-6" src={"/textures/comment001.jpg"} alt="content" width={1000} height={1000} />
                </li>
                <li className="sm:text-md text-xl mb-2 p-5 bg-red-300 bg-opacity-25 rounded-md">お客様二人目の声
                  <Image className="rounded object-cover object-center mb-6" src={"/textures/comment002.jpg"} alt="content" width={1000} height={1000} />
                </li>
                <li className="sm:text-md text-xl mb-2 p-5 bg-red-300 bg-opacity-25 rounded-md">お客様三人目の声
                  <Image className="rounded object-cover object-center mb-6" src={"/textures/comment003.jpg"} alt="content" width={1000} height={1000} />
                </li>
                <li className="sm:text-md text-xl mb-2 p-5 bg-red-300 bg-opacity-25 rounded-md">お客様四人目の声
                  <Image className="rounded object-cover object-center mb-6" src={"/textures/comment004.jpg"} alt="content" width={1000} height={1000} />
                </li>
                <li className="sm:text-md text-xl mb-2 p-5 bg-red-300 bg-opacity-25 rounded-md">お客様五人目の声
                  <Image className="rounded object-cover object-center mb-6" src={"/textures/comment005.jpg"} alt="content" width={1000} height={1000} />
                </li>
              </ol>
              <p className="sm:text-md text-xl font-medium title-font my-2">◆MiX保証を経験されたお客様から頂戴した口コミの一部を掲載させて頂いています。その他にも多数の口コミを頂戴しており、詳しくはカーセンサーの口コミをご確認ください。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="h-auto w-[100dvw]">
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <div className="sm:text-3xl text-2xl font-medium title-font">
              <span>MiXについて</span>
              <div className="border-b-4 rounded border-cyan-500 mx-auto w-[10dvw] mt-2"></div>
            </div>
            <div className=" py-6 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                <h1 className="mb-4 text-center text-2xl font-bold  sm:text-3xl md:mb-6">代表挨拶</h1>

                <p className="mb-6 text-left sm:text-lg md:mb-2">
                  私たちMiXは、お客様に出来る限り満足していただくと言う「おもてなし」の気持ちを基本として「安さ」「高品質」「スピード」「安心」を徹底的に追及しています。ご購入に際しては、ネットに掲載されている車両以外でもお客様の希望に沿った車両を一緒にお探しさせて頂いたり、お客様に安心したカーライフを送っていただくために、いかなる車種でも加入していただく事ができるオリジナルの保証システム「MiX保証」を提供させて頂いています。
                </p>
                <p className="mb-6 text-left sm:text-lg md:mb-2 font-bold">
                  MiX保証について
                </p>
                <p className="mb-6 text-left sm:text-lg md:mb-2">
                  「中古車ですから、故障するのは仕方ありません。」<br />よく聞く言葉です。その通りかも知れませんが、販売した後の故障は、購入した側が嫌な思いをするだけでなく、販売した側も何とも申し訳ない気持ちになるのも事実です。この保証システムを構築、販売する以前は、我々も幾度となくそう言う思いをしてきました。
                  <br />
                  車両販売後も双方が気持ちよい関係を続けられるのにはどうしたら良いのか?試行錯誤を繰り返し、作り上げられてきたのが、「MiX保証」です。今後も改良を積み重ね、更なる内容の充実を目指していきます。
                </p>
                <p className="mb-6 text-left sm:text-lg md:mb-8 font-bold">
                  代表 佐藤 隆二
                </p>

                <h2 className="mb-4 text-center text-2xl font-bold  sm:text-3xl md:mb-6">経営理念</h2>

                <ul className="mb-6 list-inside list-disc text-left text-cyan-500 dark:text-cyan-200 sm:text-lg md:mb-8">
                  <motion.li className=" text-md font-semibold"
                    initial={{ opacity: 0, translateX: -10 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1 }}
                  >Mission ミッション(社会的使命)</motion.li>
                  <p className=" text-gray-500 dark:text-white text-left sm:text-lg md:mb-2">
                    仲間（ファミリー）の絆を大切にし、コミュニティーの力で、新しい時代を切り開く一大経済圏を創出する。
                  </p>
                  <motion.li className=" text-md font-semibold"
                    initial={{ opacity: 0, translateX: -10 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1 }}
                  >Vision ビジョン(未来像)</motion.li>
                  <p className=" text-gray-500 dark:text-white text-left sm:text-lg md:mb-2">
                    世界の全ての人々の豊かさと健康と幸せを実現する
                  </p>
                  <motion.li className=" text-md font-semibold"
                    initial={{ opacity: 0, translateX: -10 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1 }}
                  >Values バリュー(価値観・行動指針)</motion.li>
                  <p className=" text-gray-500 dark:text-white text-left sm:text-lg md:mb-2">
                    お客様を大事にする。<br />
                    常に感謝の気持ちを忘れない。<br />
                    倫理、道徳を重んじる。<br />
                    公平、公正であり続ける。<br />
                    常に最善を尽くす。<br />
                    常識と過去にとらわれない。<br />
                    工夫と改善を怠らない。<br />
                    忘れをなくす。<br />
                  </p>
                  <motion.li className=" text-md font-semibold"
                    initial={{ opacity: 0, translateX: -10 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1 }}
                  >Strategy ビジョン実現のための戦略</motion.li>
                  <p className=" text-gray-500 dark:text-white text-left sm:text-lg md:mb-2">
                    コミュニティーの基礎となる会員システムを構築する。<br />
                    会員同士の共助の仕組みを構築する。<br />
                    会員同士の経済的交流の仕組みを構築する。<br />
                    オンラインとリアルを融合する。<br />
                  </p>
                </ul>

              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center -m-4">
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className=" bg-gray-100 bg-opacity-25 px-8 md:pt-16 md:pb-24 rounded-lg overflow-hidden justify-items-center relative hover:translate-y-[-1dvh] duration-300">
                <Image className="w-[80dvw] md:w-[30dvw] rounded object-cover object-center mb-6" src={"/textures/top_img005.jpg"} alt="content" width={1000} height={1000} />
              </div>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className=" bg-gray-100 bg-opacity-25 px-8 md:pt-16 md:pb-24 rounded-lg overflow-hidden justify-items-center relative hover:translate-y-[-1dvh] duration-300">
                <Image className="w-[80dvw] md:w-[30dvw] rounded object-cover object-center mb-6" src={"/textures/top_img006.jpg"} alt="content" width={1000} height={1000} />
              </div>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className=" bg-gray-100 bg-opacity-25 px-8 md:pt-16 md:pb-24 rounded-lg overflow-hidden justify-items-center relative hover:translate-y-[-1dvh] duration-300">
                <Image className="w-[80dvw] md:w-[30dvw] rounded object-cover object-center mb-6" src={"/textures/top_img007.jpg"} alt="content" width={1000} height={1000} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="h-auto w-full flex flex-col justify-center items-center">
      <div className="sm:text-3xl text-2xl font-medium title-font mb-5 flex flex-col items-center">
        <div className="inline-block">提携業者</div>
        <div className="border-b-4 rounded border-red-500 mx-auto w-[10dvw] mt-2"></div>
      </div>
      <a href="https://imai5556.com/"><span className="underline text-lg text-red-600 font-bold">輸入車修理のエキスパート</span></a>
    </div>

    <div className="h-auto w-[100dvw] flex flex-col justify-center items-center">
      <section className="w-[80dvw] py-32 mx-auto">
        <div className="w-full container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="w-full mb-12 text-2xl font-bold text-center sm:text-3xl">よくある質問</h2>
          <div className="w-full flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 dark:divide-gray-100">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">MiX保証は何度でも受けられるの?</summary>
              <div className="px-4 pb-4 text-xs sm:text-base">
                <p>年1回受けることができます。但し、お客様ご自身で日頃のメンテナンスや定期点検を行っていただくことが条件です。メンテナンスをしていても発生してしまう故障が保証の対象になります。</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">本当にMiX保証なんか必要なの?</summary>
              <div className="px-4 pb-4">
                <p>中古車、特に輸入車は残念ながら故障の頻度は高いです。強制とは言いませんが、絶対にMiX保証には入っておいた方がお得です。</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">故障した時には最初にどうすればいいの？</summary>
              <div className="px-4 pb-4">
                <div>まずは、下記記載のカスタマーサポート(修理受付窓口)まで電話またはLINEにてご連絡ください。<br />
                  <span className="font-bold">TEL 080-8150-0716</span>
                  <Image className="object-cover object-center my-2 w-[30dvw]" src={"/textures/qecd-150x150.jpg"} alt="content" width={1000} height={1000} />
                  状況に応じて担当者が丁寧にご説明いたします。緊急の場合で、当社休業日あるいは営業時間外のためカスタマーサポートに繋がらない場合は、お客様がご加入されている自動車保険会社の事故・故障連絡先へお電話していただき、お車の『一時預かり』を依頼してください。翌日、カスタマーサポートへご連絡をお願いします。
                </div>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">保証が適用されない保険もあるの?</summary>
              <div className="px-4 pb-4">
                <p>申し訳ありませんが、お客様が、レッカー会社、修理工場、レンタカー会社を選べない保険では保証は適用されません。</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">事故の場合は使えないの?</summary>
              <div className="px-4 pb-4">
                <p>走行不能な状態が対象になります。事前に担当者にご相談ください。</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">走行不能状態とは?</summary>
              <div className="px-4 pb-4">
                <p>お車が動かなくなった状態、または法令等により走行してはいけない状態をいいます。</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">板金修理の条件は?</summary>
              <div className="px-4 pb-4">
                <p>お客様がご加入中の自動車保険に設定されているレンタカー日額が２万円の場合で、かつ走行に支障がある事故や故障で生じた板金修理が対象です。但し、金額の上限がありますので、程度によっては全てが保証の対象にならない場合があります。その場合は担当者よりご案内させていただきます。</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">修理工場が遠いのが不便にならないかな?</summary>
              <div className="px-4 pb-4">
                <p>レッカーにレンタカーを積んで、お客様の車両保管場所までお車を引き取りいきますのでご安心ください。修理期間中は、貸出しするレンタカーをご利用ください。</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">保証期間中に車を買い替えたらどうなるの?</summary>
              <div className="px-4 pb-4">
                <p>保証期間内であれば継続可能です。また、他店で買い替えされた場合でも、条件はありますが継続可能です。</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">他店で車を購入したけど、MiX保証に入れるの?</summary>
              <div className="px-4 pb-4">
                <p>お車の状態など点検させていただくなど、条件はありますが、ご加入可能です。</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">家族の車も保証に入れるの?</summary>
              <div className="px-4 pb-4">
                <p>ご家族のお車でも、ご自身のセカンドカーでも、条件はありますがMiX保証にご加入可能です。</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">車を手放すことにしたけど、買い取ってもらえるの?</summary>
              <div className="px-4 pb-4">
                <p>MiXでは他の買取店の見積金額よりも高く買い取らせて頂いています。</p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">消耗品やナビなどは保証されるの?</summary>
              <div className="px-4 pb-4">
                <p>対象外です。MiX保証では、走行に支障がある故障、事故の修理が対象です。</p>
              </div>
            </details>
          </div>
        </div>
      </section>

    </div>
    {/* <div className="h-auto w-[100dvw] flex justify-end">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta iste pariatur tempore, vitae nesciunt voluptate, debitis doloremque minus similique corrupti ullam modi, natus nihil accusantium dolorum fugiat placeat rem!</p>
    </div> */}
    <div className="h-auto w-[100dvw]">
      <section className="body-font relative">
        <div className="container px-0 md:px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap justify-around">
          <div className="w-[70dvw] md:w-[50dvw]  bg-opacity-25 overflow-hidden p-5 flex justify-items-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6512.686471111687!2d139.11851700000003!3d35.297452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019a135b65a3ca5%3A0xcc435361be97bd0f!2z44CSMjUwLTAxMTcg56We5aWI5bed55yM5Y2X6Laz5p-E5biC5aGa5Y6f77yT77yQ77yU77yS4oiS77yR!5e0!3m2!1sja!2sjp!4v1701006114296!5m2!1sja!2sjp" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

          </div>
          <div className="w-full md:w-[50dvw] flex flex-col p-5 justify-items-center md:ml-auto">

            <div className="shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right ">

                <tbody className="w-full flex-col">
                  <tr className="border-y dark:border-gray-200 border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                      会社名
                    </th>
                    <td className="px-6 py-4 flex-wrap">
                      合同会社MiX
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-200 border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                      代表
                    </th>
                    <td className="px-6 py-4">
                      佐藤 隆二
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-200 border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                      所在地
                    </th>
                    <td className="px-6 py-4 flex-wrap">
                      本 店<br />
                      〒179-0073<br />
                      東京都練馬区田柄2-42-6-504号<br />
                      営業所<br />
                      〒250-0117<br />
                      神奈川県南足柄市塚原3042-1<br />
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-200 border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                      電話番号
                    </th>
                    <td className="px-6 py-4">
                      本 店 03-6412-8220<br />
                      営業所 0465-46-7369<br />
                      ※MiX保証に関するお問い合わせは営業所へお電話お願いします。
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-200 border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                      URL
                    </th>
                    <td className="px-6 py-4">
                      https://mixllc.co.jp/
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-200 border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                      営業時間
                    </th>
                    <td className="px-6 py-4">
                      水曜~土曜 10:00〜18:30
                      日曜 10:00〜17:00
                    </td>
                  </tr>
                  <tr className="border-b dark:border-gray-200 border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                      定休日
                    </th>
                    <td className="px-6 py-4">
                      月曜日 火曜日
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>
    </div>
    <div className="h-auto w-[100dvw]">
      <Footer />
    </div>
  </Fragment>)
}