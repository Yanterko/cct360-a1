const restartMGameBtn = document.getElementById("lobbyBackToMicrogame");

function startMicrogame() {
    window.location.href = "lobby-microgame.html";
}
// Lobby
restartMGameBtn.addEventListener("click", startMicrogame);