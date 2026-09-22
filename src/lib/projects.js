import cdadaImage from '../../assets/cdada.png';
import saindonsImage from '../../assets/saindons.png';
import dianeRuestImage from '../../assets/DianeRuest.png';

const projects = [
  {
    name: "Centre d'art Argenteuil",
    url: 'https://cdada.ca/',
    image: cdadaImage,
    imageAlt: "Capture d'écran du site web du Centre d'art Argenteuil - Boutique en ligne d'œuvres d'art",
    description: "Boutique en ligne du Centre d'art Argenteuil, avec gestion des œuvres et paiement sécurisé.",
    ariaLabel: "Voir le site du Centre d'art Argenteuil",
    role: 'Développement et accompagnement numérique',
    workItems: [
      'Migration et reconstruction de la présence Web',
      'Configuration de la boutique et des collections',
      'Développement de fonctionnalités adaptées aux ateliers et aux artistes',
      'Accompagnement technique et optimisation continue',
    ],
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Google Analytics'],
  },
  {
    name: 'Suzanne Saindon artiste peintre',
    url: 'https://www.saindons.art/',
    image: saindonsImage,
    imageAlt: "Capture d'écran du portfolio de Suzanne Saindon - Artiste peintre présentant ses œuvres",
    description: "Portfolio de l'artiste Suzanne Saindon, avec présentation de ses œuvres et informations sur son parcours.",
    ariaLabel: 'Voir le portfolio de Suzanne Saindon',
    role: 'Conception et développement du site portfolio',
    workItems: [
      'Création de la structure du site',
      "Développement d’une galerie d’œuvres personnalisée",
      "Optimisation de l’affichage des images",
      'Intégration du formulaire de contact',
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
  },
  {
    name: 'Diane Ruest artiste textile',
    url: 'https://www.dianedcogreen.ca/',
    image: dianeRuestImage,
    imageAlt: "Capture d'écran du portfolio de Diane Ruest - Artiste textile présentant ses créations",
    description: 'Portfolio de Diane Ruest artiste textile.',
    ariaLabel: 'Voir le portfolio de Diane Ruest',
    role: 'Conception et développement Web',
    workItems: [
      "Création de l’identité visuelle du site",
      'Développement de l’interface responsive',
      'Présentation des œuvres et du parcours artistique',
      'Mise en place du déploiement automatisé',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Actions'],
  },
];

export default projects;
