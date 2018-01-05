import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'reactstrap';

import Icon from '../Icon/Icon'
import './Menu.scss'
import Node from './Node'

class Menu extends Component {
    state = { 
        collapse: false        
    }

    componentDidMount() {
        this.fetchMenu()
    }

    fetchMenu = () => {
        const { dispatch } = this.props

        dispatch({
            type: 'FETCH_MENU_USER_REQUEST',
            payload: { userId: 10} // hard code for test
        });
    }


    renderMenu = () => {
        const { authorization } = this.props;       
        
        var menu = authorization.menu.menu;
        let nodes = menu.map(function (item) {
           
            return (                
                <Node node={item} children={item.itens} key={item.id} />              
            );
        });

        return (
            <ul className="sidebar-menu">
                {nodes}
            </ul>            
        );
        
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse })
    }

    
    render() {
        return (
            <div className="">
                {this.renderMenu()}
            </div>         
           
        )
    }
}

function mapStateToProps(state) {
    return {
        authorization: state.authorization
    }
}

export default connect(mapStateToProps)(Menu)