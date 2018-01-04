import React, { Component } from 'react'

// import '../Icon/Icon.scss'

class Icon extends Component {
    state = {}

    render() {
        return (
            <i className={'icon-' + this.props.tag}></i>
        )
    }
}

export default Icon