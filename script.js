const quizData = [
  {
    question: 'what does HTML stand for?',
    options: ['Hyper Text Markup Language', 'High Tech Markup Language', 'Hyperlink Text Markup Language', 'Home Tool Markup Language'],
    correctAnswer: 'Hyper Text Markup Language ',
  },
  {
    question: 'Which techology is primarily resposible for the styling of web pages?',
    options: ['Javascript', 'Html', 'css', 'All'],
    correctAnswer: 'css',
  },
  {
    question: 'which progrmming language is mainly used for adding interactivity to websites?',
    options: ['Javascript', 'Html', 'css', 'All'],
    correctAnswer: 'Javascript',
  },
{
question: 'which Html tag is used to create a hyperlink?',
options: ['{a}', '{link}', '{l}', '{p}'],
correctAnswer: '{a}',
  },
{
question: 'which CSS property is used to control the spacing between elements in a layout?',
options: ['padding', 'spacing', 'border', 'margin'],
correctAnswer: 'margin',
  },
{
question: 'which CSS property is used to change to the font size of text?',
options: ['font-size', 'text-size', 'font-style', 'text-style'],
correctAnswer: 'font-size',
  },
{
question: 'which javascript function is used to change the content of an HTML element?',
options: ['modify()', 'change()', 'update()', 'innerHTML()'],
correctAnswer: 'innerHTML()',
  },
{
question: 'which HTTP method is typically used to retrieve data from a web sever?',
options: ['POST', 'GET', 'PUSH', 'DELETE'],
correctAnswer: 'innerHTML()',
  },
{
question: 'HOW can you create an e-mail(#) link?',
options: ['<mail href="#"', '<mail>#</mail>', '<a href="#">', '<a href="mailto:#">'],
correctAnswer: '<a href="mailto:#">',
  },

{
question: 'which is not valid data type in javascript?',
options: ['Undefineded', 'Boolean', 'float', 'Number'],
correctAnswer: 'float',
  },
{
question: 'The escape sequence "/f" stand for ?',
options: ['Floating numbers', 'Form feed', 'Functions return values', 'None'],
correctAnswer: 'Form feed',
  },
{

question: 'which of the following function of Array object removes the last element from an array and retuns that element?',
options: ['push()', 'delete()', 'insert()', 'pop()'],
correctAnswer: 'pop()',
  },
{
question: 'Original Name of javascript is?',
options: ['Mocha', 'LiveScript', 'Escript', 'Javascript'],
correctAnswer: 'Mocha',
  },
{
question: 'Javascript is which type of language?',
options: ['Interpreted', 'Complied', 'Both', 'None'],
correctAnswer: 'Interpreted',
  },
{
question: 'which one is Ternary Operator',
options: ['?*', '?:', '<?', '>?'],
correctAnswer: '?:',
  },







];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;

  optionsContainer.classList.remove('hide');
  nextButton.classList.add('hide');

  currentQuizData.options.forEach((option, index) => {
    const optionButton = optionsContainer.children[index];
    optionButton.textContent = option;
    optionButton.classList.remove('correct', 'incorrect');
  });
}

function checkAnswer(selectedOption) {
  const currentQuizData = quizData[currentQuestion];
  const selectedAnswer = selectedOption.textContent;

  if (selectedAnswer === currentQuizData.correctAnswer) {
    score++;
    selectedOption.classList.add('correct');
  } else {
    selectedOption.classList.add('incorrect');
  }

  optionsContainer.classList.add('hide');
  nextButton.classList.remove('hide');
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionElement.textContent = `Your Score: ${score} / ${quizData.length}`;
  optionsContainer.classList.add('hide');
  nextButton.classList.add('hide');
}

loadQuestion();
