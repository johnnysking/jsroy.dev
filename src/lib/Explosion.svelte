<script>
   import { onMount } from 'svelte';

onMount(() => {
  setTimeout(() => {
    const event = new CustomEvent('explosionFinish');
    window.dispatchEvent(event);
  }, 3000); // Adjust the delay time as needed
});
</script>

<div class="container">  
    {#each Array.from({ length: 100 }) as _, i}
      <div class="cube" style="left: {Math.random() * 100}vw; top: {Math.random() * 100}vh; animation-duration: {Math.random() * 2 + 1}s;"></div>
    {/each}  
</div>

<style>
  .container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
    left: 0;
    top: 0;
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
</style>