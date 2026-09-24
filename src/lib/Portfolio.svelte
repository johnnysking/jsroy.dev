<script>
  import projects from './projects.js';

  let expandedProject = null;

  function toggleProject(url) {
    expandedProject = expandedProject === url ? null : url;
  }
</script>

<div class="portfolio-grid" itemscope itemtype="https://schema.org/CreativeWork">
  {#each projects as project, index (project.url)}
    <article class="project" class:project-even={index % 2 === 1} itemscope itemtype="https://schema.org/CreativeWork">
      <span class="project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <div class="project-identity">
        <h3 class="project-title">
          <a href={project.url} target="_blank" rel="noopener noreferrer" itemprop="url">
            <span itemprop="name">{project.name}</span>
          </a>
        </h3>
        <p class="project-description" itemprop="description">{project.description}</p>
      </div>
      <div class="project-meta">
        <p class="project-technologies">{project.technologies}</p>
        <div class="project-actions">
          <button
            type="button"
            class="project-details-toggle"
            aria-expanded={expandedProject === project.url}
            aria-controls={`project-details-${project.url.replace(/[^a-z0-9]+/gi, '-')}`}
            on:click={() => toggleProject(project.url)}
          >{expandedProject === project.url ? 'Masquer les détails' : 'Voir les détails'}</button>
          <a
            class="project-visit-link project-visit-link--card"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.ariaLabel}
          >Visiter le site <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      {#if expandedProject === project.url}
        <div
          class="project-details"
          id={`project-details-${project.url.replace(/[^a-z0-9]+/gi, '-')}`}
        >
          <h5>Fonctionnalités développées et intégrées</h5>
          <ul>
            {#each project.features as item}
              <li>{item}</li>
            {/each}
          </ul>
          <p class="project-more">Et plus encore…</p>
          <p class="project-technologies">{project.technologies}</p>
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
