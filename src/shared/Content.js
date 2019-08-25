import PropTypes from 'prop-types';
import React, { Component } from 'react';


export default class Content extends Component {

  render() {
    return (
      <div style = {{
        borderRadius: '10px',
        borderStyle: 'groove',
        background: '#F4F5F7',
        padding: '12px',
        margin: '12px',
        width: '80%'
        }}>
          <ul className="fa-ul">
            <li><span className="fa-li"><i className="fas fa-check-square"></i></span>{this.props.tabDetails.one}</li>
            <li><span className="fa-li"><i className="fas fa-check-square"></i></span>{this.props.tabDetails.two}</li>
            <li><span className="fa-li"><i className="fas fa-spinner fa-pulse"></i></span>{this.props.tabDetails.three}</li>
          </ul>      
    </div>
    );
  }
}
