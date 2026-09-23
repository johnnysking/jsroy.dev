<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let finished = false;

  function finish({ remember = false, manual = false } = {}) {
    if (finished) return;
    finished = true;
    if (remember) {
      try { sessionStorage.setItem('intro-seen', 'true'); } catch {}
    }
    dispatch('complete');
    if (manual) {
      requestAnimationFrame(() => document.querySelector('.main-content .name')?.focus({ preventScroll: true }));
    }
  }

  function finishNaturally(event) {
    if (event.currentTarget !== event.target || event.animationName !== 'fadeDown') return;
    finish({ remember: false });
  }

  function handleSkip(event) {
    event.stopPropagation();
    finish({ remember: true, manual: true });
  }
</script>

<div class="intro-overlay">
  <div class="fade-intro" id="fadeIntro" aria-hidden="true" on:animationend={finishNaturally}>
    <div class="intro-name">Jean-Sébastien Roy</div>
    <h2>Développeur Web</h2>
  </div>
  <button type="button" class="intro-skip" aria-label="Passer l’introduction" on:click={handleSkip}>Passer</button>
</div>
