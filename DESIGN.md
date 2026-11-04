# Design system · Diego Calderón — Portfolio

Visual reference for the portfolio: where the colors, typography, spacing and motion come from, and when to use each house component. The whole system lives in `src/index.css` as CSS custom properties with a light and a dark theme — every rule below traces back to a token or a class that already exists. Project backlog lives in `DEUDA.md`.

## Principles

1. **Craft over template.** Every section carries one intentional, non-generic detail — the orbital glow, the numbered strength cards, the offset split headings, the oversized impact numeral. If a section could belong to any AI-generated portfolio, it isn't done.
2. **One accent, one job.** The warm copper `--accent` marks interactivity and brand: links, CTAs, active states, the timeline marker, the impact chip. It is never scattered as decoration — the motifs (grid, glow) stay neutral. Copper was chosen over the default-looking cyan precisely to escape the AI-template palette.
3. **Bilingual by construction.** No hardcoded copy in components. Every string is an i18n key present in both `src/locales/en.json` and `src/locales/es.json`.
4. **Accessible in both themes.** AA contrast, a visible focus ring, a complete keyboard path, and `prefers-reduced-motion` honored everywhere.
5. **Motion with intent.** Entrances reveal hierarchy (eyebrow → title → copy → actions). Movement never decorates; it explains what matters first.
6. **Real numbers over adjectives.** Sections lead with measurable impact (`16K / 3 min`, `1,000 tx/s`), not with "passionate" or "innovative". The numbers are the brand.

## Color

All tokens are defined once in `src/index.css` — `:root` holds the dark theme (the default) and `:root[data-theme='light']` overrides every one of them. Components never hardcode a color.

### Tokens

| Token | Role |
| --- | --- |
| `--ink`, `--ink-soft` | Page background and the alternate section background (`section-dark`) |
| `--surface`, `--surface-light` | Cards and forms; `--surface-light` reserved for raised layers |
| `--line` | The 1px hairline — the primary grouping device of the whole design |
| `--text`, `--muted` | Headings/body and secondary text, help, metadata |
| `--chip-text` | Text inside chips, tags and skill items |
| `--accent`, `--accent-deep`, `--accent-hover`, `--on-accent` | Brand copper: interactive states; `-deep` for list markers, `-hover` for primary hover, `on-accent` for text on copper |
| `--success`, `--error` | States: availability dot, `status-badge`, `form-status` — not decoration |
| `--floating-bg` | Translucent chrome: the FAB, its panel, floating chips and dropdowns — all rely on `backdrop-filter` blur |
| `--modal-bg` | Modal surface, always opaque in both themes |
| `--card-gradient`, `--card-hover`, `--card-fill` | Strength-card gradient fill, its hover, and the flat fill of skill groups |
| `--subtle-fill` | Barely-there fill for chips, inputs-adjacent surfaces and secondary buttons |
| `--hero-background` | The hero's radial + linear gradient composition, per theme |
| `--grid-line` | The technical grid motif (hero 64px, project visuals 32px) |
| `--project-visual-bg` | Project thumbnail background: faint accent gradient over a quiet base |
| `--icon-bg` | Skill icon tile — dark in both themes, so icons keep one consistent look |
| `--input-bg`, `--input-label`, `--placeholder` | Form fields, their labels and placeholder text |
| `--glow-border`, `--glow-ring`, `--glow-shadow`, `--glow-fill` | The orbital glow's three rings, its halo and its center fill |
| `--max-width` | Content width, 1180px — spacing serves content, not margins |

### Rules

- **No hex, `rgb()` or named colors outside `src/index.css`.** Components reference tokens only. One documented exception: `.skill-icon`'s `#ffffff` icon text (intentional — the tile is dark in both themes).
- **State colors are semantic.** `--success` means "live / available / done" (availability dot, `status-badge`); `--error` means a failed send. They are never decorative.
- **Transparency is a token too.** Translucent surfaces (`--header-bg`, `--floating-bg`, `--mobile-menu-bg`) carry their own alpha per theme — don't invent `rgba()` locally.
- **In the dark theme, elevation comes from borders and fill, not shadows.** A 1px `--line` plus `--card-fill` separates layers; heavy shadows are reserved for the modal backdrop and the glow motif.

