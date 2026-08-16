# DeHouse Final Launch QA Checklist

**Scope:** Phase‑1 landing page plus the current `/devices/` and `/build-smart-home/` route placeholders.  
**Release rule:** Items marked **BLOCKER** must be resolved before the public production launch.

## 1. Launch blockers

- [ ] **BLOCKER — Photography:** Replace or commercially clear assets A01–A05 in `ASSET_CHECKLIST.md`.
- [ ] **BLOCKER — WhatsApp:** Add the real business WhatsApp number to `config.js` → `WHATSAPP_NUMBER` using international digits only.
- [ ] **BLOCKER — Contact details:** Add the real display phone and business email in `config.js` if they should be shown publicly.
- [ ] **BLOCKER — Social links:** Add confirmed Instagram, TikTok and Facebook URLs in `config.js`; unconfigured social links are hidden automatically.
- [ ] **BLOCKER — Domain/SEO:** Add the final canonical URL and public site URL to metadata/structured data after the production domain is confirmed.
- [ ] **BLOCKER — Testimonials:** Keep the development testimonial placeholder or replace it only with verified customer feedback approved for publication.
- [ ] **BLOCKER — Phase‑2 expectation:** Decide whether the placeholder `/devices/` and `/build-smart-home/` pages are acceptable for launch. If customers are expected to order immediately, Phase 2 must be completed first.

## 2. Desktop QA

Test at 1440×900 and 1920×1080.

- [ ] Header starts spacious and compacts correctly after scrolling.
- [ ] Desktop navigation links reach the correct sections/routes.
- [ ] Hero image crop preserves headline readability and CTA contrast.
- [ ] Category grid remains editorial and does not create uneven broken rows.
- [ ] Six product cards render with no overlap or clipped device illustrations.
- [ ] DIY vs DeHouse Installed section has clear visual hierarchy.
- [ ] Process, installation, professional, use-case and about sections align consistently.
- [ ] Footer columns align and no placeholder social links are visible when not configured.
- [ ] Floating WhatsApp control does not obscure content.
- [ ] No horizontal scroll appears at any tested desktop width.

## 3. Tablet QA

Test at 1024×1366 and 768×1024 in both orientations where practical.

- [ ] Navigation switches to the intended compact/mobile treatment at the correct breakpoint.
- [ ] Hero copy does not collide with image focal points.
- [ ] Two-column layouts stack or resize without compressed unreadable text.
- [ ] Product/category cards keep useful tap targets and spacing.
- [ ] Installation and about imagery do not become excessively cropped.
- [ ] Footer layout remains balanced.
- [ ] No horizontal overflow or clipped buttons.

## 4. Mobile QA

Test at 390×844, 375×812 and 360×800.

- [ ] Mobile menu opens, closes, updates `aria-expanded`, and closes after link selection.
- [ ] Hero remains visually strong without requiring horizontal movement.
- [ ] H1 does not overflow or create awkward one-character lines.
- [ ] All primary CTAs are at least ~44 px high and easy to tap.
- [ ] Sticky “Build Your Smart Home” CTA does not cover footer/content.
- [ ] Floating WhatsApp button sits above the sticky CTA and does not block other controls.
- [ ] Product cards and categories remain legible with no clipped content.
- [ ] Long professional-installation CTA wraps cleanly.
- [ ] Footer and contact content are readable and not cramped.
- [ ] No horizontal overflow at 360 px.

## 5. Accessibility QA

- [x] Skip link exists and targets `#main`.
- [x] Icon-only mobile-menu button has an accessible name.
- [x] Visible keyboard focus styling is defined for links and buttons.
- [x] Motion code respects `prefers-reduced-motion` for smooth scrolling.
- [x] Decorative hero/final CTA images use empty alt text.
- [x] Content photography includes descriptive alt text.
- [ ] Keyboard-test the full page in Chrome/Edge: Tab, Shift+Tab, Enter, Space, Esc where relevant.
- [ ] Confirm mobile menu focus order is sensible when opened.
- [ ] Run Lighthouse Accessibility or axe and resolve critical/serious issues.
- [ ] Check text/background contrast after final photography is installed.
- [ ] Zoom browser to 200% and verify content remains usable without horizontal scrolling.
- [ ] Test with a screen reader (NVDA/VoiceOver) before release.

## 6. SEO QA

- [x] Unique Phase‑1 title and meta description are present.
- [x] `lang="en"`, viewport and robots metadata are present.
- [x] Basic Open Graph title/description/type/locale metadata is present.
- [x] Local-business structured data identifies DeHouse and Port Harcourt service area.
- [ ] Add the real canonical production URL after domain confirmation.
- [ ] Add `og:url` and a production `og:image` after the real domain and approved social-share image exist.
- [ ] Add the production business URL to JSON‑LD after domain confirmation.
- [ ] Confirm only one visible H1 exists on each page.
- [ ] Add/verify `robots.txt` and `sitemap.xml` on the production host.
- [ ] Test the public URL in Google Rich Results Test/Search Console after deployment.
- [ ] Confirm the final page is indexable only when it is genuinely ready for customers.

## 7. WhatsApp QA

- [x] A single configuration point exists in `config.js`.
- [x] Number validation accepts only 10–15 digits.
- [x] WhatsApp URLs use `https://wa.me/<number>?text=<encoded-message>`.
- [x] Trade-partner CTA uses a tailored WhatsApp message.
- [x] Unconfigured WhatsApp actions fail safely instead of using a fake number.
- [ ] Insert the real number and test every WhatsApp CTA on desktop and a physical phone.
- [ ] Verify the correct DeHouse account opens and prefilled text is readable.
- [ ] Verify international number format contains country code and no leading `+`, spaces or punctuation.

## 8. Broken links / route QA

- [x] Local file references used by the landing page resolve inside the package.
- [x] `/devices/` placeholder route exists.
- [x] `/build-smart-home/` placeholder route exists.
- [x] Main same-page anchors (`#home`, `#installation`, `#how-it-works`, `#professionals`, `#about`, `#trust`) exist.
- [x] Social links are hidden when no real URL is configured, avoiding intentional dead public links.
- [ ] After adding real social URLs, click-test each one.
- [ ] After deploying under the final domain/subdirectory, click-test relative route handling from `/`, `/devices/`, and `/build-smart-home/`.
- [ ] Run a production crawler/link checker against the deployed URL and confirm zero unintended 404/5xx responses.

## 9. Performance QA

- [x] Non-hero content photography uses `loading="lazy"`.
- [x] Hero image is preloaded with high fetch priority.
- [x] No frontend framework/runtime dependency is required for Phase 1.
- [ ] Re-export final photos to optimized WebP/AVIF and keep each within the target budget in `ASSET_CHECKLIST.md`.
- [ ] Run Lighthouse Mobile on the deployed site and review LCP, CLS and INP.
- [ ] Confirm hero media remains fast on throttled 4G/slow mobile conditions.
- [ ] Enable Brotli/Gzip and long-lived caching for hashed/static assets at the host/CDN level.

## 10. Final release sign-off

- [ ] Production photography approved and licensed.
- [ ] Real WhatsApp account tested successfully.
- [ ] Real contact/social details verified.
- [ ] Canonical domain and sharing metadata confirmed.
- [ ] Desktop, tablet and mobile visual QA signed off.
- [ ] Accessibility audit completed with no critical issues.
- [ ] Production link crawl returns no unintended broken links.
- [ ] Lighthouse mobile/desktop reviewed and major regressions resolved.
- [ ] Final ZIP/deployment artifact matches the tested build.
