<script>
    import { onMount } from 'svelte';
  
    let animationFinished = false;
  
    onMount(() => {
      setTimeout(() => {
        animationFinished = true;
      }, 5000);
    });
  </script> 
  
  <div class="content {animationFinished ? 'hidden' : ''}">
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
  
    @keyframes fadeDown {
      0% {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, 100%);
      }
    }
  
    .hidden {
      display: none;
    }
  </style>