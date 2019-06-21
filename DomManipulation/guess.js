//Game Function 
/*
- Player must guess a number between mean and max
- Player gets a certain amout of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player to choose to play again
*/

// game values
let min = 1, 
    max = 10;
    winningNum = getRandomNum(min, max);
    guessesLeft = 3;

//UI Element
const game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input');
        message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play Again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'btn play-again'){
        //e.target.classList.contains('play-again')
        window.location.reload();
    }
});

//Listener for guess
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);

    //validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number ${min} and ${max}`, 'red');//prompt +m red in color 
    }

    //check if won
    if(guess === winningNum){
        //Disable input     
        // guessInput.disabled = true;
        // change border color
        // guessInput.style.borderColor = 'pink';
        // setMessage(`${winningNum} is correct, you win!`, 'pink');
        gameOver(true, `${winningNum} is Correct, You win`);
    }else{
       guessesLeft -= 1;
       if(guessesLeft === 0 || guessesLeft <= 0){
        gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
       } else{
            // Game continues - answer wrong
            
            //change border color
            guessInput.style.borderColor = 'red';
            //clear input
            guessInput.value = '';
            //Tell user  it's wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guessed left`, 'red')
       }
    }
});
    function gameOver(won, msg){
        let color;
        won === true ? color = 'green' : color = 'red'; //ternary condition
        // Disable input 
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        message.style.color = color;
        setMessage(msg);
        //Playagain
        guessBtn.value = 'Play Again!';
        guessBtn.className += ' play-again';

    }

    //get Winning Number
    function getRandomNum(min, max){
        return Math.floor(Math.random()*(max-min + 1) + min);
    }

    //set message
    function setMessage(msg, color){
        message.style.color = color;
        message.textContent = msg;
    }