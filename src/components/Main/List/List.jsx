import { useEffect } from 'react';
import Card from './Card';
import style from './List.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cardsRequestAsync } from '../../../store/cards/cardsAction';
import { ReactComponent as FilterIcon } from './img/filter.svg';

export const List = () => {
  const cards = useSelector((state) => state.cards.cards);
  console.log('cards: ', cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardsRequestAsync());
  }, []);

  const handleFilter = () => {
    console.log(2);
  };

  return (
    <div className={style.container}>
      <div className={style.buttonWrapper}>
        <button
          id='filter'
          className={style.filter}
          onClick={handleFilter}
        >
          <FilterIcon className={style.svg}/>
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
