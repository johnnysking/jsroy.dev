<script>
  import { createEventDispatcher } from 'svelte';
  import Carousel from './Carousel.svelte';
  export let isOpen = false;
  const dispatch = createEventDispatcher();

  function closeDrawer() {
    dispatch('close');
  }
</script>

{#if isOpen}
  <div class="overlay" on:click={closeDrawer}></div>
{/if}

<div class={`drawer ${isOpen ? 'open' : ''}`}>    
  <button class="close-button" on:click={closeDrawer}>
    <span class="close-icon">X</span>
  </button>
  <!-- <h2>Portfolio</h2> -->
  <Carousel />
</div>

<style>
  .drawer {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 90vw;
    background: rgb(0, 0, 0);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 1000;
    padding: 20px;
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

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
    z-index: 1001;
    padding: 5px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .close-button:hover .close-icon {
    transform: rotate(90deg); /* Rotate the X */
  }

  .close-button:active {
    transform: scale(0.9); /* Slightly shrink on click */
    opacity: 0.8; /* Reduce opacity on click */
  }

  .close-icon {
    display: inline-block;
    transition: transform 0.3s ease; /* Smooth rotation */
  }

  h2 {
    color: white;
    text-align: center;
    margin-top: 60px; /* Adjust if needed to ensure it doesn't overlap the close button */
  }
</style>
