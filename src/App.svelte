<script>
  import AltText from './components/AltText.svelte'
</script>

<section id="sponsor">
  <a class="sponsor-image" href="https://getautoseo.com/image-alt-text-generator" target="_blank">
    <img src="/sponsor.png" alt="AutoSEO Image Alt Text Generator">
  </a>
</section>

<main>
  <div class="align-main">
    <h1>Alt Text Generator</h1>

    <p>Generate alt text for your images and help make the internet more accessible!</p>
  
    <AltText />
  </div>
</main>
<div class="footer">
  <p>Support this project by <a href="https://github.com/adityaoberai/Alt-Text-Generator" target="_blank">starring ⭐</a> and <a href="https://github.com/sponsors/adityaoberai" target="_blank">sponsoring 💸</a> on GitHub</p>
</div>


<style>
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
    max-width: 80vw;
  }

  p {
    max-width: 80vw;
  }
</style>
