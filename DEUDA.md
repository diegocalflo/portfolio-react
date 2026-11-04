# Deuda · Projects backlog & technical debt

Living backlog of work for the portfolio. Conventions follow `DESIGN.md` — especially: a project leads with a real number (`impact-chip`), carries ≤5 tech tags, and its copy exists in both `en.json` and `es.json` before `ready` flips to `true`.

## How a project ships

1. **Register the skeleton** — add the entry in `src/constants/index.js` → `projects` with `ready: false`. The card renders immediately, dimmed (`is-pending`) with a `pending-label`: the site publicly shows what's coming.
2. **Write the copy** — create `titleKey`, `summaryKey`, `detailKey` in **both** locale files under `projects.<id>`. EN and ES at comparable length.
3. **Add the asset** — drop the thumbnail in `src/assets/projects/` and export it from `src/assets/index.js`. Square-ish artwork works best (`object-fit: contain` inside a 230px visual).
4. **Flip `ready: true`** once the modal detail is final. Move the row from Backlog to Published below.

Status values: `idea` → `documented` (copy drafted) → `ready` (all assets in place) → `published`.

## Backlog

New entries: copy the template row, keep the strongest projects first and last in the grid (Serial Position — see DESIGN.md).

| Project | Status | Stack | Impact | Asset | Notes |
| --- | --- | --- | --- | --- | --- |
| _template — replace me_ | idea | `A`, `B`, `C` | _real number, e.g. `40% faster`_ | `src/assets/projects/<name>.png` | One-line context: who it was for, what broke before |
| | idea | | | | |
| | idea | | | | |

## Published

| Project | Status | Stack | Impact | Notes |
| --- | --- | --- | --- | --- |
| `sales-capture` — BBVA–AMEX sales capture | published | Spring Boot, GraphQL, Apollo Federation | `16K / 3 min` | Opens the grid |
| `kafka-platform` — Kafka transaction platform | published | Kafka, jPOS, Spring Boot, ISO 8583 | `1,000 tx/s` | |
| `brimmer-web` — Colegio Brimmer website | published | Vue, Vite, JavaScript | `Solo build` | Live at colegiobrimmer.edu.mx. SVG placeholder — replace with a real screenshot |
| `etl-migration` — ETL modernization | published | Informix, Spring Batch, ETL | `Informix → Spring Batch` | |
| `qa-automation` — QA test automation | published | SmartBear, Selenium, JUnit | `Frontend + Backend` | |
| `brimmer-pos` — Brimmer Café school POS | published | Vue, Vuetify, TypeScript, Chart.js | `In production` | Closes the grid (flagship). Live at cafeteria.colegiobrimmer.edu.mx. SVG placeholder — replace with a real screenshot |

## Technical debt

| Item | Effort | Notes |
| --- | --- | --- |
| `.skill-icon` `#ffffff` hardcodes its icon color | XS | Documented exception in DESIGN.md — keep or tokenize deliberately |
| No tests — changes rely on `lint` + `build` + manual check | M | At minimum, a smoke check that both locales render every key |
| `Diego-Calderon-Resume-EN.pdf` is unimported (contains a template-residue name, "Orlando Valle Figueroa") | XS | Regenerate the file cleanly or delete it — the download menu ships the two current CVs |

## Rules for this file

- Backlog rows are honest: an `idea` with no impact number stays an `idea` until the number is real.
- Nothing enters `Published` without both locales and a working modal.
- When a technical-debt item is fixed, the row is removed — this file is a queue, not a changelog.
