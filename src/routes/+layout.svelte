<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Cursor from "$lib/components/Cursor.svelte";
</script>

<div class="min-h-screen selection:bg-accent/30 selection:text-accent">
  <Cursor />
  <Navbar />
  <main>
    <slot />
  </main>
  
  <footer class="py-20 px-6 flex justify-center border-t border-accent/5 mt-20">
    <div class="max-w-screen-md w-full flex flex-col md:flex-row items-center justify-between gap-8">
      <div class="flex flex-col gap-2 text-center md:text-left">
        <h2 class="font-heading font-bold text-2xl">Building dependable systems.</h2>
        <p class="text-ink/60 dark:text-off-white/60 text-sm">If you need backend or agent help, I’ll reply fast.</p>
      </div>
      
      <div class="flex items-center gap-6">
        <a href="mailto:hello@prateekdeshmukh.com" class="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">Email</a>
        <a href="https://linkedin.com/in/prateekdeshmukh-/" target="_blank" class="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">LinkedIn</a>
        <a href="https://github.com/prateekdesh" target="_blank" class="text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
</div>
