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
  },
  {
    name: 'Suzanne Saindon artiste peintre',
    url: 'https://www.saindons.art/',
    image: saindonsImage,
    imageAlt: "Capture d'écran du portfolio de Suzanne Saindon - Artiste peintre présentant ses œuvres",
    description: "Portfolio de l'artiste Suzanne Saindon, avec présentation de ses œuvres et informations sur son parcours.",
    ariaLabel: 'Voir le portfolio de Suzanne Saindon',
  },
  {
    name: 'Diane Ruest artiste textile',
    url: 'https://www.dianedcogreen.ca/',
    image: dianeRuestImage,
    imageAlt: "Capture d'écran du portfolio de Diane Ruest - Artiste textile présentant ses créations",
    description: 'Portfolio de Diane Ruest artiste textile.',
    ariaLabel: 'Voir le portfolio de Diane Ruest',
  },
];

export default projects;
