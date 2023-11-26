"use client"
import { Fragment, Suspense } from "react"
import { ThemeProvider } from 'next-themes'
import { Canvas } from "@react-three/fiber"
import Experience from "./experience"
import Image from "next/image"
import Loading from "./loading"
import Header from "./header"
import { motion } from "framer-motion"
import Plane from "./plane"

export default function App() {
  return (<Fragment>
    <motion.div className="h-[100dvh] w-[100dvw] fixed -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1
      }}
    >
      <Suspense fallback={<Loading />}>
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
      <div className="h-[85dvh] w-full flex justify-center pb-[5dvh] px-[5dvw]">
        <section className="flex flex-col max-w-screen-xl justify-around gap-6 sm:gap-10 md:gap-16 lg:flex-row">

          <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
            <p className="mb-4 font-semibold text-indigo-500 dark:text-indigo-300 md:mb-6 text-xs sm:text-base">一人でも多くの方に、安心な中古輸入車をお届けしたい。</p>

            <h1 className="mb-8 font-bold md:mb-12 text-xs sm:text-base">従来の中古車では、高額な保証システムに入らない限り故障に対する安心を手に入れる事はできませんでした。MiXでは独自の保証システムをリーズナブルな価格で、お車の安心をお届けしています。</h1>

            <p className="mb-8 leading-relaxed  md:mb-12 lg:w-4/5 text-xs sm:text-base">保証システムをご提供するために、業界オークションから良質な中古車を仕入れ、納車前の点検整備を徹底しています。さらに内外装の仕上げをしっかりした上で、リーズナブルな価格で販売しています。</p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>

              <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a>
            </div>
          </div>


          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
            <Image src={"/textures/camera_car_road_mazda_travel_fun_drive_view-624222.jpg"} loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center" width={1000} height={1000} />
          </div>
        </section>
      </div>
    </div>
    <div className="h-auto w-[100dvw]">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 bg-opacity-25 p-6 rounded-lg">
                <Image className="h-40 rounded w-full object-cover object-center mb-6" src={"/textures/top_img001.jpg"} alt="content" width={1000} height={1000} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 bg-opacity-25 p-6 rounded-lg">
                <Image className="h-40 rounded w-full object-cover object-center mb-6" src={"/textures/top_img002.jpg"} alt="content" width={1000} height={1000} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 bg-opacity-25 p-6 rounded-lg">
                <Image className="h-40 rounded w-full object-cover object-center mb-6" src={"/textures/top_img003.jpg"} alt="content" width={1000} height={1000} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 bg-opacity-25 p-6 rounded-lg">
                <Image className="h-40 rounded w-full object-cover object-center mb-6" src={"/textures/top_img004.jpg"} alt="content" width={1000} height={1000} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="h-[100dvh] w-[100dvw]">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta iste pariatur tempore, vitae nesciunt voluptate, debitis doloremque minus similique corrupti ullam modi, natus nihil accusantium dolorum fugiat placeat rem!</p>
    </div>
  </Fragment>)
}