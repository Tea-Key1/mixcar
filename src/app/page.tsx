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
import Footer from "./footer"


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
            <Image loading="lazy" priority={false} src={"/textures/camera_car_road_mazda_travel_fun_drive_view-624222.jpg"} alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center block" width={1000} height={1000} />

          </div>
          {/* <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12" >
            <Image loading="lazy" priority={false} src={"/textures/pexels-kaboompics-com-6003.jpg"} alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center " width={1000} height={1000} />
          </div> */}

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
              <div className="border-b-4 rounded border-red-500 mx-auto w-[10dvw] mt-2"></div>
            </div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">代表挨拶</h1>

                <p className="mb-6 text-gray-500 text-left sm:text-lg md:mb-2">
                  私たちMiXは、お客様に出来る限り満足していただくと言う「おもてなし」の気持ちを基本として「安さ」「高品質」「スピード」「安心」を徹底的に追及しています。ご購入に際しては、ネットに掲載されている車両以外でもお客様の希望に沿った車両を一緒にお探しさせて頂いたり、お客様に安心したカーライフを送っていただくために、いかなる車種でも加入していただく事ができるオリジナルの保証システム「MiX保証」を提供させて頂いています。
                </p>
                <p className="mb-6 text-gray-500 text-left sm:text-lg md:mb-2 font-bold">
                  MiX保証について
                </p>
                <p className="mb-6 text-gray-500 text-left sm:text-lg md:mb-2">
                  「中古車ですから、故障するのは仕方ありません。」<br />よく聞く言葉です。その通りかも知れませんが、販売した後の故障は、購入した側が嫌な思いをするだけでなく、販売した側も何とも申し訳ない気持ちになるのも事実です。この保証システムを構築、販売する以前は、我々も幾度となくそう言う思いをしてきました。
                  <br />
                  車両販売後も双方が気持ちよい関係を続けられるのにはどうしたら良いのか?試行錯誤を繰り返し、作り上げられてきたのが、「MiX保証」です。今後も改良を積み重ね、更なる内容の充実を目指していきます。
                </p>
                <p className="mb-6 text-gray-500 text-left sm:text-lg md:mb-8 font-bold">
                  代表 佐藤 隆二
                </p>

                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">経営理念</h2>

                <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
                  <li>This is a section of some simple filler text</li>
                  <li>Also known as placeholder text</li>
                  <li>It shares some characteristics of a real written text</li>
                </ul>

                <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">“This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.”</blockquote>

                <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2>

                <p className="text-gray-500 sm:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
              </div>
            </div>
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
      <Footer />
    </div>
    <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
  </Fragment>)
}