 let gateOpen = false;
            let souvenirFound = false;

            let openGateBtn = document.getElementById('open-gate-btn');
            let gateImg = document.getElementById('gate-img');
            let poolStatus = document.getElementById('pool-status');
            let counterDisplay = document.getElementById('counter-display');
        

            openGateBtn.onclick = function() {
                if (souvenirFound == false) {
                    gateOpen = true;

                    //Blackham, R. (2019, March 3). coconut tree near body of water [Photograph]. Unsplash. https://unsplash.com/photos/coconut-tree-near-body-of-water-RokxiyU-psc. 
                    gateImg.src = "Images/roxxie-blackham-RokxiyU-psc-unsplash.jpg";

                    poolStatus.innerHTML = "I wonder where the souvenir is... click around the pool to search!";

                    openGateBtn.innerHTML = "Gate Unlocked!";
                }
            };

            gateImg.onclick = function(event) {
                if (gateOpen === true && souvenirFound === false) {
                    let clickX = event.offsetX;
                    let clickY = event.offsetY;

                    if (clickX >= 150 && clickX <=350 && clickY >= 50 && clickY <= 350) {
                        souvenirFound = true;
                        gateOpen = false;

                        poolStatus.innerHTML = "Success! You found the pool souvenir!";

                        //Kaur, R. (2021, September 28). a rubber duck wearign sunglassess floating in a pool [Photograph]. Unsplash. https://unsplash.com/photos/a-rubber-duck-wearing-sunglasses-floating-in-a-pool-cGiVuR_hCK0.  
                        gateImg.src = "Images/rajvirkaurnsplash.jpg";

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
                giveUpMsg.innerHTML = "You chose to give up. Taking you to the exit route.";
            };

            //References
                //Blackham, R. (2019, March 3). coconut tree near body of water [Photograph]. Unsplash. https://unsplash.com/photos/coconut-tree-near-body-of-water-RokxiyU-psc. 
                //Harmon, B. (2024, March 12). a small white dog standing infront of a gate [Photograph]. Unsplash. https://unsplash.com/photos/a-small-white-dog-standing-in-front-of-a-gate-oVBu7FAxX-o.
                //Kaur, R. (2021, September 28). a rubber duck wearign sunglassess floating in a pool [Photograph]. Unsplash. https://unsplash.com/photos/a-rubber-duck-wearing-sunglasses-floating-in-a-pool-cGiVuR_hCK0.  
