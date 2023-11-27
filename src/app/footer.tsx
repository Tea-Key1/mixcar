import { Fragment } from "react";
import Image from "next/image";

export default function Footer() {
    return (<Fragment>
        <footer className="body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a href="/" className="flex justify-items-center ">
                        <Image alt="logo" src={"/textures/mixlogo.png"} className="w-[30dvw] sm:w-[15dvw] object-cover object-center mx-auto" height={1000} width={1000} />
                    </a>
                    <p className="mt-2 text-sm ">MiX保証に関するお問合せは 0465-46-7369 へお掛けください。</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <a href="/" className="lg:w-1/4 md:w-1/2 w-full px-4 hover:translate-y-[-0.25dvh] duration-100">
                        <p className="title-font font-medium tracking-widest text-sm mb-3">ホーム</p>
                    </a>
                    <a href="/guarantee" className="lg:w-1/4 md:w-1/2 w-full px-4 hover:translate-y-[-0.25dvh] duration-100">
                        <p className="title-font font-medium tracking-widest text-sm mb-3">MiX保証</p>
                    </a>
                    <a href="/loan" className="lg:w-1/4 md:w-1/2 w-full px-4 hover:translate-y-[-0.25dvh] duration-100">
                        <p className="title-font font-medium tracking-widest text-sm mb-3">自社ローン</p>
                    </a>
                    <a href="/coding" className="lg:w-1/4 md:w-1/2 w-full px-4 hover:translate-y-[-0.25dvh] duration-100">
                        <p className="title-font font-medium tracking-widest text-sm mb-3">コーティング</p>
                    </a>
                    <a href="/news" className="lg:w-1/4 md:w-1/2 w-full px-4 hover:translate-y-[-0.25dvh] duration-100">
                        <p className="title-font font-medium tracking-widest text-sm mb-3">お知らせ</p>
                    </a>
                    <a href="" className="lg:w-1/4 md:w-1/2 w-full px-4 hover:translate-y-[-0.25dvh] duration-100">
                        <p className="title-font font-medium tracking-widest text-sm mb-3">お問い合わせ</p>
                    </a>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap justify-end flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">Copyright © 合同会社MiX All Rights Reserved.【掲載の記事・写真・イラストなどの無断複写・転載等を禁じます】
                    </p>
                </div>
            </div>
        </footer>
    </Fragment>)
}