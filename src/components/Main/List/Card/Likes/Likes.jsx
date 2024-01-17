import style from './Likes.module.css';
import PropTypes from 'prop-types';
import { LikeIcon } from './icon/likeIcon';

export const Likes = ({ likes, liked }) => (
  <div className={style.raiting}>
    <button className={style.likes} aria-label='Нравится'>
      <LikeIcon fill={liked ? '#a52222' : 'white'} />
    </button>

    {likes > 0 &&
      <span className={style.count} data-text={likes}>
        {likes}
      </span>
    }
  </div>
);

Likes.propTypes = {
  likes: PropTypes.number,
  liked: PropTypes.bool,
};
