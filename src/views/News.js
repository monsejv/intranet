import React from 'react'

import { Container,
        Row,
        Col } from 'reactstrap'

import CardNews from '../components/CardNews/Index';
import GeneralNavBar from '../components/GeneralNavBar/Index'

import { listNews } from '../lib/news'

import {Link} from 'react-router-dom'

const News = () => {
    return(
        <>
            <GeneralNavBar />
            <Container>
                <p className="pt-3 new-nav"><Link to="/">Dashboard // </Link><b>Últimas noticias</b></p>
                <Row>
                    { listNews.map(list => 
                        { return list.flag === 'recent' &&
                            <Col sm={12}>
                                <CardNews dataNew={list} className="big-card"></CardNews> 
                            </Col>
                        } 
                    )}
                </Row>
                <h3 className="mt-4 mb-4 new-title">Más vistas</h3>
                <Row>
                    { listNews.map(list => 
                        { return list.flag === 'popular' &&
                            <Col sm={4}>
                                <CardNews dataNew={list}></CardNews> 
                            </Col>
                        }
                    )}
                </Row>
                <h3 className="mt-4 mb-4 new-title">Todas las noticias</h3>
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
        </>
    )
}

export default News