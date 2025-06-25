import NextAuth from "next-auth"
import {NextAuthOptions} from "@/app/api/auth/[...nextauth]/options";

export const { auth, handlers, signIn, signOut } = NextAuth(NextAuthOptions)