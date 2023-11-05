'use client'

import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import Link from 'next/link'

/// Error handling page
///
/// Providing a friendly error page to users, leaving useful error tracebacks for developers to reproduce the error, and
/// letting users able to redirect back to the home page.
///
/// See: https://nextjs.org/docs/app/api-reference/file-conventions/error#global-errorjs

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & {digest?: string}
    reset: () => void
}) {
    return (
        <html>
            <head>
                <title>出现了一点错误 | 开发者技术社区</title>
            </head>
            <body className="bg-white text-black dark:bg-slate-800 dark:text-gray-50">
                <Header />
                <main className="container mx-auto px-8 py-8">
                    <h1 className="py-4 font-sans text-4xl font-black">
                        出现了点错误
                    </h1>
                    <p className="py-8">
                        <Link href="/">返回首页</Link>
                    </p>

                    {/*
                [ERROR SECTION]

                Section hereby displays the information of the error, including:
                - error name
                - error message
                - error stack

                The error stack is displayed in a list, each item in the list is a frame of the call stack.
            */}
                    <div
                        className="rounded-xl bg-gray-200/[.05] px-8 py-8 text-gray-600 dark:text-gray-400"
                        aria-label="error">
                        <p
                            className="font-sans text-2xl font-bold"
                            aria-label="error-title">
                            Uncaught Error Occurred
                        </p>
                        <p
                            className="py-4 font-sans font-bold"
                            aria-label="error-desc">
                            {error.name}: {error.message}
                        </p>
                        <p className="py-2 font-sans text-xl font-bold">
                            Call Stack
                        </p>
                        <div aria-label="error-stack">
                            {error.stack?.split('\n').map((e) => {
                                let [name, path] = e.split('@')
                                return (
                                    <>
                                        <p className="py-2 font-sans font-bold">
                                            {name}
                                        </p>
                                        <p className="font-mono text-sm">
                                            {path}
                                        </p>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </main>
                <Footer />
            </body>
        </html>
    )
}
