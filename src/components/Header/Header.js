import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'

import Logo from '../Logo/Logo'
import ProfileTop from '../ProfileTop/ProfileTop'
import NotificationTop from '../NotificationTop/NotificationTop'
import FontsizeTop from '../FontsizeTop/FontsizeTop'

import './Header.scss'

class Header extends Component {  
    render () {
        return (
            <header className="Header">
                <Container>
                    <div className="Header-wrap">
                        <Logo to="/" src="images/logo.png" alt="Logo Amil" />
                        <div className="Header-wrap-info">
                            <ProfileTop />
                            <NotificationTop />
                            <FontsizeTop />
                        </div>
                    </div>
                </Container>
            </header>
        )
    }
}

export default Header