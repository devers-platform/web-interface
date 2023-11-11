'use client'

import Logo from '@/app/components/logo'
import {userMajors} from '@/app/user/usermodel'
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons/faChevronUp'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Listbox, Transition} from '@headlessui/react'
import classNames from 'classnames'
import Link from 'next/link'
import {Fragment, useState} from 'react'

export default function Register() {
    const [selectedMajor, setSelectedMajor] = useState(userMajors[0])

    return (
        /*
            [REGISTER SECTION]

            Register page.
        */
        <div className="mx-auto px-12 py-6 lg:w-[640px]">
            {/*
                [TITLE SECTION]

                Title of the sign-in page.
            */}
            <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
                <Logo size={'3xl'} />

                <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight">
                    注册开发者技术社区账号
                </h2>
            </div>

            {/*
                [FORM SECTION]

                Form of the register page.
            */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:flex-row lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-2"
                        action="#"
                        method="POST">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6">
                                邮箱
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 bg-white px-4 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-slate-900 dark:ring-gray-700 dark:placeholder:text-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6">
                                    校园 ID
                                </label>
                                <div className="text-xs text-gray-600 dark:text-gray-400">
                                    学生、教职工 ID
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 bg-white px-4 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-slate-900 dark:ring-gray-700 dark:placeholder:text-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6">
                                    密码
                                </label>
                                <div className="text-xs text-gray-600 dark:text-gray-400">
                                    大写、小写、数字、特殊符号（.,-_!）至少三种，长度
                                    8-16 字符
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 bg-white px-4 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-slate-900 dark:ring-gray-700 dark:placeholder:text-gray-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <Listbox
                            value={selectedMajor}
                            onChange={setSelectedMajor}>
                            {({open}) => (
                                <>
                                    <Listbox.Label className="block text-sm font-medium leading-6">
                                        学科
                                    </Listbox.Label>
                                    <div className="relative mt-2">
                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-900 dark:ring-gray-700 sm:text-sm sm:leading-6">
                                            <span className="flex items-center">
                                                <span className="ml-3 block truncate">
                                                    {selectedMajor.name}
                                                </span>
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                <FontAwesomeIcon
                                                    icon={
                                                        open
                                                            ? faChevronUp
                                                            : faChevronDown
                                                    }
                                                    className="h-4 w-4 text-gray-600 dark:text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>

                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0">
                                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-900 sm:text-sm">
                                                {userMajors.map((major) => (
                                                    <Listbox.Option
                                                        key={major.major}
                                                        className={({active}) =>
                                                            classNames(
                                                                active
                                                                    ? 'bg-indigo-600 text-white'
                                                                    : '',
                                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                                            )
                                                        }
                                                        value={major}>
                                                        {({
                                                            selected,
                                                            active,
                                                        }) => (
                                                            <>
                                                                <div className="flex items-center">
                                                                    <span
                                                                        className={classNames(
                                                                            selected
                                                                                ? 'font-semibold'
                                                                                : 'font-normal',
                                                                            'ml-3 block truncate'
                                                                        )}>
                                                                        {
                                                                            major.name
                                                                        }
                                                                    </span>
                                                                </div>

                                                                {selected ? (
                                                                    <span
                                                                        className={classNames(
                                                                            active
                                                                                ? 'text-white'
                                                                                : 'text-indigo-600',
                                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                        )}>
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faCheck
                                                                            }
                                                                            className="h-5 w-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </>
                            )}
                        </Listbox>

                        <div>
                            <button
                                type="submit"
                                className="mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                注册
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                        已经有帐户？{' '}
                        <Link
                            href="/user/signin"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                            登录！
                        </Link>
                    </p>

                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        点击注册代表同意{' '}
                        <Link
                            href="/about/term-of-service"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                            服务协议
                        </Link>
                        、
                        <Link
                            href="/about/privacy-policy"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                            隐私协议
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
