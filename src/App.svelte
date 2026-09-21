<script>
  import { onMount } from 'svelte';
  import Drawer from './lib/Drawer.svelte';
  import Contact from './lib/Contact.svelte';
  import Homepage from './lib/Homepage.svelte';
  import Intro from './lib/Intro.svelte';
  import Portfolio from './lib/Portfolio.svelte';

  let activeDrawer = null;
  let isClosing = false;
  let isSlowGrid = false;
  let drawerOpener = null;

  function openDrawer(drawerName, opener) {
    drawerOpener = opener;
    activeDrawer = drawerName;
  }

  function closeDrawer() {
    if (activeDrawer === null || isClosing) {
      return;
    }

    isClosing = true;
  }

  function finishClosing() {
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
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  });

</script>

<div inert={activeDrawer !== null} aria-hidden={activeDrawer !== null}>
  <Intro />
  <Homepage slowGrid={isSlowGrid} onOpenDrawer={openDrawer} />
</div>

<div
  class="overlay"
  class:visible={activeDrawer !== null && !isClosing}
  aria-hidden="true"
  on:click={closeDrawer}
></div>

<Drawer
  title="Contact"
  titleId="contactTitle"
  closeLabel="Fermer le panneau Contact"
  isOpen={activeDrawer === 'contact' && !isClosing}
  returnFocusTo={drawerOpener}
  on:close={closeDrawer}
  on:closed={finishClosing}
>
  <Contact />
</Drawer>
<Drawer
  title="Portfolio"
  titleId="portfolioTitle"
  closeLabel="Fermer le panneau Portfolio"
  isOpen={activeDrawer === 'portfolio' && !isClosing}
  returnFocusTo={drawerOpener}
  on:close={closeDrawer}
  on:closed={finishClosing}
>
  <Portfolio />
</Drawer>
