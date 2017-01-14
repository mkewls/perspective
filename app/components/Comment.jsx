import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      userName: null,
      messageText: null,
      score: null
    }
  }

  render(){
    const { messageText, userName } = this.props;

    return (
      <div className="messages-card mdl-card mdl-shadow--2dp col-md-4">
        <div className="mdl-card__supporting-text">
          <div className="userName">
            { userName }:
          </div>
          <div className="messages">
            { messageText }
          </div>
        </div>
      </div>
    )
  }
}
