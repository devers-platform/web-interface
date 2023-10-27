'use client'

import Link from "next/link";

/// Error handling page
///
/// Providing a friendly error page to users, leaving useful error tracebacks for developers to reproduce the error, and
/// letting users able to redirect back to the home page.
///
/// See: https://nextjs.org/docs/app/api-reference/file-conventions/error#global-errorjs

export default function GlobalError({error, reset}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
        <head>
            <title>出现了一点错误 | 开发者技术社区</title>
        </head>
        <body>
        <main className="container mx-auto px-8 py-8">
            <h1 className="font-sans text-4xl font-black py-4">出现了点错误</h1>
            <p className="py-8">
                <Link href="/">返回首页</Link>
            </p>

            <p className="font-mono text-sm py-8 text-gray-500">devers-platform-web, a community for developers.</p>

            <div className="px-8 py-8 rounded-xl bg-gray-200/[.05]">
                <p className="font-sans font-bold text-2xl text-gray-500">Uncaught Error Occurred</p>
                <p className="font-sans font-bold text-gray-500 py-4">{error.name}: {error.message}</p>
                <p className="font-sans font-bold text-xl text-gray-500 py-2">Call Stack</p>
                <div>
                    {error.stack?.split("\n").map((e) => {
                        let [name, path] = e.split("@");
                        return (<>
                            <p className="font-sans font-bold text-gray-500 py-2">{name}</p>
                            <p className="font-mono text-sm text-gray-500">{path}</p>
                        </>)
                    })}
                </div>
            </div>
        </main>
        </body>
        </html>
    )
}