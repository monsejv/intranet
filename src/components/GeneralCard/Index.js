import React from 'react'

import './style.scss'

import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    Button
  } from 'reactstrap';

const GeneralCard = props => {
    const { img,
        classImage,
        title,
        text,
        textButton
      }  = props.data
    return(
            <Card className="mb-4 shadow">
                <CardBody>
                <CardImg  src={img} className={classImage} alt="Card image cap" />
                <CardTitle tag="h5" className="mt-3">{title}</CardTitle>
                <CardText>{text}</CardText>
                <Button color="primary" className="next">{textButton}</Button>
                </CardBody>
            </Card>
    )
}

export default GeneralCard