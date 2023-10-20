<script>
  import { Database } from '$lib/firebase';
  import { user } from '$lib/stores';
  import { onMount } from 'svelte';
  import Results from '../../components/results.svelte';

  let userExams = [];

  onMount(async () => {
    const query = await Database.getDocument('usuarios', $user.uid);
    const { exams } = query;

    userExams = [...exams];
    console.log(userExams);
  });

  console.log(userExams);
</script>

{#if userExams.length === 0}
  <article class="section">
    <h1>No has realizado ninguna prueba todavía</h1>
    <p>Realiza alguna prueba para entonces ver tus resultados</p>

    <button>Inicia tu prueba aquí</button>
  </article>
{:else}
  <article class="section">
    <Results exams={userExams} />
  </article>
{/if}
