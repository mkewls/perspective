import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm.jsx';
import TopComments from './TopComments.jsx';
import Comment from './Comment.jsx';

class Chat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { messages, firebase, user } = this.props;

    var commentArray = Object.keys(messages).map(function (key) {
      let msg = messages[key];
      msg.id = key
      return msg;
    });

    let duplicate = Object.assign([], commentArray)
    let topRated = duplicate.sort((a, b) => b.score - a.score).slice(0,6)

    commentArray = commentArray.slice(commentArray.length-6).reverse();

    return (
    <div className="row">
      <div className="col-sm-12">
        <div className="row">
          {firebase && user.displayName ? <CommentForm firebase={firebase}/> : null}
        </div>
        <div className="row">
          <div className="col-md-6">
            <TopComments comments={topRated} firebase={firebase}/>
          </div>
          <div className="col-md-6">
          <h4>Recent Comments</h4>
          {commentArray.length && commentArray.map((comment, index) => {
            return (
              <Comment key={index} firebase={firebase} message={comment} userName={comment.name} />
            )
          })}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = ({ firebase, messages, user }) => ({ firebase, messages, user })

export default connect(mapStateToProps, null)(Chat);
