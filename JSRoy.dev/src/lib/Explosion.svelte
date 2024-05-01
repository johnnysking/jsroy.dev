<!-- src/components/Explosion.svelte -->
<script>
    import { onMount } from 'svelte';
  
    let animationFinished = false;
  
    onMount(() => {
      setTimeout(() => {
        animationFinished = true;
      }, 3000); // Adjust the delay time as needed
    });
  </script>
  
  <style>
    .container {
      position: relative;
      width: 100%;
      height: 100vh;
      background-color: #000;
      overflow: hidden;
    }
  
    .cube {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #fff;
      animation: explode 2s ease-out forwards;
    }
  
    @keyframes explode {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
      }
    }
  
    .hidden {
      display: none;
    }
  </style>
  
  <div class="container">
    {#if !animationFinished}
      {#each Array.from({ length: 100 }) as _, i}
        <div class="cube" style="left: {Math.random() * 100}vw; top: {Math.random() * 100}vh; animation-duration: {Math.random() * 2 + 1}s;"></div>
      {/each}
    {/if}
  </div>
  