import React, { Component } from 'react';

import { Collapse } from 'reactstrap';

class Submenu extends Component {
    state = { 
        submenus: []
     }

    componentDidMount() {
        this.setMenus()
    }

    setMenus = () => {
        const { submenus } = this.props

        if (!submenus)
            return;

        this.setState({
            submenus: this.props.submenus
        });
    }

    renderSubmenus = () => {
        return this.state.submenus.map((val,index) => {
            return (<li key={index}><a href="#">{val.name}</a></li>)
        })
    }

    render() {
        return (
            <Collapse isOpen={this.props.collapse}>
                <ul>
                    {this.renderSubmenus()}
               </ul>
            </Collapse> 
        )
    }
}

export default Submenu