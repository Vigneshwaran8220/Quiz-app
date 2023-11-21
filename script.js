const quizQuestions = [
    {
      question: "What is India's population 2023?",
      options: ["1,428,627,663 people", "1,428,627,653 people", "1,428,627,693 people", "1,428,627,603 people"],
      correctAnswer: "1,428,627,663 people"
    },
    {
      question: "What is full form Google?",
      options: ["Global Organization of Oriented Group Language of Evaluation.", "Global Organization of Oriented Group Language of Earth.", "Global Organization of Oriented Group Language of Early.", "Global Organization of Oriented Group Language of Eastern."],
      correctAnswer: "Global Organization of Oriented Group Language of Earth."
    },
    {
      question: "Who is the first woman Governor of Tamil Nadu?",
      options: [" Fathima Beevi", "Kiran pedi", "Subbulaxshmi", "Thilagavathi"],
      correctAnswer: " Fathima Beevi"
    },
    {
        question: "(2007) Primeminister of India?",
        options: ["Narendra Modi", "Adal Bihari vajpayee", "Manmohan Singh", "Rajiv Gandhi"],
        correctAnswer: "Manmohan Singh"
      },
      {
        question: "Who is the first CM of Tamil Nadu?",
        options: ["CN.Annadurai", "Kamarajar", "Neduchezhiyan", "Kumaraswami Naidu"],
        correctAnswer: "CN.Annadurai"
      },
      {
        question: "Who is the 'THIRD' President of INDIA?",
        options: ["Rajendra Prasath", "Zakir Hussain", "Ratha Krishnan", "Dr.APJ.AbdulKalam"],
        correctAnswer: "Zakir Hussain"
      },
      {
        question: "What Capital Of USA?",
        options: ["Washington", "California", "Texas", "Florida"],
        correctAnswer: "Washington"
      }
  ];
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 50;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    // Display the current question
    questionText.innerHTML = currentQuestion.question;
  
    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    // Check if the selected answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      // Update the timer text
      document.getElementById("timer").textContent = timeLeft;
  
      // End the quiz if time runs out
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
  
    // Calculate the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;
  
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
  }
  
  // Add event listener to start the quiz when the start button is clicked
  document.getElementById("start-button").addEventListener("click", startQuiz);