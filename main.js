'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const displayMessageInner = function (message) {
    document.querySelector('.message').innerHTML = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
    displayMessageInner(`<span>😭</span>there is No Number!`);
    } else if (guess === secretNumber) {
    displayMessageInner(`<span>🎉</span> Correct Number!`);

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    } else if (guess !== secretNumber) {
    if (score > 1) {
        displayMessageInner(
        guess > secretNumber
        ? `<span>😡</span> Too High!`
        : `<span>🐕‍🦺</span> Too Low!`
        );

        score--;

        document.querySelector('.score').textContent = score;
        } else {
        displayMessageInner(`<span>😒</span> GameOver!`);

        document.querySelector('.score').textContent = 0;
    }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessageInner(`Start Guessing...`);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
});
