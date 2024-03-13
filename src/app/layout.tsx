import type { Metadata } from 'next'
import { Providers } from './provider'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'


export const metadata: Metadata = {
  title: '合同会社 MiX 中古車と自社ローンをご用意しております！',
  description: '頭金不要、最大120回分割できる自社ローン！安心、安全なカーライフをご提供できるよう、MiX独自の保証もご用意しております！全国対応/公式ラインで簡単注文。安い中古車購入。展示場/神奈川',
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
        <Analytics/>
        <SpeedInsights />
        {/* <script src="../../node_modules/flowbite/dist/flowbite.js"></script> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" async/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" defer/>
      </body>
    </html>
  )
}
