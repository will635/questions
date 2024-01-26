let questions = [
    "Tell us about yourself. (1)",
    "Describe your relationship with Fallon. (5)",
    "What was she doing in your house the night of her death? (6-7.5)",
    "What did you guys do the evening before her death? (7.5-8)",
    "So, to confirm, you both had something to drink that night, correct? (Yes) (8.5)",
    "When did you guys go to sleep? (9)",
    "Why were you up at 2 am? (10-12)",
    "Why did you have a gun under your mattress? (3-4)",
    "Then what happened? (13)",
    "Did it ever occur to you that Fallon could be in the bathroom? (14-15)",
    "Thank you, anything else? (No)"
]

let currentQuestion = 0;


window.onload = function () {
    document.getElementById("question").innerHTML = questions[0];
}

// service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
} // service worker


function nextQuestion() {
    if (currentQuestion != questions.length) {
        document.getElementById("question").innerHTML = questions[currentQuestion];
        currentQuestion++;
        if (currentQuestion == questions.length){
            document.getElementById("next").value = "Done";
        }
    } 
}