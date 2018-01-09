import React, { Component } from 'react'

import './InputButton.scss'

class InputButton extends Component {
    state = {}

    render() {
        return (
            <div className="InputButton">
                {this.props.children}
            </div>
        )
    }
}

export default InputButton