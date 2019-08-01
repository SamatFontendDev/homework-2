import React from 'react'

class Message extends React.Component {
    render() {
        return(
            <li>{this.props.text}</li>
        )
    }
}

export default Message;