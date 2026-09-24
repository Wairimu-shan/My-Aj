// =========================
// SCREEN NAVIGATION
// =========================

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(screenId);

    if (nextScreen) {
        nextScreen.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =========================
// OPENING
// =========================

function openSurprise() {
    showScreen("missYouScreen");
}


// =========================
// MEMORIES
// =========================

function showMemories() {
    showScreen("memoriesScreen");
}


// =========================
// FUNNY MEMORIES
// =========================

function showFunnyMemories() {
    showScreen("funnyScreen");
}


// =========================
// EMOTIONAL PART
// =========================

function showEmotional() {
    showScreen("emotionalScreen");
}


// =========================
// ABOUT HIM
// =========================

function showAboutHim() {
    showScreen("aboutHimScreen");
}


// =========================
// START GAME
// =========================

function showGame() {

    currentQuestion = 0;

    document.getElementById("gameQuestion").textContent =
        gameQuestions[currentQuestion];

    document.getElementById("gameMessage").textContent =
        "Choose wisely... 😂";

    resetNoButton();

    showScreen("gameScreen");
}


// =========================
// GAME QUESTIONS
// =========================

let currentQuestion = 0;

const gameQuestions = [

    "Do you admit I'm one of your favourite people? 👀",

    "Have I ever made you laugh when you didn't want to? 😂",

    "Do you admit that some of our random moments are actually your favourites? 😂",

    "Okay... are you ready for the final surprise? 👀❤️"

];


// =========================
// YES BUTTON
// =========================

function gameYes() {

    currentQuestion = currentQuestion + 1;

    // If all questions are finished
    if (currentQuestion >= gameQuestions.length) {

        showFinal();

        return;
    }

    // Show next question
    document.getElementById("gameQuestion").textContent =
        gameQuestions[currentQuestion];

    document.getElementById("gameMessage").textContent =
        "Hmmmm... next question. 😂";

    resetNoButton();
}


// =========================
// NO BUTTON
// =========================

function moveNoButton() {

    const noButton = document.getElementById("noButton");

    const x = Math.floor(Math.random() * 220) - 110;

    const y = Math.floor(Math.random() * 120) - 60;

    noButton.style.left = x + "px";

    noButton.style.top = y + "px";

    document.getElementById("gameMessage").textContent =
        "HAHAHAHA nice try 😂😂";
}


// =========================
// RESET NO BUTTON
// =========================

function resetNoButton() {

    const noButton = document.getElementById("noButton");

    noButton.style.left = "0px";
    noButton.style.top = "0px";
}


// =========================
// FINAL SCREEN
// =========================

function showFinal() {
    showScreen("finalScreen");
}