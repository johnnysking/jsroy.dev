<script>
  import { afterUpdate, createEventDispatcher, onDestroy, tick } from 'svelte';

  export let title;
  export let titleId;
  export let closeLabel;
  export let isOpen = false;
  export let returnFocusTo = null;
  export let drawerName = '';

  const dispatch = createEventDispatcher();
  const focusableSelector =
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';

  let dialogElement;
  let closeButton;
  let wasOpen = false;
  let isClosing = false;

  afterUpdate(() => {
    if (isOpen === wasOpen) {
      return;
    }

    wasOpen = isOpen;
    if (isOpen) {
      isClosing = false;
      focusDialog();
    } else {
      isClosing = true;
    }
  });

  function closeDrawer() {
    dispatch('close');
  }

  async function focusDialog() {
    document.addEventListener('keydown', handleKeydown);
    await tick();

    if (isOpen) {
      closeButton?.focus();
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDrawer();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements = [...dialogElement.querySelectorAll(focusableSelector)].filter(
      (element) => element.getClientRects().length > 0,
    );
    const firstElement = focusableElements[0] ?? closeButton;
    const lastElement = focusableElements[focusableElements.length - 1] ?? closeButton;

    if (event.shiftKey && (document.activeElement === firstElement || !dialogElement.contains(document.activeElement))) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && (document.activeElement === lastElement || !dialogElement.contains(document.activeElement))) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  async function handleTransitionEnd(event) {
    if (event.target !== dialogElement || event.propertyName !== 'right' || !isClosing) {
      return;
    }

    isClosing = false;
    document.removeEventListener('keydown', handleKeydown);
    dispatch('closed', drawerName);
    await tick();

    if (returnFocusTo?.isConnected) {
      returnFocusTo.focus();
    }
  }

  onDestroy(() => {
    document.removeEventListener('keydown', handleKeydown);
  });
</script>

<aside
  bind:this={dialogElement}
  class="drawer"
  class:open={isOpen}
  role="dialog"
  aria-labelledby={titleId}
  aria-modal={isOpen || isClosing}
  aria-hidden={!isOpen && !isClosing}
  inert={!isOpen && !isClosing}
  on:transitionend={handleTransitionEnd}
>
  <header class="drawer-header">
    <h2 class="drawer-title" id={titleId}>{title}</h2>
    <button bind:this={closeButton} class="close-btn" on:click={closeDrawer} aria-label={closeLabel}>
      <span aria-hidden="true">&times;</span>
    </button>
  </header>
  <div class="drawer-content">
    <slot />
  </div>
</aside>
