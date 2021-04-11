import React, {useState} from 'react'

import './style.scss'

import { IconRadar } from '../../assets/Index'
import { Card, 
        Button, 
        CardText, 
        CardImg, 
        CardBody, 
        CardTitle,
        Input } from 'reactstrap'

import GeneralModal from '../GeneralModal/Index'
import TableModal from '../TableModal/Index'

import { herramientas } from '../../lib/modals'

const RadarBox = props => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [modalHnds, setModalH] = useState(false);
    const toggleHands = () => setModalH(!modalHnds);

    const textAlert = 'Se te notificará un día antes de que abramos la prueba vía correo electrónico, para que estes al pendiente e inicies la prueba.'

    return(
        <>
            <GeneralModal modalStatus={modal} radar={true} fc={toggle}  />
            <TableModal modalStatus={modalHnds} dataModal={herramientas} fc={toggleHands} className="up-hand" textAlert={textAlert}  />
            <Card className="mb-4 shadow">
                <CardBody>
                <CardImg src={IconRadar.default} className="icon" alt="Card image cap" />
                <CardTitle tag="h5" className="mt-4">El radar</CardTitle>
                <CardText>Plataformas,técnicas, herramientas, lenguajes & frameworks en tendencia.</CardText>
                <Button color="primary" className="next" onClick={toggle}>Consultar radar</Button>
                <CardTitle tag="h5" className="mt-5">Probando herramientas</CardTitle>
                <CardText>Nuestro equipo de R+D de Reboot, se encuentra probando estas herramientas en fase beta.<br/> ¿Nos quieres ayudar a probar?</CardText>
                <Button color="primary" className="next" onClick={toggleHands}>Alza la mano</Button>
                <CardText className="mt-5 font-avenir-medium">¿Quieres proponer una herramienta?</CardText>
                <div className="custom-form-wrapper">
                    <Input placeholder="Ingresa tu sugerencia" />
                    <Button color="secondary" disabled>Enviar</Button>
                </div>
                </CardBody>
            </Card>
        </>
    )
}

export default RadarBox