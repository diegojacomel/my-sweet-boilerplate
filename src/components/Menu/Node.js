import React, { Component } from 'react'
import { Collapse } from 'reactstrap';

class Node extends Component {

    render() {

        let childnodes = null;

        // recursion when has children
        if (this.props.children) {
            childnodes = this.props.children.map(function (childnode) {
                return (                    
                    <Node node={childnode} children={childnode.itens} />                    
                );
            });
        }

        // return the list element and display children when exists
        return (
            <li key={this.props.node.id}>
                <a href="#">{this.props.node.nome}</a>
                {childnodes ?
                    <Collapse>
                        <ul key="{this.props.node.id}">{childnodes}</ul>
                    </Collapse>
                    : null}
            </li>           
            
        );
    }

}

export default Node;