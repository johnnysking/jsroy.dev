<script>
  import { fly } from 'svelte/transition';
  import Explosion from './lib/Explosion.svelte';
  import Fade from './lib/Fade.svelte';
  
  let explosionFinished = false;
  let fadeFinished = false;

</script>

<main>
  {#if !explosionFinished}
    <Explosion on:explosionFinish={() => explosionFinished = true} />
  {:else}
    {#if !fadeFinished}
      <div transition:fly={{ y: 600, duration: 1200 }}>
        <Fade on:animationFinish={() => console.log('finished')} />
      </div>
    {:else}
     <!-- what comes next? -->
     {/if}
  {/if}
</main>

<style>
  
</style>