## Typography

- **Space Grotesk, latin subset, weights 400–700**, self-hosted via `@fontsource/space-grotesk` — the body and display family. **IBM Plex Mono** (`@fontsource/ibm-plex-mono`, 400–600, exposed as `--font-mono`) is the technical voice: eyebrows, indices, labels, metrics, tags, badges, dates and error text. `:root` sets the sans stack once; mono is applied through the grouped selector at the top of `index.css`. No other family is allowed.
- **Display headings use tight tracking** (`-0.045em` to `-0.06em`) and short line-height (`.98`–`1.04`). Body copy keeps default tracking and `1.65`–`1.8` line-height. Never mix the two habits.
- **Weights:** Space Grotesk tops at 700 — display headings ride at 600–700, body at 400–500; the heavy-label role (eyebrows, chips, buttons) falls to IBM Plex Mono at 500–600. Don't declare 800+ expecting more punch — it doesn't exist; if it isn't bold enough, go mono.
- **Scale** as it exists in the CSS:

| Size | Where |
| --- | --- |
| `clamp(2.8rem, 6.4vw, 5.7rem)` | `hero h1` — the single largest text on the page |
| `clamp(2.6rem, 8vw, 5rem)` | `project-impact` — the modal's numeral |
| `clamp(2.2rem, 4.7vw, 4.25rem)` | section `h2` |
| `clamp(1.35rem, 2vw, 1.75rem)` | timeline roles, project titles |
| `clamp(1rem, 1.5vw, 1.18rem)` | hero summary |
| `1rem / .92–.9rem` | body copy, timeline points, card text |
| `.78–.84rem` | buttons, tags, nav links, metadata — always `700–800` weight |
| `.72–.77rem` | eyebrows and group labels — uppercase, `0.1–0.16em` tracking |
| `.72rem` | floor — nothing smaller is allowed anywhere |

- **Uppercase is always `text-transform`, never typed caps** — copy must translate cleanly and screen readers read styled caps fine but shout literal ones.
- **Headline size is fluid (`clamp`), body size is fixed.** A layout that breaks with the fixed body size gets re-flowed (wrap, re-grid, scroll inside its container) — the type is never shrunk to fit.
- Numerals that matter (`metric-card dd`, `project-impact`) are oversized and accent-colored; when tabular alignment matters (dates, stat rows), keep digits in the same weight family so columns don't jitter.

## Spacing, radii and depth

- **Section rhythm:** `padding: clamp(88px, 11vw, 140px) 0` on `.section`; `.section-heading` sits `56px` above its content (`40px` under 700px).
- **Container:** `width: min(100% − 40px, var(--max-width))` (`−28px` under 700px); `scroll-padding-top: 88px` keeps anchors below the fixed header.
- **Component spacing:** card padding `26–28px`, grid gaps `18–22px`, text-to-text margins `9–22px`. Stay on even values from this ladder.
- **Radius ladder:** `4px` (language badge) → `7–8px` (tags, small controls) → `9–11px` (buttons, inputs, brand mark) → `14–18px` (skill groups, cards, modal) → `999px` (status pill).
- **Depth is flat by default.** Layers separate with a 1px `--line` border and a fill token — not with shadows. Only two elements cast real shadows: the orbital glow (`--glow-shadow`) and the modal (`0 30px 100px`). Hovers lift with `translateY`, not with bigger shadows.
- **Touch targets:** interactive elements ≥ `48px` tall (`.button` min-height 48, inputs 49); icon-level controls (nav toggles, menu, modal close) never go below `44px`.

## Layout and page structure

