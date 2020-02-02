const NUMQUESTIONS = 5;
let questionsMap = new Map();
let quizSequence = [];
let quizStats = {
  counter: 0,
  score: 0,
  currentQuestion: 0
};

const questionJSON = [
  { "image": "https://i.imgur.com/upu7gMJ.jpg", "continent": "Antarctica" },
  { "image": "https://i.imgur.com/E7n3P77.jpg", "continent": "Antarctica" },
  { "image": "https://i.imgur.com/4WgoutD.jpg", "continent": "Antarctica" },
  { "image": "https://i.imgur.com/rYohooR.jpg", "continent": "Antarctica" },
  { "image": "https://i.imgur.com/BlrmuXu.jpg", "continent": "Antarctica" },
  { "image": "https://i.imgur.com/1UINvo8.jpg", "continent": "Oceania" },
  { "image": "https://i.imgur.com/vWlrNXk.jpg", "continent": "Oceania" },
  { "image": "https://i.imgur.com/rljU60z.jpg", "continent": "Oceania" },
  { "image": "https://i.imgur.com/ybRJKnu.jpg", "continent": "Oceania" },
  { "image": "https://i.imgur.com/zZsesJy.jpg", "continent": "Oceania" },
  { "image": "https://i.imgur.com/sgqoWwV.jpg", "continent": "Europe" },
  { "image": "https://i.imgur.com/EdNkLW8.jpg", "continent": "Europe" },
  { "image": "https://i.imgur.com/sczp9om.jpg", "continent": "Europe" },
  { "image": "https://i.imgur.com/3uSLMKy.jpg", "continent": "Europe" },
  { "image": "https://i.imgur.com/xG8dgTl.jpg", "continent": "Europe" },
  {
    "image": "https://i.imgur.com/M17BhGr.jpg",
    "continent": "North America"
  },
  {
    "image": "https://i.imgur.com/7Hm4BDz.jpg",
    "continent": "North America"
  },
  {
    "image": "https://i.imgur.com/BWwPYCI.jpg",
    "continent": "North America"
  },
  {
    "image": "https://i.imgur.com/eYQXGwb.jpg",
    "continent": "North America"
  },
  {
    "image": "https://i.imgur.com/AMVT31C.jpg",
    "continent": "North America"
  },
  {
    "image": "https://i.imgur.com/nooVXqp.jpg",
    "continent": "South America"
  },
  {
    "image": "https://i.imgur.com/nLUAr4P.jpg",
    "continent": "South America"
  },
  {
    "image": "https://i.imgur.com/KV7vPYG.jpg",
    "continent": "South America"
  },
  {
    "image": "https://i.imgur.com/e73FhAl.jpg",
    "continent": "South America"
  },
  {
    "image": "https://i.imgur.com/hYlVyom.jpg",
    "continent": "South America"
  },
  { "image": "https://i.imgur.com/erOrAn4.jpg", "continent": "Asia" },
  { "image": "https://i.imgur.com/RVowloS.jpg", "continent": "Asia" },
  { "image": "https://i.imgur.com/NPSlyqL.jpg", "continent": "Asia" },
  { "image": "https://i.imgur.com/khi8hGD.jpg", "continent": "Asia" },
  { "image": "https://i.imgur.com/VcIFY35.jpg", "continent": "Asia" },
  { "image": "https://i.imgur.com/nWK7Jlh.jpg", "continent": "Africa" },
  { "image": "https://i.imgur.com/GYJlsrp.jpeg", "continent": "Africa" },
  { "image": "https://i.imgur.com/QBo4Huk.jpg", "continent": "Africa" },
  { "image": "https://i.imgur.com/G1kpBhT.jpg", "continent": "Africa" },
  { "image": "https://i.imgur.com/FlaF0bx.jpg", "continent": "Africa" }
];

const questionsArray = JSON.parse(JSON.stringify(questionJSON));

