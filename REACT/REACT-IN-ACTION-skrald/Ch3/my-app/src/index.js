// passing props from parent to child
import React from "react"
import { render } from "react-dom"
import PropTypes from "prop-types"

const UserProfile = props => { // create stateless comp returning image
    return <img src={`https://source.unsplash.com/user/${props.username}`} />;
}
UserProfile.propTypes = {
    pagename: PropTypes.string // Specifying default props and propTypes on stateless
};
UserProfile.defaultProps = {
    pagename: 'erondu'
};

const UserProfileLink = props => {
    return <a href={`https://ifelse.io/${props.username}`}>{props.username}</a>;
}

const UserCard = props => { // UserCard is parent to UserProfile and UserProfileLink
    return (
        <div>
            <UserProfile username={props.username}/>
            <UserProfileLink username={props.username}/>
        </div>
    );
};

render(
    <UserCard username="erondu"/>,
    document.getElementById('root')
)

