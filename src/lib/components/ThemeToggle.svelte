<script>
  import { Sun, Moon } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let darkMode = false;

  onMount(() => {
    darkMode = localStorage.getItem('theme') === 'dark' || 
               (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    updateTheme();
  });

  function toggleTheme() {
    darkMode = !darkMode;
    updateTheme();
  }

  function updateTheme() {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
</script>

<button
  on:click={toggleTheme}
  class="p-2 rounded-full hover:bg-accent/10 transition-colors text-accent focus:outline-none"
  aria-label="Toggle theme"
>
  {#if darkMode}
    <Sun size={20} />
  {:else}
    <Moon size={20} />
  {/if}
</button>
