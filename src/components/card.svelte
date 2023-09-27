<script>
  export let title = undefined;
  export let content = undefined;
  export let srcImg = unefined;
  export let imgAltTxt = '';
</script>

<article class="card">
  <header class="card__header">
    <h3 class="title title--subtitle">{title}</h3>
  </header>
  <section class="card__section">
    <p class="text">{content}</p>
  </section>
  <img class="card__img" src={srcImg} alt={imgAltTxt} />
</article>

<style>
  .card {
    display: flex;
    flex-wrap: wrap;
    position: relative;

    padding: 1em;
    margin-top: 1rem;
    margin-bottom: 1rem;

    /* height: min-content; */
    min-height: 13rem;

    border-radius: 0.5rem;
    overflow: hidden;

    border: 3px solid var(--black-cyan);
    background-color: var(--gray4);
  }
  .card::before {
    display: block;

    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;

    content: '';

    height: 9px;
    background-color: var(--black-cyan);
  }

  .card__img {
    width: 100px;

    margin-top: 2rem;
    margin-left: auto;
  }

  .title--subtitle {
    text-align: start;
    margin-top: 0px;
  }
</style>
