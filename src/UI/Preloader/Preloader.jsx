import MoonLoader from 'react-spinners/MoonLoader';
import PropTypes from 'prop-types';

export const Preloader = ({ color, size }) =>
  <MoonLoader
    color={color}
    cssOverride={{ display: 'block', margin: 'auto' }}
    size={size}
  />;

Preloader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};
