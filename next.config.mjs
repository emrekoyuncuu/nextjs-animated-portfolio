/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    distDir: 'dist',
    reactStrictMode: true,
    images: {
        loader: 'default',
    },
};

export default nextConfig;

