<script>
  import AltText from './components/AltText.svelte'
  import AzureLimitsExceeded from './components/AzureLimitsExceeded.svelte'
</script>

<main>
  <div class="align-main">
    <h1>Alt Text Generator</h1>

    <p>Generate alt text for your images and help make the internet more accessible!</p>
  
    <AltText />
  </div>

  <div class="footer">
    <p>Support this project by <a href="https://github.com/adityaoberai/Alt-Text-Generator" target="_blank">starring ⭐</a> and <a href="https://github.com/sponsors/adityaoberai" target="_blank">sponsoring 💸</a> on GitHub</p>
  </div>
</main>

<style>
  h1 {
    font-size: 4rem;
    line-height: 1.1; 
  }

  p {
    font-size: 1.5rem;
  }

  .footer p {
    max-width: 80vw;
    font-size: 1rem;
  }

  @media screen and (min-width: 1201px) {
    .sponsor-image {
      width: 25vw;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    .sponsor-image {
      width: 65vw;
    }
  }

  @media screen and (max-width: 600px) {
    .sponsor-image {
      width: 90vw;
    }
  }
</style>
