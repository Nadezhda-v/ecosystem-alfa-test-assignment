import style from './Card.module.css';
import PropTypes from 'prop-types';
import Preview from './Preview';
import Likes from './Likes';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import { ReactComponent as DeleteIcon } from './img/delete.svg';

export const Card = ({ cardData }) => {
  const {
    urls: {
      regular: preview,
    },
    alt_description: description,
    id,
    likes,
    // liked_by_user: liked,
  } = cardData;

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = preview;
    img.addEventListener('load', () => {
      setImageLoaded(true);
    });

    return () => {
      img.removeEventListener('load', () => {
        setImageLoaded(true);
      });
    };
  }, [preview]);

  return (
    <Link
      className={style.linkCard}
      to={`/card/${id}`}
    >
      <div className={style.card}>
        <Preview preview={preview} />
        {imageLoaded && (
          <>
            <Title title={description} id={id} />

            <div className={style.likes}>
              <Likes likes={likes} />
            </div>

            <button className={style.delete}>
              <DeleteIcon />
            </button>
          </>
        )}
      </div>
    </Link>
  );
};

Card.propTypes = {
  cardData: PropTypes.object,
};
