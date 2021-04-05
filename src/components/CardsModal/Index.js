import React, { useState, setState } from 'react'

import {
    Modal,
    ModalHeader,
    ModalBody,
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Row,
    Progress,
    Col } from 'reactstrap'

import './style.scss'

import Moment from 'react-moment';
import 'moment/locale/es';

const WidgetsModal = props => {

    const { modal, toggle, dataModal, className, nested } = props

    const { events, courses, list, inProgress } = dataModal


    return(
        <Modal isOpen={modal} toggle={toggle} className={"cards " + className}>  
            <ModalHeader toggle={toggle}>
                { events 
                   ? "Próximos eventos"
                   : "Mis cursos"
                } 
            </ModalHeader>
            <ModalBody>
            {
                courses &&
                        <Row>
                            <Col sm={12}>
                                <h1>En progreso</h1>
                            </Col>
                            { inProgress.map( (listProgress, index) => 
                                <Col sm={4}>
                                    <Card>
                                        <CardImg top src={listProgress.cover} />
                                        <CardBody className="text-left mt-2">
                                            <CardTitle tag="h5" className="mb-2">{listProgress.name}</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                                Impartido por: <br/> {listProgress.impartedBy.name}
                                            </CardSubtitle>
                                            <Progress color="success" value={listProgress.completed} />
                                            <CardSubtitle className={listProgress.completed === '100' ? 'text-success mt-2' : 'mt-2'}>{listProgress.completed}% completado</CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )} 
                        </Row>
            }
                <Row>
                    { courses &&
                        <Col sm={12}>
                            <h1>Próximos cursos</h1>
                        </Col> 
                    }
                    { list.map( (detail, index) => 
                        <Col sm={4}>
                            <Card onClick={nested}>
                                <CardImg top src={detail.cover} />
                                <CardBody className="text-left mt-2">
                                    <CardTitle tag="h5" className="mb-2">{detail.name}</CardTitle>
                                    { events 
                                        ? <CardSubtitle tag="h6" className="mb-2 text-muted">{detail.legend}</CardSubtitle>
                                        : <CardSubtitle tag="h6" className="mb-2 text-muted"> Impartido por: <br/> {detail.impartedBy.name}</CardSubtitle> 
                                    }
                                    <CardText>{courses && 'Inicia '}<Moment format="DD [de] MMMM" locale="es" className="text-capitalize">{detail.date}</Moment> • {detail.hourStart} hrs.</CardText>
                                    { courses && <CardSubtitle>Duración {detail.hoursDuration} hrs.</CardSubtitle>}
                                </CardBody>
                            </Card>
                        </Col>
                    )} 
                </Row>
            </ModalBody>
        </Modal>
    )
}

export default WidgetsModal