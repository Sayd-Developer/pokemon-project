// import { NextConfig } from "next"

// const nextConfig: NextConfig = {
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "react-native$": "react-native-web",
//     }
//     return config
//   },
//   exclude: /Mobile/,
// }

// export default nextConfig

/**  @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

export default nextConfig
