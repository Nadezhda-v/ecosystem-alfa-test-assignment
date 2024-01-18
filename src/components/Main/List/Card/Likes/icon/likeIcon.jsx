import PropTypes from 'prop-types';

export const LikeIcon = ({ fill }) => {
  const strokeColor = fill === '#a52222' ? '#a52222' : '#000';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 48 48"
      fill="none"
      stroke={strokeColor}
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="48" height="48" fill="white" fillOpacity="0.01"></rect>
      <path d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262
        C31 40 44 30 44 19
        C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738
        C22.0093 9.8469 18.7203 8 15 8Z"
      fill={fill} stroke={strokeColor} strokeWidth="4"
      strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};

LikeIcon.propTypes = {
  fill: PropTypes.string,
};
