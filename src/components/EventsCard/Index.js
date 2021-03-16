import React from 'react'
import { CardImg,
        Card,
        CardBody,
        CardTitle,
        CardText,
        CardSubtitle } from 'reactstrap'

import { Link } from 'react-router-dom'

import Moment from 'react-moment';
import 'moment/locale/es';


const EventsCard = props => {
    const { title, 
            subtitle, 
            date, 
            startTime, 
            id, 
            cover } = props.cardData

    const { cardTitle, 
            link,
            textLink } = props.menu

    return(
        <Card className="mb-4 shadow">
            <CardBody>
                <div className="d-flex justify-content-between">
                    <CardTitle>{cardTitle}</CardTitle>
                    <Link to={link} className="font-avenir-heavy">{textLink}</Link>
                </div>
                <div className="d-flex card-news">
                <CardImg src={cover.url }/>
                <div className="ml-2">
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{subtitle}</CardSubtitle>
                    <CardText>Fecha y hora: <Moment format="DD [de] MMMM" locale="es">{date}</Moment> {startTime && startTime.slice(0, -3)} hrs</CardText>
                </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default EventsCard