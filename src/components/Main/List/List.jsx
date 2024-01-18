import { useEffect, useState } from 'react';
import Card from './Card';
import style from './List.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as FilterIcon } from './img/filter.svg';
import useAuth from '../../../hooks/useAuth';
import {
  cardsRequestAsync,
  filterRequestAsync,
} from '../../../store/cards/cardsAction';

export const List = () => {
  const allCards = useSelector((state) => state.cards.cards);
  const cardsWithLike = useSelector((state) => state.cards.cardsWithLike);
  const token = useSelector(state => state.token.token);
  const [filtered, setFiltered] = useState(false);
  const dispatch = useDispatch();
  const [, auth] = useAuth();

  const cards = filtered ? cardsWithLike : allCards;

  useEffect(() => {
    dispatch(cardsRequestAsync());
  }, []);

  const handleFilter = () => {
    if (!token) return;

    setFiltered(prevState => {
      if (!prevState) {
        dispatch(filterRequestAsync(auth.username));
      }
      return !prevState;
    });
  };

  return (
    <div className={style.container}>
      <div className={style.buttonWrapper}>
        <button
          id='filter'
          className={style.filter}
          onClick={handleFilter}
        >
          <FilterIcon className={style.svg} />
        </button>
      </div>

      <div className={style.list}>
        {cards && cards.map((data) => (
          <Card key={data.id} cardData={data} />
        ))}
      </div>
    </div>
  );
};
