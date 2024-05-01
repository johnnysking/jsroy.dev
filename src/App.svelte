<script>
  import Explosion from './lib/Explosion.svelte';
  import Fade from './lib/Fade.svelte';
  
  let explosionFinished = false;
  let fadeFinished = false;

  function handleExplosionFinish() {
    explosionFinished = true;
  }
</script>

<main>
  {#if !explosionFinished}
    <Explosion on:explosionFinish={() => explosionFinished = true} />
  {:else}
        <Fade on:animationFinish={() => console.log('finished')} />
  {/if}
</main>

<style>
  
</style>
