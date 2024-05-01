<!-- Fade.svelte -->

<script>
  import { onMount, createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  onMount(() => {
    setTimeout(() => {
      dispatch('animationFinish');
    }, 5000); // Adjust the delay time as needed
  });
</script>

<div>
  <h1>Jean-Sébastien Roy</h1>
  <h2>Développeur Web</h2>
</div>

<style>
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow: hidden;
    position: relative;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    opacity: 1;
    animation: fadeDown 5s ease forwards;
  }

</style>
