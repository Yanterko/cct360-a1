const startBtn = document.getElementById("toLobby");
const referencesBtn = document.getElementById("toReferences");

function showReferences() {
    window.open("references.html", "References", "width=750, height=750, top=100, left=100, resizable=yes");
}

function startGame() {
    window.location.href = "lobby.html";
}

startBtn.addEventListener("click", startGame);
referencesBtn.addEventListener("click", showReferences);