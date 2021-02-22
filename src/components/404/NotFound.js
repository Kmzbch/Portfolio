import React, { Component } from 'react'

export default class NotFound extends Component {
    constructor(props){
        super(props);
        this.state = { showComponent: true, };
    }

    render() {
        return (
            <div>
                This is NotFound page.
            </div>
        )
    }
}