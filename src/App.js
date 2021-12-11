import React, { Component } from "react";
import PostsList from "./components/PostsList";
import VotedPost from "./components/VotedPosts";

import posts from "./data.json";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notVotedPost: posts,
      votedPost: [],
    };
  };

  _findIndex = (arr, id) => {
    const arrNew = [...arr];
    return arrNew.findIndex(arrItem => arrItem.id === id);
  };

  votePost = (post) => {
    const index = this._findIndex(this.state.notVotedPost, post.id);
    let notVotedPost = [...this.state.notVotedPost];
    let votedPost = [...this.state.votedPost, post];
    notVotedPost.splice(index, 1);
    this.setState({
      notVotedPost,
      votedPost,
    });
  };

  unvotePost = (post) => {
    const index = this._findIndex(this.state.votedPost, post.id);
    let notVotedPost = [...this.state.notVotedPost, post];
    let votedPost = [...this.state.votedPost];
    votedPost.splice(index, 1);
    this.setState({
      notVotedPost,
      votedPost,
    });
  };

  render() {
    let {notVotedPost, votedPost} = this.state;
    return (
      <div className="App container">
        <h1 className="my-4">Posts</h1>
        <PostsList posts={notVotedPost} votePost={this.votePost} />
        <hr className="mt-5" />

        <h1 className="mt-5 mb-4">Voted Posts</h1>
        <VotedPost posts={votedPost} unvotePost={this.unvotePost} />
      </div>
    );
  }
}
