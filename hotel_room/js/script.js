 let paintingInspected = false;
            let suitcaseUnlocked = false;
            
            let count1 = 0;
            let count2= 0;
            let count3 = 0;

            let clueBtn = document.getElementById('hotel-clue-btn');
            let clueText = document.getElementById('hotel-clue-text');

            let d1Btn = document.getElementById('digit1-btn');
            let d2Btn = document.getElementById('digit2-btn');
            let d3Btn = document.getElementById('digit3-btn');

            let submitLockBtn = document.getElementById('submit-lock-btn');
            let puzzleResultMsg = document.getElementById('puzzle-result-msg');
            let suitcaseImg = document.getElementById('suitcase-img');
            let counterDisplay = document.getElementById('counter-display');

            clueBtn.onclick = function() {
              paintingInspected = true;
              clueText.innerHTML = "Clue Found on Painting: the suitcase combination lock is 3-0-4";
              puzzleResultMsg.innerHTML = "You found the clue! Now you can enter it in the lock digits.";
            };

            d1Btn.onclick = function() {
              if (paintingInspected === true) {
                count1++;
                if (count1 > 9) {
                  count1 = 0;
                }
                d1Btn.innerHTML = count1;
              } else {
                puzzle.ResultMsg.innerHTML = "Inspect the painting first to know the code.";
              }
            };

            d2Btn.onclick = function() {
              if (paintingInspected === true) {
                count2++;
                if (count2 > 9) {
                  count2 = 0;
                }
                d2Btn.innerHTML = count2;
              } else {
                puzzleResultMsg.innerHTML = "Inspect the painting first to know the code.";
              }
            };

            d3Btn.onclick = function() {
              if (paintingInspected === true) {
                count3++;
                if (count3 > 9) {
                  count3 = 0;
                }
                d3Btn.innerHTML = count3;
              } else {
                puzzle.ResultMsg.innerHTML = "Inspect the painting first to know the code.";
              }
            };

            submitLockBtn.onclick = function() {
              if(paintingInspected === true) {
                if (count1 === 3 && count2 === 0 && count3 === 4) {
                  if (suitcaseUnlocked === false) {
                      suitcaseUnlocked = true;

                      puzzleResultMsg.innerHTML = "Success! You got the souvenir.";

                      //Jordan, B. (2020, July 5). the new york times square [Photograph]. Unsplash. https://unsplash.com/photos/the-new-york-times-square-oO7txJP2hls.  
                      suitcaseImg.src = "Images/brettjordanunsplash.jpg";
                      counterDisplay.innerHTML = "2"

                      alert("Great you collected it! Proceed to the next area.");
                  }
                } else {
                  puzzleResultMsg.innerHTML = "Incorrect code! Keep trying.";
                }
              } else {
                puzzleResultMsg.innerHTML = "Inspect the painting first!";
              }
            };
            //References
          //Beach, T. (2021, September 15). a blue suitcase sitting on the floor next to a bed [Photograph]. Unsplash. https://unsplash.com/photos/a-blue-suitcase-sitting-on-the-floor-next-to-a-bed-QStz1IM5eSg.
          //Jordan, B. (2020, July 5). the new york times square [Photograph]. Unsplash. https://unsplash.com/photos/the-new-york-times-square-oO7txJP2hls. 
          //visualsofdana. (2021, January 28). A hotel bedroom with a wooden bed, teal pillows and a private garden view [Photograph]. Unsplash. https://unsplash.com/photos/hotel-bedroom-with-wooden-bed-T5pL6ciEn-I.