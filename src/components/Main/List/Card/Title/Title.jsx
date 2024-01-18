import style from './Title.module.css';
import PropTypes from 'prop-types';

export const Title = ({ title }) => (
  <h2 className={style.title}>
    {title}
  </h2>
);

Title.propTypes = {
  title: PropTypes.string,
};
