import React from 'react'

import './style.scss'
import { Card,
        CardBody,
        CardTitle,
        Media,
        Progress } from 'reactstrap'

import { Link } from 'react-router-dom'
import { IconBirthday} from '../../assets/Index'

import MemberCircle from '../MemberCircle/Index'

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
    return(
        <Card className="mb-4 shadow">
            <CardBody>
                { birthdays  ?
                        <div className="d-flex justify-content-between">
                            <Media src={IconBirthday.default} width="40px" height="40px" />
                            <CardTitle>¡Felicidades cumpleañeros!</CardTitle>
                        </div>

                    : <div className="d-flex justify-content-between">
                        <CardTitle>{title}</CardTitle>
                        <Link to={link} className="font-avenir-heavy">{textLink}</Link>
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
    )
}

export default SecondaryCard