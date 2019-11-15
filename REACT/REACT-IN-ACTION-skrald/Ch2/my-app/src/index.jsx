import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

const data = {
    post: {
      // Mock data for CommentBox component
      id: 123,
      content:
        "What we hope ever to do with ease, we must first learn to do with diligence. — Samuel Johnson",
      user: "Mark Thomas"
    },
    comments: [
      // Comment objects as existing comments
      {
        id: 0,
        user: "David",
        content: "such. win."
      },
      {
        id: 1,
        user: "Haley",
        content: "Love it."
      },
      {
        id: 2,
        user: "Peter",
        content: "Who was Samuel Johnson?"
      },
      {
        id: 3,
        user: "Mitchell",
        content: "@Peter get off Letters and do your homework"
      },
      {
        id: 4,
        user: "Peter",
        content: "@mitchell ok :P"
      }
    ]
  };

class Post extends Component {
    render() {
      return React.createElement(
        "div",
        {
          className: "post"
        },
        React.createElement(
          "h2", // Name
          {
            // Config
            className: "postAuthor",
            id: this.props.id
          },
          this.props.user,
          React.createElement(
            // Child
            "span",
            {
              className: "postBody"
            },
            this.props.content
          ),
          this.props.children // Children from other components
        )
      );
    }
  }
  
  Post.propTypes = {
    user: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  };
  
  class Comment extends Component {
    render() {
      console.log("yo");
      return React.createElement(
        "div",
        {
          className: "comment"
        },
        React.createElement(
          "h2",
          {
            className: "commentAuthor"
          },
          this.props.user,
          React.createElement(
            "span",
            { className: "commentContent" },
            this.props.content
          )
        )
      );
    }
  }
  
  Comment.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  };

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      user: ""
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Assign event handler to author field. Gets value of input field with
  // event.target.value and assigns the new state with this.setState to update
  handleUserChange(event) {
    const val = event.target.value;
    this.setState(() => ({
      user: val
    }));
  }
  // Similar functionality for comment
  handleTextChange(event) {
    const val = event.target.value;
    this.setState(() => ({
      content: val
    }));
  }
  // Event handler for form submission event
  handleSubmit(event) {
    event.preventDefault();
    this.props.onCommentSubmit({
      // Call function passed as prop by parent
      user: this.state.user.trim(),
      content: this.state.content.trim()
    });
    this.setState(() => ({
      // Resets input fields after submission for further comments
      user: "",
      content: ""
    }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="createComment">
        <input
          value={this.state.user}
          onChange={this.handleUserChange} // Creating props on objects like html
          placeholder="Name" // passing expressions using {} syntax
          type="text"
        />
        <input
          value={this.state.content}
          onChange={this.handleTextChange}
          placeholder="Comment"
          type="text"
        />
        <button type="submit">Post</button>
      </form>
    );
  }
}

CreateComment.propTypes = {
    onCommentSubmit: PropTypes.func.isRequired,
    content: PropTypes.string
  };

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments
        };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    handleCommentSubmit(comment) {
        const comments = this.state.comments;
        comment.id = Date.now();
        const newComments = comments.concat([comment]);
        this.setState({
            comments: newComments
        });
    }

    render() {
        return (
            <div className="commentBox">
                <Post
                    id={this.props.post.id} // custom prop
                    content={this.props.post.content}
                    user={this.props.post.user}
                />
                {this.state.comments.map(function(comment) { //regular JS inside {}
                    return (
                        <Comment
                            key={comment.id}
                            content={comment.content}
                            user={comment.user}
                        />
                    );
                })}
                <CreateComment
                    onCommentSubmit={this.handleCommentSubmit} // pass handler as prop
                />
            </div>
        )
    }
}

CommentBox.propTypes = {
    post: PropTypes.object,
    comments: PropTypes.arrayOf(PropTypes.object)
  };

ReactDOM.render(
    <CommentBox
        comments={data.comments} // Custom component with props and passed to DOM
        post={data.post}
    />,
    node
);