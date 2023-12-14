<script>
  import AltText from './components/AltText.svelte'
</script>

<main>
  <div class="sponsor align-main">
    <label class="sponsor-label" for="sponsor-link">
      Thank you to our sponsor!
      <a id="sponsor-link" class="sponsor-link" href="https://getautoseo.com/image-alt-text-generator" target="_blank">
        <img class="sponsor-image" src="/sponsor.png" alt="AutoSEO Alt Text Generator">
      </a>
    </label>
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
</style>
