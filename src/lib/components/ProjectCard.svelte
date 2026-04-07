<script>
  import { ArrowUpRight } from 'lucide-svelte';
  import Github from '$lib/icons/Github.svelte';

  export let title = "Project Title";
  export let description = "Project description goes here.";
  export let tags = [];
  export let github = "";
  export let link = "";
</script>

<article class="group relative flex flex-col border-b border-rule py-8 transition-all duration-300 hover:border-accent/30 cursor-default">
  <!-- Accent line that grows on hover -->
  <div class="absolute left-0 top-0 h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out w-full"></div>

  <div class="flex items-start justify-between gap-4">
    <!-- Title -->
    <h3 class="font-heading text-xl text-cream group-hover:text-accent transition-colors duration-300 leading-tight">
      {title}
    </h3>

    <!-- Links -->
    <div class="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {#if github}
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          class="p-1.5 text-dim hover:text-accent transition-colors duration-200"
          aria-label="View source on GitHub"
          on:click|stopPropagation
        >
          <Github size={16} />
        </a>
      {/if}
      {#if link}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          class="p-1.5 text-dim hover:text-accent transition-colors duration-200"
          aria-label="Open project"
          on:click|stopPropagation
        >
          <ArrowUpRight size={16} />
        </a>
      {/if}
    </div>
  </div>

  <!-- Description -->
  <p class="mt-3 text-sm text-dim leading-relaxed max-w-prose">
    {description}
  </p>

  <!-- Tags -->
  {#if tags.length > 0}
    <div class="flex flex-wrap gap-2 mt-5">
      {#each tags as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>
  {/if}
</article>
