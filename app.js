const compGuesses = ['rock', 'paper', 'scissors'];
const player = prompt();

// Computer function
function randomPcGuess() {
    const randomIndex = Math.floor(Math.random(compGuesses) * compGuesses.length);
    const item = compGuesses[randomIndex];
    return item;
}
const result = randomPcGuess();

const playerLength = player.length;
const pcLength = result.length;

if ( player == 'rock' && result == 'rock' ){
    console.log(`${player} = ${result}: Its a draw!`);
}else if ( player == 'paper' && result == 'paper' ){
    console.log(`${player} = ${result}: Its a draw!`);
}else if ( player == 'scissors' && result == 'scissors' ){
    console.log(`${player} = ${result}: Its a draw!`);
}

else if( player == 'rock' && result == 'paper' ) {
    console.log(`${player} < ${result}: Computer wins!`)
}else if ( player == 'rock' && result == 'scissors' ){
    console.log(`${player} > ${result}: Player wins!`);
}

else if ( player == 'paper' && result == 'rock' ){
    console.log(`${player} > ${result}: Player wins!`);
}else if ( player == 'paper' && result == 'scissors' ){
    console.log(`${player} < ${result}: Computer wins!`);
}

else if ( player == 'scissors' && result == 'rock' ){
    console.log(`${player} < ${result}: Computer wins!`);
}else if ( player == 'scissors' && result == 'paper' ){
    console.log(`${player} > ${result}: Player wins!`);
}

else{
    console.log("Enter rock, paper or scissors!")
}


