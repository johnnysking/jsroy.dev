<script>
  import projects from './projects.js';

  let expandedProject = null;
  let imageStates = {};

  function setImageState(url, state) {
    imageStates = { ...imageStates, [url]: state };
  }

  function imageLoader(node, url) {
    const markLoaded = () => {
      if (typeof node.decode === 'function') {
        node.decode().catch(() => {}).finally(() => setImageState(url, 'loaded'));
      } else {
        setImageState(url, 'loaded');
      }
    };
    const markError = () => setImageState(url, 'error');
    node.addEventListener('load', markLoaded);
    node.addEventListener('error', markError);
    if (node.complete) {
      node.naturalWidth > 0 ? markLoaded() : markError();
    }
    return {
      destroy() {
        node.removeEventListener('load', markLoaded);
        node.removeEventListener('error', markError);
      },
    };
  }

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
            class:image-contain={project.imageFit === 'contain'}
            class:is-loaded={imageStates[project.url] === 'loaded'}
            class:has-error={imageStates[project.url] === 'error'}
            use:imageLoader={project.url}
            itemprop="image"
          loading="eager"
          fetchpriority="low"
          decoding="async"
          width="350"
          height="180"
        />
        {#if imageStates[project.url] === 'error'}
          <span class="project-image-error" role="img" aria-label="Image non disponible">Image non disponible</span>
        {/if}
      </a>
      <h4 class="project-title">
        <a href={project.url} target="_blank" rel="noopener noreferrer" itemprop="url">
          <span itemprop="name">{project.name}</span>
        </a>
      </h4>
      <p class="project-description" itemprop="description">{project.description}</p>
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
