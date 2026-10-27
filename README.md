# Advocate Subhan — React + Vite website

A responsive, premium legal-practice website preview for Advocate Subhan, Nellore.

## Run locally

1. Install Node.js (LTS).
2. Extract the project ZIP and open this folder in a terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

## Production build

- Run `npm run build`
- Test with `npm run preview`
- Deploy the generated `dist/` folder to your hosting provider.

## Before going live

1. Edit `src/config/siteConfig.js`.
2. Replace `siteUrl: 'https://www.example.com'` with the real HTTPS domain.
3. Update `public/sitemap.xml` and `public/robots.txt` with that exact domain.
4. Add the real Google Business Profile URL and Search Console verification value.
5. Confirm all contact details, review text and publication permissions.
6. This build deliberately displays a demo notice instead of initiating calls or WhatsApp messages. For launch, wire the floating buttons and form to the verified phone/WhatsApp number, and remove the demo notice after testing.
7. The location uses a Google Maps search for the supplied address rather than unverified coordinates. Check the map pin and refine the address if necessary.

## Gallery image rule

Gallery assets are loaded from `src/assets/images/` only when the filename begins with `subhan` (case-insensitive). `subhan001.png` is the hero portrait and is intentionally excluded from the gallery. If there are no other matching gallery images, the gallery section is hidden automatically. Add, for example, `subhan-gallery-01.webp` to `src/assets/images/` to display gallery content.

## Images supplied

- `public/images/subhan001.png` — supplied advocate portrait.
- `public/images/ma-innovex-logo.png` — supplied MA Innovex Technologies logo.

The sitemap domain is a placeholder and must be replaced before submission to Google Search Console.
