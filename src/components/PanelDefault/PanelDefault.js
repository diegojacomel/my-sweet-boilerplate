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
                    <button className={(this.state.collapsed ? "PanelDefault-active" : "")} onClick={() => this.handleCollapse()}>
                        <Icon tag="arrow-down"/>
                    </button>
                </div>                
                <Collapse isOpen={this.state.collapsed} >
                    <div className="PanelDefault-body">
                        {this.props.children}
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default PanelDefault