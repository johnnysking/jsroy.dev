<script>
  import projects from './projects.js';

  let expandedProject = null;

  function toggleProject(url) {
    expandedProject = expandedProject === url ? null : url;
  }
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
      <button
        type="button"
        class="project-details-toggle"
        aria-expanded={expandedProject === project.url}
        aria-controls={`project-details-${project.url.replace(/[^a-z0-9]+/gi, '-')}`}
        on:click={() => toggleProject(project.url)}
      >{expandedProject === project.url ? 'Masquer les détails' : 'Voir les détails'}</button>
      {#if expandedProject === project.url}
        <div
          class="project-details"
          id={`project-details-${project.url.replace(/[^a-z0-9]+/gi, '-')}`}
        >
          <h5>Le projet</h5>
          <p>{project.mandate}</p>
          <h5>Réalisation</h5>
          <ul>
            {#each project.solutionItems as item}
              <li>{item}</li>
            {/each}
          </ul>
          <h5>Outils utilisés</h5>
          <div class="project-technologies">
            {#each project.expertise as technology}
              <span class="technology-tag">{technology}</span>
            {/each}
          </div>
          <a
            class="project-visit-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            itemprop="url"
          >Visiter le site <span aria-hidden="true">↗</span></a>
        </div>
      {/if}
    </article>
  {/each}
</div>
