<script>
  export let slowGrid = false;
</script>

<main class="main-content hero" aria-labelledby="hero-title">
  <div
    class="background-grid"
    style:animation-duration={slowGrid ? '40s' : '20s'}
    aria-hidden="true"
  ></div>

  <section class="container" itemscope itemtype="https://schema.org/Person">
    <div class="hero-identity">
      <h1 id="hero-title" class="name">Jean-Sébastien Roy</h1>
      <h2 class="title">Développeur Web</h2>
    </div>
    <p class="hero-subtitle">Développement Web personnalisé pour artistes, entreprises et organismes.</p>
    <a class="hero-project-link" href="#portfolio">Découvrir les projets <span aria-hidden="true">↓</span></a>
  </section>
</main>
