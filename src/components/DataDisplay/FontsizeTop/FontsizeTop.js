import React, { Component } from 'react'

import './FontsizeTop.scss'

export default class FontsizeTop extends Component {
    state = {}

    render() {
        return (
            <div className="FontsizeTop">

                <div className="FontsizeTop-letter">
                    <span className="FontsizeTop-letter-box">
                        A <sup>+</sup>
                    </span>
                </div>
                <div className="FontsizeTop-letter">
                    <span className="FontsizeTop-letter-box">
                        A <sup>-</sup>
                    </span>
                </div>
                <div className="FontsizeTop-letter">
                    <span className="FontsizeTop-letter-box">
                        A
                    </span>
                </div>
                <div className="FontsizeTop-letter">
                    <span className="FontsizeTop-letter-box">
                        A
                    </span>
                </div>
            </div>
        )
    }
}