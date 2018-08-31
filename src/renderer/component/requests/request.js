import React from 'react';
import PropTypes from 'prop-types';

import FullUrl from './full-url.js';
import RequestContextMenu from './request-context-menu.js';
import RequestLabels from './request-labels.js';

class Request extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.request.id !== nextProps.request.id ||
      this.props.isActive !== nextProps.isActive ||
      this.props.sendCors !== nextProps.sendCors ||
      this.props.isContextMenu !== nextProps.isContextMenu ||
      this.props.request.done !== nextProps.request.done;
  }

  render() {
    const {
      labels,
      request,
      response,
      sendCors,
      isActive,
      isContextMenu,
      handleClick,
      handleContextMenu
    } = this.props;

    const _handleClick = () => handleClick({request, response});
    const _handleContextMenu = () => handleContextMenu({request});

    let took = <i className="fa fa-gear fa-spin" />;
    if (request.took) {
      took = request.took + 'ms';
    }

    const requestClasses = ['request'];
    if (isActive) {
      requestClasses.push('request-active');
    }

    if (sendCors) {
      requestClasses.push('request-using-cors');
    }

    let contextMenuNode = null;
    if (isContextMenu) {
      contextMenuNode = <RequestContextMenu request={request} handleContextMenu={_handleContextMenu} />;
    }

    return <div className={requestClasses.join(' ')}>
      { contextMenuNode }
      <div className="request-inner" onClick={_handleClick} onContextMenu={_handleContextMenu}>
        <span className="method property">{request.method}</span>
        <span className="time property">
          {took}
        </span>
        <span className="status-code property">
          {response.statusCode}
        </span>
        <FullUrl request={request} />
        <RequestLabels request={request} labels={labels} />
        <span className="fade-out" />
      </div>
    </div>;
  }
}

Request.propTypes = {
  labels: PropTypes.array.isRequired,
  request: PropTypes.object.isRequired,
  response: PropTypes.object.isRequired,
  done: PropTypes.bool,
  sendCors: PropTypes.bool,
  isActive: PropTypes.bool,
  isContextMenu: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  handleContextMenu: PropTypes.func.isRequired
};

export default Request;
