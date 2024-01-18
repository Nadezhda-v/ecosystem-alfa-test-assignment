import style from './Likes.module.css';
import PropTypes from 'prop-types';
import { LikeIcon } from './icon/likeIcon';
import { useDispatch, useSelector } from 'react-redux';
import { likeRequestAsync } from '../../../../../store/cards/cardsAction';
import { cardsSlice } from '../../../../../store/cards/cardsSlice';

export const Likes = ({ likes, liked, id }) => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  const handleLike = () => {
    if (!token) return;
    const method = liked ? 'DELETE' : 'POST';
    let newLikes;
    let isLiked;

    if (method === 'POST') {
      newLikes = likes + 1;
      isLiked = true;
    } else {
      newLikes = likes - 1;
      isLiked = false;
    }

    dispatch(cardsSlice.actions.setLike({ id, newLikes, isLiked }));
    dispatch(likeRequestAsync({ id, method }));
  };

  return (
    <div className={style.raiting}>
      <button
        onClick={handleLike}
        className={style.likes}
        aria-label='Нравится'
      >
        <LikeIcon fill={liked ? '#a52222' : 'white'} />
      </button>

      {likes > 0 &&
        <span className={style.count}>
          {likes}
        </span>
      }
    </div>
  );
};

Likes.propTypes = {
  likes: PropTypes.number,
  liked: PropTypes.bool,
  id: PropTypes.string,
};
