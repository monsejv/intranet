import React, {useState} from 'react' 

import './style.scss'
import { IconWhatsApp } from '../../assets/Index'

import { Card,
        CardBody,
        CardTitle,
        CardText,
        Media } from 'reactstrap'

import { Link } from 'react-router-dom'
import MemberCircle from '../MemberCircle/Index'
import WidgetsModal from '../WidgetsModal/Index'

import { usersBook } from '../../lib/direcotry'

const UserCard = props => {

    const { logoProyect,
            proyectName,
            qrTeam,
            team } = props.data

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return(
        <section>
            <WidgetsModal toggle={toggle} modal={modal} dataModal={usersBook} className="directory" ></WidgetsModal>
            <Card className="user-data mb-4 shadow">
                <CardBody>
                    <CardTitle className="mb-2">Mis proyectos</CardTitle>
                    <Media src={logoProyect} className="d-block mr-auto logo-citi" />
                    <CardText>{proyectName}</CardText>
                    <div className="d-flex justify-content-between mt-3">
                        <CardText>Tu equipo</CardText>
                        <Link to="#" className="font-avenir-heavy" onClick={toggle} >Ver directorio</Link> 
                    </div>
                    <div className="member mb-2">
                        { team.map((list, index) => {
                            return <MemberCircle memberData={list} index={index} />
                        })}
                        <div className='member-wrapper number d-flex justify-content-center align-items-center'>
                            <div className="text-center font-avenir-heavy">+{team.length - 7}</div>
                        </div>
                    </div>
                    <div className="mt-3 d-flex contact-wrapper">
                    <div className="col-6 no-padding">
                        <div className="d-flex">
                            <Media src={IconWhatsApp.default} alt="whatsapp" className="whatsapp" />
                                <p className="font-avenir-heavy text-bold contact">¡Mantente en contacto!</p>
                            </div>
                            <p className="font-avenir-medium join-group mt-2">Únete al grupo de whatsapp mediante el siguiente QR.</p>
                        </div>
                        <div className="col-6 no-padding text-right">
                            <Media src={qrTeam} alt="qr"  />
                        </div>   
                    </div>
                </CardBody>
            </Card>
        </section>
    )
}

export default UserCard