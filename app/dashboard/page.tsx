"use client"

import {useSession} from "next-auth/react";


export default function Page() {
    const {data: session} = useSession()
    return (
        <>
            <h3 className="text-4xl font-semibold text-gray-900">Hoşgeldiniz!</h3> {session && <h2 className="text-4xl font-semibold text-teal-700 mt-3">{session.user?.name}</h2>}
        </>
    );
}