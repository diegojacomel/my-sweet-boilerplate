import React, { Component } from 'react';

import './PanelDefault.scss'

class PanelDefault extends Component {
    state = {}

    render() {
        return (
            <div className="PanelDefault">
                <div className="PanelDefault-title">
                    {this.props.title}
                </div>
                <div className="PanelDefault-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PanelDefault