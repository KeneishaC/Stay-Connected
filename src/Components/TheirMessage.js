function TheirMessage({ lastMesaage, message }) {
    //first message user sees if message wan't sent by user
    const isFirstMessageByUser = !lastMesaage || lastMesaage.sender.username !== message.sender.username


    return (
        <div className="message-row">
          {isFirstMessageByUser && (
            <div
              className="message-avatar"
              style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
            />
          )}
          {message.attachments && message.attachments.length > 0
            ? (
              <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
              />
            )
            : (
              <div className="message" style={{ float: 'left', backgroundColor: 'rgb(229, 243, 239)', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                {message.text}
              </div>
            )}
        </div>
      );
   
}

export default TheirMessage
