"use client"

import React from "react";
import Navbar from "@/app/lib/ui/layouts/navbar";
import {useSession} from "next-auth/react";


export default function DashboardLayout({ children }: { children?: React.ReactNode }) {

    return (
        <div className="min-h-full">
            <Navbar />

            <header className="bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    );

    /*HTML VERSION*/
    return <div className="min-h-full">
        <Navbar />

        <header className="bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            </div>
        </header>
        <main>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {children}
            </div>
        </main>
    </div>;
};