import React, { Component } from 'react';

import Icon from '../Icon/Icon'

import { Collapse } from 'reactstrap'

import './PanelDefault.scss'

class PanelDefault extends Component {
    state = { collapsed:  true }

    handleCollapse() {
        this.setState({ collapsed: !this.state.collapsed })
    }

    render() {
        return (
            <div className="PanelDefault">
                <div className="PanelDefault-title">
                    {this.props.title}
                    <button onClick={() => this.handleCollapse()}><Icon  tag="arrow-down"/></button>
                </div>                
                <div className="PanelDefault-body">
                    <Collapse isOpen={this.state.collapsed} >
                        {this.props.children}
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default PanelDefault