"use client"

import React from "react";
import {useSession, signOut} from "next-auth/react"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";

const navigation = [


    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]
const userNavigation = [


    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Çıkış Yap', href: '#', onClick: async () => await signOut() },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const {data: session} = useSession()

    const user = {
        name: session?.user?.name,
        email: session?.user?.email,
        imageUrl: session?.user?.image,
    }

    return <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                    <div className="shrink-0">
                        <Image
                            alt="Your Company"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                            className="size-8"
                        />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium',
                                    )}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                        <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="size-6" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <Image alt={user?.name as string} src={user.imageUrl as string} className="size-8 rounded-full" />
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                {userNavigation.map((item) => (
                                    <MenuItem key={item.name}>
                                        <a
                                            href={item.href}
                                            onClick={item.onClick}
                                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                        >
                                            {item.name}
                                        </a>
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                </div>
            </div>
        </div>

        <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => (
                    <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium',
                        )}
                    >
                        {item.name}
                    </DisclosureButton>
                ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                    <div className="shrink-0">
                        <Image alt={user?.name as string} src={user?.imageUrl as string} className="size-10 rounded-full" />
                    </div>
                    <div className="ml-3">
                        <div className="text-base/5 font-medium text-white">{user.name}</div>
                        <div className="text-sm font-medium text-gray-400">{user.email}</div>
                    </div>
                    <button
                        type="button"
                        className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                    >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </div>
        </DisclosurePanel>
    </Disclosure>;

    /*HTML VERSION*/
    return <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                    <div className="shrink-0">
                        <Image className="size-8"
                             src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                             alt="Your Company"/>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                               aria-current="page">Dashboard</a>
                            <a href="#"
                               className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                            <a href="#"
                               className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                            <a href="#"
                               className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                            <a href="#"
                               className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Reports</a>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                        <button type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
                            </svg>
                        </button>

                        <div className="relative ml-3">
                            <div>
                                <button type="button"
                                        className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                                        id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <Image className="size-8 rounded-full"
                                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                         alt=""/>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button type="button"
                            className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                            aria-controls="mobile-menu" aria-expanded="false">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>
                        <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                        <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                   aria-current="page">Dashboard</a>
                <a href="#"
                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                <a href="#"
                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                <a href="#"
                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                <a href="#"
                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Reports</a>
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                    <div className="shrink-0">
                        <Image className="size-10 rounded-full"
                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                             alt=""/>
                    </div>
                    <div className="ml-3">
                        <div className="text-base/5 font-medium text-white">Tom Cook</div>
                        <div className="text-sm font-medium text-gray-400">tom@example.com</div>
                    </div>
                    <button type="button"
                            className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">View notifications</span>
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
                        </svg>
                    </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                    <a href="#"
                       className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your
                        Profile</a>
                    <a href="#"
                       className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
                    <a href="#"
                       onClick={async () => {
                           await signOut();
                       }}
                       className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign
                        out</a>
                </div>
            </div>
        </div>
    </nav>;
}