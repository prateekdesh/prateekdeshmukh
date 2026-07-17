# DESIGN.md — "The Trace"

> The operating manual for prateekdeshmukh.com. Read this before changing **any**
> design or content, and the site will stay coherent no matter who (or what) edits it.

---

## 1. The concept

The entire site is **one observability trace**: an agent session inspecting the
subject `prateek-deshmukh`. Every section is a tool call (`experience.query()`,
`incidents.tail()`, `contact.open()`), every piece of content is that call's
output, and the page ends with `session.end()`.

This isn't decoration — it's the argument. Prateek builds agentic systems and
backend infrastructure; the portfolio *is* a trace because traces are what he
works in. The metaphor must stay load-bearing: if you add a section, it must be
a plausible tool call. If a piece of chrome wouldn't appear in a real trace/log,
it doesn't belong here.

**The core design tension (protect this above all):**

| Layer | Voice | Typeface | Color |
|---|---|---|---|
| Machine chrome (span annotations, statuses, log lines, tokens, nav) | terse, lowercase, technical | IBM Plex Mono | green `sig` / muted inks |
| Human content (headings, names, summaries, bullets, reflections) | warm, literary, first-person | Newsreader serif | full `ink` |

The site is the systems engineer *and* the person reading Virginia Woolf, on
one page. Remove either voice and the design collapses.

**Hierarchy rule (learned from user testing — do not regress):** the human
layer LEADS, the machine layer ANNOTATES. Section headings are plain English
serif ("Where I've worked"); the tool call is a small mono note on the same
baseline. Deep technical detail collapses behind expanders. An early version
led with function signatures and 4-line session preambles — real readers called
it "too dense and techy." The trace is seasoning, not the meal.

**It reads as a journal, not a resume.** Entries, incidents, marginalia,
opinions. Facts support stories — never the reverse.

---

## 2. Non-negotiables

1. **Light paper theme.** Never add a dark mode. The dark-terminal portfolio is
   the cliché this design exists to escape.
2. **One accent color** (`sig` green) for all machine-positive states, plus `err`
   red used *narratively and sparingly* (the hero ERROR line, incident SEV/WARN
   lines). Red must stay rare or it stops meaning anything.
3. **Square corners everywhere.** No border-radius except the pulse dot.
4. **No custom cursors, no film grain, no glow effects, no gradients.**
   The paper texture is a set of faint horizontal ledger lines — that's it.
5. **The trace must resolve.** Span annotations flip `pending → OK` on scroll;
   incidents are always shown resolved; the footer closes with
   `incidents=3 (all resolved)`. Never leave a narrative thread open.
6. **Calm surface, deep wells.** The default view of any section must scan in
   seconds (serif heading, summary, 2 bullets). Full density lives behind
   `▸ expand` controls. Never let visible chrome outnumber visible content.

---

## 3. Color tokens

Defined in both `tailwind.config.js` and `src/app.css` (`:root`) — **keep them in sync**.

| Token | Hex | Use |
|---|---|---|
| `paper` | `#f5f2e9` | page background |
| `paper-2` | `#eeeadf` | inset blocks: log boxes, manifest, payload, featured cards |
| `ink` | `#211f1a` | primary text |
| `dim` | `#6d675a` | secondary text (bullets, descriptions, mono values) |
| `faint` | `#9c9583` | tertiary metadata (labels, timestamps, punctuation) |
| `rule` | `#dcd5c3` | all hairlines and borders |
| `sig` | `#156d4d` | signal green: tool calls, statuses, verbs, markers, accents |
| `sig-deep` | `#0d4f37` | green hover states + strings/values |
| `err` | `#b23a2f` | error red — narrative use only |

Usage rules:
- JSON-ish keys are `dim`, values/strings are `sig-deep`, punctuation is `faint`.
- HTTP verbs (`GET`, `POST`) are always `sig` + semibold.
- Never introduce a new hue. If something needs emphasis, use weight, size, or serif italic.

---

## 4. Typography

Loaded in `src/app.html` via Google Fonts:

