import MessageForm from './MessageForm'
import TheirMessage from './TheirMessage'
import MyMessage from './MyMessage'

function ChatFeed(props) {
    const { chats, activeChat, userName, messages } = props

    const chat = chats && chats[activeChat]
    console.log(chat, userName, messages)

    const renderMessages = () => {
        const keys = Object.keys(messages)
      
        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? null : keys[index -1]
            const isMyMessage = userName === message.sender.username 

            return (
                <div key ={`msg_${index}`} style={{width: '100%'}}>
                    <div className='message-block'>
                        {
                            isMyMessage 
                            ? <MyMessage />
                            : <TheirMessage />
                        }
                    </div>
                    <div className='read-recipts' style={{ margin: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage  ? '0px' : '68px'}}>
                            read-receipts
                    </div>

                </div>
            )

        })
    }

    renderMessages()

    return (
        <div>
            ChatFeed
        </div>
    )
}

export default ChatFeed


