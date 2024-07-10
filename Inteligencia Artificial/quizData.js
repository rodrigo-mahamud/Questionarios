const quizData = [
   //------2024_ord_inform_merged-------//
   {
      question: "¿Cuáles son los tipos de aprendizaje de las redes neuronales?",
      options: [
         "Aprendizaje visual, auditivo y táctil.",
         "Aprendizaje rápido, lento y medio.",
         "Aprendizaje por refuerzo, por imitación y por descubrimiento.",
         "Aprendizaje supervisado, no supervisado e híbrido.",
      ],
      correct: 3,
   },
   {
      question: "¿Qué permite la tecnología de agentes?",
      options: [
         "La reutilización de funcionalidades en sistemas compatibles.",
         "La creación de funcionalidades únicas para cada sistema.",
         "La reutilización de funcionalidades en sistemas incompatibles.",
         "La creación de sistemas sin funcionalidades definidas.",
      ],
      correct: 0,
   },
   {
      question: "¿Qué tipo de neuronas se usan a menudo en las RNA para un mejor aprendizaje?",
      options: ["Neuronas con comportamiento suave.", "Perceptrones.", "Neuronas con comportamiento errático.", "Neuronas complejas."],
      correct: 0,
   },
   {
      question: "¿En qué se basan los métodos heurísticos?",
      options: [
         "En la resolución de problemas que no pueden ser solucionados por modelos generales.",
         "En la exploración exhaustiva de todas las soluciones posibles.",
         "En reglas prácticas para explorar las acciones más prometedoras.",
         "En la competencia de dos adversarios.",
      ],
      correct: 2,
   },
   {
      question: "¿Qué es el razonamiento?",
      options: [
         "Un conjunto de actividades físicas que conectan ideas.",
         "Un estudio de las emociones humanas.",
         "Un proceso de observación para llegar a una conclusión general.",
         "Una facultad humana que permite resolver problemas.",
      ],
      correct: 3,
   },
   {
      question: "¿Qué pueden aprender las redes neuronales?",
      options: [
         "Pueden aprender a dibujar y pintar.",
         "Pueden aprender a tocar instrumentos musicales.",
         "Pueden aprender a modelar sistemas lineales y mejorar el procesamiento de señales mediante filtrado de ruido.",
         "Pueden aprender a cocinar y hornear.",
      ],
      correct: 2,
   },
   {
      question: "¿Qué sucede a medida que se realizan operaciones en un sistema inteligente?",
      options: ["El sistema se congela.", "El sistema evoluciona.", "El sistema se detiene.", "El sistema se descompone."],
      correct: 1,
   },
   {
      question: "¿Qué elementos son clave en los juegos bipersonales, deterministas y de conocimiento perfecto?",
      options: [
         "Los agentes y la competencia.",
         "La influencia del ambiente y la reducción de la exploración.",
         "La función heurística y la exploración del espacio de búsqueda.",
         "El estado, el estado inicial, las características finales y los operadores de transformación.",
      ],
      correct: 3,
   },
   {
      question: "¿Qué son los problemas de satisfacción de restricciones?",
      options: [
         "Problemas que involucran variables con dominios y restricciones de consistencia.",
         "Problemas que involucran variables con dominios y restricciones de espacio.",
         "Problemas que involucran variables con dominios y restricciones de velocidad.",
         "Problemas que involucran variables con dominios y restricciones de tiempo.",
      ],
      correct: 0,
   },
   {
      question: "¿Qué son las redes neuronales artificiales?",
      options: [
         "Sistemas que imitan los sistemas de programación de computadoras.",
         "Sistemas que imitan los sistemas de comunicación de robots.",
         "Sistemas que imitan los sistemas neuronales biológicos para lograr capacidades de razonamiento similares a las del cerebro humano.",
         "Sistemas que imitan los sistemas de diseño de videojuegos.",
      ],
      correct: 2,
   },
   {
      question: "¿Qué es la inteligencia artificial?",
      options: [
         "Un área enfocada en crear máquinas que pueden realizar tareas que solo requieren habilidades artísticas.",
         "Un área enfocada en crear máquinas que pueden realizar tareas que requieren inteligencia humana.",
         "Un área enfocada en crear máquinas que pueden realizar tareas que solo requieren habilidades físicas.",
         "Un área enfocada en crear máquinas que pueden realizar tareas que solo requieren habilidades mecánicas.",
      ],
      correct: 1,
   },
   {
      question: "¿Qué representan los eventos en la red del método CPM?",
      options: [
         "Actividades que se ejecutan en serie.",
         "Actividades que se ejecutan en paralelo.",
         "Puntos de control para las actividades.",
         "Tareas que deben ser completadas.",
      ],
      correct: 2,
   },
   {
      question: "¿Para qué se utilizan las redes bayesianas?",
      options: [
         "Para crear robots.",
         "Para diseñar videojuegos.",
         "Para clasificar los contextos del usuario.",
         "Para realizar cálculos matemáticos complejos.",
      ],
      correct: 2,
   },
   {
      question: "¿Cómo se pueden clasificar las redes neuronales?",
      options: [
         "Por tipo de algoritmo y número de neuronas.",
         "Por color y forma de los nodos.",
         "Por arquitectura y tipo de aprendizaje.",
         "Por tamaño y velocidad de procesamiento.",
      ],
      correct: 2,
   },
   {
      question: "¿Para qué se puede utilizar el método de resolución en la lógica de predicados?",
      options: [
         "Para transformar las fórmulas mediante la forma normal de Skolem.",
         "Para establecer propiedades universales o existenciales.",
         "Como método de validación.",
         "Para definir cierto tipo de conocimiento.",
      ],
      correct: 2,
   },
   {
      question: "¿Qué tipos de actividades puede haber en la red del método CPM?",
      options: [
         "Paralelas, relacionadas, consecutivas o divergentes.",
         "Paralelas, relacionadas, concurrentes o divergentes.",
         "Paralelas, relacionadas, consecutivas o convergentes.",
         "Secuenciales, relacionadas, concurrentes o divergentes.",
      ],
      correct: 1,
   },
   {
      question: "¿Qué se debe seleccionar en los problemas en los que existen varias alternativas para llegar al estado final?",
      options: ["El plan más sencillo.", "El plan más rápido.", "El plan óptimo que lleve a la consecución del objetivo.", "El plan más barato."],
      correct: 2,
   },
   {
      question: "¿Qué implica el proceso de reutilizar o adaptación en CBR?",
      options: [
         "Analizar casos almacenados que son similares al problema actual.",
         "Evaluar y revisar la solución propuesta y posiblemente aplicar conocimientos adicionales.",
         "Aprender de la nueva experiencia y almacenar el caso actual con la solución definitiva.",
         "Trabajar con soluciones proporcionadas por casos similares para encontrar una solución efectiva.",
      ],
      correct: 3,
   },
   {
      question: "¿Cómo amplía el vocabulario de la lógica preposicional la lógica de predicados?",
      options: [
         "Conjunción, disyunción, negación y condición.",
         "Variables, constantes y funciones.",
         "Cuantificadores universal y existencial.",
         "Parámetros a los átomos.",
      ],
      correct: 3,
   },
   {
      question: "¿Cuáles son los desafíos principales en el desarrollo de aplicaciones de inteligencia artificial?",
      options: [
         "Hacer que sean eficientes en la energía y el uso de recursos.",
         "Hacer que sean fáciles de usar, flexibles en su infraestructura computacional y rentables de construir.",
         "Hacer que sean capaces de personalizar las experiencias de aprendizaje para los estudiantes.",
         "Hacer que sean capaces de detectar emergencias y mejorar la seguridad en el hogar.",
      ],
      correct: 1,
   },
   {
      question:
         "¿Qué área de la inteligencia artificial se enfoca en cómo se puede representar y manipular simbólicamente el conocimiento por programas de razonamiento?",
      options: ["Robótica.", "Aprendizaje automático.", "Representación del conocimiento.", "Procesamiento de lenguaje natural."],
      correct: 2,
   },
   {
      question: "¿Qué tipos de comportamiento tienen los agentes híbridos?",
      options: [
         "Comportamiento deliberativo y natural.",
         "Comportamiento deliberativo y motivacional.",
         "Comportamiento reactivo y deliberativo.",
         "Comportamiento reactivo y motivacional.",
      ],
      correct: 2,
   },
   {
      question: "¿Cuál es el objetivo del juego de la torre de Hanói?",
      options: [
         "Mover todos los discos a otro poste, siguiendo ciertas reglas.",
         "Dejar los discos en los mismos postes.",
         "Romper los discos.",
         "Mover algunos discos a otro poste, sin seguir ninguna regla.",
      ],
      correct: 0,
   },
   {
      question: "¿Qué es el conocimiento procedimental?",
      options: [
         "El conocimiento que se genera a partir de datos y un conjunto de reglas.",
         "El conocimiento específico y con un mecanismo de razonamiento claro.",
         "El conocimiento que se aplica en el procesamiento de lenguaje natural.",
         "El conocimiento que se puede representar sin considerar su uso.",
      ],
      correct: 1,
   },
   {
      question: "¿Cuál es el lenguaje lógico más simple que permite definir relaciones entre frases declarativas atómicas?",
      options: ["Lógica modal.", "Lógica de primer orden.", "Lógica proposicional.", "Lógica de predicados."],
      correct: 2,
   },
   {
      question: "¿Qué es SysML?",
      options: [
         "Una metodología que simplifica el proceso de desarrollo de sistemas multiagente.",
         "Una metodología que solo se aplica a sistemas de inteligencia artificial centralizados.",
         "Una metodología que complica el proceso de desarrollo de sistemas multiagente.",
         "Una metodología que no tiene relación con la tecnología de agentes.",
      ],
      correct: 0,
   },
   {
      question: "¿Qué supone el CBR?",
      options: [
         "Que problemas diferentes tienen soluciones similares.",
         "Que problemas diferentes tienen soluciones diferentes.",
         "Que problemas similares tienen soluciones similares.",
         "Que problemas similares tienen soluciones diferentes.",
      ],
      correct: 2,
   },
   {
      question: "¿Para qué se utilizan los métodos de búsqueda de árbol de juego?",
      options: [
         "Para reducir el espacio de búsqueda mediante la exploración de las acciones más prometedoras.",
         "Para simular la competencia de dos adversarios.",
         "Para generar una secuencia de tareas para lograr un objetivo.",
         "Para resolver problemas que no pueden ser solucionados por modelos generales.",
      ],
      correct: 1,
   },
   {
      question: "¿Qué es importante en la arquitectura BDI para la estabilidad en el proceso de razonamiento?",
      options: ["Los objetivos motivacionales.", "Las intenciones.", "El compromiso.", "Las creencias que reciba el agente."],
      correct: 2,
   },
   {
      question: "¿Qué es necesario para que los sistemas multiagente logren una asignación dinámica de tareas?",
      options: ["Datos distribuidos.", "Control reactivo.", "Un sistema de control global.", "Mecanismos de coordinación y comunicación."],
      correct: 1,
   },

   //------31852 Inteligencia Artificial Examen Extraordinario julio 2018 - CON RESPUESTAS (1)--------//

   {
      question: "La búsqueda en profundidad prioritaria...",
      options: [
         "... analiza un camino hasta la mayor profundidad posible, retrocediendo cuando acaba el camino y retomando la última posibilidad de elección disponible.",
         "... hace un recorrido en el espacio de búsqueda por los distintos niveles, de manera que un nodo se analiza solo cuando todos sus predecesores y hermanos anteriores se han analizado.",
         "... tiene un coste lineal, ya que cada iteración es un recorrido en amplitud.",
         "... siempre encuentra la solución cuando hay caminos infinitos.",
      ],
      correct: 0,
   },
   {
      question: "¿Cuál de las siguientes características no es una característica principal de un almacén de conocimiento?",
      options: [
         "Debe ser fácil poder acceder y consultar la información de conocimiento.",
         "Debe ser fácil trabajar de manera automática con la información.",
         "Debe ser fácil compartir la información con otros sistemas de almacenamiento.",
         "Debe ser fácil actualizar este conocimiento en el formato almacenado.",
      ],
      correct: 2,
   },
   {
      question: "¿Cuál de los siguientes tipos de conocimiento no es de tipo declarativo?",
      options: ["Conocimiento relacional.", "Conocimiento heredable.", "Conocimiento inductivo.", "Conocimiento inferible."],
      correct: 2,
   },
   {
      question: "«Fui al fútbol, aunque no fui en coche». La representación mediante lógica proposicional de la afirmación es:",
      options: ["(P v ¬ Q)", "(¬P ^ ¬ Q)", "(P ^ ¬ Q)", "(¬P v ¬ Q)"],
      correct: 2,
   },
   {
      question: "En el método CPM...",
      options: [
         "... ni las actividades ni los tiempos de duración son conocidos.",
         "... las actividades son conocidas, pero no los tiempos de duración.",
         "... las actividades y sus tiempos de duración son conocidos.",
         "... las actividades no son conocidas, pero sí los tiempos de duración.",
      ],
      correct: 2,
   },
   {
      question: "¿De cuántos ciclos consta básicamente el método CPM?",
      options: [
         "Un ciclo: planificación.",
         "Dos ciclos: planificación y programación y otro de ejecución.",
         "Tres ciclos: planificación, programación y ejecución.",
         "Cuatro ciclos: planificación, programación, ejecución y prueba.",
      ],
      correct: 1,
   },
   {
      question:
         "Para realizar un plan de tareas, ¿cuál de las siguientes preguntas básicas sobre una actividad específica no es necesario contestar?",
      options: [
         "¿Qué actividades deben llevarse a cabo inmediatamente después de realizar una actividad concreta?",
         "¿Qué actividades se pueden realizar simultáneamente a la ejecución de una actividad específica?",
         "¿Qué actividad es la última en el plan de tareas?",
         "¿Qué actividades deben ser realizadas inmediatamente antes de la ejecución de una actividad específica?",
      ],
      correct: 2,
   },
   {
      question: "Un plan de tareas en CPM:",
      options: [
         "Tiene una única ruta crítica",
         "Siempre tiene una ruta crítica y a veces tiene más de una.",
         "Siempre tiene más de una ruta crítica.",
         "Nunca tiene una ruta crítica.",
      ],
      correct: 1,
   },
   {
      question: "¿Cuál de las siguientes no es una característica de los agentes?",
      options: ["Organización.", "Aprendizaje.", "Constancia.", "Inteligencia."],
      correct: 2,
   },
   {
      question: "Por nomenclatura lógica, se consideran sentencias atómicas en lógica proposicional:",
      options: [
         "Todas las letras mayúsculas a partir de la A.",
         "Todas las letras mayúsculas a partir de la P.",
         "Todas las letras minúsculas a partir de la R.",
         "Todas las letras mayúsculas a partir de la M.",
      ],
      correct: 1,
   },
   {
      question:
         "Para representar de manera más sencilla las grandes cantidades de conocimiento necesarias que se necesitan para definir una aplicación práctica, se utiliza/n:",
      options: ["Representación estructurada.", "Lógica de predicados.", "Lógica proposicional.", "Representaciones formales."],
      correct: 0,
   },
   {
      question: "¿Por qué son útiles las ontologías en el ámbito de la inteligencia artificial?",
      options: [
         "Permiten representar el conocimiento.",
         "Generan una complejidad operacional.",
         "Permiten detallar los costes de representación del conocimiento.",
         "Permiten compartir la interpretación de la estructura de la información entre personas/agentes.",
      ],
      correct: 3,
   },
   {
      question: "El razonamiento difuso...",
      options: [
         "... es un conjunto de actividades mentales que se encargan de conectar unas ideas con otras de acuerdo con ciertas reglas.",
         "... es la facultad humana que permite resolver problemas.",
         "... es un tipo de razonamiento en el cual no hay una jerarquización lineal en los conceptos que se van a comparar.",
         "... es el resultado de la actividad mental de razonar; es decir, un conjunto de proposiciones enlazadas entre sí que dan apoyo o justifican una idea.",
      ],
      correct: 2,
   },
   {
      question: "El razonamiento basado en reglas...",
      options: [
         "... consiste en establecer predicados que enuncien sucesos o resultados si se dan unas ciertas condiciones.",
         "... resuelve un nuevo problema recordando situaciones similares anteriores y reutiliza el conocimiento y la información de estas situaciones.",
         "... es un tipo de razonamiento en el cual no hay una jerarquización lineal en los conceptos que se van a comparar.",
         "... es el resultado de la actividad mental de razonar; es decir, un conjunto de proposiciones enlazadas entre sí que dan apoyo o justifican una idea.",
      ],
      correct: 0,
   },
   {
      question: "¿Cuál de los siguientes procesos no forma parte del ciclo de vida de un sistema CBR?",
      options: ["Reuse", "Realization", "Revise", "Retain"],
      correct: 1,
   },
   {
      question: "¿Cuál de las siguientes definiciones de inteligencia artificial es falsa?",
      options: [
         "Sistemas que actúan como humanos.",
         "Sistemas que no piensan como humanos.",
         "Sistemas que actúan racionalmente.",
         "Sistemas que piensan racionalmente.",
      ],
      correct: 1,
   },
   {
      question: "Por definición, el test de Turing:",
      options: [
         "Implica a una persona y un ordenador.",
         "Implica a una persona y dos ordenadores.",
         "Implica a dos personas y un ordenador.",
         "Implica a dos personas y dos ordenadores.",
      ],
      correct: 2,
   },
   {
      question: "Una de las disciplinas matrices de la inteligencia artificial es:",
      options: ["El estudio de teoremas.", "La psicología.", "El razonamiento formal.", "La física."],
      correct: 2,
   },
   {
      question: "¿Cuándo surge el uso masivo y doméstico de las computadoras (uso del PC)?",
      options: ["En la década de los 60.", "En la década de los 70.", "En la década de los 80.", "En la década de los 90."],
      correct: 2,
   },
   {
      question:
         "Indica cuál de los siguientes no es un desafío que se persigue en el desarrollo de aplicaciones basadas en la inteligencia artificial.",
      options: [
         "Desarrollar sistemas complejos e integrados.",
         "Identificar la herramienta de desarrollo.",
         "Conseguir aplicaciones fáciles de usar.",
         "Realizar sistemas con una infraestructura computacional flexible.",
      ],
      correct: 1,
   },
   {
      question: "¿Cuál de los siguientes componentes no forma parte de un problema?",
      options: ["Limitaciones.", "Tarea.", "Información.", "Procedimiento."],
      correct: 1,
   },
   {
      question: "Uno de los estados del problema de las jarras de agua es:",
      options: [
         "(3, 0): se vacía la jarra de 3 litros en la jarra de 4 litros.",
         "(2, 3): se llena la jarra de 3 litros con la jarra de 4 litros.",
         "(4, 1): se llena la jarra de 4 litros con la jarra de 3 litros.",
         "(2, 0): se llena la jarra de 4 litros.",
      ],
      correct: 0,
   },
   {
      question: "Una característica que no identifica cómo debe ser un proceso de búsqueda:",
      options: ["Dinámico.", "Estructurado.", "Práctico.", "Ligero."],
      correct: 3,
   },
   {
      question: "Acerca de los métodos de búsqueda informados o heurísticos:",
      options: [
         "Es relativamente fácil hallar una solución inicial, aunque no sea la más correcta.",
         "Su funcionamiento se basa en el ensayo y error.",
         "Reducen el espacio de búsqueda y son capaces de encontrar de manera rápida una solución al problema.",
         "Resuelven problemas mediante métodos específicos para el problema y no utilizan modelos generales.",
      ],
      correct: 2,
   },
   {
      question: "¿Cuál de las siguientes no es un tipo de arquitectura de agentes?",
      options: ["Híbrida.", "Mixta.", "Reactiva.", "Deliberativa."],
      correct: 1,
   },
   {
      question: "¿Cómo funciona una red neuronal?",
      options: [
         "Es un conjunto de neuronas conectadas entre sí y que trabajan en conjunto, sin que haya una tarea concreta para cada una.",
         "Es un conjunto de neuronas conectadas entre sí y que trabajan de manera independiente, sin que haya una tarea concreta para cada una.",
         "Es un conjunto de neuronas conectadas entre sí y que trabajan en conjunto, con tareas comunes para cada neurona.",
         "Son neuronas que con la experiencia van suprimiendo ciertas conexiones.",
      ],
      correct: 0,
   },
   {
      question: "¿Cuál de las siguientes acciones no suele realizar una red neuronal?",
      options: ["Aprender.", "Investigar.", "Entrenar.", "Aplicar."],
      correct: 1,
   },
   {
      question: "¿Para qué sirve principalmente el concepto de capas en redes neuronales?",
      options: [
         "Para añadir información que no estaba antes.",
         "Para procesar más rápido los datos de entrada.",
         "Para procesar más lentamente los datos de entrada.",
         "Para añadir información poco influyente en el resultado final.",
      ],
      correct: 0,
   },
   {
      question:
         "¿Es cierto que las redes neuronales están empezando a procesar y resolver problemas que no podían hacer los ordenadores como, por ejemplo, reconocimiento de números, reconocimiento de voz o reconocimiento de objetos en imágenes…?",
      options: ["No.", "Solo reconocimiento de números y reconocimiento de voz.", "Sí.", "Todos menos reconocimiento de números."],
      correct: 2,
   },
   {
      question: "¿Cuál de los siguientes es un tipo de aprendizaje que se distingue en una red neuronal?",
      options: ["Autónomo.", "Cíclico.", "Eficiente.", "Híbrido."],
      correct: 3,
   },

   //-------10332 Inteligencia Artificial Examen Ordinario junio 2018 - CON RESPUESTAS----//

   {
      question: "Una de las aplicaciones que también se utiliza en la representación del conocimiento es/son:",
      options: ["Ontologías.", "Gestor documental.", "Sistema de big data.", "Aplicaciones distribuidas."],
      correct: 0,
   },
   {
      question: "Uno de los objetivos de la web semántica es:",
      options: [
         "Almacenar información de manera estructurada.",
         "Utilizar bases de datos relacionales para intercambiar información en la web.",
         "Eliminar el contenido semántico de los documentos en la web.",
         "Enriquecer los lenguajes actuales más utilizados para intercambiar información en la web.",
      ],
      correct: 3,
   },
   {
      question: "«No es cierto que fuera a trabajar y llevara traje». La representación mediante lógica proposicional de la afirmación es:",
      options: ["(¬P ^ ¬ Q)", "(P v ¬ Q)", "¬ (P ^ Q)", "(P ^ Q)"],
      correct: 2,
   },
   {
      question:
         "Una condición que se debe cumplir para que una asociación de agentes que trabajan de forma conjunta se considere un sistema multiagente es que:",
      options: [
         "Ninguno de los agentes del sistema debe ser autónomo.",
         "Ninguno de los agentes tiene capacidades limitadas para resolver el problema.",
         "Ninguno de los agentes dispone de información incompleta para resolver el problema.",
         "Debe existir, al menos, una relación entre dos agentes en la que se cumpla que uno de los agentes satisface el objetivo del otro.",
      ],
      correct: 3,
   },
   {
      question: "¿Cuáles son los sistemas inteligentes más similares en sus formas de actuación al comportamiento humano?",
      options: ["Los sistemas expertos.", "Los sistemas multiagente.", "Los sistemas de programación automática.", "Los robots."],
      correct: 3,
   },
   {
      question: "Los estados y su relación forman lo que se denomina:",
      options: ["Grupo de estados.", "Conjunto de estados.", "Espacio de estados.", "Gráfico de estados."],
      correct: 2,
   },
   {
      question: "¿Cuál es el estado final en el problema de los misioneros y los caníbales?",
      options: ["(0, 1, 2) --> estado final.", "(3, 1, 2) --> estado final.", "(3, 1, 0) --> estado final.", "(0, 0, 0) --> estado final."],
      correct: 3,
   },
   {
      question: "Una propiedad que caracteriza a un proceso de búsqueda es ser:",
      options: ["Variable.", "Ágil.", "Óptimo.", "Pesado."],
      correct: 2,
   },
   {
      question: "Un algoritmo:",
      options: [
         "Es una secuencia de instrucciones ejecutada en un orden determinado.",
         "Es un procedimiento concreto y con una finalidad clara.",
         "Solo tiene una finalidad clara.",
         "Cumple un conjunto de requerimientos dados a posteriori.",
      ],
      correct: 1,
   },
   {
      question: "¿Cuál de las siguientes afirmaciones es falsa cuando hablamos de un sistema inteligente?",
      options: [
         "Es un sistema que muestra un comportamiento inteligente.",
         "Es un sistema que interactúa de manera inteligente con su entorno.",
         "Es un sistema que trata de mejorar la solución ofrecida con la experiencia.",
         "Es un sistema que ejecuta una serie de acciones fijas y constantes.",
      ],
      correct: 3,
   },
   {
      question: "¿Cuál de los siguientes aspectos no preocupa a la inteligencia artificial actual?",
      options: [
         "La repercusión abstracta de la inteligencia.",
         "Los procesos de razonamiento.",
         "Imitar la inteligencia humana.",
         "Mejorar la calidad de vida de las personas.",
      ],
      correct: 0,
   },
   {
      question: "El razonamiento basado en casos:",
      options: [
         "Establece predicados que enuncian sucesos o resultados.",
         "Resuelve problemas basándose en el conocimiento de casos anteriores similares.",
         "Obtiene información de la utilización de conjuntos de hipótesis.",
         "Gestiona el procesado de datos inexactos, imprecisos o subjetivos.",
      ],
      correct: 1,
   },
   {
      question: "¿Cuál de las siguientes condiciones que debe cumplir un algoritmo es falsa?",
      options: ["Ser concreto.", "Ser finito.", "Ser complejo.", "Ser efectivo."],
      correct: 2,
   },
   {
      question: "Los algoritmos de juego con adversario:",
      options: [
         "Solo tratan de resolver problemas en los que interviene el azar.",
         "Un único agente compite por un objetivo que solamente uno de ellos puede alcanzar.",
         "Más de un agente compite por un objetivo que solamente uno de ellos puede alcanzar.",
         "Este tipo de algoritmos nunca puede partir de un estado inicial que determina quién y dónde inicia el juego.",
      ],
      correct: 2,
   },
   {
      question: "El modelo BDI utiliza:",
      options: [
         "Creencias, procesos y acciones.",
         "Creencias, deseos y acciones.",
         "Creencias, procesos e intenciones.",
         "Creencias, deseos e intenciones.",
      ],
      correct: 3,
   },
   {
      question: "En el campo de la inteligencia artificial, los deseos son:",
      options: [
         "Aptitudes informacionales capaces de representar el conocimiento.",
         "Aptitudes deliberativas del agente.",
         "Aptitudes motivacionales del agente.",
         "Aptitudes sensitivas del agente.",
      ],
      correct: 2,
   },
   {
      question:
         "Cuando las soluciones que se proponen son planes, entonces se habla de una especialización del razonamiento basado en casos que se denomina:",
      options: ["CCB.", "CBR.", "BDP.", "CBP."],
      correct: 3,
   },
   {
      question: "¿De qué se encarga la base de casos o memoria de casos en la estructura de un sistema CBR?",
      options: [
         "De revisar y reutilizar los casos.",
         "De mantener la representación y organización de los casos.",
         "De retener y recuperar la representación y la organización de los casos.",
         "De recuperar y revisar la representación y la organización de los casos.",
      ],
      correct: 1,
   },
   {
      question: "¿Cuál de las siguientes afirmaciones es falsa?",
      options: [
         "La planificación es una forma de razonamiento.",
         "En la planificación, las acciones ejecutadas se encuentran dirigidas por el deseo de alcanzar alguna meta.",
         "La planificación es un área que busca la elaboración de programas que permitan obtener planes de acción de forma automática.",
         "La planificación es un área que persigue un objetivo solo a través de acciones muy concretas y definidas.",
      ],
      correct: 3,
   },
   {
      question: "A la representación gráfica de un plan de tareas con el método CPM se le denomina:",
      options: ["Árbol.", "Grafo.", "Nodo.", "Red."],
      correct: 3,
   },
   {
      question: "¿Cuál de las siguientes no es una ventaja que presenta el CBP con respecto a otras aproximaciones a la planificación?",
      options: [
         "CBP permite almacenar planes para su uso posterior.",
         "CBP permite la depuración de aquellos planes fallidos.",
         "CBP permite analizar los planes de manera personalizada.",
         "CBP permite anticiparse a posibles problemas que puedan aparecer durante la ejecución del plan y descartar aquellos planes que puedan presentar problemas.",
      ],
      correct: 2,
   },
   {
      question: "¿Cuál de las siguientes no es una metodología orientada a agentes (AOSE)?",
      options: ["Gaia.", "ITIL.", "SysML.", "AUML."],
      correct: 1,
   },
   {
      question: "¿Cuál de los siguientes conceptos no es un término que incorpora la lógica de predicados?",
      options: ["Variables.", "Constantes.", "Procedimientos.", "Funciones."],
      correct: 2,
   },
   {
      question: "¿Cuál de los siguientes conceptos no se utiliza en la representación de conocimiento mediante frames?",
      options: ["Relación.", "Clase.", "Atributo.", "Función."],
      correct: 3,
   },
   {
      question: "¿Cuál es la primera fase del desarrollo de una ontología?",
      options: [
         "Determinar el dominio y la cobertura de la ontología.",
         "Enumerar los términos importantes de la ontología.",
         "Considerar la reutilización de ontologías existentes.",
         "Escribir una lista de términos que se pueden usar para tratar un dominio.",
      ],
      correct: 0,
   },
   {
      question: "¿Cuál de las siguientes no es una ventaja de las redes neuronales?",
      options: [
         "Aprenden de la experiencia.",
         "Generalizan, a partir de ejemplos anteriores, los casos nuevos.",
         "La abstracción de la esencia de las entradas.",
         "Actúan de manera independiente sobre casos nuevos.",
      ],
      correct: 3,
   },
   {
      question: "El perceptrón es un componente que:",
      options: [
         "Puede tener varias entradas con un peso concreto cada una.",
         "Siempre tiene una entrada con un peso concreto.",
         "Si tiene dos entradas, los pesos de cada una deben ser iguales.",
         "Nunca tiene menos de 4 entradas.",
      ],
      correct: 0,
   },
   {
      question: "¿Una red neuronal puede tener varias capas intermedias?",
      options: ["No.", "Sí.", "Siempre las tiene.", "Nunca las tiene."],
      correct: 1,
   },
   {
      question: "¿Cuál de los siguientes no es un tipo de aprendizaje que se distinga en una red neuronal?",
      options: ["Supervisado.", "Cíclico.", "No supervisado.", "Híbrido."],
      correct: 1,
   },
   {
      question:
         "Posibles aplicaciones de redes neuronales son la predicción, el procesado natural del lenguaje, la conversión de texto a voz, la compresión de imágenes, etc.",
      options: [
         "Sí, todas las que se enumeran.",
         "No.",
         "Sí, pero la compresión de imágenes con varios matices.",
         "No, porque se indica la conversión de texto a voz.",
      ],
      correct: 0,
   },

   //--------CUESTIONARIOS---------//

   {
      question:
         "Posibles aplicaciones de redes neuronales son: Predicción, Procesado Natural del Lenguaje, Conversión Texto a Voz, Compresión de Imágenes, etc.",
      options: [
         "No, porque se indica la conversión texto a voz",
         "No",
         "Sí, pero la compresión de imágenes con varios matices",
         "Si todas las que se enumeran",
      ],
      correct: 3,
   },
   {
      question: "¿Para qué sirve principalmente el concepto de capas en redes neuronales?",
      options: [
         "Añadir información poco influyente en el resultado final",
         "Añadir información que no estaba antes",
         "Para procesar más rápido los datos de entrada",
         "Para procesar más lentamente los datos de entrada",
      ],
      correct: 1,
   },
   {
      question: "¿Cuál de las siguientes acciones no suele realizarla una red neuronal?",
      options: ["Entrenar", "Aplicar", "Investigar", "Aprender"],
      correct: 2,
   },
   {
      question: "¿Una red neuronal puede tener varias capas intermedias?",
      options: ["Siempre las tiene", "Si", "No", "Nunca las tiene"],
      correct: 1,
   },
   {
      question: "El perceptrón es un componente que …",
      options: [
         "Puede tener varias entradas con un peso concreto cada una",
         "Si tiene dos entradas los pesos de cada una deben ser iguales",
         "Siempre tiene una entrada con un peso concreto",
         "Nunca tiene menos de 4 entradas",
      ],
      correct: 0,
   },
   {
      question: "¿Cuál de las siguientes no es una ventaja de las Redes Neuronales?",
      options: [
         "Abstracción de la esencia de las entradas",
         "Generalizan a partir de ejemplos anteriores, los casos nuevos",
         "Actúan de manera independiente sobre casos nuevos",
         "Aprenden de la experiencia",
      ],
      correct: 2,
   },
   {
      question: "¿Cuál de los siguientes no es un tipo de aprendizaje que se distinga en una red neuronal?",
      options: ["Cíclico", "Híbrido", "No supervisado", "Supervisado"],
      correct: 0,
   },
   {
      question:
         "La aplicación de la Inteligencia Ambiental, en el aprendizaje formal, propone la combinación de las nuevas tecnologías junto con el marco de enseñanza tradicional.",
      options: ["Verdadero", "Falso"],
      correct: 0,
   },
   {
      question:
         "Según la arquitectura de redes neuronales. Las redes con conexiones hacia adelante En este tipo de redes pueden existir conexiones de capas hacia atrás. Esto quiere decir que la información puede regresar a capas anteriores.",
      options: ["Verdadero", "Falso"],
      correct: 1,
   },
   {
      question:
         "Las redes neuronales tratan de imitar nuestra forma de pensar por un lado y por otro lado están formadas por un algoritmo basado en la experiencia.",
      options: ["Verdadero", "Falso"],
      correct: 1,
   },
   {
      question:
         "Los algoritmos genéticos son muy complejos y requieren más elementos y parámetros, por lo que su utilización requiere de cierta experiencia y mucha experimentación. Un requisito básico de este tipo de algoritmos para usarlos es:",
      options: [
         "Decidir sólo el planteamiento general del algoritmo",
         "No tener en cuenta la calidad de la solución",
         "Eligir la combinación de individuos sobre la marcha",
         "Dar una codificación a las características de las soluciones",
      ],
      correct: 3,
   },
   {
      question: "¿Cuál de los siguientes componentes NO forma parte de un problema?",
      options: ["Tarea", "Limitaciones", "Procedimiento", "Información"],
      correct: 0,
   },
   {
      question:
         "Indica cuál de los siguientes NO es un desafío que se persigue en el desarrollo de aplicaciones basadas en la Inteligencia Artificial",
      options: [
         "Conseguir aplicaciones fáciles de usar",
         "Sistemas con una infraestructura computacional flexible",
         "Desarrollar sistemas complejos e integrados",
         "Identificar la herramienta de desarrollo",
      ],
      correct: 2,
   },
   {
      question: "Uno de los estados del problema de las jarras de agua es:",
      options: [
         "3, 0 - Se vacía la jarra de 3 litros en la jarra de 4 litros",
         "2, 0 - Se llena la jarra de 4 litros",
         "2, 3 - Se llena la jarra de 3 litros con la jarra de 4 litros",
         "4, 1 - Se llena la jarra de 4 litros con la jarra de 3 litros",
      ],
      correct: 0,
   },
   {
      question: "Los métodos de búsqueda informados o heurísticos:",
      options: [
         "Resuelven problemas mediante métodos específicos para el problema y no utilizan modelos generales",
         "Reducen el espacio de búsqueda y son capaces de encontrar de manera rápida una solución al problema",
         "Su funcionamiento se basa en el ensayo y error",
         "Es relativamente fácil hallar una solución inicial aunque no sea la más correcta",
      ],
      correct: 1,
   },
   {
      question: "Una característica que NO identifica cómo debe ser un proceso de búsqueda:",
      options: ["Ligero", "Estructurado", "Dinámico", "Práctico"],
      correct: 0,
   },
   {
      question:
         "En el caso de los problemas denominados de satisfacción de restricciones, ¿cuál de las siguientes NO es una característica de este tipo de problema?",
      options: [
         "Una solución es una asignación de valores a esas variables",
         "El problema se puede representar mediante un conjunto de variables",
         "Cada variable tiene un valor",
         "Existen restricciones de consistencia entre las variables",
      ],
      correct: 2,
   },
   {
      question:
         "Un algoritmo es un procedimiento abstracto y con una finalidad variante que procesa información discreta por un ente computacional. Todo el proceso de información no está claramente definido en el procedimiento.",
      options: ["Verdadero", "Falso"],
      correct: 1,
   },
   {
      question:
         "El algoritmo de búsqueda en profundidad iterativa utiliza las propiedades positivas de la búsqueda en profundidad y en amplitud combinadas",
      options: ["Verdadero", "Falso"],
      correct: 0,
   },
   {
      question:
         "Las torres de Hanoi es un juego matemático ideado en el siglo XVIII. Este juego consiste en pasar una serie de discos de diámetro decreciente, de un poste a otro poste. Cada vez sólo se puede mover un disco, los discos siempre deben estar en algún poste y no se puede colocar un disco sobre otro de menor tamaño.",
      options: ["Verdadero", "Falso"],
      correct: 1,
   },
   {
      question: "Una de las aplicaciones que también se utiliza en la representación del conocimiento es:",
      options: ["Aplicaciones distribuidas", "Ontologías", "Gestor documental", "Sistema de Big Data"],
      correct: 1,
   },
   {
      question: "Hay varios tipos de conocimiento declarativo. Entre ellos se encuentra el conocimiento heredable:",
      options: [
         "Establece las relaciones estructurales entre conceptos de manera que se puedan saber propiedades de generalización/especialización, inclusión o herencia de propiedades.",
         "Nos indica como diferentes conceptos se relacionan entre si y las propiedades que se pueden obtener a través de esas relaciones.",
         "Establece como se pueden derivar propiedades y hechos de otros mediante relaciones de deducción.",
         "Es conocimiento descrito mediante el lenguaje de la lógica.",
      ],
      correct: 0,
   },
   {
      question: "¿Cuál de los siguientes conceptos NO se utiliza en la representación de conocimiento mediante frames?",
      options: ["Función", "Atributo", "Clase", "Relación"],
      correct: 0,
   },
   {
      question: "Se puede afirmar que la lógica es un lenguaje ...",
      options: ["Descriptivo", "Proposicional", "De representación.", "Complejo"],
      correct: 2,
   },
   {
      question: "¿Cuál es la primera fase del desarrollo de una ontología?",
      options: [
         "Escribir una lista de términos que se pueden usar para tratar un dominio",
         "Determinar el dominio y la cobertura de la ontología",
         "Considerar la reutilización de ontologías existentes",
         "Enumerar los términos importantes de la ontología",
      ],
      correct: 1,
   },
   {
      question: '"No es cierto que fuera a trabajar y llevara traje". La representación mediante lógica proposicional de la afirmación es:',
      options: ["P v ¬Q", "P ^ Q", "(¬P ^ ¬Q", "¬ (P ^ Q)"],
      correct: 3,
   },
   {
      question: "Uno de los objetivos de la Web Semántica es:",
      options: [
         "Eliminar el contenido semántico de los documentos en la web",
         "Almacenar información de manera estructurada",
         "Enriquecer los lenguajes actuales más utilizados para intercambiar información en la web",
         "Utilizar bases de datos relacionales para intercambiar información en la web",
      ],
      correct: 2,
   },
   {
      question: "En Inteligencia Artificial las ontologías unen el conocimiento del dominio con el conocimiento operacional",
      options: ["Verdadero", "Falso"],
      correct: 1,
   },
   {
      question: "La lógica de predicados es el lenguaje lógico más simple y permite definir relaciones entre frases declarativas atómicas",
      options: ["Verdadero", "Falso"],
      correct: 1,
   },
   {
      question:
         "Se puede definir de forma genérica a una red semántica como un formalismo de representación del conocimiento donde éste es representado como un grafo donde los nodos corresponden a conceptos y los arcos a relaciones entre conceptos",
      options: ["Verdadero", "Falso"],
      correct: 0,
   },
   {
      question: "¿Cuál de las siguientes NO es una metodología orientada a agentes AOSE?",
      options: ["AUML", "SysML", "ITIL", "Gaia"],
      correct: 2,
   },
   {
      question: "El modelo BDI utiliza:",
      options: [
         "Creencias, Procesos e Intenciones",
         "Creencias, Deseos y Acciones",
         "Creencias, Procesos y Acciones",
         "Creencias, Deseos e Intenciones",
      ],
      correct: 3,
   },
   {
      question: "El razonamiento basado en casos,",
      options: [
         "resuelve un nuevo problema recordando situaciones similares anteriores y reutiliza el conocimiento y la información de estas situaciones",
         "es el resultado de la actividad mental de razonar, es decir, un conjunto de proposiciones enlazadas entre sí que dan apoyo o justifican una idea",
         "son un conjunto de actividades mentales que se encargan de conectar unas ideas con otras de acuerdo a ciertas reglas",
         "es un tipo de razonamiento en el cual no hay una jerarquización lineal en los conceptos a comparar",
      ],
      correct: 0,
   },
   {
      question: "En el campo de la Inteligencia Artificial, los deseos son:",
      options: [
         "Aptitudes informacionales capaces de representar el conocimiento",
         "Aptitudes sensitivas de un agente",
         "Aptitudes deliberativas de un agente",
         "Aptitudes motivacionales del agente",
      ],
      correct: 3,
   },
   {
      question:
         "Algunas arquitecturas como Jadex permiten distinguir entre tipos de deseos o metas, identificando cinco tipos de metas. ¿Cual de las siguientes no es una de estas cinco metas?",
      options: ["perform goal", "query goal", "assistant goal", "maintain goal"],
      correct: 2,
   },
   {
      question:
         "Una condición que se debe cumplir para que una asociación de agentes que trabajan de forma conjunta se considere un sistema multiagente es:",
      options: [
         "Ninguno de los agentes del sistemas deben ser autónomos",
         "Debe existir al menos una relación entre dos agentes en la que se cumpla que uno de los agentes satisface el objetivo del otro",
         "Ninguno de los agentes dispone de información incompleta para resolver el problema",
         "Ninguno de los agentes tiene capacidades limitadas para resolver el problema",
      ],
      correct: 1,
   },
   {
      question:
         "En SysML, sea cual sea el tipo de agente (reactivo, deliberativo o híbrido), todos se definen a través de una estructura que se basa en tres características básicas. ¿Cuáles son estas tres características?",
      options: [
         "Entrada, Rol y Organización.",
         "Identificador, Rol y Organización.",
         "Identificador, Rol y Salida.",
         "Identificador, Servicio y Organización.",
      ],
      correct: 1,
   },
   {
      question: "Los agentes CBRBDI no aprenden de las experiencias y reaccionan de igual manera de acuerdo a las necesidades de los usuarios.",
      options: ["Verdadero", "Falso"],
      correct: 1,
   },
   {
      question:
         "Los diagramas de estado muestran los patrones de comunicación de los mensajes entre agentes, así como las limitaciones en el contenido de esos mensajes.",
      options: ["Verdadero", "Falso"],
      correct: 1,
   },
   {
      question:
         "Los diagramas de interacción muestran las interacciones que existen entre los agentes, los roles que pueden tomar los agentes, y las interacciones entre los roles, basándose en los mensajes que intercambian los agentes y los eventos que generan esos mensajes.",
      options: ["Verdadero", "Falso"],
      correct: 0,
   },
];

export default quizData;
