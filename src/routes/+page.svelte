<script>
  import Card from '../components/card.svelte';
  import { onMount } from 'svelte';
  import { Database } from '$lib/firebase';

  const mathExam = {
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
            question: 'Qué vino primero, el huevo o la gallina?',
            answers: ['🐔', '🥚', '🍉', '🍇'],
            correctAnswer: '🥚',
          },
          {
            questionId: 2,
            groupId: 1,
            question: 'Cuál de las siguentes películas es la mejor de todas?',
            answers: [
              'ShawnShank Redemption',
              'The green mile',
              '1917',
              'The Truman Show',
              'Todas son buenas 😫',
            ],
            correctAnswer: 'Todas son buenas 😫',
          },
        ],
      },
    ],
  };
  const lectExam = {
    title: 'Lectura crítica',
    description:
      'Lee atentamente y escoje la respuesta que tú consideres es la correcta',
    setQuestions: [
      {
        description: 'Preguntas de prueba',
        questions: [
          {
            questionId: 1,
            groupId: 1,
            question: 'Qué vino primero, el huevo o la gallina?',
            answers: ['🐔', '🥚', '🍉', '🍇'],
            correctAnswer: '🥚',
          },
          {
            questionId: 2,
            groupId: 1,
            question: 'Cuál de las siguentes películas es la mejor de todas?',
            answers: [
              'ShawnShank Redemption',
              'The green mile',
              '1917',
              'The Truman Show',
              'Todas son buenas 😫',
            ],
            correctAnswer: 'Todas son buenas 😫',
          },
        ],
      },
    ],
  };
  const engExam = {
    title: 'Inglés',
    description:
      'Lee atentamente y escoje la respuesta que tú consideres es la correcta',
    setQuestions: [
      {
        description: 'Preguntas de prueba',
        questions: [
          {
            questionId: 1,
            groupId: 1,
            question: 'Qué vino primero, el huevo o la gallina?',
            answers: ['🐔', '🥚', '🍉', '🍇', '🗿'],
            correctAnswer: '🥚',
          },
          {
            questionId: 2,
            groupId: 1,
            question: 'Cuál de las siguentes películas es la mejor de todas?',
            answers: [
              'ShawnShank Redemption',
              'The green mile',
              '1917',
              'The Truman Show',
              'Todas son buenas 😫',
            ],
            correctAnswer: 'Todas son buenas 😫',
          },
        ],
      },
    ],
  };
  const socialExam = {
    title: 'Ciencias sociales',
    description:
      'Lee atentamente y escoje la respuesta que tú consideres es la correcta',
    setQuestions: [
      {
        description: 'Preguntas de prueba',
        questions: [
          {
            questionId: 1,
            groupId: 1,
            question: 'Qué vino primero, el huevo o la gallina?',
            answers: ['🐔', '🥚', '🍉', '🍇'],
            correctAnswer: '🥚',
          },
          {
            questionId: 2,
            groupId: 1,
            question: 'Cuál de las siguentes películas es la mejor de todas?',
            answers: [
              'ShawnShank Redemption',
              'The green mile',
              '1917',
              'The Truman Show',
              'Todas son buenas 😫',
            ],
            correctAnswer: 'Todas son buenas 😫',
          },
        ],
      },
    ],
  };

  // Database.addData('cursos', engExam, '')
  // Database.addData('cursos', engExam, 'ingles');
  // Database.addData('cursos', lectExam, 'ingles');
  // Database.addData('cursos', mathExam, 'ingles');
  // Database.addData('cursos', socialExam, 'ingles');
</script>

<main>
  <header class="header--section">
    <!-- <img src="%sveltekit.assets%/logo-sena-phare.png" alt="Logo Phare" /> -->

    <h1 class="title">PHARE</h1>
    <p>
      en este sitio ofrecemos una forma de practicar para las pruebas saber 11°
    </p>
  </header>

  <main class="section">
    <h2 class="title title--subtitle">¿Que es lo que ofrecemos?</h2>
    <section class="card-container">
      <Card
        title={'Misión:'}
        content={'Acercar a nuestros usuarios a su proyecto de vida dándoles elementos con los que poder ponerse a prueba, y mejorar en el proceso'}
        srcImg={'icons/Teaching.png'}
        imgAltTxt={'Misión img'}
      />

      <Card
        title={'Visión'}
        content={'Darnos a conocer como emprendedores, lograr ayudar a mejorar el desempeño de las personas, proporcionar un buen servicio al cliente y favorecer un gran servicio con nuestra idea emprendedora y ayudar a prepararlos.'}
        srcImg={'icons/vision.png'}
        imgAltTxt={'Visión img'}
      />
    </section>
    <h2 class="title title--subtitle">Nuestra identidad</h2>
    <p class="text">
      Phare. Es una palabra francesa que se a traduce como "faro" en español, un
      faro es un sìmbolo de una guìa. De la misma manera en la que un faro evita
      que los barcos se pierdan en un día brumoso, o en una noche. Nosotros,
      bajo este mismo principio buscamos guiar a nuestros usuarios,
      encaminándolos hacia sus proyectos de vida, preparándolos con un simulacro
      del tipo ICFES para que puedan afrontar la prueba de la mejor manera
      posible
    </p>
  </main>
</main>

<style>
  /* .card-container {
		--auto-grid-min-size: 16rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--auto-grid-min-size), 1fr));
		grid-gap: 1rem;
	} */
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 1rem;
    /* grid-template-columns: repeat(auto-fit, minmax(var(--auto-grid-min-size), 1fr)); */
  }
</style>
