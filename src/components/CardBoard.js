import React, { useState } from 'react';
import Card from './Card';
import cards from '../cards';
import scoreboard from '../scoreboard';
/* Importing images */
import AppleImage from '../images/apple.png';
import CherriesImage from '../images/cherries.png';
import DonutImage from '../images/donut.png';
import GrapesImage from '../images/grapes.png';
import HamburgerImage from '../images/hamburger.png';
import IceCreamImage from '../images/ice-cream.png';
import OrangeJuiceImage from '../images/orange-juice.png';
import PancakesImage from '../images/pancakes.png';
import PizzaImage from '../images/pizza.png';
import StrawberryImage from '../images/strawberry.png';

/* cardsInformationList is an array of objects containing
information on the titles and image URLs of the cards */
function useMemoryCardGameLogic(cardInformationList) {
  const numberOfCards = cardInformationList.length;
  const [initialized, setInitialized] = useState(false);

  if (!initialized) {
    cards.setUp(numberOfCards);
    setInitialized(true);
  }

  const [cardInformationListWithIds, setCardInformationListWithIds] = useState((() => {
    const cardsIds = cards.getCardsIds();
    const compiledCardsInformationList = [];
    for (let i = 0; i < cardsIds.length; i += 1) {
      compiledCardsInformationList.push({ ...cardInformationList[i], id: cardsIds[i] });
    }
    return compiledCardsInformationList;
  })());

  const shuffleArray = function shuffleArray(arrayToShuffle) {
    const shuffledArray = [...arrayToShuffle];
    for (let i = arrayToShuffle.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  let onSelection = function onSelection(id) {
    if (cards.isChosen(id)) {
      cards.reset();
      scoreboard.resetScore();
    } else {
      cards.markChosen(id);
      scoreboard.incrementScore();
    }
    setCardInformationListWithIds(shuffleArray(cardInformationListWithIds));
  };
  onSelection = onSelection.bind(this);

  return {
    cardInformationListWithIds: [...cardInformationListWithIds],
    onSelection,
  };
}

const useCardInformationList = function useCardInformationList() {
  const [cardTitles] = useState([
    'Apple',
    'Cherries',
    'Donut',
    'Grapes',
    'Hamburger',
    'Ice Cream',
    'Orange Juice',
    'Pancakes',
    'Pizza',
    'Strawberry',
  ]);

  const [cardImageUrls] = useState([
    AppleImage,
    CherriesImage,
    DonutImage,
    GrapesImage,
    HamburgerImage,
    IceCreamImage,
    OrangeJuiceImage,
    PancakesImage,
    PizzaImage,
    StrawberryImage,
  ]);

  const [cardColors] = useState([
    'rgb(150,150,150)',
    'rgb(150,150,150)',
    'rgb(150,150,150)',
    'rgb(150,150,150)',
    'rgb(150,150,150)',
    'rgb(150,150,150)',
    'rgb(150,150,150)',
    'rgb(150,150,150)',
    'rgb(150,150,150)',
    'rgb(150,150,150)',
  ]);

  const [cardInformationList] = useState((() => {
    const initialCardInformationList = [];
    for (let i = 0; i < cardTitles.length; i += 1) {
      initialCardInformationList.push({
        title: cardTitles[i],
        imageUrl: cardImageUrls[i],
        backgroundColor: cardColors[i],
      });
    }
    return initialCardInformationList;
  })());

  return cardInformationList;
};
function CardBoard() {
  const cardInformationList = useCardInformationList();

  const { cardInformationListWithIds, onSelection } = useMemoryCardGameLogic(cardInformationList);

  const handleCardClick = function handleCardClick(id) {
    onSelection(id);
  };

  const cardsToDisplay = cardInformationListWithIds.map((cardInformation) => (
    <Card
      key={cardInformation.id}
      url={cardInformation.imageUrl}
      title={cardInformation.title}
      backgroundColor={cardInformation.backgroundColor}
      onClick={() => handleCardClick(cardInformation.id)}
    />
  ));
  return (
    <div className="card-board">
      {cardsToDisplay}
    </div>
  );
}

export { CardBoard as default };
