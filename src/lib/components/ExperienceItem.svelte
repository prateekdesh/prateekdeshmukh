<script>
  export let company = "Company";
  export let role = "Role";
  export let period = "Period";
  export let description = "";
  export let tags = [];
</script>

<div class="relative pl-8 pb-12 last:pb-0 group">
  <!-- Timeline Line -->
  <div class="absolute left-[11px] top-0 bottom-0 w-[2px] bg-accent/10 group-last:bg-gradient-to-b group-last:from-accent/10 group-last:to-transparent"></div>
  
  <!-- Timeline Dot -->
  <div class="absolute left-0 top-0 w-6 h-6 rounded-full border-2 border-accent/20 bg-off-white dark:bg-ink flex items-center justify-center transition-all duration-300 group-hover:border-accent">
    <div class="w-1.5 h-1.5 rounded-full bg-accent opacity-40 group-hover:opacity-100"></div>
  </div>

  <div class="flex flex-col gap-2">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
      <h3 class="text-lg font-heading font-bold tracking-tight">{role}</h3>
      <span class="text-xs font-bold uppercase tracking-widest text-accent/60">{period}</span>
    </div>
    
    <div class="text-sm font-medium text-accent hover:underline decoration-accent/30 underline-offset-4 cursor-default">
      {company}
    </div>

    {#if description}
      <p class="text-sm text-ink/60 dark:text-off-white/60 mt-1 max-w-xl leading-relaxed">
        {description}
      </p>
    {/if}

    {#if tags.length > 0}
      <div class="flex flex-wrap gap-2 mt-2">
        {#each tags as tag}
          <span class="text-[10px] font-bold text-ink/40 dark:text-off-white/40 uppercase tracking-widest">
            {tag}
          </span>
        {/each}
      </div>
    {/if}
  </div>
</div>
