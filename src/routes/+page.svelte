<script>
  import { onMount } from 'svelte';

  let copied = false;
  let scrollProgress = 0;

  const work = [
      {
        company: 'faff',
        period: 'Sep 2025—Mar 2026',
        context: 'Founding engineer',
        question: 'Seven months of building everything. No, seriously.',
        summary:
          'Faff was a personal concierge on WhatsApp. I worked on most of it: agents, payments, internal tools, payouts, infrastructure and a fair amount of debugging.',
        result: '<200 ms',
        resultNote: 'down from ~2 minutes',
        details: [
          'Shipped production consumer-facing AI agents',
          'Rebuilt unacknowledged message detection and cut latency from roughly two minutes to under 200 milliseconds.',
          'Built the internal system used to reconcile thousands of weekly vendor payouts.',
          'Moved payments from Razorpay to Cashfree and set up multilingual voice outreach.'
        ]
      },
    {
      company: 'NatWest Group',
      period: 'Jun—Aug 2026',
      context: 'Engineering intern',
      question: 'Agent discovery and retrieval for Synapse.',
      summary:
        'Synapse routes a user’s request to the right workflow or specialist agent. I worked on the search and registry pieces behind that routing.',
      result: 'Postgres + hybrid search',
      resultNote: 'for retrieval',
      details: [
        'Moved search from an in-memory vector store to PostgreSQL and pgvector.',
        'Added full-text search and BM25 ranking instead of relying only on embeddings.',
        'Connected Synapse to AWS Agent Registry and worked on the internal capability registry.'
      ]
    },
    {
      company: 'Together Fund',
      period: 'Apr—Jun 2026',
      context: 'AI engineer',
      question: 'Making 2,000+ contacts actually useful.',
      summary:
        'The fund had useful information spread across spreadsheets, LinkedIn, GitHub and personal sites. I built the pipeline that pulled it together, cleaned it up and found relationships between people.',
      result: '2,000+',
      resultNote: 'profiles brought together',
      details: [
        'Ingested and enriched profiles from LinkedIn, GitHub and personal websites.',
        'Improved profile completeness by roughly 40–60%.',
        'Built a graph that could find the shortest introduction path between people.'
      ]
    }
  ];

  const projects = [
    {
      name: 'Ghost',
      type: 'Local writing harness',
      description: 'A local writing app with a real filesystem, an editor, a terminal and an agent.',
      href: 'https://github.com/prateekdesh/ghost'
    },
    {
      name: 'Hooked',
      type: 'Webhook debugger',
      description: 'A small CLI I built after debugging one too many payment webhooks.',
      href: 'https://github.com/prateekdesh/hooked'
    },
    {
      name: 'Yaaru',
      type: 'Multiplayer party game',
      description: 'My real-time version of the party game “Impostor Who?”.',
      href: 'https://github.com/prateekdesh/yaaru'
    },
    {
      name: 'Backademia',
      type: 'University, reverse-engineered',
      description: 'A slightly unofficial API and MCP server for my university portal.',
      href: 'https://github.com/prateekdesh/backademia'
    }
  ];

  const elsewhere = [
    ['Reading right now', 'The Difficulty of Being Good'],
    ['Running', 'training for a first half marathon'],
    ['Can talk too long about', 'Greek mythology'],
    ['Also playing', 'chess and pickleball'],
    ['Usually', 'cooking or looking for food']
  ];

  async function copyEmail() {
    await navigator.clipboard.writeText('prateek.deshmukh19@gmail.com');
    copied = true;
    setTimeout(() => (copied = false), 1800);
  }

  onMount(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = scrollable > 0
        ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100))
        : 0;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgress);
    };
  });
</script>

<svelte:head>
  <title>Prateek Deshmukh — Founding engineer at Corpus</title>
  <meta
    name="description"
    content="Prateek Deshmukh is a founding engineer at Corpus. He works on backends, AI systems, and the less glamorous parts that make products work."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://prateekdeshmukh.com/" />
  <meta property="og:title" content="Prateek Deshmukh" />
  <meta
    property="og:description"
    content="Founding engineer at Corpus. Backends, AI systems, writing, and side projects."
  />
</svelte:head>

<div class="progress" aria-hidden="true"><span style={`width: ${scrollProgress}%`}></span></div>

