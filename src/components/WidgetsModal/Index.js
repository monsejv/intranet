import React, { useState } from 'react'

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
    Col, 
    Input,
    Form,
    FormGroup,
    ListGroup,
    ListGroupItem, 
    Media} from 'reactstrap'

import './style.scss'

import GeneralAlert from '../GeneralAlert/Index'

import { birthdayCalendar } from '../../lib/birthdaysOfMonth'

const WidgetsModal = props => {

    const { modal, toggle, dataModal, className } = props

    const { sede, nameProject, workers, directory, birthday, rebooters} = dataModal

    const [search, setText] = useState(null)

    const list = birthdayCalendar.workers
    const textAlert = 'Se envío con éxito tu postulación.'
    
    const [listWorkers, setList] = useState([])

    const [principal, toggleVisible] = useState('')
    const [addRebooter, toggleRebooter] = useState('d-none')

    const [statusAlert, setVisible] = useState(false);

    const toggleReboot = () => {
        if(principal === ''){
            toggleVisible('d-none')
            toggleRebooter('')
        }
        else{
            toggleVisible('')
            toggleRebooter('d-none')
        }
        

    }
   
    const showAlert = () => {
        if(statusAlert === false){
            setVisible(!statusAlert);
            setTimeout(()=> {
                toggleReboot()
                setVisible(false);
            }, 3000);
        }
        else{
            setVisible(!statusAlert);
        }
    }

    const onChange = (event) => {
        setText(event.target.value)
        let dataValue = event.target.value;
        let filteredRebooters = list.filter((index) => {
            if (index.name.toString().toLowerCase().includes(dataValue.toLowerCase())) 
            return index;
        })
        setList(filteredRebooters)
        if (event.target.value === '') setText(null)
    }

    return(
        <Modal isOpen={modal} toggle={toggle} className={ "widgets " + className}>
            <GeneralAlert visible={statusAlert} text={textAlert} fc={showAlert} />     
            <ModalHeader toggle={toggle}>
                { directory &&
                    <>
                        Directorio <br/>
                        <span>{sede} / {nameProject}</span> 
                    </>
                } 
                {
                    birthday &&
                    "Cumpleañeros del mes"
                }
                {
                    rebooters && 
                    <><span className={'return ' + addRebooter} onClick={toggleReboot}></span>"Rebooters del mes"</> 
                }
            </ModalHeader>
            <ModalBody>
                <div className={"widgets-wrapper " + principal}>
                    { rebooters &&
                        <Button color="primary" className="next mb-3" onClick={toggleReboot}>Postular a alguien</Button>
                    }
                    <Row>
                        { workers.map((list, index) => 
                            <Col sm={directory ? 3 : index < 3 && rebooters ? 4 : birthday ? 4 : 3}>
                                <Card className={index < 3 && "winner-card"}>
                                    <div className="contact">
                                        <CardImg top src={list.photo} className="photo-contact" />
                                        <span className={'ico '+ list.company}></span>
                                    </div>
                                    <CardBody className="text-center">
                                        <CardTitle tag="h5">{list.name}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">{list.ocupation}</CardSubtitle>
                                        {
                                            directory &&
                                            <>
                                                <a href={'mailto:'+ list.email} target="_blank"><CardText>{list.email}</CardText></a>
                                                <a href={'tel:'+ list.phone} target="_blank"><CardText>{list.phone}</CardText></a>
                                            </>
                                        }
                                        {
                                            birthday &&
                                            <>
                                                <CardText className="text-capital">{list.company}</CardText>
                                                <CardText>{list.birthday}</CardText>
                                            </>
                                        }
                                        {
                                            rebooters &&
                                            <>
                                                <CardText className="text-capital">{list.company}</CardText>
                                                <CardText>{list.votes} votos</CardText>
                                            </>
                                        }
                                    </CardBody>
                                    { rebooters && index < 3 
                                        ? <span className={ "icon win-" + (index+1)}></span>
                                        : false }
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
                <div className={addRebooter}>
                    <Row>
                        <Col sm={{ size: 7, offset: 3 }}>
                            <CardText className="title-postular">¿Quién crees que merece estar entre los Rebooters del mes?</CardText>
                            <Form >
                                <FormGroup className="search-wrapper mt-5">
                                    <Input type="text" id="searching" placeholder="Ingresa el nombre… Ej. Juan" onKeyUp={onChange} />
                                </FormGroup>
                            </Form>
                            <ListGroup>
                                { search
                                    ? listWorkers.map(list => 
                                        <ListGroupItem className="d-flex" onClick={showAlert}>
                                            <Media src={list.photo}></Media>
                                            <div className="text-capitalize">
                                                {list.name} <br /> <span className='AvenirLTStd-Medium'>{list.company}</span>
                                            </div>
                                        </ListGroupItem> ) 
                                    : false
                                }
                            </ListGroup>
                        </Col>
                    </Row>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default WidgetsModal