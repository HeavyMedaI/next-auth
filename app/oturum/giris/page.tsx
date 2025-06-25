"use client"

import {useActionState, startTransition} from "react";
import BlinkBlur from "react-loading-indicators/BlinkBlur";
import {redirect} from "next/navigation";
import {loginWithAuth0, loginWithCredentials, loginWithOAuth} from "@/app/lib/actions/auth";
import {auth} from "@/app/auth";
import { signIn } from 'next-auth/react';
import LoginForm from "@/app/lib/ui/login-form";

export default function Page({children}: {children: React.ReactNode}) {
    /*HTML VERSION*/
    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto"
                     src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                     alt="Your Company"/>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Hesabınıza giriş yapın.</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <LoginForm />
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Hesabınız yok mu?
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 ml-2">Hesap oluştur.</a>
                </p>

                <span className="flex items-center mt-5">
                  <span className="h-px flex-1 bg-gray-300"></span>

                  <span className="shrink-0 px-4 text-gray-900">veya</span>

                  <span className="h-px flex-1 bg-gray-300"></span>
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-1 lg:gap-8 mt-5">
                    <div className="rounded items-center flex flex-row text-center align-middle flex-1 justify-evenly">
                        <button
                            className="inline-block rounded-full border border-gray-300 bg-white p-4 text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden cursor-pointer"
                            onClick={() => {
                                startTransition(async () => loginWithOAuth('auth0', {callbackUrl: '/api/auth/callback/auth0', redirectTo: '/dashboard'}));
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                                <path d="M49.012 51.774L42.514 32l17.008-12.22h-21.02L32.005 0h21.032l6.506 19.78c3.767 11.468-.118 24.52-10.53 31.993zm-34.023 0L31.998 64l17.015-12.226-17.008-12.22zm-10.516-32c-3.976 12.1.64 24.917 10.5 32.007v-.007L21.482 32 4.474 19.774l21.025.007L31.998 0H10.972z" fill="#eb5424"/>
                            </svg>
                        </button>
                        <a
                            className="inline-block rounded-full border border-gray-300 bg-white p-4 text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden cursor-pointer"
                            onClick={() => signIn('github', {callbackUrl: '/api/auth/callback/github', redirectTo: '/dashboard'})}
                        >
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>


        </>
    );
}