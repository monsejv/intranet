import React from 'react'

import './style.scss'

import { Row,
        Col,
        Card,
        CardBody,
        Form,
        Media, 
        FormGroup,
        Input } from 'reactstrap'

import { IconFile } from '../../assets/Index'

const UploadFiles = props => {
    return(
        <Row>
            <Col sm="12">
            <Card className="file-wrapper mb-3 shadow">
                <CardBody>
                    <div className="d-flex">
                        <div className="icon-machina"></div>
                        <p className="font-avenir-heavy pl-2 mb-1 text-files"><b>Ayuda a nuestro equipo de <span className="text-machina-red">Machina</span> a captar información para I</b>A<br/><span className="font-avenir-medium">Sólo necesitamos tu INE y Comprobante de domicilio</span></p>
                    </div>
                    <div className="my-form d-flex justify-content-center align-items-center" id="file-drop" draggable="true">
                        <Form>
                            <FormGroup className="d-flex">
                                <Media src={IconFile.default} width="20px" height="20px" />
                                <p className="m-0 ml-3 align-center">Arrastra y suelta tus documentos aquí o <span className="text-orange" for="fileElem">busca
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
                </CardBody>
            </Card>
            </Col>
        </Row>
    )
}

export default UploadFiles