<script>
  export let company = "Company";
  export let role = "Role";
  export let period = "Period";
  export let description = "";
  export let bullets = [];
  export let tags = [];
</script>

<div class="group relative grid grid-cols-[1fr_auto] gap-6 py-10 border-b border-rule last:border-b-0 hover:border-accent/20 transition-colors duration-300">
  <!-- Left column -->
  <div class="flex flex-col gap-2">
    <!-- Role -->
    <h3 class="font-heading text-xl text-cream leading-tight">
      {role}
    </h3>

    <!-- Company -->
    <div class="font-mono text-[11px] tracking-[0.15em] uppercase text-accent">
      {company}
    </div>

    <!-- Bullet list (preferred) -->
    {#if bullets.length > 0}
      <ul class="mt-3 flex flex-col gap-2 max-w-xl">
        {#each bullets as bullet}
          <li class="flex gap-3 text-sm text-dim leading-relaxed">
            <span class="mt-[0.35em] shrink-0 w-1 h-1 rounded-full bg-accent/40"></span>
            <span>{bullet}</span>
          </li>
        {/each}
      </ul>
    {:else if description}
      <p class="mt-3 text-sm text-dim leading-relaxed max-w-xl">
        {description}
      </p>
    {/if}

    <!-- Tags -->
    {#if tags.length > 0}
      <div class="flex flex-wrap gap-2 mt-4">
        {#each tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Right column: period -->
  <div class="font-mono text-[10px] tracking-[0.12em] uppercase text-muted whitespace-nowrap pt-1">
    {period}
  </div>
</div>
