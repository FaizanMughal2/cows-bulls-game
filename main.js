let secretNumber = [];
let gameWon = false;

function generateRandomNumber() {
    secretNumber = [];
    while (secretNumber.length < 4) {
        let digit = Math.floor(Math.random() * 10);
        if (!secretNumber.includes(digit)) {
            secretNumber.push(digit);
        }
    }
    console.log("Secret Number: ", secretNumber);  // For debugging purposes
}

generateRandomNumber();

function checkGuess() {
    if (gameWon) return;

    let guess = [
        document.getElementById('guess1').value,
        document.getElementById('guess2').value,
        document.getElementById('guess3').value,
        document.getElementById('guess4').value
    ];

    let bulls = 0;
    let cows = 0;

    guess.forEach((digit, index) => {
        if (digit == secretNumber[index]) {
            bulls++;
        } else if (secretNumber.includes(parseInt(digit))) {
            cows++;
        }
    });

    displayGuess(guess, bulls, cows);

    if (bulls === 4) {
        gameWon = true;
        alert("Congratulations! You've won!");
        document.getElementById('new-game').style.display = 'block';
    }
}

function giveUp() {
    document.getElementById('num1').innerText = secretNumber[0];
    document.getElementById('num2').innerText = secretNumber[1];
    document.getElementById('num3').innerText = secretNumber[2];
    document.getElementById('num4').innerText = secretNumber[3];

    document.getElementById('num1').classList.remove('hidden');
    document.getElementById('num2').classList.remove('hidden');
    document.getElementById('num3').classList.remove('hidden');
    document.getElementById('num4').classList.remove('hidden');
}

function displayGuess(guess, bulls, cows) {
    const guessesContainer = document.getElementById('guesses-container');
    const guessRow = document.createElement('div');
    guessRow.className = 'guess-row';

    guess.forEach(digit => {
        const guessBox = document.createElement('div');
        guessBox.className = 'guess-box';
        guessBox.innerText = digit;
        guessRow.appendChild(guessBox);
    });

    const guessResult = document.createElement('div');
    guessResult.className = 'guess-result';
    guessResult.innerText = `Bulls: ${bulls}, Cows: ${cows}`;
    guessRow.appendChild(guessResult);

    guessesContainer.appendChild(guessRow);

    clearGuessInput();
}

function clearGuessInput() {
    document.getElementById('guess1').value = '';
    document.getElementById('guess2').value = '';
    document.getElementById('guess3').value = '';
    document.getElementById('guess4').value = '';
}

function resetGame() {
    secretNumber = [];
    gameWon = false;
    document.getElementById('num1').classList.add('hidden');
    document.getElementById('num2').classList.add('hidden');
    document.getElementById('num3').classList.add('hidden');
    document.getElementById('num4').classList.add('hidden');
    document.getElementById('num1').innerText = '';
    document.getElementById('num2').innerText = '';
    document.getElementById('num3').innerText = '';
    document.getElementById('num4').innerText = '';
    document.getElementById('guesses-container').innerHTML = '';
    document.getElementById('new-game').style.display = 'none';
    generateRandomNumber();
}


