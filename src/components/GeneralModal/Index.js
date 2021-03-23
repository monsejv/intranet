import React from 'react'

import './style.scss'

import { Modal, 
        ModalHeader, 
        ModalBody, 
        Media, 
        Form, 
        FormGroup, 
        Input, 
        Button } from 'reactstrap'

import { RadarMap, IconFile} from '../../assets/Index'

const GeneralModal = props => {


    const { modalStatus, radar, fc, files, className } = props

    return(    
        <Modal isOpen={modalStatus} toggle={fc} fullscreen className={className}>   
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
            </ModalBody>
        </Modal>
    )
}

export default GeneralModal 