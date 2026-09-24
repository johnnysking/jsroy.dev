<script>
  import { onMount } from 'svelte';
  import Drawer from './lib/Drawer.svelte';
  import Contact from './lib/Contact.svelte';
  import Homepage from './lib/Homepage.svelte';
  import Portfolio from './lib/Portfolio.svelte';
  import Services from './lib/Services.svelte';
  import SiteHeader from './lib/SiteHeader.svelte';

  let activeDrawer = null;
  let isClosing = false;
  let isSlowGrid = false;
  let drawerOpener = null;
  let pendingDrawer = null;
  let pendingDrawerOpener = null;

  function openDrawer(drawerName, opener) {
    drawerOpener = opener;
    activeDrawer = drawerName;
  }

  function openContactFromServices() {
    pendingDrawer = 'contact';
    pendingDrawerOpener = document.getElementById('contactBtn');
    closeDrawer();
  }

  function closeDrawer() {
    if (activeDrawer === null || isClosing) {
      return;
    }

    isClosing = true;
  }

  function finishClosing(event) {
    const drawerName = event.detail;
    if (activeDrawer !== drawerName) {
      return;
    }
    if (pendingDrawer) {
      activeDrawer = pendingDrawer;
      drawerOpener = pendingDrawerOpener;
      pendingDrawer = null;
      pendingDrawerOpener = null;
      isClosing = false;
      return;
    }
    activeDrawer = null;
    isClosing = false;
  }

  function handleDocumentClick(event) {
    const target = event.target;

    if (target instanceof Element && target.closest('.text-button, .drawer')) {
      return;
    }

    isSlowGrid = !isSlowGrid;
  }

  onMount(() => {
    const previousScrollRestoration = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    if (window.location.hash) {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }
    window.scrollTo(0, 0);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      history.scrollRestoration = previousScrollRestoration;
    };
  });

</script>

<div id="top" class="site-content" inert={activeDrawer !== null} aria-hidden={activeDrawer !== null}>
  <SiteHeader onOpenDrawer={openDrawer} />
  <Homepage slowGrid={isSlowGrid} />
  <section id="portfolio" class="page-section portfolio-section" aria-labelledby="portfolio-heading">
    <h2 id="portfolio-heading">Projets sélectionnés</h2>
    <Portfolio />
  </section>
</div>

<div
  class="overlay"
  class:visible={activeDrawer !== null && !isClosing}
  aria-hidden="true"
  on:click={closeDrawer}
></div>

<Drawer
  title="Contact"
  drawerName="contact"
  titleId="contactTitle"
  closeLabel="Fermer le panneau Contact"
  isOpen={activeDrawer === 'contact' && !isClosing}
  returnFocusTo={drawerOpener}
  on:close={closeDrawer}
  on:closed={finishClosing}
>
  <Contact isOpen={activeDrawer === 'contact' && !isClosing} />
</Drawer>
<Drawer
  title="Services"
  drawerName="services"
  titleId="servicesTitle"
  closeLabel="Fermer le panneau Services"
  isOpen={activeDrawer === 'services' && !isClosing}
  returnFocusTo={activeDrawer === 'services' ? drawerOpener : null}
  on:close={closeDrawer}
  on:closed={finishClosing}
>
  <Services on:contact={openContactFromServices} />
</Drawer>
