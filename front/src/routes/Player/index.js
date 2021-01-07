import React from 'react';
import PropTypes from 'prop-types';
import { TiArrowBack } from 'react-icons/ti';
import { Back, Block } from './styles';

const PlayerRoute = ({
  match: {
    params: { id },
  },
  history,
}) => {
  return (
    <Block>
      <Back
        onClick={() => {
          history.goBack();
        }}
      >
        <TiArrowBack size={50} />
      </Back>
      <iframe
        height="100%"
        width="100%"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title="bigflix"
        allow="autoplay; fullscreen"
      ></iframe>
    </Block>
  );
};
PlayerRoute.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  history: PropTypes.object.isRequired,
};
export default PlayerRoute;
