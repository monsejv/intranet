import React from 'react'

import { Media } from 'reactstrap'

const MemberCircle = props => {
    const classMember = ['member-wrapper']

    if (props.classWrapper) classMember.push(props.classWrapper)

    const className = classMember.join(' ')

    const { photo } = props.memberData

    const key = props.index + 1;

    if(key < 7){
        return(
            <div className={className}>
                <Media src={photo}  className="img-member"/>
            </div>
        )
    }
    else{
        return null
    }
}

export default MemberCircle