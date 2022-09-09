import React from 'react'

const Message: React.FC<{ data: string }> = ({ data }) => {
  return (
    <div className='message'>
      <p>
        Chào mừng <span>{data}</span> đã gia nhập công ty Executionlab !
      </p>
    </div>
  )
}

export default Message
