import type { Metadata } from 'next'
import { Providers } from './provider'
import './globals.css'


export const metadata: Metadata = {
  title: '合同会社 MiX 神奈川県 中古車 自社ローン 安心 安全 安い 審査 通る 簡単 レンタル 保証 施工 修理',
  description: '合同会社 MiX 神奈川県 中古車 自社ローン 安心 安全 安い 審査 通る 簡単 レンタル 保証 施工 修理',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
        {/* <script src="../../node_modules/flowbite/dist/flowbite.js"></script> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" async/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" defer/>
      </body>
    </html>
  )
}
