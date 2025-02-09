let clickCount = 0;
let messages = [
    "¿Estás segura?",
    "Vamos, di que sí",
    "Por favorrr",
    "Me romperás el corazón 💔",
    "Última oportunidad...",
    "No aceptaré un 'No' 😤",
    "Jejeje, solo acepta"
];

window.onload = function() {
    document.getElementById("content-happy").style.display = "none";
};

document.getElementById("nel").addEventListener("click", function() {
    let yesButton = document.getElementById("yes");

    clickCount++;

    let newSize = 1 + clickCount * 0.4;
    yesButton.style.transform = `scale(${newSize})`;

    if (clickCount < messages.length) {
        yesButton.innerText = messages[clickCount];
    }
});

document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("content").style.display = "none";
    document.getElementById("content-happy").style.display = "block";
});
