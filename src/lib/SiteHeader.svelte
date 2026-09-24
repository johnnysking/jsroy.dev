<script>
  import { onDestroy, tick } from 'svelte';
  import logo from '../../assets/logo.png';
  export let onOpenDrawer = () => {};

  let menuOpen = false;
  let menuButton;
  let firstMenuLink;

  $: if (typeof document !== 'undefined') {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
    if (menuOpen) {
      tick().then(() => firstMenuLink?.focus());
    } else {
      menuButton?.focus();
    }
  }

  function closeMenu(restoreFocus = true) {
    menuOpen = false;
    if (restoreFocus) menuButton?.focus();
  }

  function openDrawer(drawer, event) {
    closeMenu(false);
    onOpenDrawer(drawer, event.currentTarget);
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && menuOpen) {
      event.preventDefault();
      closeMenu();
    }
  }

  function handleViewportChange() {
    if (window.matchMedia('(min-width: 701px)').matches && menuOpen) {
      closeMenu(false);
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('resize', handleViewportChange);
  }

  onDestroy(() => {
    if (typeof document !== 'undefined') document.body.style.overflow = '';
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('resize', handleViewportChange);
    }
  });
</script>

<header class="site-header">
  <a class="site-logo" href="#top" aria-label="Accueil jsroy.dev"><img class="site-logo-image" src={logo} alt="jsroy.dev" /></a>
  <nav class="desktop-nav" aria-label="Navigation principale">
    <a class="text-button" href="#portfolio">Portfolio</a>
    <button class="text-button nav-action" type="button" on:click={(event) => openDrawer('services', event)}>Services</button>
    <button class="text-button nav-action" id="contactBtn" type="button" on:click={(event) => openDrawer('contact', event)}>Contact</button>
  </nav>
  <button
    bind:this={menuButton}
    class="mobile-menu-toggle"
    type="button"
    aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
    aria-expanded={menuOpen}
    aria-controls="mobile-navigation"
    on:click={toggleMenu}
  >
    <span class="hamburger-icon" aria-hidden="true">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </span>
  </button>
</header>
{#if menuOpen}
  <div class="mobile-menu-overlay" aria-hidden="true" on:click={() => closeMenu()}></div>
  <nav id="mobile-navigation" class="mobile-menu" aria-label="Navigation mobile">
    <a bind:this={firstMenuLink} href="#portfolio" on:click={() => closeMenu(false)}>Portfolio</a>
    <button type="button" on:click={(event) => openDrawer('services', event)}>Services</button>
    <button type="button" on:click={(event) => openDrawer('contact', event)}>Contact</button>
  </nav>
{/if}
