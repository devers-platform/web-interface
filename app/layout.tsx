import './globals.scss'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Header from "@/app/header";
import Footer from "@/app/footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: '开发者技术社区',
    description: '一个开发者技术社区',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <main className="container mx-auto px-8 py-16 lg:py-32">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    )
}
