import React from 'react'

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
    Col } from 'reactstrap'

import './style.scss'

const WidgetsModal = props => {

    const { modal, toggle, dataModal, className } = props

    const { sede, nameProject, workers, directory, birthday, rebooters} = dataModal

    return(
        <Modal isOpen={modal} toggle={toggle} className={ "widgets " + className}>
            <ModalHeader toggle={toggle}>
                { directory &&
                    <div>
                        Directorio <br/>
                        <span>{sede} / {nameProject}</span> 
                    </div>
                } 
                {
                    birthday &&
                    "Cumpleañeros del mes"
                }
                {
                    rebooters &&
                    "Rebooters del mes"
                }
            </ModalHeader>
            <ModalBody>
                { rebooters &&
                    <Button color="primary" className="next mb-3" >Postular a alguien</Button>
                }
                <Row>
                    { workers.map((list, index) => 
                        <Col sm={directory ? 3 : 4}>
                            <Card>
                                <div className="contact">
                                    <CardImg top src={list.photo} className="photo-contact" />
                                    <span className={'ico '+ list.company}></span>
                                </div>
                                <CardBody className="text-center">
                                <CardTitle tag="h5">{list.name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{list.ocupation}</CardSubtitle>
                                {
                                    directory &&
                                    <div>
                                        <a href={'mailto:'+ list.email} target="_blank"><CardText>{list.email}</CardText></a>
                                        <a href={'tel:'+ list.phone} target="_blank"><CardText>{list.phone}</CardText></a>
                                    </div>
                                }
                                {
                                    birthday &&
                                    <div>
                                        <CardText className="text-capital">{list.company}</CardText>
                                        <CardText>{list.birthday}</CardText>
                                    </div>
                                }
                                {
                                    rebooters &&
                                    <div>
                                        <CardText className="text-capital">{list.company}</CardText>
                                        <CardText>{list.votes} votos</CardText>
                                    </div>
                                }
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