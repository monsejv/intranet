import React from 'react'

import './style.scss'
import {Link} from 'react-router-dom'
import { Media, Form, FormGroup, Input} from 'reactstrap'
import { Logo } from '../../assets/Index'

const Header = (props) => {
    return(
        <>
            <Link to="/">
                <Media className="logo-image mt-5" src={Logo.default} />
            </Link>
            <Form >
                <FormGroup className="search-wrapper mt-5">
                    <Input type="text" id="searching" placeholder="¿Qué necesitas? Puedes buscar proyectos, herramientas..." />
                </FormGroup>
            </Form>
        </>
    )
}

export default Header