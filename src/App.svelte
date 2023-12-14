<script>
  import AltText from './components/AltText.svelte'
</script>

<main>
  <div class="sponsor align-main">
    <label class="sponsor-label" for="sponsor-link">
      Thank you to our sponsor, AutoSEO!
    </label>
    <div>
      <a href="https://getautoseo.com/image-alt-text-generator" target="_blank">
        <img class="sponsor-image" src="/sponsor.png" alt="AutoSEO Alt Text Generator">
      </a>
    </div>
  </div>

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
    max-width: 80vw;
  }

  p {
    font-size: 1.5rem;
    max-width: 80vw;
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
