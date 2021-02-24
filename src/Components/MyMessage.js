function MyMessage({ message }) {
    //checks to see if message contains an attachment
    if (message.attachments && message.attachments.length > 0) {
      return (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}
        />
      )
    }
  
    return (
      <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: 'rgb(119, 179, 164)' }}>
        {message.text}
      </div>
    )

    
}

export default MyMessage
