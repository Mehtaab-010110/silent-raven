// postcss.config.js
/** @type {import('postcss').Config} */
module.exports = {
  plugins: {
    // Tailwind’s new PostCSS plugin bridge
    '@tailwindcss/postcss': {},
    // Next.js still expects Autoprefixer in the pipeline
    autoprefixer: {},
  },
};