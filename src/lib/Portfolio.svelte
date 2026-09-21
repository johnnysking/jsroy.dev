<script>
  import projects from './projects.js';
</script>

<div class="portfolio-grid" itemscope itemtype="https://schema.org/CreativeWork">
  {#each projects as project (project.url)}
    <article class="project" itemscope itemtype="https://schema.org/CreativeWork">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        class="project-image-link"
        aria-label={project.ariaLabel}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          class="project-image"
          itemprop="image"
          loading="lazy"
          width="350"
          height="180"
        />
      </a>
      <h4 class="project-title">
        <a href={project.url} target="_blank" rel="noopener noreferrer" itemprop="url">
          <span itemprop="name">{project.name}</span>
        </a>
      </h4>
      <p class="project-description" itemprop="description">{project.description}</p>
    </article>
  {/each}
</div>
