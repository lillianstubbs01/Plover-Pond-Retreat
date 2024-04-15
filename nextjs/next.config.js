/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        basePath: "/Plover-Pond-Retreat",
        output: "export",
        missingSuspenseWithCSRBailout: false,
    },
}

module.exports = nextConfig
