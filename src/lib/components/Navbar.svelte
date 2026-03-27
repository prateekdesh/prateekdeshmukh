<script>
  import ThemeToggle from './ThemeToggle.svelte';
  import { onMount } from 'svelte';

  let scrolled = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-center">
  <div class="max-w-screen-md w-full flex items-center justify-between {scrolled ? 'bg-off-white/80 dark:bg-ink/80 backdrop-blur-md rounded-2xl px-6 py-2 border border-accent/10 shadow-lg' : 'px-2'}">
    <a href="/" class="font-heading font-extrabold text-lg sm:text-xl tracking-tight hover:text-accent transition-colors">
      prats.
    </a>
    
    <div class="flex items-center gap-6">
      <div class="hidden sm:flex items-center gap-6 text-sm font-medium">
        <a href="#work" class="hover:text-accent transition-colors">Work</a>
        <a href="#experience" class="hover:text-accent transition-colors">Story</a>
      </div>
      <ThemeToggle />
    </div>
  </div>
</nav>
