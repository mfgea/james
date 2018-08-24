import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class ClearList extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    const { clearRequests } = this.props;

    clearRequests();
  }

  render() {
    return (
        <button
            className="clear-btn"
            onClick={this._handleClick}
            title="Clear list"
        >
            <i className="fa fa-lg fa-trash-o" />
        </button>
    );
  }
}

ClearList.propTypes = {
  clearRequests: PropTypes.func.isRequired
};

import { clearRequests } from 'common/actions/proxy';

const mapDispatchToProps = {
  clearRequests
};

export default connect(null, mapDispatchToProps)(ClearList);
