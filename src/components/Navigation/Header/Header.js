import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'

import Logo from '../../DataDisplay/Logo/Logo'
import ProfileTop from '../../DataDisplay/ProfileTop/ProfileTop'
import NotificationTop from '../../DataDisplay/NotificationTop/NotificationTop'
import FontsizeTop from '../../DataDisplay/FontsizeTop/FontsizeTop'

import './Header.scss'

class Header extends Component {  
    render () {
        return (
            <header className="Header">
                <Container fluid>
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