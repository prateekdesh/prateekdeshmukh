<script>
  import { onMount } from 'svelte';

  let scrolled = false;
  let active = '';

  const links = [
    { id: 'experience', num: '02', label: 'experience' },
    { id: 'incidents',  num: '03', label: 'incidents', hideMobile: true },
    { id: 'writing',    num: '04', label: 'writing', hideMobile: true },
    { id: 'projects',   num: '05', label: 'projects' },
    { id: 'stack',      num: '06', label: 'stack', hideMobile: true },
    { id: 'contact',    num: '08', label: 'contact' },
  ];

  onMount(() => {
    const onScroll = () => (scrolled = window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) active = e.target.id;
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
    };
  });
</script>

<nav
  class="fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 border-b {scrolled
    ? 'bg-paper/90 backdrop-blur-sm border-rule'
    : 'bg-transparent border-transparent'}"
>
  <div class="mx-auto max-w-[1060px] px-5 md:px-10 h-12 flex items-center justify-between">
    <a href="#top" class="flex items-center gap-2.5 font-mono text-[11px] tracking-wide text-ink no-underline whitespace-nowrap">
      <span class="dot-live"></span>
      <span class="hidden md:inline text-faint">trace:</span>
      <span class="font-medium hidden min-[480px]:inline">prateek-deshmukh</span>
      <span class="font-medium min-[480px]:hidden">pd</span>
    </a>

    <div class="flex items-center gap-4 md:gap-7">
      {#each links as l}
        <a
          href="#{l.id}"
          class="font-mono text-[11px] tracking-wide transition-colors duration-150 {l.hideMobile ? 'hidden sm:inline' : ''} {active === l.id
            ? 'text-sig-deep'
            : 'text-dim hover:text-ink'}"
        >
          <span class="hidden md:inline {active === l.id ? 'text-sig' : 'text-faint'}">{l.num}&nbsp;</span>{l.label}
        </a>
      {/each}
    </div>
  </div>
</nav>
