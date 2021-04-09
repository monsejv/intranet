import React from 'react'

import './style.scss'

import Moment from 'react-moment';
import 'moment/locale/es';

import { Modal, ModalHeader, ModalBody, Media, Card, CardBody, CardImg, CardTitle, CardSubtitle, Row, Col, CardText, Button } from 'reactstrap'

import {Link} from 'react-router-dom'

const FlayerModal = props => {

    const { closeAll, nestedModal, toggleNested, toggle, toggleAll, dataModal, events, courses } = props

    const { organized, days, name, createdBy, image, legend, total, used, description, prototypes, impartedBy, location, hourStart, hourFinish, totalQuote, date } = dataModal
    return(
        <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined} className="flayer-modal">
            <div className="d-flex">
                <Media src={image} ></Media>
                <div className="paddings">
                <ModalHeader toggle={toggleNested} className="mt-4">
                    ORGANIZADO POR <br/> { organized === 'prototype' ? <span className="logo prototype"></span> : <> {organized} </>}
                </ModalHeader>
                <ModalBody>
                    <p className="title">{ events ? 'EVENTO' : courses ? 'CURSO' : 'Nombre del prototipo' }</p>
                    <h1 className="name-flayer">{name}</h1>
                    <p className="legend">{legend}</p>
                    <p className="total">{ events || courses
                    ? `Cupo máximo: ${totalQuote} personas`
                    : `Total de testers: ${used}/${total}`
                    } </p>
                    <div className="d-flex mt-4 mb-4">
                        <Media src={ events || courses ? `${impartedBy.photo}` : `${createdBy.photo}`} className="photo-by"></Media>
                        <div className="data-created-by">
                            <p class="title">{events || courses ? "Impartido por" : "Creado por"}</p>
                            <h5>{ events || courses ? `${impartedBy.name}` : `${createdBy.name}`}</h5>  
                            <span>{ events || courses ? `${impartedBy.ocupation}` : `${createdBy.ocupation}`}</span>
                        </div>
                    </div>
                    <p className="title">{events ? "Acerca de este evento" : courses ? "Acerca de este curso" : "Objetivo"}</p>
                    <p className="description">{description}</p>
                    { courses && <Link to="#">Ver temario</Link>}
                    { prototypes && 
                        <div className="mt-5">
                            <p className="title">¿En dónde probar el prototipo?</p>
                            <p className="description mt-2">Haz clic sobre los prototipos para empezar a probar.</p>
                            <Row>
                                {prototypes.map(list => 
                                    <Col sm={6}>
                                        <Card onClick={toggleAll}>
                                            <CardImg top width="100%" src={list.image} alt="Card image cap" />
                                            <CardBody className="text-center mt-3">
                                            <CardTitle tag="h5">{name}</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">{list.name}</CardSubtitle>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                )}
                            </Row>
                        </div>
                    }

                    <Row className="mt-3">
                        <Col sm={6}>
                            <CardText className="title mb-2">{events ? '¿Cuándo?' : '¿Cuándo inicia?'}</CardText>
                            <CardText>
                                <Moment format="dddd DD [de] MMMM[, ]YYYY" locale="es" className="text-capitalize">{date}</Moment> 
                                { events &&  <span><br/>de {hourStart} a {hourFinish} hrs.</span>}
                            </CardText>
                            {courses && 
                                <div className="mb-3">
                                    <CardText className="title mb-2">¿Cada cuándo?</CardText>
                                    <CardText>{days} <br/> de {hourStart} a {hourFinish} hrs.</CardText>
                                </div>
                            }
                            <a href="#" className="icon calendar">Añadir al calendario</a>
                        </Col>
                        <Col sm={6}>
                            <CardText className="title mb-2">¿En dónde?</CardText>
                            {location === 'En línea' 
                                ? <CardText>{location} <br/> Una vez que te inscribas se enviará la liga por correo</CardText>
                                : <><CardText>{location}</CardText><a href="#" className="icon gps">Ver ubicación</a></>
                            }
                        </Col>
                    </Row>
                    <Button color="primary" className="mt-5" onClick={toggleAll}>{ events ? 'Apartar lugar' : 'Inscribirme' }</Button>
                </ModalBody>
                </div>
            </div>
      </Modal>
    )
}

export default FlayerModal