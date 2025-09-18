# Putu Astika — Portfolio (Pro Dark/Blue)

A fast, professional portfolio with a dark navy + electric blue aesthetic.

## Features
- Sticky, translucent navbar with mobile menu
- Clean hero section (100vh) with strong headline
- Projects grid (cards)
- Certificates section (FCC: RWD + Front End Libraries)
- Contact & quick resume preview
- Accessible focus states, reduced motion handling
- Print & Web Share helpers
- Lightweight: vanilla HTML/CSS/JS (no build step)

## Customize
- **Links:** Update project URLs, email/WhatsApp, and resume link in `index.html`.
- **Brand:** Replace `assets/logo.svg` as needed. Colors are in CSS variables.
- **OG image:** Replace `assets/og-image.png` (1200×630).

## Deploy to GitHub Pages
1. Create a repo (e.g., `astika.is-a.dev` or `portfolio`).
2. Put these files at the repo root and push.
3. Enable **Pages** → Branch `main` → `/ (root)`.
4. Optional: add a `CNAME` file with `astika.is-a.dev` if using a custom domain.

## Testing & Accessibility Checks
Follow this checklist before each release or whenever a major UI change lands. Document the results in [`docs/ux-notes.md`](docs/ux-notes.md) so the next contributor can compare trends.

### Lighthouse (Mobile) in Chrome DevTools
1. Open the deployed site in Chrome and launch DevTools (`Cmd/Ctrl` + `Option/Alt` + `I`).
2. Navigate to the **Lighthouse** panel, select the **Mobile** device type, and keep **Performance**, **Accessibility**, **Best practices**, and **SEO** checked.
3. Click **Analyze page load**. When the run completes, export the report (JSON or HTML) and capture a screenshot of the scores. Record the four scores and the test URL in `docs/ux-notes.md`.
4. Treat scores ≥90 as passing, 80–89 as needs attention, and <80 as failing. File follow-up issues for any category below the 90 threshold.

### Color Contrast Verification
1. Collect the foreground/background color pairs from the UI (CSS variables live in `index.html`).
2. Use the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or a similar tool to confirm text-to-background ratios.
3. Ensure body text hits at least **4.5:1** and large text/UI icons achieve **3:1**. Log the audited components and any remediation tasks in `docs/ux-notes.md`.

### Keyboard & Screen Reader Review
1. Keyboard: Starting from the address bar, use only `Tab`, `Shift` + `Tab`, `Enter`, and arrow keys. Confirm the focus order is logical, visible, and that interactive elements are reachable. Note any focus traps or missing states.
2. Screen reader: With VoiceOver (macOS), NVDA (Windows), or a comparable tool, review the landmark structure (`Ctrl` + `Option` + `U` in VoiceOver / `Insert` + `F7` in NVDA). Verify that header, navigation, main, and footer regions are announced correctly.
3. Record findings—including assistive tech versions tested and any fixes required—in `docs/ux-notes.md`.

## License
Personal use permitted. © Putu Astika.
