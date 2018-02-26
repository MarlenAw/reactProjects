import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost, deletePost } from '../actions/index';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; //provided by react-router
    this.props.getPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/'); //for this one to work we need to add a callback in the actions
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>

        <div className=" text-xs-left">
          <Link to="/" className="btn btn-primary">
            Back To Home
          </Link>
        </div>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return { post: posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getPost, deletePost })(PostsShow);
