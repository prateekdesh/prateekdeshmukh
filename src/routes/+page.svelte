<script>
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import ExperienceItem from "$lib/components/ExperienceItem.svelte";
  import { ArrowRight, Sparkles, Terminal, Code2, Database, BrainCircuit } from 'lucide-svelte';

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
      description: "Open-source, real-time take on “impostor who?” with a minimal high-contrast UI and hand-written WebSocket connection manager.",
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
      description: "Voice agents wired into Google Maps data to automate vendor outreach; optimized prompts/transcribers for regional accuracy.",
      tags: ["Vapi", "Voice AI", "Automation"]
    }
  ];

  const experience = [
    {
      role: "Engineering Intern",
      company: "Faff",
      period: "Sep 2025 — Mar 2026",
      description: "Built recurring task service (cron-driven) for thousands of dependent tasks, LLM tools for the ticketing system, and ETA governance with deadline freezes/alerts.",
      tags: ["Python", "FastAPI", "PostgreSQL", "LangChain"]
    },
    {
      role: "Incoming Software Engineer Intern",
      company: "NatWest",
      period: "Summer 2026 (Expected)",
      description: "Selected as 1 of 11 interns from over 10,000 applicants (Top 0.1%) through rigorous technical evaluation.",
      tags: ["Enterprise", "SWE", "FinTech"]
    },
    {
      role: "Full-Stack SDE Intern",
      company: "Easylib",
      period: "May 2025 — July 2025",
      description: "Shipped documentation and observability for 300+ client instances; added modules across sales desk and cataloging following MVC patterns.",
      tags: ["PHP", "CodeIgniter", "MS SQL", "MVC"]
    }
  ];

  const stack = [
    { name: "Backend", icons: Terminal, tools: ["Python", "FastAPI", "TypeScript (Hono)", "SQL"] },
    { name: "AI/Agents", icons: BrainCircuit, tools: ["LangChain", "LangGraph", "Langfuse", "Vector DBs"] },
    { name: "Frontend", icons: Code2, tools: ["React", "Next.js", "Svelte", "Tailwind"] },
    { name: "Infrastructure", icons: Database, tools: ["AWS", "Cloudflare (Workers/R2/D1/KV)", "PostgreSQL", "Redis", "Docker", "GCP"] }
  ];
</script>

<svelte:head>
  <title>Prateek Deshmukh | Applied AI & Backend</title>
</svelte:head>

<section class="pt-40 pb-20 px-6 flex justify-center">
  <div class="max-w-screen-md w-full">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
      <Sparkles size={12} />
      <span>Bengaluru · Backend & Applied AI</span>
    </div>
    
    <h1 class="text-5xl md:text-7xl font-heading font-extrabold tracking-tighter leading-[0.92] mb-6">
      Prateek Deshmukh<br/>
      <!-- ships reliable data & AI systems. -->
    </h1>
    
    <p class="text-xl md:text-2xl text-ink/70 dark:text-off-white/70 max-w-xl leading-relaxed font-medium">
      I build backend and AI services that ship to production: messy migrations, high-throughput pipelines, AI agents that talk to real systems, and developer-friendly APIs.
    </p>

    <div class="mt-8 p-4 rounded-2xl bg-accent/5 border border-accent/10 max-w-fit flex flex-col gap-1">
      <div class="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent/60">
        <Terminal size={12} />
        <span>What I’m reading</span>
      </div>
      <p class="text-sm font-medium">Designing Data-Intensive Applications</p>
    </div>

    <div class="flex flex-wrap gap-4 mt-10">
      <a href="#work" class="px-6 py-3 rounded-2xl bg-accent text-white font-bold text-sm flex items-center gap-2 hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
        See the work <ArrowRight size={16} />
      </a>
      <a href="https://drive.google.com/file/d/16No__2otRUWAjPD7LObP5J-cRDk8pvCr/view?usp=drivesdk" target="_blank" rel="noreferrer" class="px-6 py-3 rounded-2xl border border-accent/10 hover:border-accent/30 font-bold text-sm transition-all">
        View resume
      </a>
    </div>
  </div>
</section>

<!-- Selected Work -->
<section id="work" class="py-20 px-6 flex justify-center">
  <div class="max-w-screen-md w-full">
    <div class="flex items-end justify-between mb-12">
      <div class="flex flex-col gap-2">
        <span class="text-[10px] font-bold uppercase tracking-widest text-accent">Selected Work</span>
        <h2 class="text-4xl font-heading font-bold tracking-tight">Featured Projects</h2>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each projects as project}
        <ProjectCard {...project} />
      {/each}
    </div>
  </div>
</section>

<!-- Experience -->
<section id="experience" class="py-20 px-6 flex justify-center">
  <div class="max-w-screen-md w-full">
    <div class="flex flex-col md:flex-row gap-20">
      <div class="md:w-1/3">
        <div class="sticky top-32">
          <span class="text-[10px] font-bold uppercase tracking-widest text-accent">Professional Journey</span>
          <h2 class="text-4xl font-heading font-bold tracking-tight mt-2">Experience</h2>
          <p class="text-ink/60 dark:text-off-white/60 text-sm mt-4">Selected intern at high-growth teams and enterprise giants.</p>
        </div>
      </div>
      
      <div class="md:w-2/3">
        {#each experience as item}
          <ExperienceItem {...item} />
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Stack -->
<section class="py-20 px-6 flex justify-center bg-accent/5 rounded-[4rem] mx-4 my-20">
  <div class="max-w-screen-md w-full text-center">
    <span class="text-[10px] font-bold uppercase tracking-widest text-accent mb-6 block">The Toolkit</span>
    <h2 class="text-4xl font-heading font-bold tracking-tight mb-16">Tech I work with</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
      {#each stack as category}
        <div class="flex flex-col items-center gap-4 group">
          <div class="p-4 rounded-2xl bg-white dark:bg-ink border border-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:rotate-6">
            <svelte:component this={category.icons} size={24} />
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs font-bold uppercase tracking-widest">{category.name}</span>
            <div class="flex flex-wrap justify-center gap-x-2 text-[11px] text-ink/40 dark:text-off-white/40">
              {#each category.tools as tool}
                <span>{tool}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Education -->
<section class="py-20 px-6 flex justify-center">
  <div class="max-w-screen-md w-full">
    <div class="p-8 md:p-12 rounded-[2.5rem] border border-accent/10 bg-white/40 dark:bg-ink/40 backdrop-blur-sm shadow-lg shadow-accent/5">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div>
          <h2 class="text-2xl font-heading font-bold">SRM Institute of Science and Technology</h2>
          <p class="text-sm text-ink/60 dark:text-off-white/60">B.Tech, Artificial Intelligence · 2023–2027 · CGPA 8.98/10</p>
        </div>
        <div class="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-accent">
          <Sparkles size={14} />
          <span>Systems & AI Focus</span>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-ink/70 dark:text-off-white/70">
        <div class="p-3 rounded-2xl border border-accent/10 bg-accent/5 dark:bg-ink/30">
          <p class="font-semibold">Core CS</p>
          <p>Data Structures & Algorithms, Operating Systems, Networks</p>
        </div>
        <div class="p-3 rounded-2xl border border-accent/10 bg-accent/5 dark:bg-ink/30">
          <p class="font-semibold">Data</p>
          <p>DBMS, SQL, distributed data concepts</p>
        </div>
        <div class="p-3 rounded-2xl border border-accent/10 bg-accent/5 dark:bg-ink/30">
          <p class="font-semibold">Applied Work</p>
          <p>Building production agents and backend services alongside coursework.</p>
        </div>
      </div>
    </div>
  </div>
</section>
