<script>
  export let slowGrid = false;
  export let introActive = true;
  export let onOpenDrawer = () => {};

  function openDrawer(drawerName, event) {
    onOpenDrawer(drawerName, event.currentTarget);
  }
</script>

<main class="main-content" class:show-immediately={!introActive}>
  <div
    class="background-grid"
    style:animation-duration={slowGrid ? '40s' : '20s'}
    aria-hidden="true"
  ></div>

  <section class="container" itemscope itemtype="https://schema.org/Person">
    <h1 class="name" itemprop="name">Jean-Sébastien Roy</h1>
    <h2 class="title" itemprop="jobTitle">Développeur Web</h2>

    <p class="description" itemprop="description">
      J’accompagne mes clients dans la création de sites Web personnalisés,
      qu’il s’agisse de portfolios, de boutiques en ligne ou de projets sur
      mesure. Mon approche est centrée sur vos besoins afin de développer une
      solution qui reflète votre identité et répond réellement à vos
      objectifs. N’hésitez pas à me contacter pour discuter de votre projet
      et voir comment je peux vous aider à le concrétiser.
    </p>

    <nav class="buttons" aria-label="Navigation principale">
      <a
        href="#portfolio"
        class="text-button"
        id="portfolioBtn"
        aria-label="Voir mon portfolio"
        on:click|preventDefault={(event) => openDrawer('portfolio', event)}
      >Portfolio</a>
      <a
        href="#contact"
        class="text-button"
        id="contactBtn"
        aria-label="Me contacter"
        on:click|preventDefault={(event) => openDrawer('contact', event)}
      >Contact</a>
    </nav>
  </section>
</main>
