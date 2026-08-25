# ELSMNODY BESPOKE — Design Tokens
*Phase 1 Documentation*

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-gold` | `#C9A84C` | Primary accent — buttons, icons, borders |
| `--color-gold-light` | `#E2C97E` | Hover states, shimmer highlights |
| `--color-gold-dark` | `#9E7A2A` | Gradient start, depth |
| `--color-gold-muted` | `#C9A84C33` | Backgrounds, overlays |
| `--color-bg-deep` | `#0A0A08` | Root background |
| `--color-bg-dark` | `#111109` | Alternate section bg |
| `--color-bg-card` | `#161612` | Cards, inputs |
| `--color-ivory` | `#F5F0E8` | Primary text on dark |
| `--color-ivory-soft` | `#EDE8DF` | Secondary text |
| `--color-ivory-muted` | `#C8C0B0` | Captions |
| `--color-text-muted` | `#7A7468` | Placeholder, labels |
| `--color-accent-red` | `#8B1A1A` | Judicial collection accent |
| `--color-accent-navy` | `#1A2744` | Executive collection accent |

---

## Typography

### Font Families

| Role | Family | Usage |
|---|---|---|
| Display | Playfair Display | Hero titles, section headings, brand name |
| Body | Inter | Body copy, UI labels, navigation |
| Arabic | IBM Plex Sans Arabic | Arabic content, RTL sections |

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&family=IBM+Plex+Sans+Arabic:wght@300;400;500&display=swap" rel="stylesheet">
```

### Type Scale

| Token | Size | Usage |
|---|---|---|
| `--text-xs` | 12px | Micro labels, eyebrows |
| `--text-sm` | 14px | Captions, metadata |
| `--text-base` | 16px | Body text |
| `--text-lg` | 18px | Large body |
| `--text-xl` | 20px | Subheadings |
| `--text-2xl` | 24px | Small section titles |
| `--text-3xl` | 30px | Section headings |
| `--text-4xl` | 36px | Large headings |
| `--text-5xl` | 48px | Display (tablet) |
| `--text-6xl` | 60px | Hero (desktop) |
| `--text-7xl` | 72px | Mega hero |

---

## Button System

| Variant | Background | Text | Border | Use Case |
|---|---|---|---|---|
| `btn-primary` | Gold | Deep black | Gold | Main CTAs |
| `btn-secondary` | Transparent | Gold | Gold | Secondary actions |
| `btn-ghost` | Transparent | Ivory muted | Subtle white | Tertiary actions |
| `btn-luxury` | Gold gradient | Deep black | None | Hero CTAs only |
| `btn-whatsapp` | #25D366 | White | Green | WhatsApp CTAs |

---

## Card System

| Variant | Aspect Ratio | Key Behavior | Usage |
|---|---|---|---|
| `card-collection` | 3:4 | Zoom-on-hover image | Collections grid |
| `card-service` | Free | Centered icon + text | Why ELSMNODY section |
| `card-gallery` | Various | Zoom-on-hover | Gallery masonry |
| `card-testimonial` | Free | Gold left border | Testimonials |
| `card-blog` | Free | Hover lift | Blog listing |

---

## Form System

All inputs use:
- Background: `--color-bg-card` (#161612)
- Border: `rgba(201, 168, 76, 0.2)` — subtle gold
- Focus: gold border + gold glow ring
- Font: Inter, 16px (prevents iOS zoom)

---

## Animation System

| Name | Duration | Trigger | Usage |
|---|---|---|---|
| `fadeInUp` | 600ms | Scroll into view | Section content reveal |
| `fadeIn` | 300ms | Mount | Overlays, modals |
| `goldShimmer` | 3s loop | Permanent | Logo, luxury text |
| `float` | 3s loop | Permanent | Decorative elements |

### Scroll Reveal Usage
```html
<div class="reveal">Content revealed on scroll</div>
<div class="reveal reveal-delay-2">Staggered reveal</div>
```
```js
// Minimal scroll observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) el.target.classList.add('is-visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

---

## Logo Files

| File | Format | Use |
|---|---|---|
| `assets/logo/logo.svg` | SVG | Default — dark backgrounds |
| `assets/logo/logo-horizontal.svg` | SVG | Navbar |
| `assets/logo/logo-vertical.svg` | SVG | Footer, splash screens |
| `assets/logo/logo-monogram.svg` | SVG | Favicon fallback, watermarks |
| `assets/favicon/favicon.svg` | SVG | Browser tab |

---

## Image Asset Map

All image paths reference `assets/images/` subfolders.
Raw GitHub URLs defined in `ELSMNODY_Images_Report.md`.

| Subfolder | Count | Usage |
|---|---|---|
| `logo/` | 6 | PNG versions of logos (PNG from GitHub) |
| `hero/` | 3 | Hero section full-screen backgrounds |
| `founder/` | 4 | About page + homepage founder section |
| `tailoring/` | 5 | Tailoring Journey timeline steps |
| `fabrics/` | 6 | Fabric collection cards + page |
| `collections/` | 6 | Collection cards (Executive/Wedding/Judicial/Black Label/Tuxedo/Blazer) |
| `lifestyle/` | 5 | Gallery + testimonials background |
| `branding/` | 4 | Brand identity — cards, packaging, label |

---

## Spacing Scale

All sections use `--section-py: 6rem` (96px) vertical padding.
Container max-width: 1280px with 1.5rem (24px) horizontal padding on mobile, 3rem on desktop.

---

*ELSMNODY BESPOKE | Phase 1 Complete*
*Next: Phase 2 — Homepage UI (Claude #2)*
