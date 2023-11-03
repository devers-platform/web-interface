import Link from 'next/link'

/// Error handling (Not Found)
///
/// Providing a friendly not found page to users, letting them able to redirect back to the home page.
///
/// See: [not-found file in Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)

export default function NotFound() {
    return (
        <main className="container mx-auto px-8 py-8">
            <h1 className="font-sans text-4xl font-black py-4">查无踪迹</h1>
            <p className="font-sans">飞云过尽，碧浪无迹。</p>
            <p className="font-sans">我们找不到你所要请求的资源。</p>
            <p className="py-8">
                <Link href="/">返回首页</Link>
            </p>
        </main>
    )
}