function TheirMessage({ lastMesaage, message }) {
    //first message user sees if message wan't sent by user
    const isFirstMessageByUser = !lastMesaage || lastMesaage.sender.username !== message.sender.username



    return (
        <div className='mesage-row'>
            {
                isFirstMessageByUser && (
                    <div 
                    className='message-avatar'
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                    
                    />
                )
            }
            {/* if message usser see contains an image */}
            {message?.attachment?.length > 0
            ? (
                <img 
                    src={message.attachments[0].file}
                    alt='message-attachment'
                    className='message-image'
                    style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                />

            ) : (
                <div className='message' style={{float: 'left', backgroundColor: '#CABCDC'}} >
                 {message.text}
                </div>
            )}
        </div>
    )
}

export default TheirMessage
