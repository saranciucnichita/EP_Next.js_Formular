/** @type {import('next').NextConfig} */

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  poweredByHeader: false,

  turbopack: {
      // Sets the root to the directory containing this config file
      root: __dirname,
    },
    allowedDevOrigins: ['127.0.0.1', 'localhost', '::1'],
};

export default nextConfig;
