import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'reactstrap';

import Icon from '../../General/Icon/Icon'
import Node from './Node'
import './Menu.scss'

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
            payload: { userId: 10 } // hard code for test
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
            <ul className="Menu">
                {nodes}
            </ul>            
        );
        
    }
    
    render() {
        return (
            <div className="Sidebar">
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