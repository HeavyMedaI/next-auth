"use server"

import {auth, signIn} from "@/app/auth";
import {ProviderId} from "next-auth/providers";
import {CredentialsSignin} from "next-auth";

export async function loginAction(d: FormData) {
    return await signIn('credentials', d);
}

export async function loginWithCredentials(stake, data: FormData) {

    console.log('data: ');
    console.log(data);

    try {

        const res = await signIn('credentials', {
            "email": data.get("email"),
            "password": data.get("password"),
            "callbackUrl": data.get("callbackUrl"),
            "redirectTo": data.get("redirectTo"),
            redirect: false,
        });

        console.log('res: ');
        console.log(res);

        return {
            success: true,
            message: 'Giriş başarılı. Yönlendiriliyorsunuz..',
            redirectTo: res,
        };
    }catch(err) {

        if (err instanceof CredentialsSignin) {
            return {
                success: false,
                message: 'Kullanıcı bulunamadı!',
            };
        }

        return {
            success: false,
            message: err.message,
        };
    }

    /*const login = await fetch("https://684d1a6d65ed0871391514c6.mockapi.io/kayra/test-case/users");
    const ldata = await login.json();

    if (login && login.status === 200) {
        console.log(ldata);
        return {
            success: true,
            info: ldata
        };
    }

    return null;*/
}

export async function loginWithCredentialss(stake, data: FormData) {

    console.log('data: ');
    console.log(data);

    const res = await signIn('credentials', {
        "email": data.get("email"),
        "password": data.get("password"),
        "callbackUrl": data.get("callbackUrl"),
        redirect: false,
    });

    console.log('res: ');
    console.log(res);

    return {
        success: false,
        message: 'Kullanıcı bulunamadı',
    };
}

export async function loginWithOAuth(provider, data = {}) {
    await signIn(provider, data);
}