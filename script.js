// Tableau de questions avec 4 options et une réponse
const questions = [
    {
        question: "Quel est le nom du capitaine du Chapeau de Paille ?",
        options: ["Zoro", "Luffy", "Nami", "Sanji"],
        answer: 1
    },
    {
        question: "Qui est le médecin de l'équipage de Luffy ?",
        options: ["Sanji", "Robin", "Chopper", "Nico"],
        answer: 2
    },
    {
        question: "Quel est le rêve de Luffy ?",
        options: ["Devenir le roi des pirates", "Trouver le One Piece", "Sauver Ace", "Battre Shanks"],
        answer: 0
    },
    {
        question: "Quel est le nom du bateau de Luffy ?",
        options: ["Thousand Sunny", "Going Merry", "Black Pearl", "Red Force"],
        answer: 0
    },
    {
        question: "Qui est le cuisinier de l'équipage de Luffy ?",
        options: ["Chopper", "Franky", "Sanji", "Usopp"],
        answer: 2
    },
    {
        question: "Quelle est la couleur de la tenue de Luffy ?",
        options: ["Rouge", "Bleu", "Vert", "Jaune"],
        answer: 0
    },
    {
        question: "Quel est le nom du pouvoir de Luffy ?",
        options: ["Gomu Gomu no Mi", "Mera Mera no Mi", "Hie Hie no Mi", "Suna Suna no Mi"],
        answer: 0
    },
    {
        question: "Quel est le nom du frère de Luffy ?",
        options: ["Sabo", "Ace", "Zoro", "Sanji"],
        answer: 1
    },
    {
        question: "Qui est le roi des pirates ?",
        options: ["Gold Roger", "Whitebeard", "Shanks", "Luffy"],
        answer: 0
    },
    {
        question: "Quel est le nom de la femme poisson qui est amie avec Luffy ?",
        options: ["Nami", "Robin", "Hachi", "Niko"],
        answer: 1
    }
];

let questionIndex = 0;
let score = 0;
let reponseChoisie = false;

// Fonction pour afficher la question actuelle
function afficherQuestion() {
    const currentQuestion = questions[questionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.innerText = currentQuestion.options[index];
        option.disabled = false; // Réactiver les boutons pour chaque nouvelle question
    });
    document.getElementById("feedback").innerText = "";
    reponseChoisie = false;
}

// Fonction pour gérer la sélection de réponse
function choisirReponse(index) {
    if (reponseChoisie) return; // Empêche plusieurs réponses par question

    const bonneReponse = questions[questionIndex].answer;
    const options = document.querySelectorAll(".option");

    if (index === bonneReponse) {
        score++;
        document.getElementById("feedback").innerText = "Bonne réponse !";
        document.getElementById("score").innerText = `Score : ${score}`;
    } else {
        document.getElementById("feedback").innerText = "Mauvaise réponse.";
    }

    // Désactiver tous les boutons de réponse après un choix
    options.forEach((option) => option.disabled = true);
    document.getElementById("next-btn").style.display = "block";
    reponseChoisie = true;
}

// Fonction pour passer à la question suivante
function questionSuivante() {
    questionIndex++;
    if (questionIndex < questions.length) {
        afficherQuestion();
        document.getElementById("next-btn").style.display = "none";
    } else {
        finDuJeu();
    }
}

// Fonction de fin de jeu
function finDuJeu() {
    document.getElementById("quiz").innerHTML = `<h2>Jeu terminé ! Votre score est de : ${score}/${questions.length}</h2>`;
}

// Charger la première question au début
afficherQuestion();
