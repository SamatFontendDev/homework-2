import React from 'react'
import Message from '../Message'

class Chat extends React.Component {
    state = {
        messages: [],
        messageInput: ''
    }

    changeInputMessage(e){
        this.setState({
            messageInput: e.target.value
        })
    }
    sendMessageOnEnter(e){
        if (e.key === 'Enter') {
            this.setState({
                messageInput: '',
                messages: [{ text: this.state.messageInput }, ...this.state.messages]
            })
            
        }
    }

    render() {
        return (
            <div className="chat">
                <input onKeyPress={e => this.sendMessageOnEnter(e)} value={this.state.messageInput} onChange={e => this.changeInputMessage(e)} className="input-message"/>
                <ul>
                    {this.state.messages.map((item, i) => (
                         <Message key={i} text={item.text}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Chat;