<div class="site" id="top">
  <header class="topbar shell">
    <a class="wordmark" href="#top" aria-label="Prateek Deshmukh, back to top">
      <span>PD</span>
      <span>Prateek Deshmukh</span>
    </a>
    <nav aria-label="Main navigation">
      <a href="#work">Work</a>
      <a href="#writing">Writing</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main class="shell">
    <section class="hero" aria-labelledby="intro-title">
      <div class="hero-status load load-1">
        <span class="signal-dot" aria-hidden="true"></span>
        <span>Backend + AI engineer</span>
        <span>Bengaluru, India</span>
      </div>

      <div class="hero-copy load load-2">
        <h1 id="intro-title">Prateek Deshmukh</h1>
        <p>
            I build the machinery behind the magic.
        </p>
      </div>

      <aside class="current-role load load-3">
        <div class="current-role-meta">
          <span>Currently</span>
          <span>2026—</span>
        </div>
        <p class="current-role-title">
          Founding engineer at
          <a
            href="https://inc42.com/buzz/peak-xv-alum-saksham-mittals-corpus-labs-in-talks-to-raise-funding-from-stellaris/"
            target="_blank"
            rel="noreferrer"
          >Corpus <span aria-hidden="true">↗</span></a>
        </p>
        <p class="current-role-description">AI-native personal finance and wealth management.</p>
      </aside>

      <div class="hero-links load load-4">
        <a href="mailto:prateek.deshmukh19@gmail.com">Email <span>↗</span></a>
        <a href="https://github.com/prateekdesh" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
        <a href="https://blog.prateekdeshmukh.com/" target="_blank" rel="noreferrer">Writing <span>↗</span></a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé <span>↗</span></a>
      </div>
    </section>

    <section class="section work-section" id="work">
      <header class="section-header" data-reveal>
        <p class="section-label">01 / Selected work</p>
        <div>
          <h2>A few things I’ve worked on.</h2>
          <p>Click a row if you want the longer version.</p>
        </div>
      </header>

      <div class="work-list">
        {#each work as item, i}
          <details class="work-record" data-reveal>
            <summary>
              <span class="record-index">{String(i + 1).padStart(2, '0')}</span>
              <span class="record-company">
                <strong>{item.company}</strong>
                <span>{item.context} · {item.period}</span>
              </span>
              <span class="record-question">{item.question}</span>
              <span class="record-result">
                <strong>{item.result}</strong>
                <span>{item.resultNote}</span>
              </span>
              <span class="record-toggle" aria-hidden="true"></span>
            </summary>
            <div class="work-detail">
              <p>{item.summary}</p>
              <ul>
                {#each item.details as detail}
                  <li>{detail}</li>
                {/each}
              </ul>
            </div>
          </details>
        {/each}
      </div>

      <a class="section-link" href="/resume.pdf" target="_blank" rel="noreferrer" data-reveal>
        Full résumé <span>↗</span>
      </a>
    </section>

    <section class="section writing-section" id="writing">
      <header class="section-header" data-reveal>
        <p class="section-label">02 / Writing</p>
        <div>
          <h2>I write sometimes.</h2>
          <p>Usually about technology, startups, politics and India.</p>
        </div>
      </header>

      <a
        class="featured-writing"
        href="https://blog.prateekdeshmukh.com/writing/distill-to-your-fill"
        target="_blank"
        rel="noreferrer"
        data-reveal
      >
        <div class="writing-meta">
          <span>Latest</span>
          <time datetime="2026-07-04">04 Jul 2026</time>
        </div>
        <div class="writing-copy">
          <h3>Distill to your fill!</h3>
          <p>
            I accidentally ended up inside a shadow data-labelling operation. This is what I found.
          </p>
        </div>
        <span class="row-arrow" aria-hidden="true">↗</span>
      </a>

      <a
        class="section-link"
        href="https://blog.prateekdeshmukh.com/"
        target="_blank"
        rel="noreferrer"
        data-reveal
      >
        All writing <span>↗</span>
      </a>
    </section>

    <section class="section projects-section" id="projects">
      <header class="section-header" data-reveal>
        <p class="section-label">03 / Side projects</p>
        <div>
          <h2>Things I built for myself.</h2>
          <p>Some were useful. Some just seemed fun to make.</p>
        </div>
      </header>

      <div class="project-list">
        {#each projects as project, i}
          <a
            class="project-row"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            data-reveal
          >
            <span class="record-index">{String(i + 1).padStart(2, '0')}</span>
            <span class="project-name">
              <strong>{project.name}</strong>
              <span>{project.type}</span>
            </span>
            <span class="project-description">{project.description}</span>
            <span class="row-arrow" aria-hidden="true">↗</span>
          </a>
        {/each}
      </div>

      <a
        class="section-link"
        href="https://github.com/prateekdesh"
        target="_blank"
        rel="noreferrer"
        data-reveal
      >
        Browse GitHub <span>↗</span>
      </a>
    </section>

    <section class="section elsewhere-section">
      <header class="section-header" data-reveal>
        <p class="section-label">04 / Elsewhere</p>
        <div>
          <h2>Away from the computer.</h2>
        </div>
      </header>

      <dl class="elsewhere-list" data-reveal>
        {#each elsewhere as item}
          <div>
            <dt>{item[0]}</dt>
            <dd>{item[1]}</dd>
          </div>
        {/each}
      </dl>
    </section>

    <section class="contact-section" id="contact" data-reveal>
      <p class="section-label">05 / Contact</p>
      <div class="contact-copy">
        <h2>Say hello.</h2>
        <p>A difficult problem, a good book, a bad startup idea, or a strong disagreement.</p>
      </div>
      <div class="contact-actions">
        <a href="mailto:prateek.deshmukh19@gmail.com">prateek.deshmukh19@gmail.com</a>
        <button type="button" on:click={copyEmail}>{copied ? 'Copied' : 'Copy'}</button>
      </div>
    </section>
  </main>

  <footer class="footer shell">
    <p>© 2026 Prateek Deshmukh</p>
    <p>Still non-deterministic.</p>
    <nav aria-label="Social links">
      <a href="https://github.com/prateekdesh" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/prateekdeshmukh-/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://x.com/prateekdesh19" target="_blank" rel="noreferrer">X</a>
    </nav>
  </footer>
</div>
