<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Cursor from "$lib/components/Cursor.svelte";
</script>

<div class="min-h-screen bg-canvas text-cream">
  <Cursor />
  <Navbar />

  <main>
    <slot />
  </main>

  <!-- Footer -->
  <footer class="border-t border-rule mt-32">
    <div class="max-w-screen-lg mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">

      <!-- Left: tagline -->
      <div class="flex flex-col gap-3">
        <span class="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
          Prateek Deshmukh · 2026
        </span>
        <p class="font-heading text-2xl text-cream leading-snug max-w-xs">
          Building dependable<br/><em>systems.</em>
        </p>
        <p class="text-sm text-dim max-w-xs leading-relaxed mt-1">
            Hit me up.
        </p>
      </div>

      <!-- Right: contact links -->
      <div class="flex flex-col items-start md:items-end gap-3">
        <a
          href="mailto:prateek.deshmukh19@gmail.com"
          class="font-mono text-xs tracking-[0.12em] uppercase text-dim hover:text-accent transition-colors duration-200 group flex items-center gap-2"
        >
            prateek.deshmukh19@gmail.com
          <span class="inline-block opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
        </a>
        <a
          href="https://linkedin.com/in/prateekdeshmukh-/"
          target="_blank"
          rel="noreferrer"
          class="font-mono text-xs tracking-[0.12em] uppercase text-dim hover:text-accent transition-colors duration-200 group flex items-center gap-2"
        >
          LinkedIn
          <span class="inline-block opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
        </a>
        <a
          href="https://github.com/prateekdesh"
          target="_blank"
          rel="noreferrer"
          class="font-mono text-xs tracking-[0.12em] uppercase text-dim hover:text-accent transition-colors duration-200 group flex items-center gap-2"
        >
          GitHub
          <span class="inline-block opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
        </a>
      </div>
    </div>
  </footer>
</div>
