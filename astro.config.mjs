// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// TODO: Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
// e.g., site: "https://johndoe.github.io"
// If deploying to a project repo (not username.github.io), also set base:
// e.g., base: '/your-repo-name/'
export default defineConfig({
    site: "https://roboworld314.github.io",
    base: '/VC_Lab/',
    publicDir: path.join(__dirname, 'public'),
    vite: {
        server: {
            fs: {
                strict: false,
                allow: [__dirname, path.join(__dirname, 'public')],
            },
        },
    },
});  
