import React from 'react'
import PropTypes from 'prop-types'
import Response from './Response'
import Message from './Message';
import Typing from './Typing';

function MessageHistory({ list }) {
    if (!list) {
        return null;
    }

    if (list.type === 'response') {
        return (
            <Response from={list.from} message={list.text} time={list.time} />
        )
    } else if (list.type === 'message') {
        return (
            <Message from={list.from} message={list.text} time={list.time} />
        )
    } else if (list.type === 'typing') {
        return (
            <Typing from={list.from} time={list.time} />
        )
    }
}

MessageHistory.defaultProps = {
    list: {}
}

MessageHistory.propTypes = {
    list:PropTypes.object
}

export default MessageHistory
