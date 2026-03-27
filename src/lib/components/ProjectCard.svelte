<script>
  import { ArrowUpRight } from 'lucide-svelte';
  import Github from '$lib/icons/Github.svelte';

  export let title = "Project Title";
  export let description = "Project description goes here.";
  export let tags = ["Svelte", "Tailwind"];
  export let github = "";
  export let link = "";
</script>

<div class="group relative p-6 rounded-3xl border border-accent/10 bg-off-white dark:bg-ink hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-accent/5 overflow-hidden">
  <div class="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
    <div class="flex gap-2">
      {#if github}
        <a href={github} target="_blank" class="p-2 rounded-full bg-accent/10 hover:bg-accent text-accent hover:text-white transition-all">
          <Github size={18} />
        </a>
      {/if}
      {#if link}
        <a href={link} target="_blank" class="p-2 rounded-full bg-accent/10 hover:bg-accent text-accent hover:text-white transition-all">
          <ArrowUpRight size={18} />
        </a>
      {/if}
    </div>
  </div>

  <div class="flex flex-col gap-3">
    <h3 class="text-xl font-heading font-bold tracking-tight group-hover:text-accent transition-colors">{title}</h3>
    <p class="text-sm text-ink/60 dark:text-off-white/60 leading-relaxed">
      {description}
    </p>
    
    <div class="flex flex-wrap gap-2 mt-2">
      {#each tags as tag}
        <span class="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-accent/5 dark:bg-accent/10 text-accent border border-accent/10">
          {tag}
        </span>
      {/each}
    </div>
  </div>
</div>
