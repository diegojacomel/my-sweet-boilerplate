import React, { Component } from 'react'

import MyRouter from '../../router/router'

import './Content.scss'

class Content extends Component {
    state = {  }

    render() {
        return (
            <div className="Content">
                <MyRouter />
            </div>        
        )
    }
}

export default Content