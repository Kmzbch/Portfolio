import React, { Component } from 'react'

export default class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { showComponent: true, };
    }

    render() {
        return (
            <div>
                This is Projects page.
            </div>
        )
    }
}