- **IBM Plex Mono** (400/500/600 + italic 400) — machine chrome only. Sizes live
  between **10–13px**. Small mono labels use `.m-label` (10px, uppercase,
  `letter-spacing 0.14em`).
- **Newsreader** (variable, optical sizing, italics) — ALL human content.
  - Display (name): `clamp(3.1rem, 9vw, 6.5rem)`, weight 500, `tracking -0.02em`,
    `leading 0.98`. **Both lines of the name are roman — never split roman/italic
    across first/last name.**
  - Section headings (in `ToolCall`): `clamp(1.75rem, 3.6vw, 2.5rem)`, weight 500.
  - Record headings: 23–28px, weight 500; company/context after the role in
    italic `dim`.
  - Prose (`.prose-out`): 16–18px, line-height 1.6. Summaries 18px `ink`,
    bullets 16px `dim`.
  - Italic = the "handwriting" register: tagline, margin notes, reflections.

Do not add a third typeface. Do not use Inter/DM Sans/Space Grotesk/JetBrains
Mono — those are the fingerprints of the old vibecoded site and of AI-generated
portfolios generally.

---

## 5. Layout system

```
┌ TraceNav (fixed, h-12, blurs + rules on scroll) ─────────────┐
│  mx-auto max-w-[1060px] px-5 md:px-10                        │
│                                                              │
│  Session preamble: ONE mono line                             │
│  ($ trace --live · ● available_for_work · bengaluru)         │
│  ┌ spine wrapper: border-l border-rule ml-1 md:ml-2          │
│  │                pl-7 md:pl-14                              │
│  ◆ span_01 · identity.resolve() · 200 OK   ← tiny annotation │
│  │   PRATEEK DESHMUKH (huge serif)                           │
│  ◆ "Where I've worked"   span_02 · experience.query() · ...  │
│  │   records...                                              │
│  └ (sections separated by pb-24 md:pb-32)                    │
│  footer: session.end() diamond closes the spine              │
└──────────────────────────────────────────────────────────────┘
```

- **The spine** is the single vertical `border-l` running the entire trace.
  Span markers are 9px green diamonds (`rotate-45`, `-translate-x-[5px]`,
  at `-left-7 md:-left-14`).
- Two-column record layout: `grid md:grid-cols-[180px_1fr] gap-x-10`
  (left = mono metadata: period/status/date; right = content).
- **Margin notes** (`.margin-note`): inline aside with a green left edge below
  `1420px`; at `≥1420px` they float into the right margin
  (`absolute; right: -215px; width: 185px`). Parent `<article>` must be `relative`.

---

## 6. Component vocabulary

| Thing | Where | Notes |
|---|---|---|
| `ToolCall` | `src/lib/components/ToolCall.svelte` | Section header, human-first. Props: `num, heading, call, pending, ok`. Serif heading leads (or pass markup via the default slot — contact does this for the italic em); annotation reads `span_NN · tool.call() · status`. No args, no fake durations. |
| `TraceNav` | `src/lib/components/TraceNav.svelte` | Fixed nav. Links carry span numbers; `hideMobile: true` trims the list on small screens. Active section via IntersectionObserver. |
| `.status-swap` | `app.css` | Pending text overlays the OK text; ancestor `.visible` fades OK in after 0.45s. The OK state defines the width (prevents mobile overflow). |
| `details.span-detail` | `app.css` | Native `<details>` expander styled as trace chrome. Summary shows `▸ expand full record · N more` / `▸ show the log`, flips to `▾ collapse` via `.exp-closed`/`.exp-open` spans. No JS. |
| `.m-label` | `app.css` | 10px mono uppercase metadata. Used sparingly now: incident origins (`faff · db.cutover`), "and 4 more". No `rec[n]`/`obj[n]` index labels — they were cut as noise. |
| `.tok` | `app.css` | Lowercase mono tech tokens (`postgresql`, `langgraph`). Always lowercase. |
| `.btn-trace` | `app.css` | Bordered mono button; hover floods `sig` green. Label format: `VERB /path ↗`. |
| `.margin-note` + `.note-mark` | `app.css` | Serif italic marginalia prefixed with green `✳`. |
| `.prose-out` | `app.css` | Serif body text inside tool outputs. |
| Log lines | inline in `+page.svelte` | `timestamp (faint) · LEVEL (sig or err, semibold) · message (dim/ink)`, mono 11–12px. Only inside incident logs, which are collapsed by default. The hero has no log block — it was cut as too techy for the first screen. |
| `.dot-live` | `app.css` | 7px pulsing green dot — only for genuinely *current* things (availability, current job). |
| `.caret` | `app.css` | Blinking block caret — hero tagline only. Keep it singular. |

