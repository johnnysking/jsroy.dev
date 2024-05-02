<script>
    import { fly } from 'svelte/transition';
    import Explosion from './Explosion.svelte';
    import Fade from './Fade.svelte';
    import { createEventDispatcher, onMount } from 'svelte';
    let explosionFinished = false;
    let fadeFinished = false;
    // const dispatch = createEventDispatcher();

    // onMount(() => {
    //     setTimeout(() => {
    //     dispatch('animationFinish');
    //     }, 3000); // Adjust the delay time as needed
    // });
</script>

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

<style>

</style>