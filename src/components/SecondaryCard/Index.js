import React, { useState} from 'react'

import './style.scss'
import { Card,
        CardBody,
        CardTitle,
        Media,
        Progress } from 'reactstrap'

import { Link } from 'react-router-dom'
import { IconBirthday} from '../../assets/Index'

import MemberCircle from '../MemberCircle/Index'
import WidgetsModal from '../WidgetsModal/Index'
import FlayerModal from '../FlayerModal/Index'
import CardsModal from '../CardsModal/Index'
import GoalsModal from '../GoalsModal/Index'

import { birthdayCalendar } from '../../lib/birthdaysOfMonth'
import { rebootersOfMonth } from '../../lib/rebootersOfMonth'

import { coursesList } from '../../lib/courses'


const SecondaryCard = props => {
    const { title,
            link,
            textLink,
            goals,
            courses,
            celebrations,
            classCelebration,
            members,
            birthdays } = props.data
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [modalCards, setCards] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);
    const [modalGoals, setGoals] = useState(false);
    
    const toggleGoals = () => setGoals(!modalGoals);
    const toggleCards = () => setCards(!modalCards);
    const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
      }
      const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
      }

    return(
        <section>
            <WidgetsModal toggle={toggle} modal={modal} 
                            dataModal={ birthdays ? birthdayCalendar : rebootersOfMonth } 
                            className={ birthdays ? "birthday-bg" : "rebooters-bg"} ></WidgetsModal>
            <FlayerModal nestedModal={nestedModal} toggleNested={toggleNested} closeAll={closeAll} toggle={toggleCards} toggleAll={toggleAll} dataModal={coursesList.list[0]} courses={true} />
            <CardsModal toggle={toggleCards} modal={modalCards} nested={toggleNested}
                        dataModal={coursesList} className="courses" />
            <GoalsModal toggle={toggleGoals} modal={modalGoals} />
            <Card className="mb-4 shadow">
                <CardBody onClick={ birthdays && toggle }>
                    { birthdays  ?
                            <div className="d-flex justify-content-between">
                                <Media src={IconBirthday.default} width="40px" height="40px" />
                                <CardTitle>¡Felicidades cumpleañeros!</CardTitle>
                            </div>

                        : <div className="d-flex justify-content-between">
                            <CardTitle>{title}</CardTitle>
                            <Link to="#" className="font-avenir-heavy" onClick={ courses ? toggleCards : goals ? toggleGoals : toggle}>{textLink}</Link>
                        </div>
                    } 
                    <div className={classCelebration}></div>
                    { goals &&  
                        <div className="d-flex justify-content-between badge-wrapper mt-3">
                            <div className="icon-badge rebooter"></div>
                            <div className="icon-badge star"></div>
                            <div className="icon-badge common"></div>
                        </div>
                    }
                    { courses &&
                        <div>
                        { courses.map(list => {
                            return <div class="d-flex cursos-wrapper">
                                <Media src={list.image} />
                                <div class="w-100 align-self-center">
                                    <p class="font-avenir-medium">{list.title}</p>
                                    { list.completed === '100' 
                                        ?   <p class="text-success">Completado</p>
                                        :   <Progress color="success" value={list.completed} />
                                    }
                                </div>
                            </div>
                        })}
                        </div>
                    }
                    {
                        celebrations &&
                        <div className="rebooters  mb-2">
                                { members.map((list, index) => {
                                    return <MemberCircle memberData={list} index={index} />
                                })}
                                <div className='member-wrapper number d-flex justify-content-center align-items-center'>
                                    <div className="text-center font-avenir-heavy">+{members.length - 7}</div>                                
                                </div>
                        </div>
                        }
                </CardBody>
            </Card>
        </section>
    )
}

export default SecondaryCard