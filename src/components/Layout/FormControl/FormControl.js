import React, { Component } from 'react'

import './FormControl.scss'

class FormControl extends Component {
    render() {
        return (
            <div className={"FormControl " + this.props.display}>
                {this.props.children}
            </div>
        );
    }
}

export default FormControl