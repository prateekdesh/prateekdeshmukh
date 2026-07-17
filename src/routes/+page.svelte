<script>
  import { onMount } from 'svelte';
  import ToolCall from '$lib/components/ToolCall.svelte';

  let copied = false;
  function copyEmail() {
    navigator.clipboard.writeText('prateek.deshmukh19@gmail.com');
    copied = true;
    setTimeout(() => (copied = false), 2200);
  }

  // ── Experience: synced with resume (July 2026) ──────────
  const experience = [
    {
      idx: 0,
      key: 'natwest_group',
      role: 'Engineering Intern',
      company: 'NatWest Group',
      period: 'logging since Jun 2026',
      running: true,
      summary: 'Making retrieval inside a bank\u2019s agent platform persistent, hybrid, and fast.',
      note: 'a codebase where the import lists run longer than the business logic — and a CI pipeline slow enough to justify lunch.',
      bullets: [
        'Migrating Synapse — NatWest\u2019s internal agentic orchestration layer — from an in-memory vector store to PostgreSQL + pgvector: persistent, scalable semantic retrieval across enterprise AI workflows.',
        'Replaced Spring AI\u2019s default retrieval with a custom hybrid search pipeline — PostgreSQL full-text (tsvector) fused with BM25 ranking.',
        'Wired Synapse into AWS Agent Registry for runtime discovery and routing of specialized agents across enterprise domains.',
        'Building the Capability Registry: a central catalog of enterprise APIs that lets Synapse plan multi-step workflows on its own.'
      ],
      tags: ['java', 'spring boot', 'postgresql', 'pgvector', 'bm25', 'aws']
    },
    {
      idx: 1,
      key: 'together_fund',
      role: 'AI Engineer',
      company: 'Together Fund',
      period: 'logged Apr → May 2026',
      summary: 'Teaching a venture fund\u2019s network to answer \u201cwho can intro me?\u201d by itself.',
      note: 'recruiting, it turns out, is a graph-theory problem — at least when you\'re myopic beyond IIT/IIM.',
      bullets: [
        'Built an autonomous talent-discovery agent on the Anthropic Agents SDK — sources and enriches candidates from LinkedIn, GitHub and personal sites, improving profile completeness by 40–60%.',
        'Engineered a relationship-intelligence platform that models the fund\u2019s network (2000+ people) as a graph and finds the shortest introduction path to any founder, operator or investor.'
      ],
      tags: ['python', 'anthropic agents sdk', 'graphs', 'scraping']
    },
    {
      idx: 2,
      key: 'faff',
      role: 'AI Engineer',
      company: 'faff',
      period: 'logged Sep 2025 → Mar 2026',
      summary: 'AI? Backend? Devops? Frontend? Infra? Testing? Yes.',
      note: 'an insane seven-month run: I touched everything that could page me at 3 a.m.',
      bullets: [
        'Rebuilt the unacknowledged-message pipeline (Unack v2) — our detection of unacknowledged messages dropped from taking ~2 minutes to under 200 ms. Roughly 600× faster.',
        'Built the recurring-task engine: standing routines like \u201cmilk every Mon/Wed/Fri\u201d or \u201claundry, Saturdays at 2\u201d compile into child tickets on preset schedules — and nudge the ops team before anything slips.',
        'Built internal finance: thousands of weekly vendor payouts reconciled against customer wallets, with per-employee attribution so reimbursements stopped being anarchy.',
        'Shipped customer-facing LangGraph agents that resolve support tickets end-to-end, wired directly into the internal platform.',
        'Led the Razorpay → Cashfree migration: payment processing, webhook validation, automated GST invoicing through Zoho.',
        'Integrated Vapi voice agents with Google Maps APIs for vendor outreach — +25% accuracy across multilingual conversations.'
      ],
      tags: ['python', 'fastapi', 'postgresql', 'langgraph', 'vapi', 'cashfree']
    }
  ];

  // ── Incidents: war stories, told as post-mortems ───────
  const incidents = [
    {
      idx: 0,
      key: 'faff · webhooks.core',
      title: 'The 36-hour refactor',
      logs: [
        { t: 'T+00:00', lvl: 'OPEN', err: false, msg: 'every customer WhatsApp message flows through one 4,500-line script. one file. zero seams.' },
        { t: 'T+29:00', lvl: 'SHIP', err: false, msg: 'same behavior, now a modular service — swapped in behind the old interface' },
        { t: 'T+36:00', lvl: 'CLOSE', err: false, msg: '7+ hours of regression testing and code review. zero dropped messages.' }
      ],
      reflection: 'You don\u2019t get to pause customer messages while you rewrite the thing that receives them.'
    },
    {
      idx: 1,
      key: 'faff · db.cutover',
      title: 'The 2 a.m. migration',
      logs: [
        { t: 'fri 01:58', lvl: 'FREEZE', err: false, msg: 'messages table, MongoDB. millions of rows. cutover window opens.' },
        { t: 'fri 02:04', lvl: 'CUT', err: false, msg: 'Postgres takes writes. killswitch under my thumb the entire time.' },
        { t: 'fri 02:47', lvl: 'VERIFY', err: false, msg: 'row counts match. reads clean. the killswitch was never pressed.' }
      ],
      reflection: 'A migration should never be a bet you win by luck. I rehearsed the rollback until it was boring.'
    },
    {
      idx: 2,
      key: 'faff · rca.upstream',
      title: 'The bug that wasn\u2019t ours',
      logs: [
        { t: 'day 0', lvl: 'SEV', err: true, msg: 'downstream service misbehaving. nothing in our diffs. nothing in our logs — at first.' },
        { t: 'day 0', lvl: 'TRACE', err: false, msg: 'followed the failure out of our stack and into an external vendor\u2019s system' },
        { t: 'day 1', lvl: 'CLOSE', err: false, msg: 'filed with full logs and a repro. vendor confirmed, patched, resolved.' }
      ],
      reflection: 'The bug doesn\u2019t care whose repo it lives in. An RCA that stops at your own walls is just half a document.'
    },
    {
      idx: 3,
      key: 'personal · tooling',
      title: 'The grudge',
      logs: [
        { t: 'loop', lvl: 'WARN', err: true, msg: 'ngrok up → paste URL into provider → webhook barrage → kill server → ctrl+F the noise → repeat' },
        { t: 'break', lvl: 'BUILD', err: false, msg: 'wrote hooked: inspect and filter webhook payloads in real time, keep the flow' }
      ],
      href: 'https://github.com/prateekdesh/hooked',
      host: 'github.com/prateekdesh/hooked',
      reflection: 'Some tools are born from vision. This one was born from being annoyed four times in one afternoon.'
    }
  ];

  // ── Journal: hand-curated from blog.prateekdeshmukh.com ─
  // (no RSS on the blog — add entries here when you publish)
  const journal = [
    {
      idx: 0,
      date: '2026-07-04',
      title: 'Distill to your fill!',
      desc: 'I accidentally found myself inside a shadow data-labelling operation — one that distills frontier LLMs to package post-training data for other labs.',
      href: 'https://blog.prateekdeshmukh.com/writing/distill-to-your-fill',
      host: 'blog.prateekdeshmukh.com/writing/distill-to-your-fill'
    }
  ];

  // ── Projects: 3 featured (resume) + 4 more ─────────────
  const featured = [
    {
      idx: 0,
      title: 'Backademia',
      desc: 'MCP server exposing a reverse-engineered university portal — attendance, grades, timetable — as tools for LLMs. Secure scraping, auth and session management behind a REST API.',
      tags: ['python', 'fastapi', 'sqlite', 'mcp'],
      host: 'github.com/prateekdesh/backademia',
      href: 'https://github.com/prateekdesh/backademia'
    },
    {
      idx: 1,
      title: 'Hooked',
      desc: 'Born from ngrok fatigue — a CLI for inspecting and filtering webhook payloads in real time. Cut debugging time ~50% during production payment-gateway integrations.',
      tags: ['python', 'cli', 'webhooks'],
      host: 'github.com/prateekdesh/hooked',
      href: 'https://github.com/prateekdesh/hooked'
    },
    {
      idx: 2,
      title: 'Yaaru',
      desc: 'Real-time multiplayer party game with a hand-written WebSocket connection manager for concurrent player sync. Deployed and playable.',
      tags: ['typescript', 'python', 'websockets'],
      host: 'github.com/prateekdesh/yaaru',
      href: 'https://github.com/prateekdesh/yaaru'
    }
  ];

  const more = [
    {
      idx: 3,
      title: 'Hermes',
      desc: 'LangChain agent that ingests WhatsApp webhooks, infers intent, and updates the ticketing system — status, ETA, assignee — without human hand-holding.',
      note: 'origin=faff · 403 private'
    },
    {
      idx: 4,
      title: 'Faff Chat',
      desc: 'Real-time chat with Socket.io plus semantic thread recall via SentenceTransformers.',
      host: 'github.com/prateekdesh/faff-chat',
      href: 'https://github.com/prateekdesh/faff-chat'
    },
    {
      idx: 5,
      title: 'prats.blog',
      desc: 'My corner of the internet — writing on tech and startups. Started life as a hand-rolled React + FastAPI CMS; rebuilt in Astro when the writing mattered more than the plumbing.',
      host: 'blog.prateekdeshmukh.com',
      href: 'https://blog.prateekdeshmukh.com/'
    },
    {
      idx: 6,
      title: 'Vapi Voice Outreach',
      desc: 'Voice agents wired into Google Maps data to automate vendor calls; prompts and transcribers tuned for regional accuracy.',
      note: 'origin=faff · 403 private'
    }
  ];

  // ── Stack: backend first, on purpose ───────────────────
  const stack = [
    { key: 'backend', items: 'python · typescript · java · sql · fastapi · node.js · spring boot' },
    { key: 'infrastructure', items: 'postgresql · redis · rabbitmq · sqlite · docker · aws · gcp · cloudflare · linux' },
    { key: 'ai_systems', items: 'agentic systems · langgraph · mcp · rag · pydantic · webhooks · microservices' },
    { key: 'frontend', items: 'react · next.js · svelte · tailwind' }
  ];

  onMount(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
</script>

<svelte:head>
  <title>Prateek Deshmukh — Backend & Applied AI</title>
  <meta name="description" content="Backend and applied-AI engineer in Bengaluru. Agentic systems, retrieval pipelines, payment infrastructure — the parts that break in production, fixed before they do again." />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://prateekdeshmukh.com/" />
  <meta property="og:title" content="Prateek Deshmukh — Backend & Applied AI" />
  <meta property="og:description" content="Backend and applied-AI engineer in Bengaluru. Agentic systems, retrieval pipelines, payment infrastructure." />
  <meta property="og:image" content="https://prateekdeshmukh.com/og.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Prateek Deshmukh — Backend & Applied AI" />
  <meta name="twitter:description" content="Backend and applied-AI engineer in Bengaluru. Agentic systems, retrieval pipelines, payment infrastructure." />
  <meta name="twitter:image" content="https://prateekdeshmukh.com/og.png" />
</svelte:head>

<div id="top" class="relative mx-auto max-w-[1060px] px-5 md:px-10 pt-20 md:pt-24">

  <!-- ═══ Session preamble ═══════════════════════════════ -->
  <div class="font-mono text-[11px] md:text-[12px] leading-[2] text-dim mb-10">
    <div class="boot boot-1">
      <span class="text-faint">$</span> <span class="text-ink font-medium">trace</span> --live prateek-deshmukh
    </div>
    <div class="boot boot-2">
      <span class="text-faint">SESSION&nbsp;&nbsp;</span>region=ap-south-1 · bengaluru, IN · sampling=1.0
    </div>
    <div class="boot boot-3">
      <span class="text-faint">STATUS&nbsp;&nbsp;&nbsp;</span><span class="inline-flex items-center gap-1.5"><span class="dot-live"></span><span class="text-sig-deep font-medium">available_for_work</span></span> — interesting problems
    </div>
    <!-- <div class="boot boot-4">
      <span class="text-faint">CTX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>currently_reading=<span class="italic font-serif text-[14px] text-ink">“The Waves”</span> — virginia woolf
    </div> -->
  </div>

  <!-- ═══ The trace spine ════════════════════════════════ -->
  <div class="relative border-l border-rule ml-1 md:ml-2 pl-7 md:pl-14 pb-6">

    <!-- ── span 01 · identity ──────────────────────────── -->
    <section id="identity" class="visible pb-24 md:pb-32">
      <div class="boot boot-5">
        <ToolCall num="01" name="identity.resolve" args={'{ subject: "prateek" }'} dur="12ms" ok="200 OK" />
      </div>

      <div class="boot boot-6">
        <h1 class="font-serif font-medium text-ink leading-[0.98] tracking-[-0.02em] mb-6"
            style="font-size: clamp(3.1rem, 9vw, 6.5rem);">
          Prateek<br />
          Deshmukh
        </h1>
        <p class="font-mono text-[12px] md:text-[13px] text-sig-deep mb-10">
          <span class="text-faint">→ resolved ·</span> backend &amp; applied-AI engineer <span class="text-faint">·</span> bengaluru, IN
        </p>
      </div>

      <!-- the incident, and the point -->
      <div class="boot boot-7 font-mono text-[11px] md:text-[12px] leading-[2] mb-6">
        <div><span class="text-faint">03:12:44.108</span>&nbsp;&nbsp;<span class="text-err font-semibold">ERROR</span>&nbsp;&nbsp;<span class="text-dim">payments.webhook</span>&nbsp;&nbsp;<span class="text-ink">signature verification failed in prod</span></div>
        <div><span class="text-faint">03:41:02.551</span>&nbsp;&nbsp;<span class="text-sig font-semibold">INFO&nbsp;</span>&nbsp;&nbsp;<span class="text-dim">fix.deploy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;<span class="text-ink">patched · replayed · regression test added</span></div>
      </div>

      <p class="boot boot-8 font-serif italic text-[22px] md:text-[26px] leading-snug text-ink max-w-2xl mb-12">
        I build the parts that break in production — and fix them before they do again.<span class="caret ml-2"></span>
      </p>

      <div class="boot boot-9 flex flex-wrap items-center gap-4">
        <a href="/resume.pdf" target="_blank" rel="noreferrer" class="btn-trace">
          <span class="verb">GET</span> /resume <span class="text-faint">↗</span>
        </a>
        <a href="https://blog.prateekdeshmukh.com/" target="_blank" rel="noreferrer" class="btn-trace">
          <span class="verb">GET</span> /journal <span class="text-faint">↗</span>
        </a>
        <span class="font-mono text-[11px] text-faint ml-2 hidden sm:inline">trace continues ↓</span>
      </div>
    </section>

    <!-- ── span 02 · experience ────────────────────────── -->
    <section id="experience" class="reveal pb-24 md:pb-32 scroll-mt-24">
      <ToolCall
        num="02" name="experience.query" args={'{ order: "reverse_chronological" }'}
        pending="querying…" ok="3 records" dur="38ms"
      />

      {#each experience as job, i}
        <article class="reveal relative grid md:grid-cols-[180px_1fr] gap-x-10 gap-y-3 py-9 {i < experience.length - 1 ? 'border-b border-rule' : ''}"
                 style="transition-delay: {i * 90}ms">
          <div class="flex md:flex-col items-baseline md:items-start gap-x-4 gap-y-2">
            <span class="font-mono text-[11px] text-dim">{job.period}</span>
            {#if job.running}
              <span class="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase text-sig-deep">
                <span class="dot-live"></span> running
              </span>
            {:else}
              <span class="font-mono text-[10px] tracking-[0.12em] uppercase text-faint">done · 200</span>
            {/if}
          </div>

          <div>
            <div class="m-label mb-2">rec[{job.idx}] · {job.key}</div>
            <h3 class="font-serif text-[24px] md:text-[27px] font-medium leading-tight text-ink mb-3">
              {job.role} <em class="font-normal text-dim">· {job.company}</em>
            </h3>
            <p class="prose-out text-[17.5px] leading-normal text-ink mb-4 max-w-xl">
              {job.summary}
            </p>
            <ul class="flex flex-col gap-2.5 mb-5">
              {#each job.bullets as b}
                <li class="prose-out text-[15.5px] text-dim flex gap-3">
                  <span class="text-sig font-mono text-[12px] leading-[1.7] shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              {/each}
            </ul>
            <div class="flex flex-wrap gap-1.5">
              {#each job.tags as t}<span class="tok">{t}</span>{/each}
            </div>

            {#if job.note}
              <aside class="margin-note">
                <span class="note-mark">✳</span> {job.note}
              </aside>
            {/if}
          </div>
        </article>
      {/each}
    </section>

    <!-- ── span 03 · incidents ─────────────────────────── -->
    <section id="incidents" class="reveal pb-24 md:pb-32 scroll-mt-24">
      <ToolCall
        num="03" name="incidents.tail" args={'{ n: 4, resolved: true }'}
        pending="tailing…" ok="4 events" dur="112ms"
      />

      <div class="grid md:grid-cols-2 gap-x-12 gap-y-12">
        {#each incidents as inc, i}
          <article class="reveal" style="transition-delay: {i * 90}ms">
            <div class="m-label mb-2">inc[{inc.idx}] · {inc.key}</div>
            <h3 class="font-serif text-[22px] md:text-[24px] font-medium leading-tight text-ink mb-4">
              {inc.title}
            </h3>
            <div class="border border-rule bg-paper-2 px-4 py-3.5 font-mono text-[11px] leading-[1.9] mb-4">
              {#each inc.logs as log}
                <div class="flex gap-3">
                  <span class="text-faint shrink-0 w-[64px]">{log.t}</span>
                  <span class="{log.err ? 'text-err' : 'text-sig'} font-semibold shrink-0 w-[48px]">{log.lvl}</span>
                  <span class="text-dim">{log.msg}</span>
                </div>
              {/each}
              {#if inc.href}
                <div class="flex gap-3 mt-1 pt-2 border-t border-rule">
                  <span class="text-faint shrink-0 w-[64px]"></span>
                  <a href={inc.href} target="_blank" rel="noreferrer" class="link-mono text-[10.5px]">
                    <span class="text-sig font-semibold">GET</span> {inc.host} ↗
                  </a>
                </div>
              {/if}
            </div>
            <p class="font-serif italic text-[15.5px] leading-normal text-dim">
              <span class="note-mark">✳</span> {inc.reflection}
            </p>
          </article>
        {/each}
      </div>
    </section>

    <!-- ── span 04 · journal ───────────────────────────── -->
    <section id="writing" class="reveal pb-24 md:pb-32 scroll-mt-24">
      <ToolCall
        num="04" name="journal.recent" args={'{ limit: 3 }'}
        pending="fetching…" ok="1 entry" dur="87ms"
      />

      {#each journal as post, i}
        <article class="reveal grid md:grid-cols-[180px_1fr] gap-x-10 gap-y-2"
                 style="transition-delay: {i * 90}ms">
          <span class="font-mono text-[11px] text-dim pt-1">{post.date}</span>
          <div>
            <h3 class="font-serif text-[24px] md:text-[27px] font-medium leading-tight text-ink mb-3">
              <a href={post.href} target="_blank" rel="noreferrer"
                 class="no-underline text-ink hover:text-sig-deep transition-colors duration-200">
                {post.title}
              </a>
            </h3>
            <p class="prose-out text-[16px] text-dim max-w-2xl mb-4">{post.desc}</p>
            <a href={post.href} target="_blank" rel="noreferrer" class="link-mono text-[10.5px]">
              <span class="text-sig font-semibold">GET</span> {post.host} <span class="text-sig">→ 200 ↗</span>
            </a>
          </div>
        </article>
      {/each}

      <div class="mt-10 pt-4 border-t border-rule font-mono text-[11px] text-dim">
        <span class="text-faint">$</span> journal --all
        <a href="https://blog.prateekdeshmukh.com/" target="_blank" rel="noreferrer" class="link-mono text-[11px] ml-2">
          → blog.prateekdeshmukh.com ↗
        </a>
      </div>
    </section>

    <!-- ── span 05 · projects ──────────────────────────── -->
    <section id="projects" class="reveal pb-24 md:pb-32 scroll-mt-24">
      <ToolCall
        num="05" name="projects.scan" args={'{ filter: "shipped", featured: 3 }'}
        pending="scanning…" ok="7 objects" dur="64ms"
      />

      <!-- featured three -->
      <div class="grid md:grid-cols-3 gap-5 mb-14">
        {#each featured as p, i}
          <a
            href={p.href} target="_blank" rel="noreferrer"
            class="reveal group flex flex-col border border-rule bg-paper-2 p-6 no-underline transition-colors duration-200 hover:border-sig"
            style="transition-delay: {i * 90}ms"
          >
            <div class="m-label mb-4">obj[{p.idx}] · featured</div>
            <h3 class="font-serif text-[24px] font-medium text-ink leading-tight mb-3 group-hover:text-sig-deep transition-colors duration-200">
              {p.title}
            </h3>
            <p class="prose-out text-[15px] text-dim leading-normal mb-6 flex-1">{p.desc}</p>
            <div class="flex flex-wrap gap-1.5 mb-5">
              {#each p.tags as t}<span class="tok">{t}</span>{/each}
            </div>
            <div class="font-mono text-[10.5px] text-dim border-t border-rule pt-3 flex items-baseline justify-between gap-2">
              <span class="truncate"><span class="text-sig font-semibold">GET</span> {p.host}</span>
              <span class="text-sig shrink-0">200 ↗</span>
            </div>
          </a>
        {/each}
      </div>

      <!-- the other four -->
      <div class="m-label mb-4">…4 more objects</div>
      <div class="flex flex-col">
        {#each more as p, i}
          <div class="reveal border-t border-rule py-5 grid md:grid-cols-[minmax(0,1fr)_auto] gap-x-8 gap-y-2 items-baseline"
               style="transition-delay: {i * 70}ms">
            <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span class="font-mono text-[11px] text-faint">[{p.idx}]</span>
              <h3 class="font-serif text-[19px] font-medium text-ink">{p.title}</h3>
              <p class="prose-out text-[14.5px] text-dim w-full md:w-auto md:flex-1 leading-normal">{p.desc}</p>
            </div>
            {#if p.href}
              <a href={p.href} target="_blank" rel="noreferrer" class="link-mono text-[10.5px] whitespace-nowrap">
                <span class="text-sig font-semibold">GET</span> {p.host} ↗
              </a>
            {:else}
              <span class="font-mono text-[10.5px] text-faint whitespace-nowrap">{p.note}</span>
            {/if}
          </div>
        {/each}
      </div>
    </section>

    <!-- ── span 06 · stack ─────────────────────────────── -->
    <section id="stack" class="reveal pb-24 md:pb-32 scroll-mt-24">
      <ToolCall
        num="06" name="capabilities.manifest" args={'{}'}
        pending="loading…" ok="200 OK" dur="9ms"
      />

      <div class="border border-rule bg-paper-2 p-6 md:p-8 font-mono text-[12px] md:text-[13px] leading-[2.1]">
        <div class="text-faint mb-2"># backend first — the agents are only as good as the systems underneath them.</div>
        {#each stack as row, i}
          <div class="reveal grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-x-6" style="transition-delay: {i * 70}ms">
            <span class="text-sig-deep font-medium">[{row.key}]</span>
            <span class="text-ink">{row.items}</span>
          </div>
        {/each}
      </div>
    </section>

    <!-- ── span 07 · education ─────────────────────────── -->
    <section id="education" class="reveal pb-24 md:pb-32 scroll-mt-24">
      <ToolCall
        num="07" name="education.lookup" args={'{}'}
        pending="looking up…" ok="1 record" dur="21ms"
      />

      <div class="grid md:grid-cols-[minmax(0,1fr)_auto] gap-x-12 gap-y-6 items-end">
        <div>
          <div class="m-label mb-2">rec[0] · srm_ist</div>
          <h3 class="font-serif text-[24px] md:text-[27px] font-medium leading-tight text-ink mb-2">
            SRM Institute of Science and Technology
          </h3>
          <p class="font-mono text-[11.5px] text-dim">B.Tech, Artificial Intelligence · 2023 — 2027 · kattankulathur</p>
        </div>
        <div class="font-mono text-[13px] md:text-[14px]">
          <span class="text-sig tracking-tight">█████████</span><span class="text-rule">░</span>
          <span class="text-ink font-semibold ml-3">9.04</span>
          <span class="text-faint">/ 10 cgpa</span>
        </div>
      </div>
    </section>

    <!-- ── span 08 · contact ───────────────────────────── -->
    <section id="contact" class="reveal pb-10 scroll-mt-24">
      <ToolCall
        num="08" name="contact.open" args={'{ channels: "all" }'}
        pending="opening…" ok="202 Accepted" dur="2ms"
      />

      <h2 class="font-serif font-medium text-ink leading-[1.02] tracking-[-0.015em] mb-5"
          style="font-size: clamp(2.4rem, 6vw, 4.5rem);">
        Let’s build something<br /><em class="font-normal">worth breaking.</em>
      </h2>
      <p class="prose-out text-dim max-w-xl mb-10">
        Open to interesting problems. If something clicks, say the word.
      </p>

      <!-- the payload -->
      <div class="border border-rule bg-paper-2 font-mono text-[11.5px] md:text-[12.5px] leading-[2] max-w-2xl">
        <div class="border-b border-rule px-5 md:px-7 py-3 text-dim">
          <span class="text-sig font-semibold">POST</span> /hooks/contact <span class="text-faint">HTTP/1.1 · content-type: application/json</span>
        </div>
        <div class="px-5 md:px-7 py-5">
          <div class="text-faint">&#123;</div>
          <div class="pl-5 flex flex-wrap items-baseline gap-x-4">
            <span><span class="text-dim">"email"</span><span class="text-faint">:</span> <span class="text-sig-deep">"prateek.deshmukh19@gmail.com"</span><span class="text-faint">,</span></span>
            <button on:click={copyEmail} class="link-mono text-[10.5px] {copied ? 'text-sig-deep' : ''}">
              {copied ? '202 · copied to clipboard' : '[ copy ]'}
            </button>
          </div>
          <div class="pl-5 flex flex-wrap items-baseline gap-x-4">
            <span><span class="text-dim">"github"</span><span class="text-faint">:</span> <span class="text-sig-deep">"github.com/prateekdesh"</span><span class="text-faint">,</span></span>
            <a href="https://github.com/prateekdesh" target="_blank" rel="noreferrer" class="link-mono text-[10.5px]">[ open ↗ ]</a>
          </div>
          <div class="pl-5 flex flex-wrap items-baseline gap-x-4">
            <span><span class="text-dim">"linkedin"</span><span class="text-faint">:</span> <span class="text-sig-deep">"linkedin.com/in/prateekdeshmukh-"</span><span class="text-faint">,</span></span>
            <a href="https://linkedin.com/in/prateekdeshmukh-/" target="_blank" rel="noreferrer" class="link-mono text-[10.5px]">[ open ↗ ]</a>
          </div>
          <div class="pl-5 flex flex-wrap items-baseline gap-x-4">
            <span><span class="text-dim">"twitter"</span><span class="text-faint">:</span> <span class="text-sig-deep">"x.com/prateekdesh19"</span></span>
            <a href="https://x.com/prateekdesh19" target="_blank" rel="noreferrer" class="link-mono text-[10.5px]">[ open ↗ ]</a>
          </div>
          <div class="text-faint">&#125;</div>
        </div>
        <div class="border-t border-rule px-5 md:px-7 py-3">
          <a href="mailto:prateek.deshmukh19@gmail.com" class="link-mono text-[11px]">
            <span class="text-sig font-semibold">→ 202 Accepted</span> · or just send mail directly
          </a>
        </div>
      </div>
    </section>

  </div>
</div>
