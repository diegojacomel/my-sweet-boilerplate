import React, { Component } from 'react'
import { Collapse } from 'reactstrap';

import Icon from '../../General/Icon/Icon'
import Menu from '../Menu/Menu'

import './Sidebar.scss'

class Sidebar extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);        
        this.state = { 
            collapse: false,
        };
    }

    toggle() {
        this.setState({
            collapse: !this.state.collapse,
        })
    }

    render() {
        return (
            <Menu className="Menu" /> 
        )
    }
}

export default Sidebar;