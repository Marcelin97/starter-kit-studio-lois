import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ["@prisma/client"], // Force Prisma à être traité comme un package externe
};

export default nextConfig;
