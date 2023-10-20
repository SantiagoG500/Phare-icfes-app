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
        contextQuestion:
          'Para asignar el parqueadero a los habitantes de un conjunto residencial se cuenta con balotas enumeradas del 0 al 4. Se saca una balota y se vuelve a introducir, con el fin de formar un número de dos dígitos.',
        groupId: 1,
        questions: [
          {
            questionId: 1,
            groupId: 1,
            question:
              ' El total de números de dos dígitos que se pueden formar con estas aclaraciones es',
            answers: ['5', '10', '20', '25'],
            correctAnswer: '5',
          },
          {
            questionId: 2,
            groupId: 1,
            question:
              'La probabilidad de que el número de dos dígitos inicie y termine en un número impar es',
            answers: ['8/25', '4/20', '4/25', '8/20'],
            correctAnswer: '8/25',
          },
          {
            questionId: 2,
            groupId: 1,
            question:
              'La acción de sacar loas dos balotas para el sorteo del parqueadero se denominan eventos',
            answers: [
              'Independientes, porque el resultado del segundo evento no es afectado por el resultado del primer evento',
              'dependientes, porque el resultado del segundo evento no es afectado por el resultado del primer evento',
              'Independientes, porque el resultado del segundo evento se ve afectado por el resultado del primer evento',
              'dependinetes, porque el resultado del segundo evento se ve afectado por el resultado del primer evento',
            ],
            correctAnswer:
              'dependinetes, porque el resultado del segundo evento se ve afectado por el resultado del primer evento',
          },
        ],
      },
      {
        contextQuestion:
          'una carrera de ciclismo, les darán una bonificación de diez segundos, seis segundos y cuatro segundos respectivamente a los 3 primeros ciclistas que lleguen a la meta, se sabe que van 10 pedalistas escapades.',
        groupId: 2,
        questions: [
          {
            questionId: 1,
            groupId: 2,
            question:
              'El total de posibles formas en las que pueden los ciclistas quedarse con los segundos de bonificación, se hallan utilizando',
            answers: [
              'combinaciones con repetición, ya que el orden de llegada importa en la entrega de las bonificaciones.',
              'combinaciones sin repetición, ya que el orden de llegada no importa en la entrega de las bonificaciones.',
              'permutaciones con repetición, ya que el orden de llegada no importa en la entrega de las bonificaciones.',
              'permutaciones sin repetición, ya que el orden de llegada importa en la entrega de las bonificaciones.',
            ],
            correctAnswer:
              'combinaciones sin repetición, ya que el orden de llegada no importa en la entrega de las bonificaciones.',
          },
          {
            questionId: 2,
            groupId: 2,
            question:
              'El comentarista de ciclismo indica: "de los escapados, cuatro pedalistas son del equipo alfa, tres pedalistas pertenecen al equipo beta y los otros tres corredores son de otros equipos". La probabilidad de que ningún integrante del equipo beta tenga bonificación es:',
            answers: ['3/24', '7/24', '3/10', '7/10'],
            correctAnswer: '7/10',
          },
          {
            questionId: 4,
            groupId: 2,
            question:
              'En un centro comercial por aniversario, entregan una boleta para la rifa de una bicicleta por cada $50.000 en compras, si un cliente hizo una compra por $930.000 y realizan la rifa cuando la urna tiene 180 boletas, la probabilidad que tiene este cliente de ganar es',
            answers: ['1/180', '1/10', '7/90', '50/100'],
            correctAnswer: '50/100',
          },
          {
            questionId: 5,
            groupId: 2,
            question:
              'Una pareja de esposos invitó a almorzar cada uno a sus padres, si se sabe que el comedor de la casa tiene 6 sillas, el total de posibles formas en las que pueden sentarse la familia para almorzar es',
            answers: ['6', '36', '120', '720'],
            correctAnswer: '720',
          },
          {
            questionId: 6,
            groupId: 2,
            question:
              'El servicio de transporte masivo en una ciudad tiene diferenciadas las sillas en rojas y azules, estas últimas son de uso exclusivo para personas con discapacidad, adultos mayores o mujeres embarazadas, si un vehículo tiene en total 40 sillas para usuarios y el 20% son sillas azules, teniendo en cuenta que las sillas del bus están vacías, la probabilidad de que una mujer embarazada al subir se siente en una silla azul es',
            answers: ['2/40', '1/5', '1/4', '20/40'],
            correctAnswer: '1/5',
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
        contextQuestion: `A good circus has always built its reputation on its ability to amaze and entertain. In the 16th century L. Bertolotto set up his flea exhibitions with a flea orchestra, fleas playing card games, fleas dancing in dresses and even fleas that could pull miniature tour buses!

        Training fleas can be very difficult, but there are few methods. You can limit the height of their jump, if you put a glass ceiling above them, as they don't like to bump their heads. There are also chemicals that they don't like. These can be put on a small ball and put among a group of fleas. The fleas will push the ball away with their legs and give the illusion that they are

        playing soccer. Fleas are also very sensitive to heat and light and this can be used to manipulate the fleas to give the appearance that they are well-trained performers.

        In the Cordoso's circus the fleas dance tango, walk tightropes, perform trapeze acts and Brutus the strongest flea on earth is even shown pulling a train. The trainer is the Colombian Maria Cordoso who appears at the performances in a brightly colored shimmering costume with a magnifying visor and fires flea cannon balls into a tiny flea net. The performance also features the fleas feeding from her arm.
`,
        groupId: 1,
        questions: [
          {
            questionId: 1,
            groupId: 1,
            question:
              "Which of the following performances was shown in the Bertolotto's flea exhibition?",
            answers: [
              'Fleas feeding from an arm.',
              'Fleas playing card games.',
              'Fleas pulling a ball away.',
            ],
            correctAnswer: 'Fleas playing card games.',
          },
          {
            questionId: 2,
            groupId: 1,
            question: 'How can you control the height of a flea jump?',
            answers: [
              'Warming and illuminating the fleas',
              'Using a glass above the fleas.',
              'Putting some balls around the fleas',
            ],
            correctAnswer: 'Warming and illuminating the fleas',
          },
          {
            questionId: 3,
            groupId: 1,
            question: 'Flies are sensitive to?',
            answers: ['Cold', 'Water', 'light'],
            correctAnswer: 'Cold',
          },
          {
            questionId: 4,
            groupId: 1,
            question: 'Who is a flea trainer',
            answers: [' L. Bernan', 'Maria Cordoso.', 'Brutus Cordoso.'],
            correctAnswer: 'Brutus Cordoso',
          },
          {
            questionId: 5,
            groupId: 1,
            question:
              "One of the strange performance in the Cardoso's circus is",
            answers: [
              "to show the fleas feeding from their trainer's arms.",
              'to show the fleas jumping inside a ball',
              'to show the fleas dancing with some custom',
            ],
            correctAnswer:
              "to show the fleas feeding from their trainer's arms.",
          },
        ],
      },
    ],
  };
  const socialExam = {
    title: 'Ciencias Sociales',
    description:
      'Lee atentamente y escoje la respuesta que tú consideres es la correcta',
    setQuestions: [
      {
        contextQuestion: `Entre las múltiples causas que ayudan a explicar la violencia de mediados del siglo XX, el elemento religioso estuvo presente y tuvo su mayor expresión el 9 de abril de 1948, cuando el pueblo liberal atacó las construcciones religiosas, símbolo del poder sacro.

Con la instauración del Frente Nacional, la cuestión religiosa dejó de ser un motivo de discordias bipartidistas. Así mismo, las orientaciones del Concilio Vaticano II (1962-1965) y los aires secularizadores provenientes de la cultura urbana contribuyeron a disminuir las fricciones religiosas tradicionalistas.

Los nuevos enemigos serán otros. Así, del discurso intransigente decimonónico se pasó a posiciones revolucionarias de influencia socialista, lideradas por clérigos comprometidos con la opción por los pobres. El país del Sagrado Corazón, dio luz a las nuevas revoluciones.

Ya en la década de 1980, un sector importante de la jerarquía eclesiástica se convirtió en mediador entre las guerrillas de influencia comunista y el Estado. Una posición que en el actual proceso de paz no es del todo clara.`,
        groupId: 1,
        questions: [
          {
            questionId: 1,
            groupId: 1,
            question:
              'Teniendo en cuenta el papel protagónico de la Iglesia en el contexto sociopolítico del país, se podría decir de esta en el siglo XIX que',
            answers: [
              'sirvió como agente mediador en las guerras civiles que enfrentaba a los partidos tradicionales.',
              'promovió la agenda del partido conservador a través de los caciques electorales en las regiones.',
              'construyó una identidad en la población de alcance nacional en medio de las guerras civiles',
              'fiscalizó diferentes aspectos de la vida económica a través de las concesiones de tierras.',
            ],
            correctAnswer:
              'construyó una identidad en la población de alcance nacional en medio de las guerras civiles',
          },
          {
            questionId: 2,
            groupId: 1,
            question: 'La secularizacíon hace referencia a',
            answers: [
              'los cambios de la población de Colombia.',
              'la pacificación de la Iglesia católica.',
              'los pleitos con los partidos políticos tradicionales',
              'la separación entre Iglesia y Estado',
            ],
            correctAnswer: 'la separación entre Iglesia y Estado',
          },
          {
            questionId: 3,
            groupId: 1,
            question:
              'Sobre la mirada analítica que maneja el texto, se puede afirmar que en este',
            answers: [
              'hay una contrastación teórica para demostrar la incidencia de la Iglesia en la sociedad.',
              'Se realiza un barrido de las principales estructuras sociales en Colombia a lo largo del siglo XX',
              'hay un recorrido panorámico que explica la interacción de un fenómeno social con otros',
              'se proyectan las diferentes fases de la crisis que ha tenido la Iglesia en Colombia en el siglo XX',
            ],
            correctAnswer:
              'hay un recorrido panorámico que explica la interacción de un fenómeno social con otros',
          },
          {
            questionId: 4,
            groupId: 1,
            question:
              '¿Cuál corriente sería más acorde con el cambio de la Iglesia hacia posiciones revolucionarias?',
            answers: [
              'La teología de la liberación que buscaba introducir una mirada que complejizara la realidad desde las Ciencias Humanas.',
              'La escolástica que promovía la realización de la vida humana desde la conciencia de la compasión y de la fe.',
              'La bula papal que mostraba la doctrina cristiana a través de la acción y predicación en las comunidades de base.',
              'La doctrina tomista que intentaba poner en primer plano las soluciones al padecimiento del hombre en la tierra.',
            ],
            correctAnswer:
              'La doctrina tomista que intentaba poner en primer plano las soluciones al padecimiento del hombre en la tierra.',
          },
          {
            questionId: 5,
            groupId: 1,
            question:
              'En el apartado de un informe se lee: "El objetivo de este capítulo es analizar las violencias y afectaciones que han sufrido las personas LGTBI en el marco del conflicto armado colombiano y los obstáculos en la implementación de la Ley de Víctimas para lograr una reparación integral desde un enfoque diferencial"',
            answers: [
              'cultural y demográfica.',
              'Legal y social',
              'Antropológica y social',
              'Económica y política',
            ],
            correctAnswer: 'Económica y política',
          },
        ],
      },
      ,
      {
        contextQuestion: `
        Estamos en guerra permanente y en negociación permanente. Mientras se está negociando con unos, lo que se ha denominado como negociaciones parciales o la paz parcelada, otros están reingresando al ciclo de la guerra. La negociación con un actor no resulta acumulable para el conjunto del proceso.

        Tomado de memoria y violencia política en colombia. Los marcos sociales y políticos

        de los procesos de reconstrucción de memoria histórica en el país.

        Existen varios indicios respecto a que hay razones para ser optimista frente a un posible acuerdo de paz que pueda cambiar la historia de violencia en Colombia frente al contexto actual de negociación. Algunas de estas condiciones favorables y relevantes son la voluntad de los principales dirigentes de las FARC de participar en las negociaciones, lo que sugiere su aceptación a que su agenda para el cambio social no puede lograrse a través de la lucha armada; además, el apoyo de miembros relevantes de la comunidad internacional es indiscutiblemente más conducente a la paz de lo que había sido en anteriores procesos de negociación, pues el actual diálogo cuenta con el apoyo de actores internacionales relevantes como Venezuela y Cuba
        `,
        groupId: 2,
        questions: [
          {
            questionId: 1,
            groupId: 1,
            question:
              'Respecto a estos fragmentos que se refieren a los procesos de negociación, puede afirmarse que',
            answers: [
              'se encuentran distanciados entre sí al señalar la imposibilidad de realizar procesos de paz.',
              'llegan a conclusiones diferentes dado el contexto temporal en el que se realizan los análisis.',
              'se encuentran temporalmente encadenados al dar un panorama de la vida política nacional.',
              'llegan a conclusiones similares dado que se están analizando los procesos de paz en el país',
            ],
            correctAnswer:
              'llegan a conclusiones similares dado que se están analizando los procesos de paz en el país',
          },
          {
            questionId: 2,
            groupId: 2,
            question:
              'La situación mencionada por Gonzalo Sánchez sobre el ciclo de la guerra, se puede evidenciar en',
            answers: [
              'os procesos de paz simultáneos con la guerrilla y el paramilitarismo que generaron problemas de orden público.',
              'la creación del partido Unión Patriótica que dio como resultado la desmovilización del M-19.',
              'los diálogos de Tlaxcala y el auge del paramilitarismo en la década de los noventa del siglo pasado',
              'la degradación del conflicto armado que tuvo como protagonista a las autodefensas campesinas liberales.',
            ],
            correctAnswer:
              'la degradación del conflicto armado que tuvo como protagonista a las autodefensas campesinas liberales.',
          },
          {
            questionId: 3,
            groupId: 2,
            question:
              'En el fragmento de Janiel Melamed, el que las FARC acepten que hay otras vías para llevar a cabo su agenda, sugiere que estas se hallan dispuestas a',
            answers: [
              'Abandonar la combinación de todas las formas de lucha.',
              'combinar los votos con la violencia de baja intensidad',
              'hpermitir la conformación de un sistema de un solo partido.',
              'permitir la lucha política de los movimientos sociales',
            ],
            correctAnswer:
              'permitir la lucha política de los movimientos sociales',
          },
          {
            questionId: 4,
            groupId: 2,
            question:
              'En el marco de las negociaciones que se exponen en el texto de Janiel Melamed, darle legitimidad al proceso implica',
            answers: [
              'Hacer concesiones, fijar metas e incluir a otros agentes armados en la fase de negociaciones.',
              'Comprobar que se den las condiciones históricas para un debate amplio a nivel nacional.',
              'Delimitar los tiempos, organizar la agenda y tramitar las leyes en el Congreso de la República',
              'Pactar una agenda, incluir a las víctimas y generar credibilidad en la comunidad internacional.',
            ],
            correctAnswer:
              'Pactar una agenda, incluir a las víctimas y generar credibilidad en la comunidad internacional.',
          },
          {
            questionId: 5,
            groupId: 2,
            question:
              'De los siguientes elementos, ¿cuáles hacen parte de un Estado Social de Derecho. (1) Apertura a la participación y garantía de derechos, (2) El principio de disolución del poder, (3) Estado laico de carácter confesional, (4) El principio de legalidad',
            answers: ['1 y 4', '2 y 4', '1 y 3', '2'],
            correctAnswer: '2 y 4',
          },
        ],
      },
    ],
  };
  // {
  //   contextQuestion: `
  //   Aunque en Colombia, por un lado se impulsa todo aquello que permita agrupar a los partidos políticos, al mismo tiempo se incentivan y se mantienen figuras como los grupos significativos de ciudadanos.

  //   Se genera el interrogante sobre por qué surgen tantos movimientos políticos promotores de candidatos en un momento de gran desprestigio de la política y de los actores políticos individuales. Inicialmente se nos ocurre contestar que precisamente por ello mismo, porque el desgaste de los partidos y politicos se ha acrecentado, se puede estar creyendo que esta es una mayor oportunidad para poder acceder a curules por fuera de los partidos políticos. Pero igualmente con tanto control y rigidez en los partidos, numerosos dirigentes y políticos, potenciales candidatos, buscan el medio de evadir las responsabilidades frente al partido y al mismo tiempo hacerse elegir, utilizando recursos como el voto preferente.

  //   Patricia Muñoz y Fernando Giraldo

  //   `,
  //   groupId: 1,
  //   questions: [
  //     {
  //       questionId: 1,
  //       groupId: 1,
  //       question:
  //         'Respecto a estos fragmentos que se refieren a los procesos de negociación, puede afirmarse que',
  //       answers: [
  //         'se encuentran distanciados entre sí al señalar la imposibilidad de realizar procesos de paz.',
  //         'llegan a conclusiones diferentes dado el contexto temporal en el que se realizan los análisis.',
  //         'se encuentran temporalmente encadenados al dar un panorama de la vida política nacional.',
  //         'llegan a conclusiones similares dado que se están analizando los procesos de paz en el país',
  //       ],
  //       correctAnswer:
  //         'llegan a conclusiones similares dado que se están analizando los procesos de paz en el país',
  //     },
  //     {
  //       questionId: 2,
  //       groupId: 1,
  //       question:
  //         'La situación mencionada por Gonzalo Sánchez sobre el ciclo de la guerra, se puede evidenciar en',
  //       answers: [
  //         'os procesos de paz simultáneos con la guerrilla y el paramilitarismo que generaron problemas de orden público.',
  //         'la creación del partido Unión Patriótica que dio como resultado la desmovilización del M-19.',
  //         'los diálogos de Tlaxcala y el auge del paramilitarismo en la década de los noventa del siglo pasado',
  //         'la degradación del conflicto armado que tuvo como protagonista a las autodefensas campesinas liberales.',
  //       ],
  //       correctAnswer:
  //         'la degradación del conflicto armado que tuvo como protagonista a las autodefensas campesinas liberales.',
  //     },
  //     {
  //       questionId: 3,
  //       groupId: 1,
  //       question:
  //         'En el fragmento de Janiel Melamed, el que las FARC acepten que hay otras vías para llevar a cabo su agenda, sugiere que estas se hallan dispuestas a',
  //       answers: [
  //         'Abandonar la combinación de todas las formas de lucha.',
  //         'combinar los votos con la violencia de baja intensidad',
  //         'hpermitir la conformación de un sistema de un solo partido.',
  //         'permitir la lucha política de los movimientos sociales',
  //       ],
  //       correctAnswer:
  //         'permitir la lucha política de los movimientos sociales',
  //     },
  //     {
  //       questionId: 4,
  //       groupId: 1,
  //       question:
  //         'En el marco de las negociaciones que se exponen en el texto de Janiel Melamed, darle legitimidad al proceso implica',
  //       answers: [
  //         'Hacer concesiones, fijar metas e incluir a otros agentes armados en la fase de negociaciones.',
  //         'Comprobar que se den las condiciones históricas para un debate amplio a nivel nacional.',
  //         'Delimitar los tiempos, organizar la agenda y tramitar las leyes en el Congreso de la República',
  //         'Pactar una agenda, incluir a las víctimas y generar credibilidad en la comunidad internacional.',
  //       ],
  //       correctAnswer:
  //         'Pactar una agenda, incluir a las víctimas y generar credibilidad en la comunidad internacional.',
  //     },
  //     {
  //       questionId: 5,
  //       groupId: 1,
  //       question:
  //         'De los siguientes elementos, ¿cuáles hacen parte de un Estado Social de Derecho. (1) Apertura a la participación y garantía de derechos, (2) El principio de disolución del poder, (3) Estado laico de carácter confesional, (4) El principio de legalidad',
  //       answers: ['1 y 4', '2 y 4', '1 y 3', '2'],
  //       correctAnswer: '2 y 4',
  //     },
  //   ],
  // },

  const lectExam = {
    title: 'lectura crítica',
    description:
      'Lee atentamente y escoje la respuesta que tú consideres es la correcta',
    setQuestions: [
      {
        contextQuestion:
          'Cuando me comunicaron la fecha funesta se apoderó de mi la angustia de los sentenciados y desde entonces sólo pienso en dolor, el ruido y la luz. Si el stámite fuera indoloro miraría desafiante a mi verdugo, pero el pánico me paralizará cuando contemple la obscena exhibición de sus instrumentos de tortura. Por eso debo conservar la escasa dignidad que me queda, porque no quiero que los demás condenados se consuelen con mi cobardía. ¿Qué importa lo que ocrra una vez que me siente en la silla maldita? podré llorar, pero podrí maldecir y hasta ensucial aquella silla, porque esos matarifes son muy escrupulosos con la limpieza. Pero en el corredor de la muerte no puedo permitirme ser débil, que aunque nos mireemos distantes de reojo, per dentro todos pensamos en el dolor, el ruido y la luz. Tengo miedo, quiero huir y hago secretos propósitos de enmienda, pero todo es inutil porque dentro de una ño estaré denvueo aquí, en la consulta del dentista.',
        groupId: 1,
        questions: [
          {
            questionId: 1,
            groupId: 1,
            question:
              'Con las expresiones "el dolor, el ruido y la luz", se establecen relaciones emocionales en tanto',
            answers: [
              'Aparecen en dos partes de la narración que simbolizan intanquilidad y temor',
              'Dan cuenta de las reacciones particulares del personaje en la narración',
              'Representan a grandes rasgos el impacto de todos los sentidos en el personaje',
              'Cada palabra reitera la idea de pensar en la silla eléctrica y sus efectos',
            ],
            correctAnswer:
              'Cada palabra reitera la idea de pensar en la silla eléctrica y sus efectos',
          },
          {
            questionId: 2,
            groupId: 1,
            question:
              'De acuerdo con el narrador la consulta del dentista significa',
            answers: [
              'Una realidad conflictiva vivida por el hombre debe pasar',
              'Un suplicio por el que el hombre debe pasar',
              'Un acto de pleno sufrimietno deliberado',
              'Una situación que conduce al abatimiento',
            ],
            correctAnswer:
              'Una realidad conflictiva vivida por el hombre debe pasar',
          },
          {
            questionId: 3,
            groupId: 1,
            question:
              'La forma en que inicia el texto se puede decir que se encuentra enamarcada ',
            answers: [
              'la descripción de una anécdota en efectos negativos',
              'una narración profunda sobre su condena',
              'la reflexión del protagonista a partir de una situación trágica',
              'una mirada particular sobre la silla eléctrica',
            ],
            correctAnswer:
              'Una realidad conflictiva vivida por el hombre debe pasar',
          },
          {
            questionId: 4,
            groupId: 1,
            question:
              'De acuerdo con el texto el destino del hombre sentenciado le produce en el hombre',
            answers: [
              'espanto, angustia y duda',
              'ansiedad, temor y horror',
              'sobresalto, incertidumbre y miedo',
              'desasosiego, firemeza y desconfianza',
            ],
            correctAnswer: 'sobresalto, incertidumbre y miedo',
          },
        ],
      },
      {
        contextQuestion:
          'El doctor Alejo murió asesinado. Indudablemente murió estrangulado. Nadie había entrado en la casa, indudablemente nadie, y aunque el doctor dormía con el balcón abierto, por higiene, era tan alto su piso que no era de suponer que por allí hubiese entrado el asesino. La policía no encontraba la pista de aquel crimen, y ya iba a abandonar el asunto, cuando la esposa y la criada del muerto acudieron despavoridas a la jefatura. Saltando de lo alto de un armario había caído sobre la mesa, las había mirado, las había visto, y después había huido por la habitación, una mano solitaria y viva como una araña. Allí la habían dejado encerrada con llave en el cuarto. Llena de terror, acudió la policía y el juez. Era su deber. Trabajo les costó cazar la mano, pero la cazaron y todos le agarraron un dedo, porque era vigorosa como si en ella radicase junta toda la fuerza de un hombre fuerte. ¿Qué hacer con ella? ¿Qué luz iba a arrojar sobre el suceso? ¿Cómo sentenciarla? ¿De quién era aquella mano? Después de una larga pausa, al juez se le ocurrió darle la pluma para que declarase por escrito. La mano entonces escribió: "Soy la mano de Ramiro Ruiz, asesinado vilmente por el doctor en el hospital y destrozado con ensañamiento en la sala de disección. He hecho justicia".',
        groupId: 2,
        questions: [
          {
            questionId: 1,
            groupId: 2,
            question:
              'La expresión que está entre comillas tiene como intención',
            answers: [
              'profundizar la situación presentada.',
              'reiterar la improbabilidad de lo planeado. ',
              'enfatizar en lo evidente de la afirmación',
              'aclarar la extrañeza de lo ocurrido',
            ],
            correctAnswer: 'profundizar la situación presentada.',
          },
          {
            questionId: 2,
            groupId: 2,
            question:
              'El momento en que se genera tensión en la narración es cuando',
            answers: [
              'El doctor aparece muerto',
              'Se conoce que la mano es de Ramiro Ruiz.',
              'aparece repentinamente una mano con vida.',
              'Se desconoce al asesino',
            ],
            correctAnswer: 'se desconoce al asesino',
          },
          {
            questionId: 3,
            groupId: 2,
            question:
              'Una de las estrategias narrativas usadas por el autor para acentuar lo extraño del asesinato del doctor consiste en: ',
            answers: [
              'darle vida a una mano justiciera de quien solo sabemos el nombre del dueño',
              'destacar que vive en un piso alto, en el cual para subir tendría que haberse visto.',
              'mostrar la reacción de la criada y de la esposa del doctor cuando hablan con la policía',
              'matizar con una serie de preguntas la forma en que se tendría que judicializar al asesino.',
            ],
            correctAnswer:
              'matizar con una serie de preguntas la forma en que se tendría que judicializar al asesino.',
          },
        ],
      },
    ],
  };

  // Database.addData('cursos', engExam, 'ingles');
  Database.addData('cursos', lectExam, 'lectura');
  // Database.addData('cursos', mathExam, 'matematicas');
  // Database.addData('cursos', mathExam, 'sociales');
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
