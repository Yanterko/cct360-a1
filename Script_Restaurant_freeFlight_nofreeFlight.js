// Restaurant
   
let PositionfromLeft = 60;   //Starting Positions
let PositionfromTop = 40;
let numberofMoves = 0;
const changePosition = 10;

document.addEventListener("keydown", MoveBird);

function MoveBird(event) {
    console.log("Key pressed")

    numberofMoves++  //adds 1 to number of moves

    if (event.key === "ArrowUp") {    //for up key
        PositionfromTop = PositionfromTop - changePosition;
        document.getElementById("birdSouvenir").style.top = PositionfromTop + "%";
    }

    else if (event.key === "ArrowDown") {    // for down key
        PositionfromTop = PositionfromTop + changePosition;
        document.getElementById("birdSouvenir").style.top = PositionfromTop + "%";
    }

    else if (event.key === "ArrowLeft") {   // for left key
        PositionfromLeft = PositionfromLeft - changePosition;
        document.getElementById("birdSouvenir").style.left = PositionfromLeft + "%";
    }

    else if (event.key === "ArrowRight") {   // for right key
        PositionfromLeft = PositionfromLeft + changePosition;
        document.getElementById("birdSouvenir").style.left = PositionfromLeft + "%";
    }

    else {
        //do nothing
    }

    //check if number of variables = 7
    if (numberofMoves >= 7) {
        document.getElementById("birdSouvenir").remove;
        document.getElementById("NewAdvice").innerHTML = "You did it! In return, we'll give you a souvenir: a Lava Cake! Proceed to the next room."
        document.getElementById("NotYetSouvenir").id = "LavaCakeSouvenir";
        document.getElementById("LavaCakeSouvenir").src = "images/LavaCake.jpg";
    }

}

// FreeFlight Page

// Failure Page