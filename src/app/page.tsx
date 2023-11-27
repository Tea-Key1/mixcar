"use client"

import { Fragment, Suspense, useState, useEffect } from "react"
import { ThemeProvider } from 'next-themes'
import { Canvas } from "@react-three/fiber"
import Experience from "./experience"
import Image from "next/image"
import Header from "./header"
import { motion } from "framer-motion"
import Plane from "./plane"
import Blog from "./blog"


export default function App() {
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

          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
            <Image loading="lazy" priority={false} src={"/textures/camera_car_road_mazda_travel_fun_drive_view-624222.jpg"} alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center " width={1000} height={1000} />
          </div>
        </section>
      </div>
    </div>
    <div className="h-auto w-[100dvw]">

      <Blog />

    </div>
    <div className="h-auto w-[100dvw]">
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 ">MiXのサービス</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed ">安心してお車をご購入いただけるように</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 bg-opacity-25 p-6 rounded-lg hover:translate-y-[-1dvh] duration-300">
                <Image className="rounded object-cover object-center mb-6" src={"/textures/top_img001.jpg"} alt="content" width={1000} height={1000} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">CLEANING</h3>
                <h2 className="text-lg font-medium title-font mb-4">クリーニング</h2>
                <p className="leading-relaxed text-base h-40 overflow-y-auto">当店の在庫車は全て専門スタッフが、心を込めてクリーニング、ボディ磨きを行っています。長年の経験で小傷などは磨きで綺麗に仕上げています。</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 bg-opacity-25 p-6 rounded-lg hover:translate-y-[-1dvh] duration-300">
                <Image className="rounded object-cover object-center mb-6" src={"/textures/top_img002.jpg"} alt="content" width={1000} height={1000} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUPPORT</h3>
                <h2 className="text-lg font-medium title-font mb-4">サポート</h2>
                <p className="leading-relaxed text-base h-40 overflow-y-auto">故障が起きた際は、代車を持ってレッカー車で引き取りに伺います。お車の引取りから代車の手配や修理まで一貫して行うのでお客様に面倒や負担は一切ありません。</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 bg-opacity-25 p-6 rounded-lg hover:translate-y-[-1dvh] duration-300">
                <Image className="rounded object-cover object-center mb-6" src={"/textures/top_img003.jpg"} alt="content" width={1000} height={1000} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">REPAIR</h3>
                <h2 className="text-lg font-medium title-font mb-4">修理/点検整備</h2>
                <p className="leading-relaxed text-base h-40 overflow-y-auto">法定整備だけでは中古車の状態を見極めるのに安心とは言えません。独自の点検項目を定めて、しっかりと点検整備を行っております。MiXでは安全な車を安心して買う事ができる様に、適切な点検項目を加えています。</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 bg-opacity-25 p-6 rounded-lg hover:translate-y-[-1dvh] duration-300">
                <Image className="rounded object-cover object-center mb-6" src={"/textures/top_img004.jpg"} alt="content" width={1000} height={1000} />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">INSURANCE</h3>
                <h2 className="text-lg font-medium title-font mb-4">返品保証</h2>
                <p className="leading-relaxed text-base h-40 overflow-y-auto">遠方のお客様のために到着した商品に問題があった場合は「返品」をお受付しています。詳しくはお気軽にお問い合わせください。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="h-auto w-[100dvw] flex justify-items-center">
      <Image className="w-[70dvw] lg:w-[50dvw] rounded-md object-cover object-center mb-6 mx-auto" src={"/textures/bg_img001.jpg"} alt="content" width={1000} height={1000} />
    </div>
    <div className="h-auto w-[100dvw]">
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <p className="sm:text-3xl text-2xl font-medium title-font">MiXについて</p>


          </div>
          <div className="flex flex-wrap -m-4">
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
    {/* <div className="h-auto w-[100dvw] flex justify-end">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta iste pariatur tempore, vitae nesciunt voluptate, debitis doloremque minus similique corrupti ullam modi, natus nihil accusantium dolorum fugiat placeat rem!</p>
    </div> */}
    <div className="h-auto w-[100dvw]">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap justify-around">
          <div className="w-4/5 md:w-1/2 bg-gray-100 bg-opacity-25 overflow-hidden p-5 flex justify-items-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6512.686471111687!2d139.11851700000003!3d35.297452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019a135b65a3ca5%3A0xcc435361be97bd0f!2z44CSMjUwLTAxMTcg56We5aWI5bed55yM5Y2X6Laz5p-E5biC5aGa5Y6f77yT77yQ77yU77yS4oiS77yR!5e0!3m2!1sja!2sjp!4v1701006114296!5m2!1sja!2sjp" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

          </div>
          <div className="w-4/5 md:w-1/2 bg-gray-100 bg-opacity-25 flex flex-col p-5 justify-items-center md:ml-auto">

            <div className=" shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                <tbody>
                  <tr className="border-y border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      会社名
                    </th>
                    <td className="px-6 py-4">
                      合同会社MiX
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      代表
                    </th>
                    <td className="px-6 py-4">
                      佐藤 隆二
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      所在地
                    </th>
                    <td className="px-6 py-4">
                      Black
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      所在地
                    </th>
                    <td className="px-6 py-4">
                      本 店<br />
                      〒179-0073<br />
                      東京都練馬区田柄2-42-6-504号<br />
                      営業所<br />
                      〒250-0117<br />
                      神奈川県南足柄市塚原3042-1<br />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      電話番号
                    </th>
                    <td className="px-6 py-4">
                      本 店 03-6412-8220<br />
                      営業所 0465-46-7369<br />
                      ※MiX保証に関するお問い合わせは営業所へお電話お願いします。
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      URL
                    </th>
                    <td className="px-6 py-4">
                      https://mixllc.co.jp/
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                      営業時間
                    </th>
                    <td className="px-6 py-4">
                      水曜~土曜 10:00〜18:30
                      日曜 10:00〜17:00
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
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
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex justify-items-center text-gray-900">
              <Image alt="logo" src={"/textures/mixlogo.png"} className="w-[30dvw] sm:w-[15dvw] object-cover object-center mx-auto" height={1000} width={1000} />
            </a>
            <p className="mt-2 text-sm text-gray-500">MiX保証に関するお問合せは 0465-46-7369 へお掛けください。</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <p className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ホーム</p>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <p className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">MiX保証</p>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <p className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">自社ローン</p>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <p className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">コーティング</p>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <p className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">お知らせ</p>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <p className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">お問い合わせ</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap justify-end flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">Copyright © 合同会社MiX All Rights Reserved.【掲載の記事・写真・イラストなどの無断複写・転載等を禁じます】
            </p>
          </div>
        </div>
      </footer>
    </div>
  </Fragment>)
}