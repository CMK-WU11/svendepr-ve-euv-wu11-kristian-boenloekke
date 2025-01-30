/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "4000",
                pathname: "/**",
              },
              {
                protocol: "https",
                hostname: "kb-landrup-dans-api.onrender.com",
                port: "10000",
                pathname: "/**",
              },
        ]
    }
};

export default nextConfig;
