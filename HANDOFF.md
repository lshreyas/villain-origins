# villain-origins · project handoff

A long-scroll dossier visualizing how the countries of origin of Hollywood villains have changed across 1940–2025. Built as a static D3 site styled as a "Cold War Declassified" document.

## Live

- **Dossier:** https://www.lakhtak.io/villain-origins/
- **Methodology:** https://www.lakhtak.io/villain-origins/dataset.html
- **Repo:** https://github.com/lshreyas/villain-origins

GitHub Pages serves the repo. The custom domain `www.lakhtak.io` is configured at the account level, so the lshreyas.github.io URL is rewritten there automatically.

## Files

- `index.html` — the dossier itself: cover + nav + five exhibits in one long scroll.
- `dataset.html` — methodology page: how the dataset was built, what's in it, what's missing, and a searchable catalog of every film.
- `films.js` — shared data: decades, keys, fullNames, colors, films, events, eraBands, isoToCategory, industryContext. Loaded by both HTML pages.
- `.git/` — repo history.

No build step. D3 v7, topojson-client, world-atlas, and Google Fonts via CDN.

## What's built

### Dossier (`index.html`)

Five exhibits, in this order:

| # | Section | What it does |
|---|---------|--------------|
| I | **Overview** | Streamgraph of all 11 origins by decade; ribbons stack with `d3.stackOffsetWiggle`. Hover or click streams (and decade pills below) to drill into a panel that lists every film behind that ribbon. ESC clears. A **USA · DOMESTIC** toggle in the control bar redacts the US ribbon — re-stacks live with a keyed D3 join. |
| II | **The dataset** | Constellation — one dot per film on a year × country grid, jittered for stacked years. Hover any dot for film + villain + origin. |
| III | **World map** | Natural-Earth choropleth. Decade pills + "All time" pill at top (defaults to All time). Color scale adapts to the current view's max. Hover any shaded country for that decade's films. |
| IV | **By country** | Small-multiples sparkline per origin, area+line, sorted by lifetime total. Each peak decade marked with a labeled ring. |
| V | **The China question** | Multi-line chart of Hollywood foreign box office by country 2000–2024, with China in red, plus an analytical footnote explaining why China is underrepresented as a villain (box office dependence). Includes an inset bar chart of China villain count for direct contrast. |

### Methodology (`dataset.html`)

Eight numbered sections:

1. **Summary** — headline stats (films, origins, decades, coverage %)
2. **Industry context** — bar charts of US theatrical releases per decade with our sample overlaid, plus domestic box office per decade
3. **How we built it** — brainstorm → tag → iterate process
4. **What counts as Hollywood** — explicit inclusion criteria
5. **Tagging origin** — how the eleven buckets work, including the ambiguous cases (Söze, Le Chiffre, Gruber, Solomon Lane)
6. **Open questions** — three callouts addressing the design decisions
7. **What's missing** — list of enrichments we'd add
8. **Full catalog** — searchable/filterable table of every film with year, title, villain, origin chip

## Design

- **Aesthetic:** "Cold War Declassified" — manila paper background, sepia ink, alert-red accents, redacted blocks, declassified stamp, typewriter type.
- **Typography:** Special Elite (display), IBM Plex Mono (data labels + UI), IBM Plex Serif (body prose).
- **Palette:** see `:root` in `index.html` and `dataset.html`. Stream colors per-origin live in `films.js` under `colors`.
- **Data shape:** ~500 hand-curated films. Each entry is `[title, year, villain]` inside `films[decade][origin]`.

## Open questions / what's pending

From `dataset.html` Section 06:

1. **Should we drop US villains?** They're currently in (~17% of sample, 88 films). Strongest argument for cutting: the dossier is fundamentally about Hollywood's view of the foreign Other. Strongest argument for keeping: dropping them would erase the most interesting finding — that America's loudest screen enemy has been America since the 1970s. Compromise shipped: the USA · DOMESTIC toggle on Exhibit I lets the reader redact US villains and watch the streamgraph re-stack; the panel and decade `n=` counts update with it.
2. **How do we determine what's in the dataset?** No objective rule. The honest description is "films a reasonably well-read viewer can name."
3. **Why is China underrepresented?** Exhibit V argues it's box-office dependence. Could be partly sample bias too.

From `dataset.html` Section 07 ("What's missing"):

- IMDb / Rotten Tomatoes scores per film
- Box office per film (not just industry totals per decade)
- Secondary antagonists (we only track primary)
- Cast nationality vs. character nationality
- TV and streaming series — *Homeland*, *The Americans*, *Killing Eve*, *24*
- Synopsis-level NLP to auto-tag origin instead of hand curation

## Editing the data

`films.js` is the only place to update the dataset. Schema:

```js
const films = {
  "1980s": {
    Russia: [
      ["Rocky IV", 1985, "Ivan Drago"],
      // ...
    ],
    // ...
  },
  // ...
};
```

Reload either HTML page after editing — no build needed. The dossier recomputes its aggregates and the catalog regenerates the table.

`industryContext` (in `films.js`) holds the per-decade industry totals shown on the methodology page bar charts. Sourced from MPAA THEME, Box Office Mojo, Wikipedia; explicitly approximate.

## Workflow

```bash
# preview locally
open index.html
open dataset.html

# push changes (Pages auto-deploys on push to main)
git add -A
git commit -m "..."   # use HEREDOC for multi-line; signing not configured
git push origin main
```

Commits should be `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>` when generated this way (existing convention in `git log`).

## Conversation arc (for context)

1. Picked Hollywood villains + streamgraph + standalone D3 HTML; I curated the initial ~280-film dataset.
2. Explored other visual styles, settled on Cold War Declassified.
3. Added three more exhibits (constellation, world map, rankings/horizon) for a four-exhibit dossier.
4. Expanded dataset to ~500 films and reordered exhibits to the current 1–4 layout.
5. Added Exhibit V (The China question) after asking why China was underrepresented despite real geopolitical tension.
6. Built the methodology page (`dataset.html`) and extracted `films.js` for sharing data between the two HTML pages; fixed the China analytical footnote contrast issue; cleaned up slop copy throughout.

`git log` is the authoritative timeline — see commit messages for what changed when.

## Last touched

2026-06-29
