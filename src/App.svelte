<script>
  import { onMount } from 'svelte';
  import Drawer from './lib/Drawer.svelte';
  import Contact from './lib/Contact.svelte';
  import Homepage from './lib/Homepage.svelte';
  import Intro from './lib/Intro.svelte';
  import Portfolio from './lib/Portfolio.svelte';

  let activeDrawer = null;
  let isSlowGrid = false;

  function openDrawer(drawerName) {
    activeDrawer = drawerName;
  }

  function closeDrawer() {
    activeDrawer = null;
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeDrawer();
    }
  }

  function handleDocumentClick(event) {
    const target = event.target;

    if (target instanceof Element && target.closest('.text-button, .drawer')) {
      return;
    }

    isSlowGrid = !isSlowGrid;
  }

  onMount(() => {
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('click', handleDocumentClick);
    };
  });

</script>

<Intro />
<Homepage slowGrid={isSlowGrid} onOpenDrawer={openDrawer} />

<div
  class="overlay"
  class:visible={activeDrawer !== null}
  aria-hidden="true"
  on:click={closeDrawer}
></div>

<Drawer
  title="Contact"
  titleId="contactTitle"
  closeLabel="Fermer le formulaire de contact"
  isOpen={activeDrawer === 'contact'}
  on:close={closeDrawer}
>
  <Contact />
</Drawer>
<Drawer
  title="Portfolio"
  titleId="portfolioTitle"
  closeLabel="Fermer le portfolio"
  isOpen={activeDrawer === 'portfolio'}
  on:close={closeDrawer}
>
  <Portfolio />
</Drawer>
