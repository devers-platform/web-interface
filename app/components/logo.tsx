import Link from 'next/link'

export default function Logo({size}: {size: Size | undefined}) {
    const sizeAttr = size == undefined ? '' : `text-${size}`

    return (
        <Link
            href="/"
            className="-m-1.5 p-1.5"
            aria-label="header-nav-brand">
            <span
                className={
                    'font-mono text-sky-700 dark:text-sky-300 ' + sizeAttr
                }>
                devers<span className="animation-twinkling">_</span>
            </span>
        </Link>
    )
}
