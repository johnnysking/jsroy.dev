<script>
  import Explosion from './lib/Explosion.svelte';
  import Fade from './lib/Fade.svelte';
  
  let explosionFinished = false;

  function handleExplosionFinish() {
    explosionFinished = true;
  }
</script>

<main>
  <Explosion on:explosionFinish={handleExplosionFinish} />
  {#if explosionFinished}
    <Fade />
  {/if}
</main>

<style>
  
</style>
