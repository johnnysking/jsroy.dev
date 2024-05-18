<script>
    import { createEventDispatcher } from 'svelte';
    export let isOpen = false;
    const dispatch = createEventDispatcher();
  
    function closeDrawer() {
      dispatch('close');
    }
  </script>
  
  <style>
    .drawer {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 90vw;
      background: white;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 1000;
    }
  
    .drawer.open {
      transform: translateX(0);
    }
  
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }
  </style>
  
  {#if isOpen}
    <div class="overlay" on:click={closeDrawer}></div>
  {/if}
  
  <div class={`drawer ${isOpen ? 'open' : ''}`}>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeUIZ3nhBlsgR8JhM_9fhelzpFCB_PVU6VfhWCu9FvPRVZSeg/viewform?usp=sf_link"
            width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
  </div>
  