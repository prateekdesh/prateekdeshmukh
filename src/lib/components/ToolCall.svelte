<script>
  /**
   * A "tool call" section header — the chrome of the trace.
   * Sits inside the spine wrapper (which provides border-l + padding-left).
   */
  export let num = '01';          // span number
  export let name = 'tool.call';  // function name (green)
  export let args = '()';         // argument string (dim)
  export let pending = 'running…';
  export let ok = '200 OK';
  export let dur = '';            // e.g. "38ms"
</script>

<header class="relative mb-8">
  <!-- spine marker: diamond sitting on the trace line -->
  <span
    class="absolute -left-7 md:-left-14 top-[1.35rem] w-[9px] h-[9px] -translate-x-[5px] rotate-45 bg-sig"
    aria-hidden="true"
  ></span>

  <div class="m-label mb-1.5">span_{num} · tool_call</div>

  <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-3">
    <h2 class="font-mono text-[15px] md:text-[17px] font-medium tracking-tight text-ink">
      <span class="text-sig font-semibold">{name}</span><span class="text-faint">(</span><span class="text-dim font-normal text-[13px] md:text-[15px]">{args}</span><span class="text-faint">)</span>
    </h2>

    <span class="status-swap font-mono text-[11px] tracking-wide ml-auto">
      <span class="st-pending text-faint">{pending}</span>
      <span class="st-ok text-sig font-medium">{#if dur}<span class="text-faint font-normal">{dur} · </span>{/if}{ok}</span>
    </span>
  </div>
</header>
