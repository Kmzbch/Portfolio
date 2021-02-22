import { Typography } from '@material-ui/core';
import React, { Component } from 'react'

import './About.scss'


export default class About extends Component {
    constructor(props){
        super(props);
        this.state = { showComponent: true, };
    }

    render() {
        return (
            <div className={'about-container'}>
                <Typography  variant="h4">
                This is About page.
                </Typography>
            </div>
        )
    }
}