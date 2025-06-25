//"use server"

import CredentialsProvider from "next-auth/providers/credentials";
import Auth0Provider from "next-auth/providers/auth0";
import GitHub from "next-auth/providers/github";
import {Provider} from "next-auth/providers"
import type {NextRequest} from "next/server";
import {CredentialsSignin} from "next-auth";

const authProviders: Provider[] = [
    CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Giriş Yap',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Eposta", type: "email", placeholder: "ornek@eposta.com" },
                password: { label: "Şifre", type: "password" }
            },
            async signIn() {},
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                /*const res = await fetch("/your/endpoint", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })*/

                console.log('credentials: ');
                console.log(credentials);

                const fetchUsers = await fetch("https://684d1a6d65ed0871391514c6.mockapi.io/kayra/test-case/users");
                const users = await fetchUsers.json();

                console.log('users: ');
                console.log(users);

                let user = null;

                for (const _user of users) {
                    if (_user.email.toString().toLowerCase() == credentials.email.toString().toLowerCase()
                        && _user.password.toString() == credentials.password.toString()) {
                        user = _user;
                        break;
                    }
                }

                console.log('user: ');
                console.log(user);

                return user;
            }
        }),
    Auth0Provider({
        clientId: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        issuer: process.env.AUTH0_DOMAIN
    }),
    GitHub
]

export const NextAuthOptions = {
    providers: authProviders,
    pages: {
        signIn: '/oturum/giris',
        signOut: '/oturum/cikis',
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken
            return session
        },
        authorized: async ({ auth }: {auth: any}) => {
            return !!auth
        },
    }
}