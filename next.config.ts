import type { NextConfig } from "next";

module.exports = {
    async redirects() {
        return [
            {
                source: '/oturum',
                destination: '/oturum/giris',
                permanent: true,
            },
        ]
    },
}

const nextConfig: NextConfig = {
    ignoreDuringBuilds: true,
};

export default nextConfig;
