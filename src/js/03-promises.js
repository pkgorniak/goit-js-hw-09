'use strict';

import Notiflix from 'notiflix';

const firstDelay = document.querySelector('[name="delay"]');
const delayStep = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const startBtn = document.querySelector('[type="submit"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

startBtn.addEventListener('click', event => {
  event.preventDefault();
  for (let i = 0; i < amount.value; i++) {
    let nextDelay = firstDelay.valueAsNumber + delayStep.valueAsNumber * i;
    let nextPosition = i + 1;

    createPromise(nextPosition, nextDelay)
      .then(value => {
        Notiflix.Notify.success(value);
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
      });
  }
});
