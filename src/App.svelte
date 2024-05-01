<script>
  import Explosion from './lib/Explosion.svelte';
  import Fade from './lib/Fade.svelte';
  
  let explosionFinished = false;

  function handleExplosionFinish() {
    explosionFinished = true;
  }
</script>

<main>
  {#if !explosionFinished}
    <Explosion on:explosionFinish={() => explosionFinished = true} />
  {:else}
  {/if}
</main>

<style>
  
</style>
