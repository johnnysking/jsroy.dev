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
    <h2>Portfolio</h2>
    <Carousel />
  </div>
  
  <style>
    .drawer {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 90vw;
      background: rgb(212, 212, 212);
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
      transform: translateX(-100%);
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