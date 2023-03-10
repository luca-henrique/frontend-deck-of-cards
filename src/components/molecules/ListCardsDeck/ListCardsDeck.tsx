import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../../hooks';
import {readDeckRequest} from '../../../store/reducer/deck/actions';

import {Container} from './style';

export const ListCardsDeck = () => {
  const {loading, cards} = useAppSelector((state) => state.deck);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readDeckRequest());
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Container>
          {cards.map((item: any) => {
            return (
              <img src={item.image} style={{width: '160px', height: '200px'}} />
            );
          })}
        </Container>
      )}
    </>
  );
};
