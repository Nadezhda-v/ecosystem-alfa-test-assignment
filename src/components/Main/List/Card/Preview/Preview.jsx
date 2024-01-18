import style from './Preview.module.css';
import PropTypes from 'prop-types';

export const Preview = ({ preview }) => (
  <img
    src={preview}
    className={style.img}
    alt='photo'
  />
);

Preview.propTypes = {
  preview: PropTypes.string,
};
