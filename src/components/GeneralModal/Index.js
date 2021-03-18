import React, { useState } from 'react'

import './style.scss'

import { Modal, 
        ModalHeader, 
        ModalBody, 
        Media, 
        Form, 
        FormGroup, 
        Input, 
        Button, 
        TabContent, 
        TabPane, 
        Nav, 
        NavItem, 
        NavLink, 
        Row, 
        Col,
        Table } from 'reactstrap'
import { RadarMap, IconFile, SettingHand } from '../../assets/Index'

import classnames from 'classnames';

const GeneralModal = props => {


    const { modalStatus, radar, fc, files, className, uphands  } = props

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    const listTable = [{
        image: SettingHand.default,
        name: 'Herramienta 01',
        version: 'Versión 1.0',
        vigency: '30 días',
        total: '22/150',
        status: 'Activo'
    },
    {
        image: SettingHand.default,
        name: 'Herramienta 02',
        version: 'Versión 1.10',
        vigency: '50 días',
        total: '87/200',
        status: 'Activo'
    },
    {
        image: SettingHand.default,
        name: 'Herramienta 03',
        version: 'Versión 2.5',
        vigency: '30 días',
        total: '48/150',
        status: 'Activo'
    }]

    const listComingSoon = [{
        image: SettingHand.default,
        name: 'Herramienta 01',
        version: 'Versión 1.0',
        vigency: '40 días',
        total: '150'
    }]

    return(
        <Modal isOpen={modalStatus} toggle={fc} fullscreen className={className}> 
           <div className={ uphands ? "settings" : "" }></div> 
            <ModalHeader toggle={fc}>
                { files &&
                    <div className="d-flex">
                        <span className="icon-machina"></span>
                        <div className="ml-4">
                            <h1>Ayuda a nuestro equipo de <span className="machina">Machina</span> a captar información para IA</h1>
                            <h4>Solo necesitamos tu INE y Comprobante de domicilio</h4>
                        </div>
                    </div>
                }
                {   uphands &&
                        <h1>Probando herramientas</h1>
                }
            </ModalHeader>
            <ModalBody>
             { radar && 
                <Media src={RadarMap.default} width="100%" alt="Radar" />
             }
             { files &&
                <div>
                    <div className="my-form d-flex justify-content-center align-items-center" id="file-drop" draggable="true">
                        <Form>
                            <FormGroup className="text-center">
                                <Media src={IconFile.default} width="20px" height="20px" />
                                <p className="m-0 ml-3 align-center">Arrastra y suelta tus documentos aquí <br/>o <br/> <span className="text-orange" for="fileElem">busca
                                        en tu ordenador</span></p>
                                <Input type="file" name="file" d="fileElem" multiple accept="image/*" onchange="handleFiles(this.files)"
                                                className="d-none" />
                            </FormGroup>
                        </Form>
                    </div>
                    <div className="d-flex justify-content-between files-support">
                        <p className="font-avenir-medium">Archivos soportados: PDF, JPG, PNG</p>
                        <p className="font-avenir-medium">Tamaño máximo: 10MB</p>
                    </div>
                    <Button color="primary">Enviar documentos</Button>
                </div>
             }
             { uphands &&
                <div>
                    <Nav tabs>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                        >
                        Probando
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                        >
                        Proximamente
                        </NavLink>
                    </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                        <Col sm="12">
                            <p className="font-avenir-medium title">Herramientas fase beta</p>
                            <Table>
                                <thead>
                                    <tr>
                                    <th>Herramienta</th>
                                    <th>Vigencia</th>
                                    <th>Total testers</th>
                                    <th>Estatus</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                   { listTable.map(list =>
                                        <tr>
                                            <th scope="row" className="d-flex data-setting">
                                                <Media src={list.image}></Media>
                                                <div className="ml-3">
                                                    <p className="name-skill">{list.name}</p>
                                                    <p className="version">{list.version}</p>
                                                </div>
                                            </th>
                                            <td>{list.vigency}</td>
                                            <td>{list.total}</td>
                                            <td><div className='active'></div>{list.status}</td>
                                            <td><Button color="primary">Probar</Button></td>
                                        </tr>
                                   )}
                                </tbody>
                                </Table>
                        </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <p className="font-avenir-medium title">Próximamente</p>
                            <Table>
                                <thead>
                                    <tr>
                                    <th>Herramienta</th>
                                    <th>Vigencia</th>
                                    <th>Total testers</th>
                                    <th>Estatus</th>
                                    <th>Notificarme</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   { listComingSoon.map(list =>
                                        <tr>
                                            <th scope="row" className="d-flex data-setting">
                                                <Media src={list.image}></Media>
                                                <div className="ml-3">
                                                    <p className="name-skill">{list.name}</p>
                                                    <p className="version">{list.version}</p>
                                                </div>
                                            </th>
                                            <td>{list.vigency}</td>
                                            <td>{list.total}</td>
                                            <td><div className='inactive'></div>Inactivo</td>
                                            <td><Button color="primary">Apartar lugar</Button></td>
                                        </tr>
                                   )}
                                </tbody>
                                </Table>
                        </Col>
                        </Row>
                    </TabPane>
                    </TabContent>
                </div>
             }
            </ModalBody>
        </Modal>
    )
}

export default GeneralModal 