const cards = document.querySelectorAll(".card");
let hasFlippedCard = false,
  lockBoard = false,
  firstCard,
  secondCard,
  seconds = ``,
  minutes = ``,
  timeCount = 0,
  countFlip = 0;

function setTime() {
  ++timeCount;
  seconds = timeCount % 60;
  minutes = Math.floor(timeCount / 60);
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("twist");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.id === secondCard.id;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();

  countFlip++;
  alertSeconds(countFlip);
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("twist");
    secondCard.classList.remove("twist");

    resetBoard();
  }, 500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  setInterval(setTime, 1000);
  cards.forEach((card) => {
    card.style.order = Math.floor(Math.random() * cards.length);
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

function gridSize(value) {
  if (value == `4x4`) {
    removeClasses();
    document.getElementById("memoryBoard").classList.add("x44");
  }
  if (value == `4x3`) {
    removeClasses();
    document.getElementById("memoryBoard").classList.add("x43");
  }
  if (value == `4x2`) {
    removeClasses();
    document.getElementById("memoryBoard").classList.add("x42");
  }
  if (value == `3x2`) {
    removeClasses();
    document.getElementById("memoryBoard").classList.add("x32");
  }
  if (value == `2x2`) {
    removeClasses();
    document.getElementById("memoryBoard").classList.add("x22");
  }
}

function removeClasses() {
  document.getElementById("memoryBoard").classList.remove("x44");
  document.getElementById("memoryBoard").classList.remove("x43");
  document.getElementById("memoryBoard").classList.remove("x42");
  document.getElementById("memoryBoard").classList.remove("x32");
  document.getElementById("memoryBoard").classList.remove("x22");
}

function onLoad() {
  location.reload();
}

function alertSeconds(countFlip) {
  if (
    countFlip == 2 &&
    document.getElementById("memoryBoard").classList.contains(`x22`)
  ) {
    window.alert(`${minutes} minutes and ${seconds} seconds`);
  }
  if (
    countFlip == 3 &&
    document.getElementById("memoryBoard").classList.contains(`x32`)
  ) {
    window.alert(`${minutes} minutes and ${seconds} seconds`);
  }
  if (
    countFlip == 4 &&
    document.getElementById("memoryBoard").classList.contains(`x42`)
  ) {
    window.alert(`${minutes} minutes and ${seconds} seconds`);
  }
  if (
    countFlip == 6 &&
    document.getElementById("memoryBoard").classList.contains(`x43`)
  ) {
    window.alert(`${minutes} minutes and ${seconds} seconds`);
  }
  if (
    countFlip == 8 &&
    document.getElementById("memoryBoard").classList.contains(`x44`)
  ) {
    window.alert(`${minutes} minutes and ${seconds} seconds`);
  }
}
