import cdadaImage from '../../assets/cdada.png';
import saindonsImage from '../../assets/saindons.png';
import dianeRuestImage from '../../assets/DianeRuest.png';

const projects = [
  {
    name: "Centre d'art Argenteuil",
    url: 'https://cdada.ca/',
    image: cdadaImage,
    imageAlt: "Capture d'écran du site web du Centre d'art Argenteuil - Boutique en ligne d'œuvres d'art",
    description: "Boutique en ligne du Centre d’art d’Argenteuil réunissant les artistes, les œuvres et les inscriptions aux ateliers.",
    ariaLabel: "Voir le site du Centre d'art Argenteuil",
    mandate: 'Réunir les activités du Centre, sa programmation et sa boutique dans un site facile à consulter et à administrer.',
    solutionItems: [
      'Migration de l’ancien site et de la boutique vers Shopify',
      'Organisation des artistes, des œuvres et des ateliers',
      'Création de fonctionnalités adaptées aux inscriptions',
      'Configuration de la boutique, du ramassage et du point de vente',
      'Mise en place des outils de statistiques et de référencement',
      'Soutien technique et améliorations du site selon les besoins du Centre',
    ],
    expertise: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'commerce électronique', 'Google Analytics'],
  },
  {
    name: 'Suzanne Saindon artiste peintre',
    url: 'https://www.saindons.art/',
    image: saindonsImage,
    imageAlt: "Capture d'écran du portfolio de Suzanne Saindon - Artiste peintre présentant ses œuvres",
    description: "Portfolio de l’artiste peintre Suzanne Saindon, conçu pour mettre ses œuvres en valeur dans une galerie simple et épurée.",
    ariaLabel: 'Voir le portfolio de Suzanne Saindon',
    mandate: 'Créer un site facile à parcourir où les œuvres occupent toute la place et où les visiteurs peuvent communiquer avec l’artiste.',
    solutionItems: [
      'Création de la structure et du style du site',
      'Développement d’une galerie d’œuvres sur mesure',
      'Adaptation de l’affichage aux téléphones et tablettes',
      'Optimisation des images',
      'Ajout et sécurisation du formulaire de contact',
    ],
    expertise: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'optimisation d’images'],
  },
  {
    name: 'Diane Ruest artiste textile',
    url: 'https://www.dianedcogreen.ca/',
    image: dianeRuestImage,
    imageAlt: "Capture d'écran du portfolio de Diane Ruest - Artiste textile présentant ses créations",
    description: 'Portfolio de l’artiste Diane Ruest présentant ses œuvres et sa démarche dans un site sobre, adapté à tous les écrans.',
    ariaLabel: 'Voir le portfolio de Diane Ruest',
    mandate: 'Créer un portfolio fidèle à son univers artistique, simple à parcourir et adapté à tous les formats d’écran.',
    solutionItems: [
      'Création du style et de la mise en page',
      'Développement du site responsive',
      'Organisation des œuvres et du contenu',
      'Ajustement de la navigation et de la lisibilité',
      'Mise en place du déploiement automatique du site',
    ],
    expertise: ['HTML', 'CSS', 'JavaScript', 'GitHub Actions'],
  },
];

export default projects;
