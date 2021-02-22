import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = { showComponent: true, };
    }

    render() {
        return (
            <div>
                This is Contact page.
            </div>
        )
    }
}