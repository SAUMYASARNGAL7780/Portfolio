// In development, Vite's proxy (see vite.config.js) forwards "/api/..." to
// your local backend, so this can stay empty.
// In production (Vercel), set VITE_API_URL to your deployed backend's URL,
// e.g. https://saumya-portfolio-api.onrender.com
export const API_BASE = import.meta.env.VITE_API_URL || "";