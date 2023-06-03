// Generating random number and its random position 
const randomNumber =Math.ceil(Math.random()*100);
console.log(randomNumber);
const randomIndex = Math.ceil(Math.random()*(7-1) +1)-1;
console.log(randomIndex);
let guessCount = 0
let found = false;
let randomArr = new Array;


// assinging options and Random number to a random position
for(let i = 1;i<=6;i++){

    if(i==randomIndex){
        let option = document.getElementById(`choice-${i}`);
        option.innerHTML = `<h1>${randomNumber}</h1>`;
        randomArr.push(randomNumber);    
    }
    else{
        let randomOption = Math.ceil(Math.random()*100);
        // console.log(randomArr);
        if(!randomArr.includes(randomOption))
        {
            randomArr.push(randomOption);
            // console.log(randomArr);
            let option = document.getElementById(`choice-${i}`);
            option.innerHTML = `<h1>${randomOption}</h1>`;
        }
    }
}

let hearts=3;
// checking if the selected is random number
function israndom(index){
    let guessNumber = document.getElementById(index).innerText;
    guessCount++;
    if(guessCount<=3){
        if(guessNumber == randomNumber){
            found=true;
            let deleteImg = document.getElementById('QM')
            deleteImg.remove();
            let result = document.getElementById('Result');
            result.innerHTML = `
                                <div class="popup">
                                    <h1>CONGRATULATION!</h1>
                                    <h1>YOU WON</h1>
                                </div> 
                                `;
        }
        else{
            if(found !=true){
                // console.log(" not random number");
                guessNumber = document.getElementById(index);
                guessNumber.style.visibility = "hidden";
                let life = document.getElementById(`life-${hearts}`);
                hearts=hearts-1;
                // console.log(hearts);
                life.style.visibility = "hidden";
            }
        }
    }
    if(hearts==0){
        let result = document.getElementById('Result');
            result.innerHTML = `
                                <div class="lostpopup">
                                    <h1>you lost</h1>
                                    <h3>better luck next time</h3>
                                </div> 
                                `;
    }
}


// restarting the Game
function Restart(){
    location.reload();
}