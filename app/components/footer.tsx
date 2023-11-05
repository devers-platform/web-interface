'use client'

import Logo from '@/app/components/logo'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import {useState} from 'react'

const navigation = [
    {
        name: '文章分区 🖊️',
        href: '/articles',
        children: [
            {
                name: '文章分类 📦️',
                href: '/articles/category',
            },
            {
                name: '热门文章 🔥',
                href: '/articles/trending',
            },
            {
                name: '历史文章 📁',
                href: '/articles/archive',
            },
        ],
    },
    {
        name: '问答分区 ❓',
        href: '/helps',
        children: [
            {
                name: '问答分类 📦',
                href: '/helps/category',
            },
            {
                name: '热门问答 🔥',
                href: '/helps/trending',
            },
            {
                name: '历史问答 📁',
                href: '/helps/archive',
            },
        ],
    },
    {
        name: '课程分区 📒',
        href: '/courses',
        children: [
            {
                name: '课程分类 📦️',
                href: '/courses/category',
            },
            {
                name: '热门课程 🔥',
                href: '/courses/trending',
            },
        ],
    },
    {
        name: 'devers',
        href: '/',
        children: [
            {
                name: '关于我们',
                href: '/about',
            },
            {
                name: '联系我们',
                href: '/contact',
            },
        ],
    },
]
export default function Footer() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        /*
            [FOOTER SECTION]

            Base footer for main layouts.
        */
        <footer
            className="inset-x-0 bg-white px-16 py-4 shadow-sm shadow-slate-200 dark:bg-slate-800 dark:shadow-slate-600 lg:py-8"
            aria-label="footer">
            <nav
                className="flex items-start justify-between"
                aria-label="footer-nav">
                {/*
                    The brand of the footer section.

                    Here shows the brand logo and a brief description of the project.
                    Below the brand provides a link to the project's homepage.
                    Should always be shown.
                */}
                <div
                    className="flex grow flex-col items-center px-16 lg:flex-initial lg:grow-0 lg:items-start"
                    aria-label="footer-brand">
                    <Logo size={'2xl'} />

                    <p
                        className="py-2"
                        aria-label="footer-brand-desc">
                        成为在编程路上工大er的最好伴侣。
                    </p>
                    <div
                        className="py-8"
                        aria-label="footer-brand-link">
                        <Link href="https://github.com/devers-platform">
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="h-5 w-5 align-middle"
                            />
                            <span className="hidden px-2 sm:inline-block">
                                Visit GitHub Project
                            </span>
                        </Link>
                    </div>
                </div>

                {/*
                    Links in sections showed next to the brand logo.
                    Links are defined in the [navigation] array at the top of the file.

                    Should only be shown on larger screen size.
                 */}
                <div
                    className="hidden flex-1 px-16 lg:flex"
                    aria-label="footer-link-section">
                    {navigation.map((item) => (
                        <div
                            className="flex-1"
                            key={item.name}
                            aria-label="footer-link-subsection">
                            <Link
                                href={item.href}
                                className="font-semibold leading-6">
                                {item.name}
                            </Link>
                            <div className="py-4">
                                {item.children.map((child) => (
                                    <Link
                                        key={child.name}
                                        href={child.href}
                                        className={
                                            'block font-semibold leading-6'
                                        }>
                                        {child.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
            <div
                className="text-center text-xs text-gray-600 dark:text-gray-400"
                aria-label="footer-copyright">
                Powered by devers-platform team. Portions of this content are
                &copy; 2023 by individual contributors on this site.
            </div>
        </footer>
    )
}
