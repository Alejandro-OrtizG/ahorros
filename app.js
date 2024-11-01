const initianlCoins = 30;
let currentCoins = initianlCoins;
const piggyBank = document.getElementById('piggy-bank');
const coinsContainer = document.querySelector('.coins');
const cointValue = document.querySelector('.coin-value');

document.addEventListener('DOMContentLoaded', () => {
  cointValue.textContent = currentCoins;
});

document.getElementById('piggy-bank').addEventListener('click', () => {
  if (currentCoins > 0) {
    // Salto del cerdito
    piggyBank.classList.add('jump');

    setTimeout(() => {
      piggyBank.classList.remove('jump');
    }, 500);

    // Crear monedas
    const coin = document.createElement('div');
    coin.classList.add('coin');
    coinsContainer.appendChild(coin);
    setTimeout(() => {
      coin.remove();
    }, 500);

    //Actualizar el valor de monedas
    currentCoins -= 1;
    cointValue.textContent = currentCoins;
  } else {
    alert('No tienes monedas');
  }
});
