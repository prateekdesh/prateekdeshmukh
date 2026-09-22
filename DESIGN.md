# DESIGN.md — The Uniform

## The premise

The site should feel like a black T-shirt that fits exceptionally well: quiet,
useful, repeatable, and free of visible effort.

It is not a technology-themed interface, a fashion statement, or a personal
brand campaign. It should make Prateek's work and interests easy to understand,
then get out of their way.

The site should read like Prateek wrote it himself: direct, specific, a little
dry, and uninterested in sounding impressive.

## Design philosophy

### Default state, not performance

Nothing should look as though it exists to demonstrate design ability. Quality
comes from proportion, hierarchy, typography, alignment, and editing.

- No oversized poster typography.
- No editorial set pieces or colour-block chapters.
- No fake terminals, logs, commands, or system statuses.
- No cards unless a real interaction requires containment.
- No decorative texture, gradients, glow, glass, or ornamental icons.

### Evidence over adjectives

The site does not call Prateek curious, versatile, technical, or product-minded.
It provides evidence:

- Work begins with the actual problem and exposes implementation detail on
  demand.
- Writing demonstrates independent curiosity.
- Side projects demonstrate self-direction and taste.
- Specific personal details do more work than a generic biography.

### Progressive depth

The default page must be scannable in under a minute. Work rows expose company,
problem, period, and one result. Native disclosure controls contain the deeper
record for visitors who want it.

This is not hiding information. It is respecting two different reading modes.

## Visual system

### Colour

- `black #0c0d0c` — page background
- `surface #111310` — hover and active rows
- `text #e6e8e1` — primary type; warmer than pure white
- `muted #8b9087` — explanation and secondary metadata
- `line #292c27` — structure
- `signal #98a88a` — muted lichen green

The signal colour is functional. It marks active information, external arrows,
section indices, focus, and progress. It should never become a large decorative
surface.

### Typography

- **Hanken Grotesk** is the only voice used for names, headings, and prose. Its
  role is neutral but not anonymous.
- **Fragment Mono** is used for dates, labels, results, navigation, and other
  interface-scale information.

The restraint of two typefaces is deliberate. Hierarchy should be created with
size, spacing, colour, and placement—not a collection of personalities.

### Layout

- Maximum content width: 1120px.
- The hero is spacious but not theatrical.
- Sections use a stable label/content split.
- Work and project records share the same row logic.
- Horizontal rules establish rhythm; containers do not float as cards.
- On mobile, records become vertical while preserving the order: identity,
  problem, result, detail.

## Content order

1. **Identity:** name, location, one useful description, and a highlighted but
   deliberately brief note about being a founding engineer at Corpus.
2. **Selected work:** three concise records with optional implementation depth.
3. **Writing:** one deliberately featured investigation and a route to the blog.
4. **Independent work:** projects as compact, comparable rows.
5. **Elsewhere:** a specific human portrait without a full About section.
6. **Contact:** a direct invitation and copyable email address.

The detailed résumé remains linked rather than reproduced.

## Interaction

- The page loads in four quiet beats.
- Content moves no more than twelve pixels when revealed.
- Rows receive a subtle surface change and small horizontal inset on hover.
- Native `<details>` elements handle work expansion.
- External arrows move a few pixels to confirm interaction.
- A two-pixel signal line communicates scroll progress.
- Reduced-motion preferences remove all nonessential movement.

## Content rules

- Prefer real questions and concrete nouns over role language.
- Use numbers only when they are supported by the résumé or a source Prateek
  controls.
- Do not list a stack unless the technology explains a decision.
- Do not invent beliefs, present status, personal details, or reflections.
- Keep humour dry and incidental.
- Feature writing manually. Curation is more useful than automatically showing
  the newest post.
- Keep the page short enough that every item still feels chosen.

### Voice

- Use plain English and ordinary sentence rhythm.
- Prefer “I built the payout system” to “I solved an ambiguous operational
  challenge.”
- Do not turn every section heading into a slogan.
- Avoid portfolio phrases such as “survive contact with the real world,”
  “following a thread,” “made without being asked,” “at the intersection of,”
  and “turning ideas into impact.”
- A little humour is good when it sounds incidental, not written for a brand.
- If a sentence could appear unchanged on hundreds of engineering portfolios,
  rewrite it or remove it.
- Corpus should be prominent in the hero and sparse everywhere else. Do not
  speculate about or over-explain current work.

## The test

If colour and motion disappeared, the page should still feel considered.

When adding anything, ask:

1. Does this make Prateek easier to understand?
2. Does it help someone choose what to read next?
3. Would its absence make the page worse?

If the answer to all three is no, leave it out.
