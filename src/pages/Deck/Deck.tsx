import {useEffect, useState} from 'react';
import {Button} from '../../components';
import {useLocalStorage} from '../../hooks/useLocalStorage';
import {Container, Title} from './style';

const data = [
  'https://deckofcardsapi.com/static/img/5S.png',
  'https://deckofcardsapi.com/static/img/3S.png',
  'https://deckofcardsapi.com/static/img/5S.png',
  'https://deckofcardsapi.com/static/img/7S.png',
  'https://deckofcardsapi.com/static/img/9S.png',
];

export const Deck = () => {
  const [value] = useLocalStorage('name', '');

  const LIMIT_ADD_CARD = 3;

  const [limitAddCard, setLimitAddCard] = useState(0);
  const [deck, setDeck] = useState(data);

  const MAX_LIMIT_ADD = limitAddCard === LIMIT_ADD_CARD;

  const addNewCard = () => {
    if (!MAX_LIMIT_ADD) {
      setLimitAddCard((oldLimit) => oldLimit + 1);
      setDeck((old) => [
        ...old,
        `https://deckofcardsapi.com/static/img/${limitAddCard + 2}S.png`,
      ]);
    }
  };

  const randomCards = () => {
    const random = shuffle(deck);

    setDeck(() => [...random]);
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Title>Deck</Title>
          <Title>
            {limitAddCard}/{LIMIT_ADD_CARD}
          </Title>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Title>Nome</Title>
          <Title>{value}</Title>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {deck.map((item: any) => {
          return <img src={item} style={{width: '160px', height: '200px'}} />;
        })}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '60%',
        }}
      >
        <Button onClick={() => addNewCard()}>Pegar nova carta</Button>
        <Button onClick={() => randomCards()}>Embaralhar cartas</Button>
      </div>
    </Container>
  );
};
