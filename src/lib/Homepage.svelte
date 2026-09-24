<script>
  import logo from '../../assets/logo.png';

  export let slowGrid = false;
  export let onOpenDrawer = () => {};

  function openDrawer(drawerName, event) {
    onOpenDrawer(drawerName, event.currentTarget);
  }
</script>

<main class="main-content">
  <div
    class="background-grid"
    style:animation-duration={slowGrid ? '40s' : '20s'}
    aria-hidden="true"
  ></div>

  <section class="container" itemscope itemtype="https://schema.org/Person">
    <div class="hero-identity">
      <h1 class="name">Jean-Sébastien Roy</h1>
      <h2 class="title">Développeur Web</h2>
    </div>

    <div class="hero-logo-container">
      <img class="hero-logo" src={logo} alt="jsroy.dev" />
    </div>

    <nav class="buttons" aria-label="Navigation principale">
      <a
        href="#portfolio"
        class="text-button"
        id="portfolioBtn"
        aria-label="Voir mon portfolio"
        on:click|preventDefault={(event) => openDrawer('portfolio', event)}
      >Portfolio</a>
      <a
        href="#services"
        class="text-button"
        id="servicesBtn"
        aria-label="Voir mes services"
        on:click|preventDefault={(event) => openDrawer('services', event)}
      >Services</a>
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
