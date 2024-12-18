<script>
  import expFlora from '/src/assets/expFlora.png';


  let projects = [
    {
      name: "Expérience Flora",
      image: expFlora,
      link: "https://experienceflora.ca/",
    },
    {
      name: "Diversified Farm",
      image: "src/assets/diversifiedFarm.png",
      link: "https://diversified-farm.myshopify.com/",
    },
    {
      name: "Project 3",
      image: "./assets/project3.jpg",
      link: "https://example.com/project3",
    },
  ];

  let currentIndex = 0;

  function goToNext() {
    currentIndex = (currentIndex + 1) % projects.length;
  }

  function goToPrevious() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  }

  // Handle touch gestures
  let touchStartY = 0;
  let touchEndY = 0;

  function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
  }

  function handleTouchMove(event) {
    touchEndY = event.touches[0].clientY;
  }

  function handleTouchEnd(event) {
    if (event.target.tagName === 'A') return;

    if (touchStartY - touchEndY > 50) {
      goToNext(); // Swiped up
    } else if (touchEndY - touchStartY > 50) {
      goToPrevious(); // Swiped down
    }
  }
</script>

<div 
  class="carousel-wrapper"
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={handleTouchEnd}
>
  <h2 class="carousel-title">Portfolio</h2>
  
  <button on:click={goToPrevious} class="up-button">&#9650;</button>

  <div class="carousel-content">
    {#each projects as project, index (project.link)}
      {#if index === currentIndex}
        <div class="slide">
          <img src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <!-- Display the URL directly without the "View Project" link -->
          <p class="project-url"><a href={project.link} target="_blank">{project.link}</a></p>
        </div>
      {/if}
    {/each}
  </div>
  
  <button on:click={goToNext} class="down-button">&#9660;</button>
</div>

<style>
.carousel-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden; /* Prevent page scrolling */
}

.carousel-title {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  font-weight: bold;
  z-index: 1000;
  margin: 0;
  background-color: rgba(26, 25, 25, 0.8);
  padding: 5px 10px;
  border-radius: 8px;
}

button {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  color: black;
  padding: 15px;
  font-size: 24px;
  cursor: pointer;
  z-index: 999;
  border-radius: 50%;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.up-button {
  top: 60px;
}

.down-button {
  bottom: 10px;
}

.carousel-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.slide img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

.slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.project-url a {
  text-decoration: none;
  color: #edf0f4;
  font-weight: bold;
  margin-top: 10px;
  transition: color 0.3s;
}

.project-url a:hover {
  color: #0056b3;
}
</style>
