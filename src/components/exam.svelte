<script context="module">
  // import { Database } from '$lib/firebase';
  // import { onMount } from 'svelte';

  // const getData = async () => {
  //   const exam = await Database.getDocument('cursos', 'matematicas');
  //   console.log(exam);
  // };

  // onMount(getData());

  const exam = {
    title: 'Matemáticas',
    description:
      'Lee atentamente y escoje la respuesta que tú consideres es la correcta',
    setQuestions: [
      {
        description: 'Preguntas de prueba',
        questions: [
          {
            questionId: 1,
            groupId: 1,
            question: 'Pregunta #1',
            answers: ['🍊', '🍋', '🍉', '🍇'],
            correctAnswer: '🍋',
          },
          {
            questionId: 2,
            groupId: 1,
            question: 'Pregunta #2',
            answers: ['🍈', '🍍', '🍉', '🍇'],
            correctAnswer: '🍉',
            // answers: [
            //   'ShawnShank Redemption',
            //   'The green mile',
            //   '1917',
            //   'The Truman Show',
            //   'Todas son buenas 😫',
            // ],
            // correctAnswer: 'Todas son buenas 😫',
          },
        ],
      },
    ],
  };
  const { setQuestions } = exam;
</script>

<form class="section section--exam">
  {#each setQuestions as set}
    <p>{set.description}</p>
    {#each set.questions as question}
      {question.question}

      <ul>
        {#each question.answers as answer}
          <li>
            <label>
              <input
                type="radio"
                name={question.groupId}
                data-g-id={question.groupId}
                data-q-id={question.questionId}
              />
              {answer}
            </label>
          </li>
        {/each}
      </ul>
    {/each}
  {/each}
</form>

<!-- <form on:submit|preventDefault={submitData} class="section section--exam"> -->
<!-- <form class="section section--exam">

  <ul class="questions__answers">
    {#each setQuestions.answers as answer }
      <li class="questions__answer">
        <label class="answer-label">
          <input 
            required
            value={answer}
            name={setQuestions.question}
            type="radio"
          >
          {answer}
        </label>
      </li>	
    {/each}
  </ul> 
</form> -->
