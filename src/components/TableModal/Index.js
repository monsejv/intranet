import React, {useState} from 'react'

import './style.scss'

import { Modal, 
        ModalHeader, 
        ModalBody, 
        Media, 
        Button, 
        TabContent, 
        TabPane, 
        Nav, 
        NavItem, 
        NavLink, 
        Row, 
        Col,
        Table } from 'reactstrap'


import GeneralAlert from '../GeneralAlert/Index'

import classnames from 'classnames';

const TableModal = props => {

    const { modalStatus, fc, className, textAlert, dataModal  } = props

    const tabsData = dataModal.tabs
    const tools = dataModal.uphands
    const prototypes = dataModal.prototypes

    const [activeTab, setActiveTab] = useState('0');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    const [statusAlert, setVisible] = useState(false);

    const onDismiss = () => setVisible(!statusAlert);

    return(    
        <Modal isOpen={modalStatus} toggle={fc} className={className}> 
           <div className="settings"></div> 
            <GeneralAlert visible={statusAlert} text={textAlert} fc={onDismiss} />     
            <ModalHeader toggle={fc}>
                {dataModal.title}
            </ModalHeader>
            <ModalBody>
                    <Nav tabs>
                        {
                            tabsData.map( (list, index) => 
                                <NavItem>
                                    <NavLink
                                    className={classnames({ active: activeTab === `${index}` })}
                                    onClick={() => { toggle(`${index}`); }}
                                    >
                                     { list.name }
                                    </NavLink>
                                </NavItem>
                            )
                        }
                    </Nav>
                        <TabContent activeTab={activeTab}>
                            { tabsData.map((zone, index) => 
                                <TabPane tabId={`${index}`} >
                                    { zone.tools.map(list => 
                                        <Row>
                                            <Col sm="12">
                                                <p className="font-avenir-medium title">{list.name}</p>
                                                <Table>
                                                    <thead>
                                                        <tr>
                                                        <th>
                                                            { tools && "Herramientas" }
                                                            { prototypes && "Prototipos"}
                                                        </th>
                                                        <th>Vigencia</th>
                                                        <th>Total testers</th>
                                                        <th>Estatus</th>
                                                        <th>{list.commingSoon ? "Notificarme" : ""}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    { list.detail.map(detail =>
                                                            <tr>
                                                                <th scope="row" className="d-flex data-setting">
                                                                    <Media src={detail.image}></Media>
                                                                    <div className="ml-3">
                                                                        <p className="name-skill">{detail.name}</p>
                                                                        <p className="version">
                                                                            { tools &&
                                                                                `${detail.version}`
                                                                            }
                                                                            { prototypes &&
                                                                                `Actualizado ${detail.lastUpdated}`
                                                                            } 
                                                                        </p>
                                                                    </div>
                                                                </th>
                                                                <td>{ tools &&
                                                                        `${detail.vigency}`
                                                                    }
                                                                    { prototypes &&
                                                                        `${detail.avaible}`
                                                                    } 
                                                                </td>
                                                                <td>
                                                                    {
                                                                        detail.inactive ? `${detail.total}` : `${detail.testersUsed} / ${detail.testers}`
                                                                    }
                                                                    </td>
                                                                <td><div className={ detail.inactive ? "inactive" : "active"}></div>{detail.status}</td>
                                                                <td><Button color="primary" onClick={ tools ? onDismiss : false }>{ detail.inactive ? "Apartar lugar" : "Probar"}</Button></td>
                                                            </tr>
                                                    )}
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    )}
                                </TabPane>
                            )}
                        </TabContent>
            </ModalBody>
        </Modal>
    )
}

export default TableModal