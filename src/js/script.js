let cards = document.querySelectorAll(".card");
cards = Array.prototype.slice.call(cards)

let hasFlippedCard = false,
  lockBoard = false,
  firstCard,
  secondCard;

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
  cards.forEach((card) => {
    card.style.order = Math.floor(Math.random() * cards.length);
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

function myFunction() {
  document.getElementById("gridselection").selectedIndex = 1;
}

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

function removeClasses(){
  document.getElementById("memoryBoard").classList.remove("x44");
  document.getElementById("memoryBoard").classList.remove("x43");
  document.getElementById("memoryBoard").classList.remove("x42");
  document.getElementById("memoryBoard").classList.remove("x32");
  document.getElementById("memoryBoard").classList.remove("x22");
}

function onLoad(){
  location.reload()
}