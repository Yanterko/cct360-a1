const elevatorStopBtn = document.getElementById("elevatorButton");
const elevatorIndicator = document.getElementById("elevatorFloorScreen");
const gameInstruction = document.getElementById("gameInstruction");

const maxFloor = 9; // Actual max floor is maxFloor + 1
let floorToStop = Math.ceil(Math.random() * maxFloor) + 1;
let floorCurr = 1; // 1 = Lobby
let gameRun = true; // Set to false when you succeed pressing the button

let elevatorDecrementFloors = false; // Set to true when you hit the 10th floor, and need to go backwards
function microgameCycle() {
    if (floorCurr == 1) {
        elevatorIndicator.textContent = "L ↑";
    }
    if (elevatorDecrementFloors) {
        floorCurr--;
        elevatorIndicator.textContent = floorCurr + " ↓";
    }
    else {
        floorCurr++;
        elevatorIndicator.textContent = floorCurr + " ↑";
    }
    
    if (floorCurr > maxFloor) {
        elevatorDecrementFloors = true;
    }
    else if (floorCurr <= 1){
        elevatorDecrementFloors = false;
    } 
}

function stopBtnFn() {
    if (floorCurr == floorToStop) {
        window.location.href = "lobby-success.html";
    }
    else {
        window.location.href = "lobby-fail.html";
    }
}

// Lobby microgame
if (floorToStop == 2) {
    gameInstruction.textContent = "Stop the elevator on the " + floorToStop + "nd floor!";
}
else if (floorToStop == 3) {
    gameInstruction.textContent = "Stop the elevator on the " + floorToStop + "rd floor!";
}
else {
    gameInstruction.textContent = "Stop the elevator on the " + floorToStop + "th floor!";
}

setInterval(microgameCycle, 1050);
elevatorStopBtn.addEventListener("click", stopBtnFn);