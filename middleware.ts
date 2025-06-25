export { auth as middleware } from "@/app/auth"

export const config = {
    matcher: [
        //"/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|landing|index|home|oturum/giris|oturum/hata).*)",
        "/dashboard"
    ],
};