import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Icon from '../Icon/Icon'

import './ProfileTop.scss'

class ProfileTop extends Component {
    state = {}

    render() {
        return (
            <div className="ProfileTop">
                <div className="ProfileTop-wrap">
                    <figure className="ProfileTop-wrap-image">
                        <img src="images/profile.jpg" alt="Profile"/>
                    </figure>
                    <div className="ProfileTop-wrap-info">
                        <div className="ProfileTop-wrap-info-company">
                            Amil
                        </div>
                        <div className="ProfileTop-wrap-info-user">
                            Usuário: <span>dicrocs</span>
                        </div>
                        <div className="ProfileTop-wrap-info-clock">
                            <Icon tag="clock" />
                            20:45
                        </div>
                    </div>
                </div>
                <div className="ProfileTop-arrow">
                    <Icon tag="arrow-down" />
                </div>
            </div>
        )
    }
}

export default ProfileTop