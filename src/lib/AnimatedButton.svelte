<script>
  export let label = "Option";
  export let onClick = () => {};
</script>

<div class="radio-btn-group" on:click={onClick}>
  <label>
    <span>{label}</span>
    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
      <g class="left">
        {#each Array.from({ length: 24 }) as _, i}
          <rect x="-100%" y={i * 2} width="100%" height="2" />
        {/each}
      </g>
    </svg>
  </label>
</div>

<style>
  .radio-btn-group {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 10px 20px;
    border: 2px solid #000;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  rect {
    fill: #000;
    transform: translateX(0);
    animation: slide 1s ease forwards;
  }

  @keyframes slide {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
</style>
