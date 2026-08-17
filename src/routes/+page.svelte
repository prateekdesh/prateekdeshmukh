<script>
  import { onMount } from 'svelte';

  let copied = false;

  async function copyEmail() {
    await navigator.clipboard.writeText('prateek.deshmukh19@gmail.com');
    copied = true;
    setTimeout(() => (copied = false), 2200);
  }

  const work = [
    {
      period: '2025 - 2026',
      company: 'faff',
      title: 'A personal concierge service on WhatsApp.',
      paragraphs: [
        'Faff uses AI agents in the background, with a human in the loop for payments and the things agents cannot do yet. I worked across the product: internal tools, backend services, frontend, databases, infrastructure, payments, and AI agents.',
        'The biggest skill I picked up was debugging and experimenting with new technology under real constraints. In a lean startup, you have to figure out what matters, what can wait, and how to make the next experiment cheap.'
      ]
    },
    {
      period: '2026',
      company: 'natwest group',
      title: 'Making agents discoverable and workflows durable.',
      paragraphs: [
        'At NatWest, I worked on Synapse, an intelligent orchestrator that reads a user query and routes it to the right workflow or subagent, or creates a workflow from composable tools.',
        'I worked on retrieval, agent discovery, capability registries, and the systems that make workflows durable and observable. I migrated retrieval to PostgreSQL and pgvector, replaced semantic-only search with hybrid search, and integrated AWS Agent Registry for runtime discovery.',
        'The most interesting part was thinking about how agents discover what they can do, how tools become composable workflows, and how those workflows can execute reliably.'
      ]
    },
    {
      period: '2026',
      company: 'together fund',
      title: 'Making a talent network useful.',
      paragraphs: [
        'Together Fund reached out after Faff to build internal tools and agents for venture capital work. Their information about potential founders, co-founders, and talent lived across Excel sheets, different sources, and mostly unorganized formats.',
        'I built systems to ingest, clean, organize, enrich, and make that information useful to the rest of the team. Finding relationships between people turned out to be more of a data problem than an implementation problem. It was also a reality check about how much importance people still place on pedigree.'
      ],
      pullQuote: 'Problem statements of a startup. Freedom of an enterprise.'
    }
  ];

  const interests = ['agents', 'backends', 'infrastructure', 'voice AI', 'evals', 'harnesses'];
  const outside = ['reading', 'chess', 'running', 'pickleball', 'cooking', 'eating'];

  onMount(() => {
    const sections = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Prateek Deshmukh</title>
  <meta name="description" content="Prateek Deshmukh is a backend and AI engineer writing and thinking about technology, startups, politics, India, and other things." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://prateekdeshmukh.com/" />
  <meta property="og:title" content="Prateek Deshmukh" />
  <meta property="og:description" content="Backend and AI engineer. Writing, opinions, engineering, and other things." />
</svelte:head>

<div class="editorial-page">
  <nav class="topbar" aria-label="Main navigation">
    <a href="#top" class="wordmark">prateek deshmukh</a>
    <div class="nav-links">
      <a href="#about">about</a>
      <a href="#work">work</a>
      <a href="https://blog.prateekdeshmukh.com/" target="_blank" rel="noreferrer">writing</a>
      <a href="#contact">contact</a>
    </div>
  </nav>

  <header id="top" class="hero page-width">
    <div class="hero-copy">
      <p class="eyebrow">backend &amp; AI engineer / Bengaluru</p>
      <h1>I'm Prateek.<br />I build all sorts<br />of systems.</h1>
      <p class="hero-lede">I’m a backend &amp; AI engineer, but this is mostly a place for the things I’m interested in.</p>
    </div>
    <aside class="hero-aside">
      <p><strong>Here you’ll find</strong><br />some opinions, some engineering, some writing, and an unreasonable number of interests.</p>
      <a class="text-link" href="https://blog.prateekdeshmukh.com/" target="_blank" rel="noreferrer">read the writing <span aria-hidden="true">↗</span></a>
    </aside>
  </header>

  <main class="page-width content">
    <section id="about" class="section section-intro" data-reveal>
      <div class="section-label">01 / about</div>
      <div class="section-body">
        <h2>I’m rarely bored by stories, technology, or difficult problems.</h2>
        <p class="large-copy">I’m opinionated, I stand my ground, and I can argue endlessly and somehow feel more energized by the end of it.</p>
      </div>
    </section>

    <section class="section" data-reveal>
      <div class="section-label">02 / interests</div>
      <div class="section-body interests-body">
        <h2>The things I keep coming back to.</h2>
        <div class="interest-list">
          {#each interests as interest, i}
            <span class="interest-item" style="--i: {i}">{interest}</span>
          {/each}
        </div>
        <p class="aside-copy">Outside the computer: reading <em>The Difficulty of Being Good</em>, being a huge Greek mythology nerd, and trying to finish a half marathon before the year ends.</p>
      </div>
    </section>

    <section id="writing" class="section" data-reveal>
      <div class="section-label">03 / writing</div>
      <div class="section-body writing-body">
        <h2>I write and opine.</h2>
        <article class="latest-post">
          <div class="post-meta">04 jul 2026 / latest</div>
          <div>
            <h3>Distill to your fill!</h3>
            <p>An accidental encounter with a shadow data-labelling operation, and the strange business of distilling frontier models.</p>
            <a class="text-link" href="https://blog.prateekdeshmukh.com/writing/distill-to-your-fill" target="_blank" rel="noreferrer">read the post <span aria-hidden="true">↗</span></a>
          </div>
        </article>
        <p class="small-copy writing-note">I write about startups, technology, politics, and India on <a class="text-link" href="https://blog.prateekdeshmukh.com/" target="_blank" rel="noreferrer">my blog</a>.</p>
      </div>
    </section>

    <section id="work" class="section work-section" data-reveal>
      <div class="section-label">04 / work</div>
      <div class="section-body">
        <h2>The work, briefly.</h2>
        <p class="section-lede">A few places I’ve spent time building things. The résumé has the detailed, properly formatted version.</p>

        <div class="work-list">
          {#each work as job, i}
            <article class="work-entry" style="--i: {i}">
              <div class="work-meta">{job.period}</div>
              <div class="work-copy">
                <p class="small-label">{job.company}</p>
                <h3>{job.title}</h3>
                {#each job.paragraphs as paragraph}
                  <p>{paragraph}</p>
                {/each}
                {#if job.pullQuote}
                  <p class="pull-quote">{job.pullQuote}</p>
                {/if}
              </div>
            </article>
          {/each}
        </div>

        <p class="resume-note">For dates, technologies, and the full employment record, <a class="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">see my résumé <span aria-hidden="true">↗</span></a>.</p>
      </div>
    </section>

    <section class="section" data-reveal>
      <div class="section-label">05 / outside work</div>
      <div class="section-body outside-body">
        <h2>Things that make the week better.</h2>
        <div class="outside-list">
          {#each outside as item}
            <span>{item}</span>
          {/each}
        </div>
        <p class="small-copy">I also spend a suspicious amount of time trying to finish a half marathon before the year ends.</p>
      </div>
    </section>

    <section id="contact" class="section contact-section" data-reveal>
      <div class="section-label">06 / hello</div>
      <div class="section-body">
        <h2>Send me something interesting.</h2>
        <p class="large-copy">A difficult problem, a good book, a bad startup idea, or a strong disagreement all work.</p>
        <div class="contact-links">
          <a class="contact-email" href="mailto:prateek.deshmukh19@gmail.com">prateek.deshmukh19@gmail.com</a>
          <button type="button" on:click={copyEmail}>{copied ? 'copied' : 'copy email'}</button>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer page-width">
    <span>© 2026 Prateek Deshmukh</span>
    <div>
      <a href="https://github.com/prateekdesh" target="_blank" rel="noreferrer">github</a>
      <a href="https://linkedin.com/in/prateekdeshmukh-/" target="_blank" rel="noreferrer">linkedin</a>
      <a href="https://x.com/prateekdesh19" target="_blank" rel="noreferrer">x</a>
      <a href="mailto:prateek.deshmukh19@gmail.com">email</a>
    </div>
  </footer>
</div>
