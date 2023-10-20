<script>
  export let exams = [];
</script>

<article class="section">
  <h1>Resultados</h1>
  {#each exams as exam}
    <h2>{exam.examName}</h2>

    <section class="setquestion">
      {#each exam.examData as setQuestion}
        <p>{setQuestion.contextQuestion}</p>

        {#each setQuestion.questions as question}
          <section class="setquestion__question">
            <p>{question.question}</p>

            <ul class="answers">
              {#each question.answers as answer}
                {#if answer === question.userAnswer && question.userAnswer === question.correctAnswer}
                  <li class="answers__answer answers__answer--correct">
                    {answer}
                  </li>
                {:else if answer === question.userAnswer && question.userAnswer !== question.correctAnswer}
                  <li class="answers__answer answers__answer--incorrect">
                    {answer}
                  </li>
                {:else}
                  <li class="answers__answer">
                    {answer}
                  </li>
                {/if}
              {/each}
            </ul>

            <p>Tu respuesta: {question.userAnswer}</p>
            <p>Respuesta correcta: {question.correctAnswer}</p>
          </section>
        {/each}
      {/each}
    </section>
  {/each}
</article>

<style>
  .setquestion,
  .setquestion__question {
    border-radius: 1rem;
  }

  .setquestion {
    display: flex;
    flex-direction: column;
    gap: 1em;

    margin-bottom: 1rem;
    padding: 1em;

    background-color: var(--gray6);
  }
  .setquestion__question {
    padding: 1em;
    background-color: var(--gray5);
  }
  .answers {
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style-type: none;
  }
  .answers__answer {
    padding: 0.5em;
    border: 2px solid var(--gray2);
    border-radius: 1em;
  }
  .answers__answer--correct {
    border-color: var(--correct-answer);
  }
  .answers__answer--incorrect {
    border-color: var(--incorrect-answer);
  }
</style>
