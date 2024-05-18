<script>
    import Drawer from './Drawer.svelte';
    import PortfolioDrawer from './Portfolio.svelte';
    
    let showContactDrawer = false;
    let showPortfolioDrawer = false;
  
    function openContactDrawer() {
      showContactDrawer = true;
    }
  
    function closeContactDrawer() {
      showContactDrawer = false;
    }
  
    function openPortfolioDrawer() {
      showPortfolioDrawer = true;
    }
  
    function closePortfolioDrawer() {
      showPortfolioDrawer = false;
    }
  </script>
  
  <div>
    <p>spécialiste en développement web personnalisé avec une solide expérience dans le domaine. Je propose des services de création de sites web, de portfolios et de boutiques en ligne sur mesure.
  
      Mon approche est centrée sur vos besoins spécifiques et vos objectifs commerciaux. Je m'engage à vous fournir des solutions web de qualité qui reflètent votre identité et captivent votre public cible.
      
      N'hésitez pas à me contacter pour discuter de votre projet et découvrir comment je peux vous aider à atteindre vos objectifs en ligne.</p>
  </div>
  <div>
    <button on:click={openPortfolioDrawer}>Portfolio</button>
    <button on:click={openContactDrawer}>Contact</button>
  </div>
  
  <Drawer isOpen={showContactDrawer} on:close={closeContactDrawer} />
  <PortfolioDrawer isOpen={showPortfolioDrawer} on:close={closePortfolioDrawer} />
  
  <style>
    
  </style>
  