<script>
    let name = '';
    let email = '';
    let message = '';
  
    function handleSubmit() {
      const formData = { name, email, message };
      console.log(formData); // You can handle form submission here
    }
</script>
  
<div class="contact-form-container">
    <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
            <label for="name">Nom:</label>
            <input type="text" id="name" bind:value={name} />
        </div>
  
        <div class="form-group">
            <label for="email">Courriel:</label>
            <input type="email" id="email" bind:value={email} />
        </div>
  
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" bind:value={message}></textarea>
        </div>
  
        <button type="submit">Submit</button>
    </form>
</div>
  
<style>
    .contact-form-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px; /* Adjust this padding to create space */
    }

    .form-group {
        margin-bottom: 20px;
    }

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }

    input[type="text"],
    input[type="email"],
    textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }

    textarea {
        resize: vertical;
    }

    button {
        background-color: #000000;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #fff;
        color: #000000;
    }
</style>
