import React from 'react';
import PropTypes from 'prop-types';

const CorsButton = ({corsEnabled, toggleCors}) => {
  const icon = corsEnabled ? 'fa fa-circle' : 'fa fa-circle-o';
  const message = corsEnabled ? 'CORS Headers enabled' : 'CORS Headers disabled';

  return <div className="cors-button">
    <button title="Toggle CORS headers" onClick={toggleCors}>
      <i className={icon} />
      <span className="message">{message}</span>
    </button>
  </div>;
};

CorsButton.propTypes = {
  corsEnabled: PropTypes.bool.isRequired,
  toggleCors: PropTypes.func.isRequired
};

export default CorsButton;
