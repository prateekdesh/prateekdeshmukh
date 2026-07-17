<script>
  /**
   * Section header, human-first: big serif heading leads,
   * the tool call is a quiet mono annotation on the same baseline.
   */
  export let num = '01';
  export let heading = '';     // plain-English heading (or use the slot for markup)
  export let call = 'tool.call()';
  export let pending = 'running…';
  export let ok = '200 OK';
</script>

<header class="relative mb-10">
  <!-- spine marker: diamond sitting on the trace line -->
  <span
    class="absolute -left-7 md:-left-14 top-[0.9em] w-[9px] h-[9px] -translate-x-[5px] rotate-45 bg-sig"
    aria-hidden="true"
  ></span>

  <div class="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-rule pb-4">
    <h2 class="font-serif font-medium text-ink leading-tight" style="font-size: clamp(1.75rem, 3.6vw, 2.5rem);">
      <slot>{heading}</slot>
    </h2>

    <span class="font-mono text-[11px] tracking-wide text-faint whitespace-nowrap">
      span_{num} · <span class="text-sig-deep">{call}</span>
      <span class="status-swap ml-1.5">
        <span class="st-pending text-faint">· {pending}</span>
        <span class="st-ok text-sig font-medium">· {ok}</span>
      </span>
    </span>
  </div>
</header>
