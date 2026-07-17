<script>
  import '../app.css';
  import TraceNav from '$lib/components/TraceNav.svelte';
</script>

<div class="relative min-h-screen bg-paper text-ink">
  <TraceNav />

  <main class="relative z-10">
    <slot />
  </main>

  <!-- ═══ session.end ═════════════════════════════════════ -->
  <footer class="relative z-10 mt-16">
    <div class="mx-auto max-w-[1060px] px-5 md:px-10">
      <!-- closing the spine -->
      <div class="ml-1 md:ml-2 pl-7 md:pl-14 relative">
        <span class="absolute left-0 -translate-x-1/2 top-[3px] w-[9px] h-[9px] rotate-45 border border-sig bg-paper" aria-hidden="true"></span>
        <div class="font-mono text-[11px] leading-[2] text-dim pb-10">
          <div><span class="text-sig font-semibold">session.end</span><span class="text-faint">()</span></div>
          <div class="text-faint">
            spans=8 · incidents=4 <span class="text-sig-deep">(all resolved)</span> · region=bengaluru
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-rule">
      <div class="mx-auto max-w-[1060px] px-5 md:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10.5px] text-faint">
        <span>© 2026 prateek deshmukh · built with sveltekit, traced end-to-end · credits: fable 5</span>
        <div class="flex items-center gap-5">
          <a href="mailto:prateek.deshmukh19@gmail.com" class="link-mono text-[10.5px]">mail</a>
          <a href="https://github.com/prateekdesh" target="_blank" rel="noreferrer" class="link-mono text-[10.5px]">github</a>
          <a href="https://linkedin.com/in/prateekdeshmukh-/" target="_blank" rel="noreferrer" class="link-mono text-[10.5px]">linkedin</a>
          <a href="https://x.com/prateekdesh19" target="_blank" rel="noreferrer" class="link-mono text-[10.5px]">twitter</a>
          <a href="https://blog.prateekdeshmukh.com/" target="_blank" rel="noreferrer" class="link-mono text-[10.5px]">blog</a>
        </div>
      </div>
    </div>
  </footer>
</div>
