<script>
  import Drawer from './Drawer.svelte';
  import PortfolioDrawer from './Portfolio.svelte';
  
  let showContactDrawer = false;
  let showPortfolioDrawer = false;
  
  // States to track which button is spinning
  let spinningButton = null;

  // Function to open contact drawer with delay
  function openContactDrawer() {
    // Add delay before opening the drawer (1 second)
    setTimeout(() => {
      showContactDrawer = true;
    }, 1000); // 1 second delay
  }

  function closeContactDrawer() {
    showContactDrawer = false;
  }

  // Function to open portfolio drawer with delay
  function openPortfolioDrawer() {
    // Add delay before opening the drawer (1 second)
    setTimeout(() => {
      showPortfolioDrawer = true;
    }, 1000); // 1 second delay
  }

  function closePortfolioDrawer() {
    showPortfolioDrawer = false;
  }

  // Handle spin effect for the specific button
  function handleSpin(buttonType) {
    // Set the spinning state to the clicked button
    spinningButton = buttonType;

    // Remove spin after animation duration (1 second)
    setTimeout(() => {
      spinningButton = null; // Reset the spinning state
    }, 1000); // 1 second duration (animation time)
  }
</script>

<style>
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  /* Button hover effect */
  button:hover {
    border-color: #fefefe;
  }

  /* Focus effect */
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  /* Spin animation */
  button.spin {
    animation: spinEffect 1s ease-out;
  }

  @keyframes spinEffect {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div>
  <p>spécialiste en développement web personnalisé avec une solide expérience dans le domaine. Je propose des services de création de sites web, de portfolios et de boutiques en ligne sur mesure.

    Mon approche est centrée sur vos besoins spécifiques et vos objectifs commerciaux. Je m'engage à vous fournir des solutions web de qualité qui reflètent votre identité et captivent votre public cible.
    
    N'hésitez pas à me contacter pour discuter de votre projet et découvrir comment je peux vous aider à atteindre vos objectifs en ligne.</p>
</div>

<div>
  <!-- Add spin class conditionally on click for each button -->
  <button 
    class={spinningButton === 'portfolio' ? 'spin' : ''} 
    on:click={() => { handleSpin('portfolio'); openPortfolioDrawer(); }}>
    Portfolio
  </button>
  <button 
    class={spinningButton === 'contact' ? 'spin' : ''} 
    on:click={() => { handleSpin('contact'); openContactDrawer(); }}>
    Contact
  </button>
</div>

<Drawer isOpen={showContactDrawer} on:close={closeContactDrawer} />
<PortfolioDrawer isOpen={showPortfolioDrawer} on:close={closePortfolioDrawer} />
