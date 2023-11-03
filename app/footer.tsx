'use client';

import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Dialog} from '@headlessui/react'
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const navigation = [
    {
        name: '文章分区 🖊️', href: '/articles', children: [
            {
                name: "文章分类 📦️",
                href: '/articles/category'
            },
            {
                name: '热门文章 🔥',
                href: '/articles/trending'
            },
            {
                name: '历史文章 📁',
                href: '/articles/archive'
            }
        ]
    },
    {
        name: '问答分区 ❓', href: '/helps', children: [
            {
                name: "问答分类 📦",
                href: '/helps/category'
            },
            {
                name: '热门问答 🔥',
                href: '/helps/trending'
            },
            {
                name: '历史问答 📁',
                href: '/helps/archive'
            }]
    },
    {
        name: '课程分区 📒', href: '/courses', children: [
            {
                name: "课程分类 📦️",
                href: '/courses/category'
            },
            {
                name: '热门课程 🔥',
                href: '/courses/trending'
            },]
    },
    {
        name: 'devers', href: '/', children: [
            {
                name: "关于我们",
                href: '/about'
            },
            {
                name: '联系我们',
                href: '/contact'
            }]
    },
]
export default function Footer() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <footer
            className="inset-x-0 px-16 py-4 lg:py-8 bg-white dark:bg-slate-800 shadow-sm shadow-slate-200 dark:shadow-slate-600">
            <nav className="flex items-start justify-between" aria-label="Global">
                <div className="flex lg:flex-initial flex-col grow lg:grow-0 px-16">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="text-2xl text-sky-700 font-mono">devers<span
                            className="animation-twinkling">_</span></span>
                    </a>
                    <p className="py-2 text-gray-800 dark:text-gray-200">成为在编程路上工大er的最好伴侣。</p>
                    <div className="py-8">
                        <a href="https://github.com/devers-platform"><FontAwesomeIcon icon={faGithub} size="xl"/> <span>Visit GitHub Project</span></a>
                    </div>
                </div>
                <div className="hidden lg:flex flex-1 px-16">
                    {navigation.map((item) => (
                        <div className="flex-1">
                            <a key={item.name} href={item.href} className="font-semibold leading-6 text-gray-900">
                                {item.name}
                            </a>
                            <div className="py-4">
                                {item.children.map((child) => (
                                    <div>
                                        <a key={child.name} href={child.href}
                                           className={"font-semibold leading-6 text-gray-900"}>
                                            {child.name}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
            <div className="text-center text-xs text-gray-500">Powered by devers-platform team. Portions of this content
                are &copy; 2023 by individual contributors on this site.
            </div>
        </footer>
    );
}