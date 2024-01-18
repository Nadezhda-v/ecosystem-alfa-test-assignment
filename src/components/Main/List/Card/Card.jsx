import style from './Card.module.css';
import PropTypes from 'prop-types';
import Preview from './Preview';
import Likes from './Likes';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import { ReactComponent as DeleteIcon } from './img/delete.svg';
import { useDispatch } from 'react-redux';
import { cardsSlice } from '../../../../store/cards/cardsSlice';

export const Card = ({ cardData }) => {
  const {
    urls: {
      regular: preview,
    },
    alt_description: description,
    id,
    likes,
    liked_by_user: liked,
  } = cardData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = (e) => {
    if (
      e.target.closest(`.${style.likes}`) ||
      e.target.closest(`.${style.delete}`)
    ) {
      return;
    }
    navigate(`/card/${id}`);
  };

  const handleDelCard = () => {
    dispatch(cardsSlice.actions.deleateCard(id));
  };

  return (
    <div className={style.card} onClick={handleCardClick}>
      <Preview preview={preview} />
      <Title title={description} />

      <div className={style.likes}>
        <Likes likes={likes} liked={liked} id={id} />
      </div>

      <button className={style.delete} onClick={handleDelCard}>
        <DeleteIcon />
      </button>
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.object,
};