function quizQuestions() {
  questionsMap.set(1, {
    image: questionsArray[0].image,
    a: "Antarctica",
    b: "Europe",
    c: "North America",
    answer: questionsArray[0].continent
  });
  questionsMap.set(2, {
    image: questionsArray[1].image,
    a: "Oceania",
    b: "Antarctica",
    c: "South America",
    answer: questionsArray[1].continent
  });
  questionsMap.set(3, {
    image: questionsArray[2].image,
    a: "Africa",
    b: "Antarctica",
    c: "South America",
    answer: questionsArray[2].continent
  });
  questionsMap.set(4, {
    image: questionsArray[3].image,
    a: "Antarctica",
    b: "Oceania",
    c: "Asia",
    answer: questionsArray[3].continent
  });
  questionsMap.set(5, {
    image: questionsArray[4].image,
    a: "Africa",
    b: "Europe",
    c: "Antarctica",
    answer: questionsArray[4].continent
  });
  questionsMap.set(6, {
    image: questionsArray[5].image,
    a: "Europe",
    b: "Oceania",
    c: "North America",
    answer: questionsArray[5].continent
  });
  questionsMap.set(7, {
    image: questionsArray[6].image,
    a: "Oceania",
    b: "North America",
    c: "Asia",
    answer: questionsArray[6].continent
  });
  questionsMap.set(8, {
    image: questionsArray[7].image,
    a: "Oceania",
    b: "Africa",
    c: "Antarctica",
    answer: questionsArray[7].continent
  });
  questionsMap.set(9, {
    image: questionsArray[8].image,
    a: "North America",
    b: "Asia",
    c: "Oceania",
    answer: questionsArray[8].continent
  });
  questionsMap.set(10, {
    image: questionsArray[9].image,
    a: "Oceania",
    b: "South America",
    c: "Europe",
    answer: questionsArray[9].continent
  });
  questionsMap.set(11, {
    image: questionsArray[10].image,
    a: "Europe",
    b: "North America",
    c: "Asia",
    answer: questionsArray[10].continent
  });
  questionsMap.set(12, {
    image: questionsArray[11].image,
    a: "South America",
    b: "Europe",
    c: "Oceania",
    answer: questionsArray[11].continent
  });
  questionsMap.set(13, {
    image: questionsArray[12].image,
    a: "North America",
    b: "Africa",
    c: "Europe",
    answer: questionsArray[12].continent
  });
  questionsMap.set(14, {
    image: questionsArray[13].image,
    a: "Europe",
    b: "Antarctica",
    c: "Asia",
    answer: questionsArray[13].continent
  });
  questionsMap.set(15, {
    image: questionsArray[14].image,
    a: "Oceania",
    b: "North America",
    c: "Europe",
    answer: questionsArray[14].continent
  });
  questionsMap.set(16, {
    image: questionsArray[15].image,
    a: "Antarctica",
    b: "Asia",
    c: "North America",
    answer: questionsArray[15].continent
  });
  questionsMap.set(17, {
    image: questionsArray[16].image,
    a: "North America",
    b: "Oceania",
    c: "Africa",
    answer: questionsArray[16].continent
  });
  questionsMap.set(18, {
    image: questionsArray[17].image,
    a: "Asia",
    b: "South America",
    c: "North America",
    answer: questionsArray[17].continent
  });
  questionsMap.set(19, {
    image: questionsArray[18].image,
    a: "Europe",
    b: "North America",
    c: "Oceania",
    answer: questionsArray[18].continent
  });
  questionsMap.set(20, {
    image: questionsArray[19].image,
    a: "North America",
    b: "Africa",
    c: "Antarctica",
    answer: questionsArray[19].continent
  });
  questionsMap.set(21, {
    image: questionsArray[20].image,
    a: "Oceania",
    b: "South America",
    c: "Asia",
    answer: questionsArray[20].continent
  });
  questionsMap.set(22, {
    image: questionsArray[21].image,
    a: "South America",
    b: "Antarctica",
    c: "North America",
    answer: questionsArray[21].continent
  });
  questionsMap.set(23, {
    image: questionsArray[22].image,
    a: "Africa",
    b: "South America",
    c: "Europe",
    answer: questionsArray[22].continent
  });
  questionsMap.set(24, {
    image: questionsArray[23].image,
    a: "Africa",
    b: "Asia",
    c: "South America",
    answer: questionsArray[23].continent
  });
  questionsMap.set(25, {
    image: questionsArray[24].image,
    a: "South America",
    b: "North America",
    c: "Oceania",
    answer: questionsArray[24].continent
  });
  questionsMap.set(26, {
    image: questionsArray[25].image,
    a: "Asia",
    b: "Antarctica",
    c: "Africa",
    answer: questionsArray[25].continent
  });
  questionsMap.set(27, {
    image: questionsArray[26].image,
    a: "Europe",
    b: "Asia",
    c: "North America",
    answer: questionsArray[26].continent
  });
  questionsMap.set(28, {
    image: questionsArray[27].image,
    a: "Africa",
    b: "South America",
    c: "Asia",
    answer: questionsArray[27].continent
  });
  questionsMap.set(29, {
    image: questionsArray[28].image,
    a: "Asia",
    b: "Europe",
    c: "Oceania",
    answer: questionsArray[28].continent
  });
  questionsMap.set(30, {
    image: questionsArray[29].image,
    a: "Antarctica",
    b: "North America",
    c: "Asia",
    answer: questionsArray[29].continent
  });
  questionsMap.set(31, {
    image: questionsArray[30].image,
    a: "Africa",
    b: "Asia",
    c: "North America",
    answer: questionsArray[30].continent
  });
  questionsMap.set(32, {
    image: questionsArray[31].image,
    a: "Africa",
    b: "Europe",
    c: "South America",
    answer: questionsArray[31].continent
  });
  questionsMap.set(33, {
    image: questionsArray[32].image,
    a: "North America",
    b: "Asia",
    c: "Africa",
    answer: questionsArray[32].continent
  });
  questionsMap.set(34, {
    image: questionsArray[33].image,
    a: "Antartica",
    b: "Asia",
    c: "Africa",
    answer: questionsArray[33].continent
  });
  questionsMap.set(35, {
    image: questionsArray[34].image,
    a: "Oceania",
    b: "Africa",
    c: "North America",
    answer: questionsArray[34].continent
  });
}