---

## 7. Motion

- **Boot sequence** (hero only): `.boot .boot-1 … .boot-5` staggered
  `animation-delay`. One preamble line, then annotation, name, tagline, buttons.
- **Scroll reveals**: `.reveal` + IntersectionObserver (in `+page.svelte`
  `onMount`) adds `.visible`. Children stagger via inline
  `transition-delay: {i * 70–90}ms`.
- **Status resolution**: `.visible` on a section flips its annotation
  `pending → OK` after 0.45s — the span "completes" as you reach it.
- All motion is opacity/transform only, ≤0.5s, eased. **No parallax, no
  scroll-jacking, no springy easing.**
- `prefers-reduced-motion` is fully handled in `app.css` — anything new must
  degrade there too.

---

## 8. Span registry

Numbering is **narrative order**, hard-coded in three places — keep them
consistent: section `id` + `ToolCall num` (`+page.svelte`), nav `links`
(`TraceNav.svelte`), and `spans=N` in the footer (`+layout.svelte`).

| Span | id | Heading | Tool call annotation |
|---|---|---|---|
| 01 | `identity` | — (the name is the heading) | `identity.resolve() · 200 OK` |
| 02 | `experience` | Where I've worked | `experience.query() · 3 records` |
| 03 | `incidents` | Things that (almost) broke | `incidents.tail() · 3 resolved` |
| 04 | `writing` | Writing | `journal.recent() · 1 entry` |
| 05 | `projects` | Things I've built | `projects.scan() · 7 shipped` |
| 06 | `stack` | What I use | `capabilities.manifest() · 200 OK` |
| 07 | `education` | Where I studied | `education.lookup() · 1 record` |
| 08 | `contact` | Let's build something *worth breaking.* | `contact.open() · 202 Accepted` |

Statuses count real things (`3 records` must match the number of jobs shown).
Headings are plain + warm; keep them short enough to share a baseline with the
annotation on desktop.

**When inserting/removing a span:** renumber everything after it, update the
nav, update the footer `spans=` count. The nav deliberately skips some spans —
skipping is fine; wrong numbers are not.

---

## 9. Content rules (the voice)

### General
- Machine chrome is lowercase (`available_for_work`, `faff · db.cutover`).
  Human prose uses normal capitalization.
- Numbers beat adjectives: "~2 minutes to under 200 ms — roughly 600× faster"
  not "dramatically faster". Every claim should survive an interview follow-up.
