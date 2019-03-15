import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Post from '../components/Post';
import * as postActions from '../store/modules/post';

class PostContainer extends Component {
  loadData = async () => {
    const { PostActions } = this.props;
    try {
      await PostActions.getPost(1);
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    const { title, body, loading, error } = this.props;
    const { loadData } = this;
    return (
      <Post title={title} body={body} onLoad={loadData}  loading={loading} error={error} />
    );
  }
}

export default connect(
  (state) => ({
    title: state.post.title,
    body: state.post.body,
    loading: state.post.fetching,
    error: state.post.error
  }),
  (dispatch) => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(PostContainer);
