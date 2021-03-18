import React, { useState } from 'react'

import './style.scss'

import { Alert } from 'reactstrap'


const GeneralAlert = props => {

    const { text, visible, fc } = props;

    return(
        <Alert color="info" isOpen={visible} toggle={fc}>
            <div className="d-flex">
                <div className="icon-check"></div>
                <p>{text}</p>
            </div>
        </Alert>
    )
}

export default GeneralAlert