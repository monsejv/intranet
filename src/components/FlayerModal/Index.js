import React from 'react'

import './style.scss'

import { Modal, ModalHeader, ModalBody, Media, Card, CardBody, CardImg, CardTitle, CardSubtitle, Row, Col } from 'reactstrap'

const FlayerModal = props => {

    const { closeAll, nestedModal, toggleNested, toggle, toggleAll, dataModal } = props

    const { organized, name, createdBy, image, legend, total, used, description, prototypes } = dataModal
    return(
        <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined} className="flayer-modal">
            <div className="d-flex">
                <Media src={image} ></Media>
                <div>
                <ModalHeader toggle={toggleNested} className="mt-4">
                    ORGANIZADO POR <br/> <span className="organized">{organized}</span>
                </ModalHeader>
                <ModalBody>
                    <p className="title">Nombre del prototipo</p>
                    <h1 className="name-flayer">{name}</h1>
                    <p className="legend">{legend}</p>
                    <p className="total">Total de testers: {used}/{total}</p>
                    <div className="d-flex mt-4 mb-4">
                        <Media src={createdBy.photo} className="photo-by"></Media>
                        <div className="data-created-by">
                            <p class="title">Creado por</p>
                            <h5>{createdBy.name}</h5>  
                            <span>{createdBy.ocupation}</span>
                        </div>
                    </div>
                    <p className="title">Objetivo</p>
                    <p className="description mb-5">{description}</p>
                    <p className="title">¿En dónde probar el prototipo?</p>
                    <p className="description mt-2">Haz clic sobre los prototipos para empezar a probar.</p>
                    { prototypes && 
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
                    }
                </ModalBody>
                </div>
            </div>
      </Modal>
    )
}

export default FlayerModal