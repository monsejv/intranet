import React, { useState, useEffect } from 'react'

import { Container, Row, Col } from 'reactstrap';

import GeneralCard from '../components/GeneralCard/Index'
import Header from '../components/Header/Index'
import RadarBox from '../components/RadarBox/Index';
import UploadFiles from '../components/UploadFiles/Index';
import UserMenu from '../components/UserMenu/Index'
import UserCard from '../components/UserCard/Index'
import SecondaryCard from '../components/SecondaryCard/Index';
import EventsCard from '../components/EventsCard/Index'
import GeneralModal from '../components/GeneralModal/Index'

import { cardsLeft } from '../lib/leftside'
import { userData } from '../lib/userData'
import {
    okrs,
    goals,
    courseList
} from '../lib/rightside'

import {
    path,
    workersMonth,
    birthdays,
    apps
} from '../lib/middleside'

import api from '../lib/api'

const Home = () => {
    const menuNews = {
        cardTitle: 'Últimas noticias',
        link: '/',
        textLink: 'Ver todas'
    }

    const menuEvents = {
        cardTitle: 'Próximos eventos',
        link: '/',
        textLink: 'Ver todos'
    }

    const [stateEvents, setEvents] = useState({
        events: [],
        hasError: false,
        errorMessage: ''
    })

    const [stateNews, setNews] = useState({
        news: [],
        hasError: false,
        errorMessage: ''
    })

    useEffect(() => {
        const getEvents = async () => {
            try {
                const events = await api.getEvents()

                if (stateEvents.events.length !== events.length) {
                    setEvents({ ...stateEvents, events })
                }
            } catch (error) {
                if (!stateEvents.hasError) {
                    setEvents({ ...stateEvents, hasError: true })
                }
            }
        }

        const getNews = async () => {
            try {
                const news = await api.getNews()

                if (stateNews.news.length !== news.length) {
                    setNews({ ...stateNews, news })
                }
            } catch (error) {
                if (!stateNews.hasError) {
                    setNews({ ...stateNews, hasError: true })
                }
            }
        }

        const getBamboo = async () => {
            try {
                const bamboo = await api.getBamboo()
                console.log(bamboo)
            } catch (error) {
                console.log(error)
            }
        }
        getEvents()
        getNews()
        getBamboo()
    }, [stateEvents, stateNews])

    return (

        <Container fluid>
            <GeneralModal modal={true} />
            <Row>
                <Col sm="3" >
                    <RadarBox />
                    {cardsLeft.map( card => <GeneralCard data={card} /> )}
                </Col>
                <Col sm="6">
                    <Header />
                    <Row>
                        <Col sm="12">
                            <div class="apps-wrapper d-flex justify-content-around mb-3">
                                { apps.map(list => <div className={list.class}></div> )}
                            </div>
                        </Col>
                    </Row>
                    <UploadFiles />
                    <Row>
                        <Col>
                            <SecondaryCard data={birthdays} />
                        </Col>
                        <Col>
                            <SecondaryCard data={workersMonth} />
                        </Col>
                        <Col>
                            <GeneralCard data={path} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                stateNews.news.length && <EventsCard cardData={stateNews.news[0]} menu={menuNews} />
                            }
                        </Col>
                        <Col>
                            {
                                stateEvents.events.length && <EventsCard cardData={stateEvents.events[0]} menu={menuEvents} />
                            }
                        </Col>
                    </Row>
                </Col>
                <Col sm="3">
                    <UserMenu data={userData} />
                    <UserCard data={userData} />
                    <SecondaryCard data={courseList} />
                    <GeneralCard data={okrs} />
                    <SecondaryCard data={goals} />
                </Col>
            </Row>
        </Container>
    )
}

export default Home