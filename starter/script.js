'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number ✨';
// document.querySelector('.number').textContent = 13;
let num = Math.trunc(Math.random() * 20) + 1;
let initialScore = 20;
let h_score = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guessed = Number(document.querySelector('.guess').value);
  console.log(guessed, typeof guessed);
  //no input case
  if (!guessed || guessed > 20) {
    document.querySelector('.message').textContent = 'Not valid number';
    //when player wins
  } else if (guessed === num) {
    document.querySelector('.message').textContent = 'correct number ✨';
    if (initialScore > h_score) {
      h_score = initialScore;
      document.querySelector('.highscore').textContent = h_score;
    }
    document.querySelector('body').style.backgroundColor = '#60b378';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = num;
    //When too high
  } else if (guessed !== num) {
    if (initialScore > 1) {
      document.querySelector('.message').textContent =
        guessed > num ? 'Too High 🤔' : 'Too Low 😢';
      initialScore--;
      document.querySelector('.score').textContent = initialScore;
    } else {
      document.querySelector('.message').textContent = 'You Lost 🤭';
      document.querySelector('.score').textContent = 0;
    }
  }
}); //When too high
//   else if (guessed > num) {
//     if (initialScore > 1) {
//       document.querySelector('.message').textContent = 'Too High 🤔';
//       initialScore--;
//       document.querySelector('.score').textContent = initialScore;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost 🤭';
//       document.querySelector('.score').textContent = 0;
//     }
//     //When too low
//   } else if (guessed < num) {
//     if (initialScore > 1) {
//       document.querySelector('.message').textContent = 'Too Low 😢';
//       initialScore--;
//       document.querySelector('.score').textContent = initialScore;
//     } else {
//       document.querySelector('.message').textContent = 'You Lost 🤭';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '30rem';
  num = Math.trunc(Math.random() * 20) + 1;
  initialScore = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = initialScore;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
