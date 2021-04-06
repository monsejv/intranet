import React, {useState} from 'react'

import { Modal, ModalHeader, ModalBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Card, Progress, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'

import { goalsList } from '../../lib/goals'

import classnames from 'classnames';

import Moment from 'react-moment';
import 'moment/locale/es';

import './style.scss'

const GoalsModal = props => {

    const { modal, toggle } = props

    const [activeTab, setActiveTab] = useState('0');

    const toggleNav = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return(
        <Modal isOpen={modal} toggle={toggle} className="goals">
            <ModalHeader toggle={toggle}>Mis logros</ModalHeader>
            <ModalBody className="mb-4">
                <Row>
                    <Col sm={4}>
                    <Nav tabs vertical>
                        {goalsList.map((list, index) => 
                            <NavItem>
                                <NavLink 
                                    className={classnames({ active: activeTab === `${index}` }, list.class)}
                                    onClick={() => { toggleNav(`${index}`); }}
                                >
                                    {list.name} <span className="logo-goal"></span>
                                </NavLink>
                            </NavItem>
                        )}
                    </Nav>
                    </Col>
                    <Col sm={8}>
                        <TabContent activeTab={activeTab}>
                                { goalsList.map((list, index) => 
                                    <TabPane tabId={`${index}`} className={list.class}>
                                        <Row>
                                        {list.goals.map(detail => 
                                            <Col sm={4}>
                                                <Card>
                                                    <CardImg top src={detail.icon}></CardImg>
                                                    <CardBody className="text-center">
                                                        <CardTitle>{detail.name}</CardTitle>
                                                        <CardSubtitle className="mb-2">{detail.description}</CardSubtitle>
                                                        { detail.completed === '0' 
                                                            ? <span className="icon-block"></span>
                                                            : detail.completed === '100' 
                                                                ? <CardText>Ganado el <Moment format="DD [de] MMMM[, ]YYYY" locale="es" className="text-capitalize">{detail.winDate}</Moment></CardText>
                                                                :   <div>
                                                                        <Progress color="success" value={detail.completed} />
                                                                        <CardText>{detail.completed}% completado</CardText>
                                                                    </div>
 
                                                        }
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        )}
                                        </Row>
                                    </TabPane>
                                )}
                        </TabContent>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    )
}

export default GoalsModal