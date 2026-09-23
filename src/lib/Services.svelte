<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<div class="services-content">
  <p>Sites web sur mesure, conçus à Québec pour des artistes, des entreprises et des organismes d'ici. Chaque projet est pensé autour de son contenu, de ses fonctionnalités pis des gens qui vont le faire vivre.</p>

  <section>
    <h3>Portfolios et sites d'artistes</h3>
    <p>Des environnements numériques pensés à partir de ton travail — modèle prédéfini ou concept sur mesure. L'architecture, la navigation pis le traitement des images s'adaptent à ton corpus. Taxonomies, galeries dynamiques, lightbox sur mesure pis interfaces de publication rendent ton univers accessible en ligne.</p>
  </section>
  <section>
    <h3>Commerce en ligne</h3>
    <p>Des boutiques taillées sur ton commerce — catalogue, réservations, billetterie, ramassage ou livraison. La structure colle à tes méthodes de gestion pis à l'expérience d'achat. Migration de données, intégrations tierces, automatisation : le tout pensé pour que la mécanique tourne seule.</p>
  </section>
  <section>
    <h3>Sites pour entreprises et organismes</h3>
    <p>Des plateformes structurées autour de ton contenu, tes services pis ton fonctionnement. Comptes utilisateurs, formulaires, outils de gestion pis services externes travaillent ensemble. Sécurité, sauvegardes pis déploiement sont pensés dès le départ pour que le site vive longtemps.</p>
  </section>
  <section>
    <h3>Développement sur mesure et automatisation</h3>
    <p>Quand standard ne suffit pas. Scripts, outils pis automatisations sur mesure: migration de données, tâches répétitives, règles complexes ou intégration de services. Des solutions qui s'imbriquent directement dans ton site pour des besoins précis que les outils existants ne couvrent pas.</p>
  </section>
  <div class="services-cta">
    <p>Vous avez un projet en tête?</p>
    <button type="button" on:click={() => dispatch('contact')}>Me contacter</button>
  </div>
</div>