- **One page, five sections, floating navigation.** `App.jsx` order is contractual: `Hero → About → Tech → Experience → Projects → Contact`, wrapped in `<main id="main-content">` after `Navbar`. The `skip-link` is the first focusable element. There is no header bar — navigation is a floating menu at top-right (see `nav-fab`), so the content owns the top edge.
- **Every section is `SectionWrapper`** — `.section` + `.container` + anchor `id`. `section-dark` alternates backgrounds (currently Projects) to break the scroll rhythm; at most every other section may use it.
- **Navigation:** a single floating menu, same at every viewport — `.nav-fab` sits fixed top-right with a 54px circular `fab-button` (hairline border, `--floating-bg` + blur, orbit ring on hover). Its two lines morph into a copper X when open; `.nav-panel` extends **leftward as a pill** — the five numbered links on one line, language/theme controls behind a hairline — entering with `translateX + scale` from the right edge and staggered items, Esc/outside-click closes. If the pill can't fit the viewport it scrolls horizontally (never wraps, never overlaps); under 700px it drops below the button as a right-aligned horizontal bar instead. The whole widget hides on scroll down (`is-hidden`, `translateY(-140%)`) and returns on scroll up; a 2px `scroll-progress` hairline stays fixed at the top edge filling with page depth.
- **Hero:** `min-height: 100svh`, two-column `hero-content` (copy 1.35fr / metrics 0.65fr), the grid and the orbital glow behind, both `aria-hidden`.
- **Breakpoints:** `960px` (nav collapses, all multi-column grids go to ≤2 columns, timeline stays split) and `700px` (everything single column, timeline collapses to marker + stacked content, modal becomes a bottom sheet, brand copy hidden). No other breakpoints.
- **Modal** lives outside the card: `modal-backdrop` covers the viewport with blur, `project-modal` is a `760px` dialog — on mobile it docks to the bottom edge with `18px 18px 0 0` radii.

## Signature motifs

These are the details that make the page recognizable — protect them:

1. **Orbital glow** — three concentric rings (`.hero-glow` + `::before`/`::after`) upper-right of the hero, theme-aware (thicker strokes and a filled center in light). The one true "logo" of the design; the brand mark echoes it with a single orbit ring on hover.
2. **Technical grid** — hairline `--grid-line` squares fading via mask (64px hero, 32px project visuals, opacity ≤ .24). It says "engineer", not "template".
3. **1px hairlines everywhere** — borders, dividers and grid cells group content; a section never needs a second chrome.
4. **Numbered and oversized numerals** — `card-number` (`01–04`), `nav-index` (`01–05`), `project-impact` (up to 5rem), `metric-card` values (up to 3.25rem). Numbers are the visual anchor.
5. **House line-art thumbnails** — every `project-visual` image is a hand-drawn SVG in the same language: `viewBox 0 0 400 300`, 2px strokes in `#9cb2c3` for structure and `#e8a35c` for the one meaningful accent. No screenshots, no stock art, no third-party logos — the grid overlay unifies them on the card.
6. **Visible work-in-progress** — `pending-label` on unfinished projects. A maintained site beats a fake-finished one (see Zeigarnik, below).

## House components

