<script>
  import { goto } from '$app/navigation';
  import { Database, Exam } from '$lib/firebase';
  import { user, completedExams } from '$lib/stores';
  import { onMount } from 'svelte';

  export let examName;

  let examData = [];

  onMount(async () => {
    const data = await Database.getDocument('cursos', examName);
    const { setQuestions } = data;

    examData = [...setQuestions];
  });

  const addQuestion = (e) => {
    const target = e.target;

    const userAnswer = target.value;
    const qId = target.dataset.qId;
    const gId = target.dataset.gId;

    const setQuestion = examData.find((setQuestion) => {
      return setQuestion.groupId == parseInt(gId);
    });
    const { questions } = setQuestion;

    const question = questions.find(
      (question) => question.questionId === parseInt(qId)
    );

    question.userAnswer = userAnswer;
  };
  const sendData = () => {
    const { uid } = $user;
    const data = {};

    data.examName = examName;
    data.examData = examData;
    $completedExams = true;

    Exam.addExam('usuarios', uid, data, 'exams', uid);
    goto('/');
  };

  const showContExplanation = async (groupId, questionContexts) => {
    const foundContext = questionContexts.find(
      (context) => context.groupId === groupId
    );
    return foundContext.context;
  };
</script>

{#await Database.getDocument('cursos', examName)}
  <section class="section">
    <h1>Espera...</h1>
  </section>
{:then response}
  <form class="section" on:submit|preventDefault={sendData}>
    <h1>{response.title}</h1>
    <p>{response.description}</p>

    {#each response.setQuestions as setQuestion}
      <p>{setQuestion.contextQuestion}</p>
      {#each setQuestion.questions as question}
        <p class="question">
          {question.questionId}. {question.question}
        </p>

        <ul class="answers">
          {#each question.answers as answer}
            <li>
              <label>
                <input
                  required
                  value={answer}
                  name={question.question}
                  type="radio"
                  data-g-id={question.groupId}
                  data-q-id={question.questionId}
                  on:click={addQuestion}
                />
                {answer}
              </label>
            </li>
          {/each}
        </ul>
      {/each}
    {/each}
    <button class="btn">Finalizar prueba</button>
  </form>
{/await}

<style>
  .question {
    /* font-size: var(--font-bold); */
    font-weight: var(--font-bold);
  }
  .answers {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    list-style: none;
    padding-left: 0px;
  }
</style>
