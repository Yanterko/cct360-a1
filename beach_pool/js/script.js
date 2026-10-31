 let gateOpen = false;
            let souvenirFound = false;

            let openGateBtn = document.getElementById('open-gate-btn');
            let gateImg = document.getElementById('gate-img');
            let poolStatus = document.getElementById('pool-status');
            let counterDisplay = document.getElementById('counter-display');
        

            openGateBtn.onclick = function() {
                if (souvenirFound == false) {
                    gateOpen = true;

                    gateImg.src = "Images/roxxie-blackham-RokxiyU-psc-unsplash.jpg";

                    poolStatus.innerHTML = "I wonder where the souvenir is... click around the pool to search!";

                    openGateBtn.innerHTML = "Gate Unlocked!";
                }
            };

            gateImg.onclick = function(event) {
                if (gateOpen === true && souvenirFound === false) {
                    let clickX = event.offsetX;
                    let clickY = event.offsetY;

                    if (clickX >= 150 && clickX <=250 && clickY >= 150 && clickY <= 250) {
                        souvenirFound = true;
                        gateOpen = false;

                        poolStatus.innerHTML = "Success! You found the pool souvenir!";

                        gateImg.src = "Images/rajvirkaurnsplash/jpg";

                        counterDisplay.innerHTML = "4";

                        alert("You collected the souviner! Proceed to the next area.");

                    } else {
                        poolStatus.innerHTML = "Nothing here...keep searching around the pool!";
                    }

                } else if (souvenirfound == true) {
                    poolStatus.innerHTML = "You already found the souvenir here!";
                } else {
                    poolStatus.innerHTML = "Hmm, I think the gate is closed. We need to find a way to open it first.";

                }
            }

            let giveUpBtn = document.getElementById('pool-give-up-btn');
            let giveUpMsg = document.getElementById('pool-give-up-msg');

            giveUpBtn.onclick = function() {
                giveUpMsg.innerHTML = "You chose to give up. Taking tou to the exit route.";
            };
