import cdadaImage from '../../assets/cdada.png';
import lartisaneImage from '../../assets/lartisane.png';
import normandLaurinImage from '../../assets/NormandLaurin.png';
import saindonsImage from '../../assets/saindons.png';
import dianeRuestImage from '../../assets/DianeRuest.png';

const projects = [
  {
    name: "Centre d’art d’Argenteuil",
    url: 'https://centredartargenteuil.com/',
    image: cdadaImage,
    imageAlt: "Capture d'écran du site web du Centre d'art Argenteuil - Boutique en ligne d'œuvres d'art",
    description: 'Une plateforme culturelle qui réunit les expositions, les ateliers, les artistes et la boutique du Centre d’art d’Argenteuil.',
    ariaLabel: "Voir le site du Centre d'art Argenteuil",
    features: [
      'Développement de sections Shopify en Liquid, JavaScript et CSS',
      'Modélisation des artistes, des œuvres et des ateliers avec les collections et métachamps Shopify',
      'Importation, transformation et normalisation des données de l’ancienne boutique',
      'Programmation du classement chronologique et du filtrage des ateliers',
      'Intégration du paiement en ligne, du ramassage en boutique et du point de vente',
      'Configuration des comptes administratifs, des rôles et des permissions',
    ],
    technologies: 'Shopify · Liquid · JavaScript · CSS',
  },
  {
    name: 'L’Artisane',
    url: 'https://lartisane.ca/',
    image: lartisaneImage,
    imageFit: 'contain',
    imageAlt: "Capture d'écran du site de L’Artisane",
    description: 'Boutique en ligne de L’Artisane présentant ses produits naturels faits à la main, ses collections et ses points de vente.',
    ariaLabel: 'Voir le site de L’Artisane',
    features: [
      'Développement de sections Shopify en Liquid, JavaScript et CSS',
      'Architecture du catalogue et organisation des produits en collections',
      'Développement des pages consacrées aux événements et aux points de vente',
      'Développement d’un outil Python pour analyser les codes postaux et préparer les zones de livraison',
      'Intégration du paiement en ligne et du point de vente utilisé lors des marchés',
      'Mise en place d’un programme d’affiliation avec création et suivi des liens d’affiliés',
    ],
    technologies: 'Shopify · Liquid · JavaScript · CSS · Python',
  },
  {
    name: 'Suzanne Saindon',
    url: 'https://www.saindons.art/',
    image: saindonsImage,
    imageAlt: "Capture d'écran du portfolio de Suzanne Saindon - Artiste peintre présentant ses œuvres",
    description: 'Un portfolio épuré qui laisse toute la place aux peintures et aux mots de Suzanne Saindon.',
    ariaLabel: 'Voir le portfolio de Suzanne Saindon',
    features: [
      'Conception et développement front-end sur mesure en PHP, JavaScript et CSS',
      'Développement PHP d’un système de portfolio sur mesure intégré à l’administration WordPress',
      'Programmation d’une galerie dynamique à partir des œuvres publiées',
      'Développement d’une lightbox JavaScript sur mesure avec navigation entre les œuvres',
      'Sécurisation du site et mise en place de sauvegardes automatisées externalisées',
      'Mise en place du versionnement et du déploiement automatisé du site',
    ],
    technologies: 'WordPress · PHP · JavaScript · CSS',
  },
  {
    name: 'Normand Laurin',
    url: 'https://www.normandlaurin.ca/',
    image: normandLaurinImage,
    imageAlt: 'Capture d’écran du site de Normand Laurin, aquarelliste et dessinateur des Laurentides',
    description: 'Un portfolio et un blogue consacrés aux paysages, aux œuvres et aux souvenirs de toute une vie d’artiste.',
    ariaLabel: 'Voir le site de Normand Laurin',
    features: [
      'Conception et développement front-end sur mesure en PHP, JavaScript et CSS',
      'Architecture des contenus WordPress pour les œuvres, les techniques et les récits',
      'Développement de taxonomies WordPress pour classer et filtrer les aquarelles et les encres',
      'Programmation de requêtes et de modèles PHP pour générer le portfolio et le blogue',
      'Création d’une interface d’administration personnalisée pour publier les œuvres et les récits',
      'Mise en place du versionnement et du déploiement automatisé du site',
    ],
    technologies: 'WordPress · PHP · JavaScript · CSS',
  },
  {
    name: 'Diane Ruest',
    url: 'https://www.dianedcogreen.ca/',
    image: dianeRuestImage,
    imageAlt: "Capture d'écran du portfolio de Diane Ruest - Artiste textile présentant ses créations",
    description: 'Un portfolio sur mesure consacré aux œuvres textiles et à la démarche artistique de Diane Ruest.',
    ariaLabel: 'Voir le portfolio de Diane Ruest',
    features: [
      'Conception et développement complet d’une interface sur mesure en HTML, CSS et JavaScript',
      'Architecture sémantique des contenus consacrés à l’artiste, à sa démarche et à ses œuvres',
      'Développement d’une galerie sur mesure associant images, titres, matériaux et dimensions',
      'Programmation en JavaScript de la navigation et des interactions',
      'Optimisation du chargement et du rendu des images haute résolution',
      'Mise en place du versionnement et du déploiement automatisé du site',
    ],
    technologies: 'HTML · CSS · JavaScript',
  },
];

export default projects;
