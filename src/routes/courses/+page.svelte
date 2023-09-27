<script>
  import ExamCards from '../../components/exam-cards.svelte';
</script>

<main class="container">
  <h1 class="title">Inicia tu prueba</h1>
  <article class="courses">
    <ExamCards />
  </article>
</main>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .courses {
    max-width: 97%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    gap: 1rem;
  }
</style>
