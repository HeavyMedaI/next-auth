import type {NextRequest} from "next/server";
import {signOut} from "@/app/auth";


export async function GET(req: NextRequest) {
    console.log(req.url);
    await signOut();
}