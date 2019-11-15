import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

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
      // Setting state
      content: "",
      user: ""
    };
    // Binding component methods in constructor
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
    return React.createElement(
      "form",
      {
        className: "createComment",
        // Remember to bind the new method to the onSubmit event
        onSubmit: this.handleSubmit
      },
      React.createElement("input", {
        type: "text",
        placeholder: "Name",
        value: this.state.user,
        onChange: this.handleUserChange
      }),
      React.createElement("input", {
        type: "text",
        placeholder: "Thoughts?",
        value: this.state.content,
        onChange: this.handleTextChange
      }),
      React.createElement("input", { type: "submit", value: "Post" })
    );
  }
}

CreateComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  content: PropTypes.string
};

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

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments // Pass in comments at topmost level to CommentBox
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  handleCommentSubmit(comment) {
    const comments = this.state.comments; // State copied
    // State is not being modified directly
    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.setState({
      comments: newComments++
    });
  }

  render() {
    return React.createElement(
      "div",
      {
        className: "commentBox"
      },
      React.createElement(Post, {
        id: this.props.post.id, // Pass data at topmost level to access post data
        content: this.props.post.content,
        user: this.props.post.user
      }),
      //Map over comments in this.state.comments, return React element for each
      this.state.comments.map(function(comment) {
        return React.createElement(Comment, {
          key: comment.id,
          id: comment.id,
          content: comment.content,
          user: comment.user
        });
      }),
      React.createElement(CreateComment, {
        // Give the parent's handleCommentSubmit method to the CreateComment
        // component to use
        onCommentSubmit: this.handleCommentSubmit
      })
    );
  }
}

CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
};

const App = React.createElement(CreateComment);

render( // Pass in mock data to CommentBox as a prop
  React.createElement(CommentBox, {
    comments: data.comments,
    post: data.post
  }),
  node
);

/**
 * 1st listing
const root = React.createElement(
  "div",
  {},
  React.createElement(
    "h1",
    {},
    "Hello, world!",
    React.createElement(
      "a",
      { href: "mailto:soren.skieller@gmail.com" },
      React.createElement("h1", {}, "React in action! :D"),
      React.createElement("em", {}, "...and now it is")
    )
  )
);
render(root, node);
 */
