import React from 'react'
import PropTypes from 'prop-types'

function Message({ from, message, time }) {
  return (
    <li>
        <div className="message-data">
            <span className="message-data-name">{from.name}</span><i className="fa fa-circle online"></i>
            <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        </div> 
        <div className="message my-message">{message}</div>
    </li>
  )
}

Message.propTypes = {
    from: PropTypes.object,
    message: PropTypes.string,
    time: PropTypes.string
}

export default Message
