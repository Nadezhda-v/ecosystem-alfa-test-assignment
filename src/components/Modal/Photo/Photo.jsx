import style from './Photo.module.css';
import PropTypes from 'prop-types';

export const PhotoDetail = ({ data }) => {
  if (!data) return;

  const {
    urls: {
      regular: preview,
    },
    alt_description: description,
  } = data;

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <p className={style.title}>{description}</p>
        <img src={preview} className={style.preview} alt='Фото' />
      </div>
    </div>
  );
};

PhotoDetail.propTypes = {
  data: PropTypes.object,
};

