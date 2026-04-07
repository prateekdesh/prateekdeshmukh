<script>
  import { onMount } from 'svelte';

  let scrolled = false;
  let activeSection = '';

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 40;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track active section via IntersectionObserver
    const sections = [
      { id: 'work', label: 'work' },
      { id: 'experience', label: 'experience' },
      { id: 'contact', label: 'contact' },
    ];

    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) activeSection = id;
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      io.observe(el);
      return io;
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach(io => io?.disconnect());
    };
  });
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 pt-6 pb-4 flex justify-center"
  class:scrolled
>
  <div class="max-w-screen-lg w-full flex items-center justify-between">
    <!-- Logo -->
    <a
      href="/"
      class="font-mono text-sm font-medium text-cream/70 hover:text-accent transition-colors duration-300 tracking-[0.1em]"
    >
      pd.
    </a>

    <!-- Nav links -->
    <div class="flex items-center gap-8">
      <a href="#experience" class="nav-link" class:active={activeSection === 'experience'}>Story</a>
      <a href="#work" class="nav-link" class:active={activeSection === 'work'}>Work</a>
      <a href="#contact" class="nav-link" class:active={activeSection === 'contact'}>Contact</a>
    </div>
  </div>
</nav>

<style>
  nav.scrolled {
    padding-top: 1rem;
    padding-bottom: 0.75rem;
    background: rgba(12, 12, 13, 0.9);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(39, 39, 41, 0.6);
  }

  .nav-link {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--cream);
    transition: color 0.3s ease;
    position: relative;
  }

  .nav-link:hover {
    color: var(--accent);
  }

  /* Underline indicator for active section */
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .nav-link.active {
    color: var(--accent);
  }

  .nav-link.active::after {
    transform: scaleX(1);
  }
</style>
