import React, { Component } from 'react'

import Icon from '../Icon/Icon'

import './NotificationTop.scss'

class NotificationTop extends Component {
    state = {}

    render() {
        return (
            <div className="NotificationTop">
                <Icon tag="notification" />
                <span className="NotificationTop-number">2</span>
            </div>
        )
    }
}

export default NotificationTop