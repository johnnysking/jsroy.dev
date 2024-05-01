<script>
  import { fly } from 'svelte/transition';
  import Explosion from './lib/Explosion.svelte';
  import Fade from './lib/Fade.svelte';
  import Homepage from './lib/Homepage.svelte';
  
  let explosionFinished = false;
  let fadeFinished = false;

</script>

<main>
  {#if !explosionFinished}
    <Explosion on:explosionFinish={() => explosionFinished = true} />
  {:else}
    {#if !fadeFinished}
      <div transition:fly={{ y: 600, duration: 2000 }}>
        <Fade on:animationFinish={() => console.log('finished')} />
      </div>
    {:else}
     <!-- what comes next? -->
     {/if}
  {/if}
  <Homepage />
</main>

<style>
  
</style>
