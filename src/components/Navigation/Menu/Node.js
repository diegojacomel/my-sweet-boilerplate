import React, { Component } from 'react'
import { Collapse } from 'reactstrap';
import Icon from '../../General/Icon/Icon'

class Node extends Component {
    state = {
        collapse: false
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse })
    }

    render() {

        let childnodes = null;
        
        // recursion when has children
        if (this.props.children) {
            childnodes = this.props.children.map(function (childnode) {
                return (
                    <Node node={childnode} children={childnode.itens} key={childnode.id} />                    
                );
            });
        }

        // return the list element and display children when exists
        return (
            <li >
                <a href="#" onClick={this.toggle}>
                    <Icon tag={this.props.node.icon} />
                    {this.props.node.nome}
                </a>
                
                {childnodes.length ?
                    <Collapse isOpen={this.state.collapse}>
                        <ul>{childnodes}</ul>
                    </Collapse>
                    : null}
            </li>           
            
        );
    }

}

export default Node;