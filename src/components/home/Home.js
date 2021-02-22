import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = { showComponent: true, };
    }

    render() {
        return (
            <div>
                This is Home page.
            </div>
        )
    }

}