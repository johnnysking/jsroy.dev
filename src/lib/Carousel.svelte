<script>
    let projects = [
      {
        name: "Aux Points",
        image: "./assets/auxpoints.png",
        link: "https://www.auxpoints.com",
      },
      {
        name: "Project 2",
        image: "https://example.com/image2.jpg",
        link: "https://example.com/project2",
      },
      {
        name: "Project 3",
        image: "https://example.com/image3.jpg",
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
  </script>
  
  <div class="carousel-container">
    {#each projects as project, index (project.link)}
      <div class="slide" class:selected={index === currentIndex}>
        <img src={project.image} alt={project.name} />
        <h3>{project.name}</h3>
        <a href={project.link} target="_blank">View Project</a>
      </div>
    {/each}
    
    <button on:click={goToPrevious}>&#10094;</button>
    <button on:click={goToNext}>&#10095;</button>
  </div>
  
  <style>
    .carousel-container {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
  
    .slide {
      display: none;
      text-align: center;
    }
  
    .selected {
      display: block;
    }
  
    img {
      max-width: 100%;
      max-height: 100%;
    }
  
    button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(255, 255, 255, 0.5);
      border: none;
      color: black;
      padding: 10px;
      font-size: 20px;
      cursor: pointer;
      z-index: 999;
    }
  
    button:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  
    button:first-child {
      left: 0;
    }
  
    button:last-child {
      right: 0;
    }
  </style>
  