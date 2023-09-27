<script>
  let examList = [
    {
      examName: 'matematicas',
      route: '/courses/exams/math',
      srcImg: '/icons/matematicas.png',
    },
    {
      examName: 'ingles',
      route: '/courses/exams/eng',
      srcImg: '/icons/ingles.png',
    },
    {
      examName: 'ciencias sociales',
      route: '/courses/exams/social_sciense',
      srcImg: '/icons/sociales.png',
    },
    {
      examName: 'lectura critica',
      route: '/courses/exams/lect',
      srcImg: '/icons/lenguaje.png',
    },
  ];
</script>

{#if examList.length === 0}
  <div class="container">
    <h1 class="title">Ya has finalizado tu prueba!!!</h1>
    <p class="text">
      Muchas gracias por haber probado nuestra DEMO técnica, estaremos
      escuchando los comentarios de retroalimentación para mejorar nuestro
      servicio
    </p>
    <p class="text">
      Contáctanos <strong>--------------</strong>
    </p>
  </div>
{:else}
  {#each examList as exam}
    <a class="link-container" href={exam.route}>
      <main class="card">
        <h2 class="card__title title">{exam.examName}</h2>
        <img class="card__img" src={exam.srcImg} alt={exam.examName} />
      </main>
    </a>
  {/each}
{/if}

<style>
  .link-container {
    text-decoration: none;
  }
  .card {
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    position: relative;
    display: flex;

    margin-left: auto;
    margin-right: auto;
    padding-bottom: 1rem;
    padding-top: 1rem;

    max-width: 20rem;
    min-height: 20rem;

    border: 4px solid var(--gray4);
    border-radius: 0.5rem;

    background-color: var(--gray5);
  }
  .card::before {
    position: absolute;
    display: block;
    content: '';

    top: 0px;
    width: 100%;
    height: 10px;

    background-color: var(--gray4);
  }

  .card__title {
    color: var(--gray3);
    margin-top: 0px;
  }
  .card__img {
    width: 200px;
  }

  @media (hover: hover) {
    .card:hover {
      border-color: var(--black-cyan);
    }
    .card:hover::before {
      background-color: var(--black-cyan);
    }
  }
</style>
