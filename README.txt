GLOBOLOGÍA HQ — PIN update

Replace these two files in the root of the GitHub repository:
- index.html
- service-worker.js

What this version does:
- Adds the shared 4-digit PIN gate requested.
- Remembers an unlocked device for 30 days.
- Removes all Canva cards/links/thumbnails.
- Shows actual uploaded PNG/JPG/WebP/GIF/SVG/AVIF files as full visible thumbnails.
- Keeps PDFs and other files as file cards with Abrir / Descargar.
- Loads GitHub assets only after the PIN gate is unlocked.
- Uses responsive buttons on phone, tablet, and desktop.
- Replaces the old Canva-injecting service worker with a clean PWA worker.

Important: This is a convenience/privacy screen for the HQ interface. If the GitHub repository remains public, direct repository/raw asset URLs remain public even though the HQ screen is PIN-gated.
