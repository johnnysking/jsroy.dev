<script>
    import Contact from "./Contact.svelte";
    
    let showContact = false;
  
    function handleButtonClick() {
      showContact = !showContact;
    }
  </script>
  
  <div>
    <p>Spécialiste en développement web personnalisé avec une solide expérience dans le domaine. Je propose des services de création de sites web, de portfolios et de boutiques en ligne sur mesure.
  
      Mon approche est centrée sur vos besoins spécifiques et vos objectifs commerciaux. Je m'engage à vous fournir des solutions web de qualité qui reflètent votre identité et captivent votre public cible.
          
      N'hésitez pas à me contacter pour discuter de votre projet et découvrir comment je peux vous aider à atteindre vos objectifs en ligne.</p>
  </div>
  
  <div>
    <button on:click={handleButtonClick}>Portfolio</button>
    <button on:click={handleButtonClick}>Contact</button>
  </div>
  
  {#if showContact}
    <Contact />
  {/if}
  
  <style>
    
  </style>
  