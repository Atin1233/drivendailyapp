import adapter from "@sveltejs/adapter-vercel"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Use Vercel adapter for deployment
    adapter: adapter(),
    // allow up to 150kb of style to be inlined with the HTML
    // Faster FCP (First Contentful Paint) by reducing the number of requests
    inlineStyleThreshold: 150000,
    // Handle prerendering errors gracefully
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore 500 errors during prerendering for demo mode
        if (message.includes('500')) {
          console.warn(`Skipping prerender for ${path}: ${message}`)
          return
        }
        // Throw other errors
        throw new Error(message)
      }
    }
  },
  preprocess: vitePreprocess(),
}

export default config
