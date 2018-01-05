import React, { Component } from 'react';

import Icon from '../Icon/Icon'

import Submenu from '../Submenu/Submenu'

class Menu extends Component {
    state = { 
        collapse: false     
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse })
    }


    render() {
        return (
             <li>                    
                <a href="#" onClick={this.toggle} >                                
                    <Icon tag={this.props.icon} />
                    {this.props.name}
                </a>
                <Submenu submenus={this.props.submenu} collapse={this.state.collapse} />         
            </li>            
        )
    }
}

export default Menu