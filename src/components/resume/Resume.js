import React, { Component } from 'react'

export default class Resume extends Component {
    constructor(props){
        super(props);
        this.state = { showComponent: true, };
    }

    render() {
        return (
            <div>
                This is Resume page.
            </div>
        )
    }
}