'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);



const secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);




    //giriş olmadıgında
    if (!guess) {
        displayMessage('Lütfen bir sayı gir!');


        //doğru cevap
    } else if (guess === secretNumber) {

        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Doğru Sayı!');

        document.querySelector('.number').textContent = secretNumber;



        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    //yanlış cevap
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
            displayMessage(guess > secretNumber ? 'Çok yükseksin!' : 'Çok düşüksün!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Oyunu Kaybettin.');
            document.querySelector('.score').textContent = score = 0;
            document.querySelector('body').style.backgroundColor = '#480000'
        }
    }



    // else if (guess > secretNumber) {

    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Çok yükseksin!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Oyunu kaybettin.';
    //         document.querySelector('.score').textContent = score = 0;
    //     }
    // }


    // else if (guess < secretNumber) {

    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Çok düşüksün!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Oyunu kaybettin.';
    //     }
    // }


});


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Tahmin Etmeye Başla!';
    displayMessage('Tahmin Etmeye Başla!');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});