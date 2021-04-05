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
import { userData } from '../../lib/userData'

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
        let filteredMedicine = list.filter((index) => {
            if (index.name.toString().toLowerCase().includes(search)) 
            return index;
        })
        setList(filteredMedicine)
        if (event.target.value === '') setText(null)
    }

    return(
        <Modal isOpen={modal} toggle={toggle} className={ "widgets " + className}>
            <GeneralAlert visible={statusAlert} text={textAlert} fc={showAlert} />     
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
                    <div><span className={'return ' + addRebooter} onClick={toggleReboot}></span>"Rebooters del mes"</div> 
                }
            </ModalHeader>
            <ModalBody>
                <div className={principal}>
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