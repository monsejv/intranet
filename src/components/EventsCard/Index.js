import React, { useState } from 'react'
import { CardImg,
        Card,
        CardBody,
        CardTitle,
        CardText,
        CardSubtitle } from 'reactstrap'

import { Link } from 'react-router-dom'

import CardsModal from '../CardsModal/Index'
import FlayerModal from '../FlayerModal/Index'

import { eventsList } from '../../lib/events'

import Moment from 'react-moment';
import 'moment/locale/es';

import './style.scss'

const EventsCard = props => {
    const { title, 
            subtitle, 
            date, 
            startTime, 
            id, 
            author,
            cover } = props.cardData

    const { cardTitle, 
            news,
            link,
            textLink } = props.menu
    
    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);
    


    const toggle = () => setModal(!modal);
    const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
      }
      const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
      }

    const [index, setIndex] = useState(0)

    console.log(props.cardData)
    
    return(
        <>
            <FlayerModal nestedModal={nestedModal} toggleNested={toggleNested} closeAll={closeAll} toggle={toggle} toggleAll={toggleAll} dataModal={eventsList.list[index]} events={true} />
            <CardsModal toggle={toggle} modal={modal} nested={toggleNested}
                        dataModal={eventsList} className="events" />
            <Card className="mb-4 shadow">
                <CardBody>
                    <div className="d-flex justify-content-between">
                        <CardTitle>{cardTitle}</CardTitle>
                        <Link to={news ? link : '#'} className="font-avenir-heavy" onClick={ !news ? toggle : false}>{textLink}</Link>
                    </div>
                    <div className="d-flex body-news">
                        <CardImg src={cover.url }/>
                        <div className="ml-2">
                            <CardTitle>{title}</CardTitle>
                            { author 
                                ? <CardSubtitle>Por {author.name}</CardSubtitle>
                                : <CardSubtitle>{subtitle}</CardSubtitle>
                            }
                            { news 
                                ?  <CardText><Moment fromNow locale="es">{date}</Moment></CardText>
                                :   <CardText>Fecha y hora: <Moment format="DD [de] MMMM" locale="es">{date}</Moment> {startTime && startTime.slice(0, -3)} hrs</CardText>
                            }
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default EventsCard