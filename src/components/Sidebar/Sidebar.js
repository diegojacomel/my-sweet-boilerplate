import React, { Component } from 'react'
import { Collapse } from 'reactstrap';

import Icon from '../Icon/Icon'
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
        const menu = [
            {
                name: 'SISAMIL 1.0',
                open: false,
                icon: 'key',
                submenu: [
                    {
                        name: 'Opsaum',                        
                    },
                    {
                        name: 'Mais uma ospaum'
                    }
                ]
            },
            {
                name: 'Autorizações',
                open: false,
                icon: 'doc',
                submenu: [
                    {
                        name: 'Submenu 1'
                    },
                    {
                        name: 'Submenu 2'
                    },
                    {
                        name: 'Submenu 3'
                    }
                ]
            },
            {
                name: 'Consulta de elegibilidade',
                open: false,
                icon: 'search',
                submenu: [
                    {
                        name: 'Submenu 1'
                    },
                    {
                        name: 'Submenu 2'
                    },
                    {
                        name: 'Submenu 3'
                    }
                ]
            },
            {
                name: 'TISS',
                open: false,
                icon: 'update',
                submenu: [
                    {
                        name: 'Submenu 1'
                    },
                    {
                        name: 'Submenu 2'
                    },
                    {
                        name: 'Submenu 3'
                    }
                ]
            }
        ]
        
        return (
            <ul className="Sidebar">
                {menu.map((val, index) => {                    
                    return <Menu key={index} icon={val.icon} name={val.name} submenu={val.submenu} />                
                })}                
            </ul>         
        )
    }
}

export default Sidebar;