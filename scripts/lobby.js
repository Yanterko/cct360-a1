const startMGameBtn = document.getElementById("lobbyToMicrogame");
const restartMGameBtn = document.getElementById("lobbyBackToMicrogame");

function startMicrogame() {
    window.location.href = "lobby-microgame.html";
}
// Lobby
startMGameBtn.addEventListener("click", startMicrogame);
restartMGameBtn.addEventListener("click", startMicrogame);