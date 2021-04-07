import React from 'react'

import { Nav,
        NavItem,
        NavLink,
        Container,
        NavbarBrand,
        Media,
        NavbarText,
        Row,
        Col,
        Navbar} from 'reactstrap'

import { Logo } from "../assets/Index";

import CardNews from '../components/CardNews/Index';

import { listNews } from '../lib/news'

const News = () => {

    const menu = ['Últimas noticias', 'Academy', 'Illud', 'Machina', 'Nova', 'Precision', 'Prototype']
    return(
        <main>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <Media src={Logo.default} width="180px" height="50px"></Media>
                </NavbarBrand>
                <Nav className="justify-content-end w-100">
                    { menu.map(list =>
                        <NavItem>
                            <NavLink href="#">{list}</NavLink>
                        </NavItem>
                    )}
                </Nav>
                <NavbarText className="search ml-5">Buscar</NavbarText>
            </Navbar> 
            <Container>
                <p>Dashboard // <b>Últimas noticias</b></p>
                <Row>
                    { listNews.map(list => 
                        { return list.flag === 'recent' &&
                            <Col sm={12}>
                                <CardNews dataNew={list} className="big-card"></CardNews> 
                            </Col>
                        } 
                    )}
                </Row>
                <h3 className="mt-4 mb-4">Más vistas</h3>
                <Row>
                    { listNews.map(list => 
                        { return list.flag === 'popular' &&
                            <Col sm={4}>
                                <CardNews dataNew={list}></CardNews> 
                            </Col>
                        }
                    )}
                </Row>
                <h3 className="mt-4 mb-4">Todas las noticias</h3>
                <Row>
                    { listNews.map(list => 
                            { return list.flag === '' &&
                                <Col sm={6}>
                                    <CardNews dataNew={list}></CardNews> 
                                </Col>
                            }
                    )}
                </Row>
            </Container>
        </main>
    )
}

export default News