let image = document.getElementById("photo"),
  answerA = document.getElementById("first-answer"),
  answerB = document.getElementById("second-answer"),
  answerC = document.getElementById("third-answer"),
  questionNumber = document.getElementById("question-num");

function determineSequence() {
  for (let [key, value] of questionsMap) {
    quizSequence.push(key);
  }

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  quizSequence = shuffle(quizSequence);
}

function getNextQuestion() {
  quizStats.counter++;
  let qn = quizSequence.shift();

  let a = questionsMap.get(qn).a,
    b = questionsMap.get(qn).b,
    c = questionsMap.get(qn).c,
    imageSrc = questionsMap.get(qn).image;

  image.innerHTML = `<img
  class="question-photo"
  src="${imageSrc}"
  alt="content-imgage"
  />`;
  answerA.textContent = a;
  answerB.textContent = b;
  answerC.textContent = c;
  questionNumber.textContent = quizStats.counter;

  quizStats.currentQuestion = qn;

  answerA.addEventListener("click", checkTheAnswer);
  answerB.addEventListener("click", checkTheAnswer);
  answerC.addEventListener("click", checkTheAnswer);

  answerA.setAttribute("data-answer", questionsMap.get(qn).a);
  answerB.setAttribute("data-answer", questionsMap.get(qn).b);
  answerC.setAttribute("data-answer", questionsMap.get(qn).c);
}

// Check the answer.
function checkTheAnswer() {
  let givenAnswer = this.dataset.answer,
    correctAnswer = questionsMap.get(quizStats.currentQuestion).answer;

  if (givenAnswer == correctAnswer) {
    quizStats.score += 750;
    this.classList.add("correct");
  } else {
    this.classList.add("wrong");
  }

  if (quizStats.counter < NUMQUESTIONS) {
    setTimeout(clearClasses, 400);
    setTimeout(getNextQuestion, 400);
  } else {
    localStorage.setItem("score", quizStats.score);
    setTimeout(showTheResults, 200);
  }
}

function clearClasses() {
  answerA.classList.remove("correct", "wrong");
  answerB.classList.remove("correct", "wrong");
  answerC.classList.remove("correct", "wrong");
}

function showTheResults() {
  document.location.pathname = "src/html/result.html";
}

(function startQuiz() {
  quizQuestions();
  determineSequence();
  getNextQuestion();
})();
