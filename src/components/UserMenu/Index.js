import React from 'react'

import './style.css'
import { IconApp } from '../../assets/Index'
import { Media } from 'reactstrap'

const UserMenu = props => {
    const {
        name,
        userImg,
        position
    } = props.data
    return(
        <div className="user-wrapper d-flex justify-content-between mb-3">
            <Media className="icon-app"  src={IconApp.default} />
            <div className="d-flex">
                <Media className="user"  src={userImg} />
                <p>{name}<br/><span>{position}</span></p>
            </div>
            <span className="icon-down"></span>
        </div>
    )
}

export default UserMenu