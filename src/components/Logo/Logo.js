import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Logo extends Component {
    state = {}

    render() {
        return (
            <figure>
                <Link to={this.props.to}>
                    <img src={this.props.src} alt={this.props.alt} title={this.props.alt} />
                </Link>
            </figure>
        )
    }
}

export default Logo