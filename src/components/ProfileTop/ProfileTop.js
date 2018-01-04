import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Icon from '../Icon/Icon'

import './ProfileTop.scss'

class ProfileTop extends Component {
    state = {}

    render() {
        return (
            <div className="ProfileTop">
                <figure className="ProfileTop-image">
                    <img src="images/logo.png" alt=""/>
                </figure>
                <div className="ProfileTop-info">
                    <div className="ProfileTop-info-company">
                        Company
                    </div>
                    <div className="ProfileTop-info-user">
                        User
                    </div>
                    <div className="ProfileTop-info-clock">
                        Clock
                    </div>
                </div>
                <div className="ProfileTop-arrow">
                    <Icon tag="display" />
                </div>
            </div>
        )
    }
}

export default ProfileTop