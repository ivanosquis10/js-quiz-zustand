export const react = [
  {
    id: 1,
    question: '¿Qué es React?',
    answers: [
      'Un lenguaje de programación',
      'Una librería de JavaScript para construir interfaces de usuario',
      'Un sistema operativo',
      'Un framework para construir aplicaciones web',
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "¿Cuál es la función principal de los 'props' en React?",
    code: '  Fn Component(props) {\n    return ( \n     <h1>Hello {props.name}!</h1>\n   )}',
    answers: [
      'Almacenar el estado de un componente',
      'Definir el diseño de un componente',
      'Pasar datos de un componente padre a un componente hijo',
      'Definir la lógica de un componente',
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    question:
      '¿Cómo se llama la sintaxis utilizada en React para renderizar un componente?',
    code: 'function App() {\n return <Saludo />\n}',
    answers: ['HTML', 'JSX', 'CSS', 'JavaScript'],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "¿Qué es un 'state' en React?",
    answers: [
      'Un objeto que contiene datos que pueden cambiar en un componente',
      'Una función que se utiliza para actualizar el DOM',
      'Una variable global que se utiliza en toda la aplicación',
      'Un objeto que se utiliza para definir el diseño de un componente',
    ],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: '¿Qué es un hook en React y para qué se utiliza?',
    answers: [
      'Una función que permite utilizar el estado y otros features de React en un componente funcional',
      'Una función que se utiliza para renderizar un componente en el DOM',
      'Una función que se utiliza para actualizar el estado de un componente de clase',
      'Una función que se utiliza para manejar eventos en un componente de clase',
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "¿Qué significa el término 'JSX' en React?",
    code: 'const JSX = () => {\n   <h1>¿Qué es JSX?\n  }',
    answers: [
      'JavaScript XML',
      'JavaScript XHR',
      'JavaScript XSLT',
      'JavaScript XUL',
    ],
    correctAnswer: 0,
  },
]
