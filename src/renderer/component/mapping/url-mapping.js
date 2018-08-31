import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UrlMapping extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openConfig: false
    };

    this.toggleIsActive = this.toggleIsActive.bind(this);
    this.toggleSendCors = this.toggleSendCors.bind(this);
    this.removeMapping = this.removeMapping.bind(this);
    this.toggleConfiguration = this.toggleConfiguration.bind(this);
  }

  toggleSendCors() {
    const { mapping, toggleCors } = this.props;
    toggleCors(mapping.url);
  };

  toggleIsActive() {
    const { mapping, toggleActive } = this.props;
    toggleActive(mapping.url);
  };

  removeMapping() {
    const { mapping, remove } = this.props;
    remove(mapping.url);
  };

  toggleConfiguration() {
    this.setState({
      openConfig: !this.state.openConfig
    });
  };

  render() {
    const { mapping } = this.props;
    const { openConfig } = this.state;

    const isActiveClass = mapping.isActive ? 'on' : 'off';
    const sendCorsClass = mapping.sendCors ? 'on' : 'off';
    const configOpenClass = openConfig ? 'open' : '';

    return <li className="collection-item">
      <div>
        <span className="col protocol">
          http(s)://
        </span>
        <span className="col text-ellipsis mask">
          {mapping.url}
        </span>
        <span className="seperator">
          <i className="fa fa-chevron-right" />
        </span>
        <span className="col text-ellipsis new-url">
          {mapping.newUrl}
        </span>
        <a className="secondary-content" onClick={this.toggleConfiguration}>
          <i className=" fa fa-cog" />
        </a>
        <a className="secondary-content" onClick={this.removeMapping}>
          <i className="fa fa-remove" />
        </a>
      </div>

      <div className={`mapping-config ${configOpenClass}`}>
        <ul className="collection with-header">
          <li className="collection-item">
            <label>Target Url:</label>
            <div className="input-field">
              <input type="text" readOnly={true} value={`//${mapping.url}`} />
            </div>
          </li>
          <li className="collection-item">
            <label>Map Dest:</label>
            <div className="input-field">
              <input type="text" readOnly={true} value={mapping.newUrl} />
            </div>
          </li>
          <li className="collection-item">
            <div>
              Is Active?
              <a className="secondary-content" onClick={this.toggleIsActive}>
                <i className={'fa fa-toggle-' + isActiveClass} />
              </a>
            </div>
          </li>
          <li className="collection-item">
            <div>
              Send Cors headers
              <a className="secondary-content" onClick={this.toggleSendCors}>
                <i className={'fa fa-toggle-' + sendCorsClass} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </li>;
  }
}

UrlMapping.propTypes = {
  mapping: PropTypes.object.isRequired,
  toggleActive: PropTypes.func.isRequired,
  toggleCors: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default UrlMapping;
