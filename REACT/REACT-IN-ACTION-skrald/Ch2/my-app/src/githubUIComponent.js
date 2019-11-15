import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");


class CommitTitle extends Component {
    render () {
        return React.createElement(
            'div',
            {
                className: "commitTitleComponent"
            },
            React.createElement(
                'span',
                {
                    className: 'commitTitle'
                },                
                this.props.commitTitle,
                React.createElement(
                    'p',
                    {
                        className: 'branchName'
                    },
                    this.props.branchName
                ),
                React.createElement(
                    'button',
                    {className: 'buttonBrowser'},
                    React.createElement(
                        'label',
                        {className: 'buttonBrowseLabel'},
                        this.props.buttonBrowseLabel
                    )
                )
            ),
            this.props.children
        );
    }
}

CommitTitle.propTypes = {
    commitTitle: PropTypes.string.isRequired,
    branchName: PropTypes.string.isRequired,
    buttonBrowseLabel: PropTypes.string.isRequired
};


const App = React.createElement(
    CommitTitle,
    {
        commitTitle: 'working with react ch2',
        branchName: 'master',
        buttonBrowseLabel: 'browse'
    }
);

render(App,node);