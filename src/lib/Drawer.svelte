<script>
  import { createEventDispatcher } from 'svelte';

  export let title;
  export let titleId;
  export let closeLabel;
  export let isOpen = false;

  const dispatch = createEventDispatcher();

  function closeDrawer() {
    dispatch('close');
  }
</script>

<aside
  class="drawer"
  class:open={isOpen}
  role="dialog"
  aria-labelledby={titleId}
  aria-modal="true"
>
  <header class="drawer-header">
    <h3 class="drawer-title" id={titleId}>{title}</h3>
    <button class="close-btn" on:click={closeDrawer} aria-label={closeLabel}>&times;</button>
  </header>
  <div class="drawer-content">
    <slot />
  </div>
</aside>
