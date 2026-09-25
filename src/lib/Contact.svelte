<script>
  import { onDestroy } from 'svelte';

  let isSubmitting = false;
  let resultMessage = '';
  let resultType = '';
  export let isOpen = false;
  let captchaContainer;
  let captchaRendered = false;
  let captchaObserver;
  let captchaScriptPromise;
  $: if (isOpen) loadCaptcha();
  function loadCaptcha() {
    if (!captchaContainer || captchaRendered) return;
    if (!captchaScriptPromise) {
      const existing = document.querySelector('script[data-web3forms-client]');
      if (existing) {
        captchaScriptPromise = new Promise((resolve) => {
          if (existing.dataset.loaded === 'true' || existing.readyState === 'complete') {
            resolve();
          } else {
            existing.addEventListener('load', resolve, { once: true });
          }
        });
      } else {
        const script = document.createElement('script');
        script.src = 'https://web3forms.com/client/script.js';
        script.async = true;
        script.defer = true;
        script.dataset.web3formsClient = 'true';
        captchaScriptPromise = new Promise((resolve) => {
          script.addEventListener('load', () => {
            script.dataset.loaded = 'true';
            resolve();
          }, { once: true });
        });
        document.head.appendChild(script);
      }
    }
    captchaScriptPromise.then(() => {
      if (!captchaContainer || captchaRendered) return;

      // The Web3Forms client observes data-captcha containers. Re-touch the
      // attribute when the script was already loaded before Svelte mounted it.
      captchaContainer.removeAttribute('data-captcha');
      captchaContainer.setAttribute('data-captcha', 'true');

      captchaObserver = new MutationObserver(() => {
        if (captchaContainer?.children.length) {
          captchaRendered = true;
          captchaObserver.disconnect();
          captchaObserver = undefined;
        }
      });
      captchaObserver.observe(captchaContainer, { childList: true });

      if (captchaContainer.children.length) {
        captchaRendered = true;
        captchaObserver.disconnect();
        captchaObserver = undefined;
      }
    });
  }

  onDestroy(() => {
    captchaObserver?.disconnect();
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const honeypot = form.elements.namedItem('botcheck');

    if (honeypot.value !== '') {
      resultMessage = 'Erreur : spam détecté.';
      resultType = 'error';
      return;
    }

    isSubmitting = true;
    resultMessage = '';
    resultType = '';

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        resultMessage = 'Message envoyé avec succès ! Je vous répondrai bientôt.';
        resultType = 'success';
        form.reset();
      } else {
        resultMessage =
          data.message || 'Erreur lors de l\'envoi. Veuillez réessayer ou m\'écrire directement.';
        resultType = 'error';
      }
    } catch {
      resultMessage = 'Erreur lors de l\'envoi. Veuillez réessayer ou m\'écrire directement.';
      resultType = 'error';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<div itemscope itemtype="https://schema.org/ContactPage">
  <address class="contact-info">
    <div class="contact-item">
      <div class="contact-label">Email</div>
      <div class="contact-value">
        <a href="mailto:contact@jsroy.dev" itemprop="email" rel="noopener">contact@jsroy.dev</a>
      </div>
    </div>
    <div class="contact-item">
      <div class="contact-label">LinkedIn</div>
      <div class="contact-value">
        <a
          href="https://www.linkedin.com/in/jean-s%C3%A9bastien-roy/"
          target="_blank"
          rel="noopener noreferrer"
          itemprop="sameAs"
          aria-label="Profil LinkedIn de Jean-Sébastien Roy"
          >linkedin.com/in/jean-sébastien-roy</a
        >
      </div>
    </div>
    <div class="contact-item">
      <div class="contact-label">GitHub</div>
      <div class="contact-value">
        <a
          href="https://github.com/johnnysking/"
          target="_blank"
          rel="noopener noreferrer"
          itemprop="sameAs"
          aria-label="Profil GitHub de Jean-Sébastien Roy"
          >github.com/johnnysking</a
        >
      </div>
    </div>
  </address>

  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    id="contactForm"
    class="contact-form"
    aria-label="Formulaire de contact"
    on:submit={handleSubmit}
  >
    <input type="hidden" name="access_key" value="0e19570b-b80f-43ff-b9fe-ab904365fcf7" />
    <input type="hidden" name="subject" value="Nouveau message depuis jsroy.dev" />
    <input type="hidden" name="from_name" value="Site Web jsroy.dev" />

    <input
      type="text"
      name="botcheck"
      class="hidden"
      style="display: none;"
      tabindex="-1"
      autocomplete="off"
      aria-hidden="true"
    />

    <div class="form-group">
      <label for="name" class="form-label">Nom</label>
      <input
        type="text"
        id="name"
        name="name"
        class="form-input"
        required
        autocomplete="name"
        aria-required="true"
      />
    </div>

    <div class="form-group">
      <label for="email" class="form-label">Courriel</label>
      <input
        type="email"
        id="email"
        name="email"
        class="form-input"
        required
        autocomplete="email"
        aria-required="true"
      />
    </div>

    <div class="form-group">
      <label for="message" class="form-label">Message</label>
      <textarea
        id="message"
        name="message"
        class="form-textarea"
        rows="5"
        required
        aria-required="true"
      ></textarea>
    </div>

    <div bind:this={captchaContainer} class="h-captcha" data-captcha="true" aria-label="Vérification de sécurité"></div>

    <button
      type="submit"
      class="form-submit"
      aria-label="Envoyer le message"
      disabled={isSubmitting}
    >{isSubmitting ? 'Envoi en cours...' : 'Envoyer'}</button>

    <p
      id="formResult"
      class="form-result"
      class:success={resultType === 'success'}
      class:error={resultType === 'error'}
      role="alert"
      aria-live="polite"
    >{resultMessage}</p>
  </form>
</div>
