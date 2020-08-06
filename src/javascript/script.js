var cards = document.querySelectorAll('.card');
var hasCardTwisted = false;
var firstCard, secondCard;

cards.forEach(card => card.addEventListener('click', clickCard));
randomize();

function clickCard() {
    this.classList.add('twist');

    if (hasCardTwisted == false) {
        hasCardTwisted = true;
        firstCard = this;
    } else {
        hasCardTwisted = false;
        secondCard = this;

        if (firstCard.id === secondCard.id) {
            firstCard.removeEventListener('click', clickCard);
            secondCard.removeEventListener('click', clickCard);
        } else {
            setTimeout(() => {
                firstCard.classList.remove('twist');
                secondCard.classList.remove('twist');
            }, 1500)
        }
    }
}

function randomize() {
    cards.forEach(card => {
        card.style.order = Math.floor(Math.random() * cards.length);;
    });
};