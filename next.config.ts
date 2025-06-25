import type { NextConfig } from "next";

module.exports = {
    async redirects() {
        return [
            {
                source: '/auth',
                destination: '/auth/login',
                permanent: true,
            },
        ]
    },
}

const nextConfig: NextConfig = {
    ignoreDuringBuilds: true,
};

export default nextConfig;
