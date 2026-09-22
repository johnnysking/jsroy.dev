<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  function finishNaturally(event) {
    if (event.currentTarget !== event.target) return;
    try { sessionStorage.setItem('intro-seen', 'true'); } catch {}
    dispatch('complete');
  }
</script>

<div class="fade-intro" id="fadeIntro" on:animationend={finishNaturally}>
  <h1>Jean-Sébastien Roy</h1>
  <h2>Développeur Web</h2>
</div>
