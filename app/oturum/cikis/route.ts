import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import {signOut} from "@/app/auth";


export async function GET(req: NextRequest) {
    await signOut();
}