/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Descomentar si usas un subdirectorio en GitHub Pages (ej: username.github.io/repo-name)
  // basePath: '/nombre-de-tu-repo',
  // assetPrefix: '/nombre-de-tu-repo/',
}

export default nextConfig
