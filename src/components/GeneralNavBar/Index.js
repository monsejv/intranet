import React, { useState } from 'react'

import { Nav,
        NavItem,
        NavLink,
        NavbarBrand,
        Media,
        NavbarText,
        Navbar } from 'reactstrap'

import { Logo } from "../../assets/Index";

import classnames from 'classnames';

const GeneralNavBar = props => {

    const menu = ['Últimas noticias', 'Academy', 'Illud', 'Machina', 'Nova', 'Precision', 'Prototype']

    const [activeTab, setActiveTab] = useState('0');

    const toggleNav = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return(
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
                <Media src={Logo.default} width="180px" height="50px"></Media>
            </NavbarBrand>
            <Nav className="justify-content-end w-100">
                { menu.map((list, index) =>
                    <NavItem>
                        <NavLink href="#" className={classnames({ active: activeTab === `${index}` }, list.class)}
                            onClick={() => { toggleNav(`${index}`); }}>{list}</NavLink>
                        </NavItem>
                )}
            </Nav>
            <NavbarText className="search ml-5">Buscar</NavbarText>
        </Navbar> 
    )
}

export default GeneralNavBar