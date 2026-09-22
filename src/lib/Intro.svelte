<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  function finishNaturally(event) {
    if (event.currentTarget !== event.target) return;
    try { sessionStorage.setItem('intro-seen', 'true'); } catch {}
    dispatch('complete');
  }
</script>

<div class="fade-intro" id="fadeIntro" aria-hidden="true" on:animationend={finishNaturally}>
  <div class="intro-name">Jean-Sébastien Roy</div>
  <h2>Développeur Web</h2>
</div>
