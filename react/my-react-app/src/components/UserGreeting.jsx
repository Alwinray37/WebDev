import PropTypes from 'prop-types'

function UserGreeting(props) {
    if(props.isLoggedIn){
        return <h2>Welcome { props.username }</h2>
    }else{
        return <h2>Please log in</h2>
    }
}
UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting 