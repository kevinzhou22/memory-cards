const cardsList = [];

class Card {
  constructor(id, selected) {
    this.id = id;
    this.selected = selected;
  }
}

/* Sets up the cardsList array with numberOfCards cards.
All cards are assigned IDs and a selected property that is false */
const setUp = function setUp(numberOfCards) {
  const newCardsList = [];
  for (let i = 0; i < numberOfCards; i += 1) {
    newCardsList.push(new Card(i, false));
  }
  cardsList.splice(0, cardsList.length, ...newCardsList);
};

const isChosen = function isChosen(id) {
  for (let i = 0; i < cardsList.length; i += 1) {
    if (cardsList[i].id === id) {
      return cardsList[i].selected;
    }
  }
  return null;
};

const getCardsIds = function getCardsIds() {
  const ids = cardsList.map((card) => card.id);
  return ids;
};

/* Marks a card with a given ID as selected. Returns true if the card ID
exists or false if it does not. */
const markChosen = function markChosen(id) {
  for (let i = 0; i < cardsList.length; i += 1) {
    if (cardsList[i].id === id) {
      cardsList[i].selected = true;
      return true;
    }
  }
  return false;
};

/* Sets all cards in the current cardsList array to have a false selected
property */
const reset = function reset() {
  for (let i = 0; i < cardsList.length; i += 1) {
    cardsList[i].selected = false;
  }
};

const cards = {
  setUp,
  isChosen,
  getCardsIds,
  markChosen,
  reset,
};

export { cards as default };