- Personality lives in *specificity* ("reimbursements stopped being
  archaeology"), never in exclamation marks or emoji. **No emoji, ever.**

### Experience records
- `period` uses journal grammar: `logged Apr → Jun 2026`; current role =
  `logging since Jun 2026` + `running: true` (pulse dot, max one). Past = `done · 200`.
- Each record: **serif summary sentence first** (the entry's thesis), then all
  bullets (ordered by impact, keep the list tight — if a job needs more than
  ~5, cut the weakest), then `.tok` tags, then optionally a `note`. Jobs do NOT
  use expanders — recruiters must see the record whole; expanders are for
  incident logs only.
- Summaries are one sentence, opinionated, no jargon.

### Margin notes
- First person, wry, one sentence, must sound like Prateek (he supplies or
  approves every one). They comment on the record like handwriting in a ledger.

### Incidents (war stories)
- Format per entry: `m-label` origin (`faff · rca.upstream`), serif title
  ("The 2 a.m. migration"), then the **serif italic reflection** (visible — it's
  the human payoff), then `▸ show the log` expanding the boxed log (2–4 mono
  lines; timestamps relative `T+29:00` or clock `fri 01:58`).
- Only real events, with details verified by Prateek. Never invent incidents.
- `err` red is allowed here on SEV/WARN lines only.

### Journal
- Hand-curated array in `+page.svelte` (`journal`) — the blog has no RSS yet.
  When a post publishes: add `{ idx, date, title, desc, href, host }`, bump the
  ToolCall `ok` count. Keep ≤3 on the page; the `$ journal --all` line links out.

### Projects
- Featured 3 (mirrors the resume) as `paper-2` cards; the rest as compact rows
  under a small "and 4 more" label.
- Descriptions lead with origin/motivation where possible ("Born from ngrok fatigue…").
- Live/public → `GET host → 200 ↗`. Employer-internal → `origin=<company> · 403 private`
  (a private status is more credible than no link).

### Stack manifest
- Order is deliberate: **backend, infrastructure, ai_systems, frontend** —
  backend identity first. Keep the comment line
  `# backend first — the agents are only as good as the systems underneath them.`

---

## 10. Recipes

**Update the resume** → overwrite `static/resume.pdf`. The hero button GETs `/resume.pdf`.

**New job** → add to `experience` array (summary + note + bullets ordered by
impact + toks), update `ok="N records"` on span 02, move `running: true` to the
current role (only one may pulse), update the resume too.

**New blog post** → `journal` array + `ok` count (see §9).

**New incident** → `incidents` array + `ok="N resolved"` + footer `incidents=N`.

**Change availability** → the single preamble line (`+page.svelte`). If not
looking: swap `dot-live`/green for `faint` text like `status=heads_down` —
don't delete the line.

**Verify changes** → `npm run build && npm run preview`, check ~1440px+ (margin
notes float at ≥1420px), ~1280px (notes inline), and 390px (nav trims to
experience/projects/contact, statuses right-aligned). Test expanders open/closed.

---

## 11. File map

```
src/app.html                     fonts (IBM Plex Mono + Newsreader), theme-color
src/app.css                      tokens, paper texture, utility classes, expanders, motion
tailwind.config.js               color/font tokens (mirror of app.css)
src/routes/+layout.svelte        TraceNav, session.end() footer, footer links
src/routes/+page.svelte          ALL content data + all eight spans
src/lib/components/ToolCall.svelte   human-first span header
src/lib/components/TraceNav.svelte   fixed nav
static/resume.pdf                served at /resume.pdf
static/favicon.png
```

All content is plain JS arrays at the top of `+page.svelte` — edit data, not
markup, for routine updates.

---

## 12. Known gaps

- **`og.png` is referenced in meta tags but doesn't exist.** Make one in the
  trace style: paper bg, mono session line, serif name, green diamond.
- Blog has no RSS — journal span is hand-curated until `@astrojs/rss` is added there.
- The blog's "Hello World" dummy post should be deleted (the site links there
  deliberately now).

---

## 13. Anti-patterns (how this site dies)

If a future edit introduces any of these, it's off-theme — revert it:

- Dark mode, glassmorphism, gradients, glows, purple anything
- A third font, or swapping to Inter/Space Grotesk/JetBrains Mono
- Rounded cards with drop shadows; icon libraries for decoration
- Scroll-jacking, parallax, typewriter effects beyond the existing boot stagger
- Resume-speak creeping back in ("Spearheaded…", "Results-driven…")
- Trace chrome that lies (statuses that don't count anything, fake features)
- **Chrome creep**: function signatures as headings, multi-line preambles,
  index labels (`rec[0]`, `obj[3]`), fake durations — all were tried and cut
  after readers called the site "too dense and techy." The machine layer never
  leads again.
- Emoji, exclamation points, "passionate about scalable systems"

The test for any change: **would this plausibly appear in a real trace, does it
sound like Prateek wrote it by hand — and can a non-engineer skim the section
in five seconds?** If any answer is no, don't ship it.
