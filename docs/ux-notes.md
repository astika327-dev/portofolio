# UX and Accessibility Notes

_Last reviewed: 18 Sep 2025_

## Nielsen Heuristics Checklist

| Heuristic | How the portfolio satisfies it |
| --- | --- |
| 1. Visibility of system status | Sticky header keeps navigation visible and scroll spy highlights the active section via `aria-current`, so users always know where they are. Hero meta line shows availability/timezone for quick status cues. |
| 2. Match between system and real world | Section copy uses familiar language ("Skills", "Projects", "Contact") and action verbs on buttons, aligning with user expectations for a portfolio. |
| 3. User control and freedom | Mobile menu has an explicit close state (`aria-expanded`) and closes on outside click/ESC. Skip link lets keyboard users jump past repeated content. |
| 4. Consistency and standards | Navigation order matches anchor order in the document, repeated card layouts share styling, and external links use the ↗ pattern to signal they open new tabs. |
| 5. Error prevention | External actions (print/share) are buttons with clear affordances; share action falls back to copying the link if native share fails, reducing error states. |
| 6. Recognition rather than recall | Navigation labels mirror section headings, cards include brief descriptors, and project actions stay visible without hover reliance. |
| 7. Flexibility and efficiency of use | Keyboard shortcuts (Tab + Skip link) and persistent anchor links support both novice and expert users; reduced-motion media query honors user preferences. |
| 8. Aesthetic and minimalist design | Content is grouped into short sections with supporting bullet lists; muted palette keeps focus on copy while still meeting contrast targets. |
| 9. Help users recognize, diagnose, and recover | Navigation automatically resets `aria-current` when users scroll above the first section, preventing misleading active states. Share button fallbacks include an alert when copying succeeds. |
| 10. Help and documentation | Resume CTA offers a printable PDF and print shortcut; project cards link directly to live demos and repos for further reference. |

## WCAG 2.2 AA Items Covered

The following success criteria are currently addressed:

* **1.1.1 Non-text Content** – Decorative logo uses meaningful `alt` text describing "PA logo" so assistive tech can announce the site owner. 【F:index.html†L26-L28】
* **1.3.1 Info and Relationships / 1.3.2 Meaningful Sequence** – Section headings (`<h2>`) and lists convey structure programmatically, matching the visual hierarchy. 【F:index.html†L52-L84】
* **1.4.3 Contrast (Minimum)** – Core text and UI colors exceed 4.5:1. A contrast script exported the ratios in `docs/data/contrast-checks.csv` (e.g., body text `#e9eefc` on background `#0b1220` is 16.14:1). 【F:docs/data/contrast-checks.csv†L1-L7】
* **1.4.10 Reflow / 1.4.12 Text Spacing** – Responsive grid collapses to single-column under 680 px without horizontal scroll, and spacing is controlled with padding/margins so user overrides won’t clip content. 【F:assets/css/styles.css†L89-L113】【F:assets/css/styles.css†L129-L145】
* **1.4.13 Content on Hover or Focus** – Hover/focus styles do not trap content; focus rings are visible without introducing overlays. 【F:assets/css/styles.css†L63-L74】【F:assets/css/styles.css†L116-L124】
* **2.1.1 Keyboard / 2.1.2 No Keyboard Trap** – Skip link, nav toggle, and menu items are keyboard operable with scripted focus trapping only when the menu is open. 【F:index.html†L22-L37】【F:assets/js/script.js†L6-L80】
* **2.4.1 Bypass Blocks** – Skip link at the top jumps to `#main-content`. 【F:index.html†L22-L23】
* **2.4.3 Focus Order / 2.4.7 Focus Visible** – DOM order matches visual order and custom focus states add high-contrast outlines. 【F:index.html†L22-L146】【F:assets/css/styles.css†L68-L74】
* **2.4.4 Link Purpose (In Context)** – Links are labeled with descriptive text (e.g., "Get in Touch", "View Credential") that clarifies the destination. 【F:index.html†L40-L152】
* **2.5.1 Pointer Gestures / 2.5.7 Dragging Movements** – All actions are simple taps/clicks; no complex gestures required. 【F:index.html†L36-L152】
* **3.2.3 Consistent Navigation / 3.2.4 Consistent Identification** – Repeated navigation links and project card buttons maintain consistent labeling and order. 【F:index.html†L30-L112】
* **3.3.4 Error Prevention (Legal, Financial, Data)** – No data submission flows exist; contact actions open user’s email/WhatsApp clients, preventing data entry errors. 【F:index.html†L132-L143】

## Contrast Samples

Contrast ratios were calculated via a Python script using the WCAG 2.x relative luminance formula. Raw output lives in [`docs/data/contrast-checks.csv`](data/contrast-checks.csv). Highlights:

* Primary body text (`#e9eefc`) on the radial background (`#0b1220`) — **16.14:1**
* Muted body text (`#a8b2d1`) on background — **8.87:1**
* Primary button text (`#001b2e`) on gradient brand fill (`#36a3ff`) — **6.55:1**

These ratios all exceed AA thresholds (4.5:1 for normal text, 3:1 for large UI elements).

## Lighthouse (Mobile) Scores

Mobile Lighthouse runs were captured before and after the latest accessibility review; full reports are saved under `docs/data/`.

| Metric | Before (`lighthouse-mobile-before.json`) | After (`lighthouse-mobile-after.json`) |
| --- | --- | --- |
| Performance | 93 | 96 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

### Outstanding Warnings & Mitigations

* **Ensure text remains visible during webfont load** – Google Fonts stylesheet lacks `&display=swap`; mitigation is to append the parameter or self-host fonts to remove flash-of-invisible-text risk. 【F:docs/data/lighthouse-mobile-before.json†L2-L21】【F:docs/data/lighthouse-mobile-after.json†L2-L19】
* **Eliminate render-blocking resources** (before review only) – Initial run flagged Google Fonts/CSS as blocking paint. Keeping critical CSS inline or loading fonts asynchronously lifted the warning in the follow-up report. 【F:docs/data/lighthouse-mobile-before.json†L10-L21】

Additional notes: Performance rose after deferring non-critical assets during review; no remaining accessibility/best-practices/SEO warnings were reported in the follow-up audit. Full JSON outputs are retained for traceability.
