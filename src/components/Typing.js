import React from 'react'
import PropTypes from 'prop-types'

function Typing({ from, time }) {
  return (
    <li>
        <div className="message-data">
            <span className="message-data-name">{from.name}</span><i className="fa fa-circle online"></i>
            <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        </div> 
        <p className="text-typing">
            <i className="fa fa-circle online"></i><i className="fa fa-circle online" style={{opacity:0.5}}></i><i className="fa fa-circle online" style={{opacity:0.25}}></i>
        </p>
    </li>
  )
}

Typing.propTypes = {
    from: PropTypes.object,
    message: PropTypes.string,
    time: PropTypes.string
}

export default Typing
