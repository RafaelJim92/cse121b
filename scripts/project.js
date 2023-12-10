document.addEventListener('DOMContentLoaded', () => {
    const questionContainerElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-button');
    const scoreElement = document.createElement('div');
    scoreElement.id = 'score';
    let currentQuestionIndex, shuffledQuestions;
    let score = 0;

    const questions = [
        /* Existing questions... */
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Paris", correct: true },
                { text: "London", correct: false },
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false }
            ]
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            answers: [
                { text: "Harper Lee", correct: true },
                { text: "William Shakespeare", correct: false },
                { text: "Jane Austen", correct: false },
                { text: "Mark Twain", correct: false }
            ]
        },
        // More questions
        {
            question: "Who is known as the father of computers?",
            answers: [
                { text: "Charles Babbage", correct: true },
                { text: "Alan Turing", correct: false },
                { text: "John von Neumann", correct: false },
                { text: "Thomas Edison", correct: false }
            ]
        },
        {
            question: "Which element is represented by the symbol 'Na'?",
            answers: [
                { text: "Sodium", correct: true },
                { text: "Nitrogen", correct: false },
                { text: "Nickel", correct: false },
                { text: "Neon", correct: false }
            ]
        },
        /* ... */
    ];

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    });

    function startGame() {
        currentQuestionIndex = 0;
        score = 0;
        shuffledQuestions = questions.sort(() => Math.random() - .5);
        setNextQuestion();
        questionContainerElement.after(scoreElement);
        updateScore();
    }

    function setNextQuestion() {
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }

    function showQuestion(question) {
        questionContainerElement.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    }

    function resetState() {
        clearStatusClass(document.body);
        nextButton.classList.add('hide');
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === "true";
        if (correct) {
            incrementScore();
        }
        setStatusClass(selectedButton, correct);
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct === "true");
            button.disabled = true;
        });
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove('hide');
        } else {
            nextButton.innerText = 'Restart';
            nextButton.classList.remove('hide');
            nextButton.addEventListener('click', startGame);
        }
    }

    function setStatusClass(element, correct) {
        clearStatusClass(element);
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('wrong');
        }
    }

    function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
    }

    function updateScore() {
        scoreElement.textContent = `Score: ${score}`;
    }

    function incrementScore() {
        score++;
        updateScore();
    }

    startGame();
});
