<script>
  import { onMount, onDestroy } from 'svelte';

  let x = 0;
  let y = 0;
  let hidden = false;
  let isTouch = false;

  let frame;

  function setPos(event) {
    x = event.clientX;
    y = event.clientY;
  }

  onMount(() => {
    isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    document.documentElement.classList.add('custom-cursor-active');
    const show = () => (hidden = false);
    const hide = () => (hidden = true);

    const move = (e) => {
      setPos(e);
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = null;
        });
      }
    };

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerenter', show);
    window.addEventListener('pointerleave', hide);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerenter', show);
      window.removeEventListener('pointerleave', hide);
      if (frame) cancelAnimationFrame(frame);
    };
  });
</script>

{#if !isTouch}
  <div
    class={`custom-cursor ${hidden ? 'opacity-0' : 'opacity-100'}`}
    style={`transform: translate3d(${x}px, ${y}px, 0);`}
    aria-hidden="true"
  ></div>
{/if}
