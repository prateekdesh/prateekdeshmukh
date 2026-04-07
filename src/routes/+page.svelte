<script>
  import { onMount } from 'svelte';
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import ExperienceItem from "$lib/components/ExperienceItem.svelte";
  import { ArrowUpRight, Terminal, Code2, Database, BrainCircuit, Copy, Check } from 'lucide-svelte';

  let copied = false;
  function copyEmail() {
    navigator.clipboard.writeText('prateek.deshmukh19@gmail.com');
    copied = true;
    setTimeout(() => copied = false, 2000);
  }

  const projects = [
    {
      title: "Hermes — LangChain Agent",
      description: "Ingests WhatsApp webhooks, infers intent, and calls tools that update the internal ticketing system (status, ETA, assignee, priority) without human hand-holding.",
      tags: ["LangChain", "LLM", "Automation"],
    },
    {
      title: "Backademia",
      description: "MCP server exposing university portal data (attendance, marks, timetable) as tools. Includes auth, rate limits, and a REST layer for stable scraping sessions.",
      tags: ["Python", "FastAPI", "SQLite", "MCP"],
      github: "https://github.com/prateekdesh/backademia"
    },
    {
      title: "Faff Chat",
      description: "Real-time chat app with Socket.io plus semantic search using HuggingFace inference + SentenceTransformers for thread recall.",
      tags: ["Socket.io", "Node.js", "HuggingFace", "NLP"],
      github: "https://github.com/prateekdesh/faff-chat"
    },
    {
      title: "Hooked",
      description: "CLI wrapper around Ngrok for webhook debugging with header/key filters to isolate noisy payloads; cut integration debug time by ~50% during a payment migration.",
      tags: ["Python", "Ngrok API", "CLI"],
      github: "https://github.com/prateekdesh/hooked"
    },
    {
      title: "Yaaru",
      description: "Open-source, real-time take on 'impostor who?' with a minimal high-contrast UI and hand-written WebSocket connection manager.",
      tags: ["TypeScript", "React", "FastAPI", "WebSockets"],
      github: "https://github.com/prateekdesh/yaaru"
    },
    {
      title: "prats.blog",
      description: "Full-stack CMS with custom rich-text editor, live preview, JWT auth, and tuned uploads. Built to ship posts fast without cutting security corners.",
      tags: ["React", "FastAPI", "SQLite", "JWT"],
      github: "https://github.com/prateekdesh/prats-blog"
    },
    {
      title: "Vapi Voice Outreach",
      description: "Voice agents wired into Google Maps data to automate vendor outreach; optimized prompts and transcribers for regional accuracy.",
      tags: ["Vapi", "Voice AI", "Automation"]
    }
  ];

  const experience = [
    {
      role: "Software Engineer",
      company: "Faff",
      period: "Sep 2025 — March 2026",
      description: "Built core infrastructure across the company — a recurring task engine, LangChain toolsets for autonomous ticket handling, a Razorpay → Cashfree payment migration, and voice agents that improved regional outreach accuracy by 25%.",
      tags: ["Python", "FastAPI", "PostgreSQL", "LangChain", "Vapi", "Cashfree"]
    },
    {
      role: "Full-Stack SDE Intern",
      company: "Easylib",
      period: "May 2025 — Jul 2025",
      description: "Shipped 7 modules across a library management SaaS — including a Gemini-powered research tool, observability for 300+ client instances, a SQL report mailer, and a rich-text helpdesk system.",
      tags: ["PHP", "CodeIgniter", "MS SQL", "Gemini API", "Quill"]
    },
    {
      role: "Incoming Software Engineer Intern",
      company: "NatWest",
      period: "Summer 2026 — Expected",
      description: "Selected as 1 of 11 interns from 10,000+ applicants — top 0.1% through multi-stage technical evaluation.",
      tags: ["Enterprise", "SWE", "FinTech"]
    }
  ];

  const stack = [
    { name: "Backend", Icon: Terminal, tools: ["Python", "FastAPI", "TypeScript", "Hono", "SQL"] },
    { name: "AI / Agents", Icon: BrainCircuit, tools: ["LangChain", "LangGraph", "Langfuse", "Vector DBs"] },
    { name: "Frontend", Icon: Code2, tools: ["React", "Next.js", "Svelte", "Tailwind"] },
    { name: "Infrastructure", Icon: Database, tools: ["AWS", "Cloudflare", "PostgreSQL", "Redis", "Docker", "GCP"] }
  ];

  // Intersection observer for reveal animations
  onMount(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
</script>

<svelte:head>
  <title>Prateek Deshmukh · Backend & Applied AI</title>
  <meta name="description" content="Backend and Applied AI engineer based in Bengaluru. Building reliable systems, high-throughput pipelines, and AI agents that ship to production." />

  <!-- OG / Social -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://prateekdeshmukh.com/" />
  <meta property="og:title" content="Prateek Deshmukh · Backend & Applied AI" />
  <meta property="og:description" content="Backend and Applied AI engineer based in Bengaluru. Building reliable systems, high-throughput pipelines, and AI agents that ship to production." />
  <meta property="og:image" content="https://prateekdeshmukh.com/og.png" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Prateek Deshmukh · Backend & Applied AI" />
  <meta name="twitter:description" content="Backend and Applied AI engineer based in Bengaluru. Building reliable systems, high-throughput pipelines, and AI agents that ship to production." />
  <meta name="twitter:image" content="https://prateekdeshmukh.com/og.png" />
</svelte:head>

<!-- ─── Hero ─────────────────────────────────────────────── -->
<section class="relative min-h-screen flex flex-col justify-between pt-32 pb-20 px-6 overflow-hidden">

  <!-- Ambient glow -->
  <div class="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.06]"
    style="background: radial-gradient(ellipse at 50% 0%, #e8a020 0%, transparent 70%);"
  ></div>

  <div class="max-w-screen-lg mx-auto w-full">

    <!-- Top meta row -->
    <div class="hero-fade-in flex items-center gap-3 mb-12">
      <span class="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
        Bengaluru, IN
      </span>
      <span class="w-px h-3 bg-rule"></span>
      <span class="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
        Backend & Applied AI
      </span>
      <span class="w-px h-3 bg-rule"></span>
      <span class="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] uppercase text-accent">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
        Available for work
      </span>
    </div>

    <!-- Name + headline -->
    <h1
      class="hero-fade-up-1 font-heading leading-[0.88] tracking-[-0.03em] text-cream mb-8"
      style="font-size: clamp(3.5rem, 9vw, 7.5rem);"
    >
      Prateek<br/>
      <em class="not-italic text-accent">Deshmukh</em>
    </h1>

    <!-- Descriptor line -->
    <p class="hero-fade-up-2 text-lg md:text-xl text-dim leading-relaxed max-w-xl mb-10">
      I build the parts that break in production and fix them before they do again.
    </p>

    <!-- CTA cluster -->
    <div class="hero-fade-up-3 flex items-center gap-6 mb-16">
      <a
        href="#work"
        class="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-cream border border-rule px-4 py-3 hover:border-accent/50 hover:text-accent transition-all duration-300"
      >
        See the work
        <ArrowUpRight size={12} class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </a>
      <a
        href="https://drive.google.com/file/d/16No__2otRUWAjPD7LObP5J-cRDk8pvCr/view?usp=drivesdk"
        target="_blank"
        rel="noreferrer"
        class="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-dim hover:text-accent transition-all duration-300"
      >
        View résumé
        <ArrowUpRight size={12} class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </a>
    </div>

    <!-- Reading callout -->
    <div class="hero-fade-in-4 inline-flex items-center gap-3 border-l-2 border-accent/40 pl-4">
      <span class="font-mono text-[9px] tracking-[0.2em] uppercase text-muted">Reading</span>
      <span class="text-sm text-dim italic font-heading">The Waves</span>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-30">
    <div class="w-px h-12 bg-gradient-to-b from-transparent to-rule"></div>
    <span class="font-mono text-[8px] tracking-[0.2em] uppercase text-muted [writing-mode:vertical-lr]">scroll</span>
  </div>
</section>

<!-- ─── Experience ────────────────────────────────────────── -->
<section id="experience" class="py-32 px-6">
  <div class="max-w-screen-lg mx-auto">

    <div class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">

      <!-- Sticky sidebar -->
      <div class="reveal">
        <div class="lg:sticky lg:top-32">
          <span class="eyebrow">Professional Journey</span>
          <h2 class="font-heading text-display-sm text-cream mt-2 mb-6">Experience</h2>
          <p class="text-sm text-dim leading-relaxed">
            fast-paced startups and enterprises.
          </p>

          <!-- Stats -->
          <div class="mt-10 flex flex-col gap-4">
            <div class="border-l-2 border-accent/30 pl-4">
              <div class="font-heading text-2xl text-cream">2</div>
              <div class="font-mono text-[9px] tracking-[0.15em] uppercase text-muted mt-0.5">Internships</div>
            </div>
            <div class="border-l-2 border-rule pl-4">
              <div class="font-heading text-2xl text-cream">Top 0.1%</div>
              <div class="font-mono text-[9px] tracking-[0.15em] uppercase text-muted mt-0.5">NatWest Selection</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div>
        {#each experience as item, i}
          <div class="reveal" style="transition-delay: {i * 80}ms">
            <ExperienceItem {...item} />
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>

<!-- ─── Selected Work ─────────────────────────────────────── -->
<section id="work" class="py-32 px-6 border-t border-rule">
  <div class="max-w-screen-lg mx-auto">

    <!-- Section header -->
    <div class="reveal flex items-end justify-between mb-2 pb-6 border-b border-rule">
      <div>
        <span class="eyebrow">Selected Work</span>
        <h2 class="font-heading text-display-sm text-cream mt-2">Projects</h2>
      </div>
      <span class="font-mono text-[10px] text-muted tracking-[0.1em] mb-1">
        {projects.length} total
      </span>
    </div>

    <!-- Projects list: two-column on large screens -->
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20">
      {#each projects as project, i}
        <div class="reveal" style="transition-delay: {i * 60}ms">
          <ProjectCard {...project} />
        </div>
      {/each}
    </div>

  </div>
</section>

<!-- ─── Stack ─────────────────────────────────────────────── -->
<section class="py-32 px-6">
  <div class="max-w-screen-lg mx-auto">

    <div class="reveal mb-16">
      <span class="eyebrow">The Toolkit</span>
      <h2 class="font-heading text-display-sm text-cream mt-2">Tech I work with</h2>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-rule">
      {#each stack as category, i}
        <div
          class="reveal bg-canvas p-8 flex flex-col gap-5 group hover:bg-surface transition-colors duration-300"
          style="transition-delay: {i * 60}ms"
        >
          <div class="text-muted group-hover:text-accent transition-colors duration-300">
            <svelte:component this={category.Icon} size={20} strokeWidth={1.5} />
          </div>

          <div>
            <div class="font-mono text-[10px] tracking-[0.18em] uppercase text-dim group-hover:text-cream transition-colors duration-300 mb-3">
              {category.name}
            </div>
            <div class="flex flex-col gap-1.5">
              {#each category.tools as tool}
                <span class="text-[12px] text-muted leading-snug">{tool}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>

<!-- ─── Education ─────────────────────────────────────────── -->
<section class="py-32 px-6">
  <div class="max-w-screen-lg mx-auto">

    <div class="reveal border border-rule p-10 md:p-16 relative overflow-hidden">

      <!-- Decorative corner accent -->
      <div class="absolute top-0 right-0 w-32 h-32 border-l border-b border-accent/10 pointer-events-none"></div>

      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-3">
        <div>
          <span class="eyebrow mb-3 block">Education</span>
          <h2 class="font-heading text-2xl md:text-3xl text-cream leading-tight">
            SRM Institute of Science<br/>and Technology
          </h2>
          <p class="font-mono text-[10px] tracking-[0.15em] uppercase text-dim mt-3">
            B.Tech · Artificial Intelligence · 2023–2027
          </p>
        </div>
        <div class="flex flex-col items-start md:items-end gap-2 shrink-0">
          <div class="font-heading text-4xl text-accent">8.98</div>
          <div class="font-mono text-[9px] tracking-[0.15em] uppercase text-muted">CGPA / 10</div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ─── Contact ───────────────────────────────────────────── -->
<section id="contact" class="py-32 px-6 border-t border-rule">
  <div class="max-w-screen-lg mx-auto">

    <div class="reveal flex flex-col items-center text-center gap-8">

      <span class="eyebrow">Get In Touch</span>

      <h2
        class="font-heading text-cream leading-[0.9] tracking-[-0.02em]"
        style="font-size: clamp(2.5rem, 6vw, 5rem);"
      >
        Let's build something<br/>
        <em class="not-italic text-accent">worth breaking.</em>
      </h2>

      <p class="text-dim text-lg leading-relaxed max-w-lg">
        I'm open to internships, contract work, and interesting problems.
        If something clicks, reach out.
      </p>

      <!-- CTA row -->
      <div class="flex flex-wrap items-center justify-center gap-4 mt-2">

        <!-- Copy email button -->
        <button
          on:click={copyEmail}
          class="group inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.15em] uppercase border border-rule px-5 py-3 hover:border-accent/50 transition-all duration-300"
          class:text-accent={copied}
          class:border-accent={copied}
          style={copied ? '' : 'color: var(--cream);'}
        >
          {#if copied}
            <Check size={13} />
            Copied!
          {:else}
            <Copy size={13} class="group-hover:text-accent transition-colors duration-200" />
            prateek.deshmukh19@gmail.com
          {/if}
        </button>

        <a
          href="https://linkedin.com/in/prateekdeshmukh-/"
          target="_blank"
          rel="noreferrer"
          class="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-dim hover:text-accent transition-colors duration-300"
        >
          LinkedIn
          <ArrowUpRight size={12} class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </a>

        <a
          href="https://github.com/prateekdesh"
          target="_blank"
          rel="noreferrer"
          class="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-dim hover:text-accent transition-colors duration-300"
        >
          GitHub
          <ArrowUpRight size={12} class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </a>
      </div>

    </div>
  </div>
</section>
