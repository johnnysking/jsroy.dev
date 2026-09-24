<script>
  import logo from '../../assets/logo.png';
  export let onOpenDrawer = () => {};
  function open(drawer, event) { onOpenDrawer(drawer, event.currentTarget); }
</script>

<header class="site-header">
  <a class="site-logo" href="#top" aria-label="Accueil jsroy.dev"><img class="site-logo-image" src={logo} alt="jsroy.dev" /></a>
  <nav aria-label="Navigation principale">
    <a class="text-button" href="#portfolio">Portfolio</a>
    <a class="text-button" href="#services" on:click|preventDefault={(event) => open('services', event)}>Services</a>
    <a class="text-button" id="contactBtn" href="#contact" on:click|preventDefault={(event) => open('contact', event)}>Contact</a>
  </nav>
</header>
