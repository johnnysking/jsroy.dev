<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<div class="services-content">
  <section>
    <h3>Conception et développement Web</h3>
    <p class="services-intro">Qu’il s’agisse de présenter une démarche artistique, de développer une activité commerciale ou de soutenir le travail d’une organisation, chaque projet est structuré en fonction de son contenu, de ses fonctionnalités et des personnes qui devront le faire évoluer.</p>
  </section>

  <section class="services-first-section">
    <h3>Portfolios et sites d’artistes</h3>
    <p>Des environnements numériques construits à partir du travail de l’artiste plutôt qu’autour d’un modèle prédéfini. L’architecture du contenu, le rythme de navigation et le traitement des images sont développés en fonction du corpus présenté. Taxonomies, galeries dynamiques, lightbox sur mesure et interfaces de publication assurent une organisation cohérente des œuvres, des expositions et des textes.</p>
  </section>
  <section>
    <h3>Commerce en ligne</h3>
    <p>Des boutiques conçues en fonction de l’expérience d’achat, des processus de vente et des méthodes de gestion propres à l’entreprise. La structure du catalogue, les données des produits et les parcours de commande sont adaptés aux inscriptions, aux réservations, à la vente de billets, aux règles de livraison, au ramassage et au point de vente. Le développement couvre également la migration des données, les intégrations et l’automatisation des tâches propres au projet.</p>
  </section>
  <section>
    <h3>Sites pour entreprises et organismes</h3>
    <p>Des plateformes structurées autour du contenu, des services et du fonctionnement propre à chaque organisation. Modèles de contenu personnalisés, outils de gestion, formulaires, comptes utilisateurs, rôles, permissions et services externes sont réunis dans une architecture cohérente. La sécurité, les sauvegardes, le versionnement et le déploiement sont intégrés dès la conception pour assurer la continuité, la maintenance et l’évolution du site.</p>
  </section>
  <section>
    <h3>Développement sur mesure et automatisation</h3>
    <p>Certains projets demandent davantage qu’une interface ou une configuration standard. Des scripts et outils personnalisés peuvent être développés pour traiter ou migrer des données, automatiser des tâches, configurer des règles de livraison complexes, gérer des liens et programmes d’affiliation ou relier différents services. Ces solutions sont intégrées directement au fonctionnement du site afin de répondre à des besoins précis qui ne sont pas couverts par les outils existants.</p>
  </section>
  <div class="services-cta">
    <p>Vous avez un projet en tête?</p>
    <button type="button" on:click={() => dispatch('contact')}>Me contacter</button>
  </div>
</div>