| Component | When to use it |
| --- | --- |
| `skip-link` | First element in DOM; reveals on focus and jumps to `#main-content`. Always present |
| `eyebrow` | Section kicker: dash + uppercase label in `--accent`. Every `section-heading` starts with one |
| `section-heading` / `split-heading` | Section title + summary; `split-heading` puts the summary in a second column (About) — the intentional asymmetry |
| `button` + `button-primary` / `button-secondary` | Primary = filled `--accent` (one per view); secondary = hairline ghost. Both lift `translateY(-2px)` on hover |
| `metric-grid` / `metric-card` | `dl` of impact figures; `metric-card-text` for word-values ("Full stack") that must `overflow-wrap` |
| `strength-grid` / `strength-card` / `card-number` | Bordered quad of strengths; number first, title hangs ~70px low, hover lifts −4px |
| `skill-grid` / `skill-group` / `skill-icon` / `skill-name` | 3-col grid of grouped chips (4–6 items each); icons sit on the always-dark `--icon-bg` tile |
| `tag-list` | Tech chips on project cards and modal stack; ≤5 items, never scrolls |
| `timeline` family | Career path: meta column (dates + `status-badge`), marker on the hairline rail, content column. `status-badge` only for the current role |
| `resume-action` / `resume-menu` / `resume-menu-list` | Resume download in Experience's heading row: primary button opens a language menu (`aria-haspopup="menu"`, Esc/outside-click closes) listing the ES/EN PDFs from `constants.resumes` |
| `project-card` / `project-visual` / `impact-chip` / `project-body` / `card-actions` | Case card: thumbnail with grid overlay + impact chip top-right, then title, summary, tags and `card-actions`; the card lifts −4px on hover. `is-pending` dims the card and swaps the actions for `pending-label` |
| `back-to-top` | Circular 48px floating button, bottom-right; appears after ~600px of scroll (`is-visible`, fade + translateY), hides the rest of the time. Orbit ring + accent on hover — same family as `fab-button`/`toggle-button` |
| `section-rail` | Fixed left-edge dot rail (desktop only, hidden ≤960px): one dot per section, `is-active` via the same IntersectionObserver as the nav — a second Goal-Gradient cue |
| `spotlight` | Cursor-tracked highlight on `strength-card`/`project-card`: a delegated `mousemove` writes `--spot-x/--spot-y` per card and a 240px accent radial follows the pointer on hover — pointer-events none, opacity-only entrance |
| `card-actions` | Row of card-level actions: "View case" opens the modal; a live project also gets an external "Visit site" `text-link` (`target="_blank"`, `rel="noreferrer"`). The same link appears inside the modal under `modal-stack` |
| `text-link` | Inline action with the `↗` glyph that drifts `(3px,−3px)` on hover |
| `modal-backdrop` / `project-modal` / `modal-close` / `project-impact` / `modal-detail` / `modal-stack` | Project deep-dive: eyebrow → giant impact numeral → title → detail → stack. Focus-trapped, Esc/backdrop close, focus returns to trigger |
| `contact-layout` / `contact-copy` / `contact-details` / `social-links` | Two-column contact: copy + details left, form right |
| `contact-form` / `form-row` / `form-footer` / `form-status` / `field-error` / `honeypot` | The form: paired name/email row, message, hidden honeypot, submit + inline status (`is-success`/`is-error`, `role="status"`) and per-field errors (`field-error`, `role="alert"`, input gets `is-invalid`) |
| `nav-fab` / `fab-button` / `nav-panel` / `nav-links` / `nav-index` / `nav-controls` / `toggle-button` / `scroll-progress` | Chrome. The circular FAB morphs to a copper X and extends `nav-panel` leftward: a pill of numbered links on one line (horizontal scroll if it can't fit), the current section lit via `a.is-active`, controls behind a hairline, staggered entrance. `toggle-button` is a 44px circle showing one glyph at a time — the target language code, or sun↔moon swapping with a rotate-fade; on hover it echoes the FAB's orbit ring. `scroll-progress` tracks page depth at the top edge; the widget hides on scroll down and returns on scroll up |
| `footer` | Hairline-separated signature line inside Contact — copyright + "Designed and developed by…" |

## Motion

- **Entrance recipe (Framer Motion):** `initial={{ opacity: 0, y: 20 }}` + `whileInView` + `viewport={{ once: true, amount: 0.2 }}` + `transition={{ delay: index * 0.07 }}` for grid items. Hero uses `animate` on mount at `0.65s` (metrics delayed `.15s`). Modals enter `opacity/y/scale(.98) → 1`.
- **CSS transitions run 180–220ms `ease`** and only animate `transform`, `background-color`, `border-color`, `color`. Never animate layout properties (`width`, `height`, `top`…) — that's what jank looks like.
- **Hover = lift or underline, nothing else.** `translateY(-2px)` buttons, `−4px` strength cards, `scaleX` nav underline, glyph drift on `text-link`. No shadows growing, no scale zooms on content.
- **Scroll-driven motion is progress, not animation** — the header's `translateY` reveal, the `scaleX` progress line and the hero parallax (grid `y*0.12` down, glow `y*-0.08` up, skipped under reduced-motion) respond to scroll directly (rAF-throttled, written to the DOM, no state churn). They read as feedback, never as decoration.
- **Headline entrances go word by word** — the hero `h1` staggers `motion.span` words (`y:22` + `blur(4px)` → clean, `delay: 0.15 + i*0.05`), preserving real spaces so text still wraps and localizes. A sentence animates as language, not as a block.
- **`prefers-reduced-motion` is a hard reset** (all durations → 0.01ms, smooth scroll off). New Framer Motion sequences must check `useReducedMotion()` or accept being flattened by the CSS reset.
- Nothing loops. The glow doesn't pulse, the grid doesn't drift — ambient animation reads as decorative noise.

## Theming

- Theme is `data-theme` on `<html>`, set **before first paint** by the inline script in `index.html` (reads `localStorage['portfolio-theme']`, falls back to `prefers-color-scheme`; dark is the default). No flash, no FOUC.
- `Navbar` toggles the attribute, persists it and syncs `<meta name="theme-color">` (`#071018` / `#f5f8fb`).
- A themed surface joins the transition whitelist at the top of `index.css` (`background-color/border-color/color 220ms`) — new components that restyle per theme get added there.
- Every new token ships both values in the same edit; a token defined only in `:root` silently breaks the light theme.

## Content and i18n

- **Zero literal strings in JSX.** All copy is `t('key')` against `en.json`/`es.json`; structural data (nav, metrics, skills, experience, projects, social links) lives in `src/constants/index.js` as `*Key` references.
- **Key parity is contractual:** add a key to both locale files in the same change; missing keys render raw `a.b.c` strings.
- Language persists in `localStorage['portfolio-language']`, follows the browser (en→en, else es), and updates `documentElement.lang`.
- **A project ships in two stages:** `ready: false` renders `is-pending` + `pending-label` (public roadmap); `ready: true` unlocks the modal. DEUDA.md tracks what each project still needs.
- EN and ES copy should stay within ~15% length of each other — headings that grow a full line in one language break the hero's balance.

## Forms

- Labels above fields, `8px` weight-800 label text on `--input-label`; fields are `--input-bg` with `--line` borders that go `--accent` + 3px ring on focus.
- **Validation is inline and localized**: `noValidate` on the form, per-field `field-error` messages in the site's language, `is-invalid` borders in `--error` and `aria-invalid` for assistive tech. Browser-native bubbles are never the error UI.
- **Honeypot field** (`company`, `aria-hidden`, `tabIndex="-1"`) silently drops bot submits — no CAPTCHA on a portfolio.
- `maxLength` and `autoComplete` set per field; submit trims values.
- **Status is inline, `role="status"`**: `is-success` in `--success`, `is-error`/`configurationError` in `--error` — it never toast-floats and never says nothing.
- Disabled while sending (`cursor: wait`, opacity .65); EmailJS config arrives via `VITE_EMAILJS_*` env vars (README documents the GitHub Pages variables).
- Errors stay honest: the failure copy offers the direct email fallback, never blames the user.

## Accessibility

- `skip-link` first in DOM; `:focus-visible` gets `3px solid --accent` with `4px` offset — the ring is part of the design, not an apology.
- The modal traps `Tab`/`Shift+Tab`, closes on `Esc` and backdrop click, moves focus in on open and back to the trigger on close.
- Decorative layers (`hero-grid`, `hero-glow`, thumbnails, `↗` glyphs, timeline dots) are `aria-hidden`/`alt=""`.
- `menu-button` carries `aria-expanded`/`aria-controls`; `status-badge`, `availability` and `form-status` are text + color, never color alone.
- Targets ≥48px; `prefers-reduced-motion` flattens all animation; contrast must hold AA in **both** themes (the light accent `#b45309` exists because `#e8a35c` fails on white).

## The UX laws — applied

This page is judged against the Laws of UX (Jon Yablonski). Each law maps to a concrete rule here — if a change violates one, the change is wrong:

| Law | How this portfolio applies it |
| --- | --- |
| **Aesthetic-Usability** | Polish buys trust: the glow, grid and hairline system exist so visitors forgive small flaws. They must never cost readability — motifs stay behind `aria-hidden` and under opacity `.24` |
| **Doherty Threshold** | Feedback under ~400ms everywhere: 180–220ms hovers, instant nav underline, submit shows "Sending…" immediately. Anything slower gets a skeleton or a status, never silence |
| **Fitts's Law** | Primary actions are 48px+; every secondary control (nav toggles, menu, modal close) is ≥44px; nav links have real padding |
| **Goal-Gradient** | The journey builds toward contact and progress is always visible: the `scroll-progress` line fills with page depth, the nav marks the active section (`a.is-active` via IntersectionObserver + `aria-current`), the timeline's `Current` badge shows momentum, and the page ends on a working form |
| **Hick's Law** | Five nav items, one primary CTA per view, two hero actions. Adding a sixth nav link means removing one, not squeezing |
| **Jakob's Law** | Conventional order (profile → skills → experience → projects → contact), top nav, footer signature. Recruiters already know how this page works — novelty lives in the motifs, not the structure |
| **Common Region** | Cards and hairline boxes group what belongs together (`skill-group`, `project-card`, `contact-form`). Related content never floats ungrouped |
| **Proximity** | `tag-list` clusters, `form-row` pairs name+email, `contact-details` stacks related info. Spacing tells the grouping before the eye reads a word |
| **Prägnanz** | Motifs are the simplest shapes possible: circles, hairlines, rectangles. No blobs, no waves, no decorative SVG art |
| **Similarity** | All chips look like chips, all buttons share `.button`. Same shape = same behavior; an element that behaves differently must look different |
| **Uniform Connectedness** | The timeline's vertical hairline and the grids' shared borders connect items more strongly than whitespace alone — that's why hairlines are the house grouping device |
| **Miller's Law** | 4–6 items per skill group, ≤5 tech tags per project, 5 nav links, 4 strengths. A group that needs 8 items gets re-categorized first |
| **Occam's Razor** | One typeface, one accent, one page, two breakpoints. When in doubt, delete — dead stubs, unused config and legacy files are removed, not archived |
| **Pareto Principle** | ~20% of the content carries ~80% of the attention, and it's the numbers: `metric-card`, `impact-chip`, `project-impact` get the biggest type on the page |
| **Parkinson's Law** | Scope stays fixed: a project is a card + one modal, not a sub-site; a section is one screen, not three. Constraints are the design |
| **Peak-End Rule** | Peaks: the hero metric grid and the modal's impact numeral. End: a working contact form followed by a personal footer signature — the last thing seen is the most human |
| **Postel's Law** | Inputs accept loose input (trim, `maxLength`) and fail kindly: validation is inline, localized and styled (`field-error`, `is-invalid`, `aria-invalid`) — never browser bubbles in the wrong language; missing EmailJS config degrades to a helpful message |
| **Serial Position** | First and last items carry the most weight — strongest project opens the grid, second-strongest closes it; nav starts at Profile and ends at Contact |
| **Tesler's Law** | Complexity is hidden, not absent: cards show summaries and the modal holds the detail; EmailJS/CI setup lives in README, not the UI |
| **Von Restorff Effect** | One deliberately odd element per view: the `impact-chip`, the `project-impact` numeral, the orbital glow. Two odd elements = none |
| **Zeigarnik Effect** | `pending-label` openly shows unfinished case studies — deliberate incompleteness signals a living, maintained site and invites a return visit |

## Voice

- First person, direct, senior-tone. Headlines state capability + scale ("I build full-stack products…"), sections frame outcomes ("Measurable outcomes in critical systems").
- Buttons say what they do: "Let's talk", "View projects", "Send message" — never "Submit" or "Click here".
- Errors say what happened and what to do instead (the send-failure copy points to direct email).
- No filler adjectives. "Passionate", "innovative", "cutting-edge" are banned; a number replaces them.
- English and Spanish carry the same claims with similar length — one language never gets the fuller version.

## Before shipping a section

- [ ] No hex, `rgb()` or named colors outside `src/index.css`; new tokens defined for **both** themes.
- [ ] Every string exists in `en.json` **and** `es.json`, at comparable length.
- [ ] One intentional non-generic detail — it could not belong to a stock template.
- [ ] Hairline + fill separates layers; no new shadows, no card-in-card.
- [ ] Motion follows the recipe: `y:20` entrance, `once:true`, ≤220ms CSS transitions, transform/opacity only.
- [ ] Keyboard-complete: focus ring visible, order logical, Esc closes what opens.
- [ ] Works at 320px, 700px, 960px and full width without shrink-to-fit type.
- [ ] Checked in both themes; the light theme is not an afterthought.
- [ ] `npm run lint` and `npm run build` pass.
