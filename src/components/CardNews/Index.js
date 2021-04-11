import React from 'react'

import { Card, Media, CardBody, CardTitle, CardSubtitle, CardText, Button }  from 'reactstrap'

import { Link } from 'react-router-dom'


import Moment from 'react-moment';
import 'moment/locale/es';

import './style.scss'

const CardNews = props => {

    const { className } = props
    const {cover, title, description, author, createdAt, flag } = props.dataNew

    return(
        <Card horizontal className={'card-news ' + className}>
            <CardBody className="d-flex">
                <Media src={cover} alt="Card image cap" className="mr-3" />
                <div className="news-wrapper">
                    <Link to={{ pathname: '/blog', state: { data: props.dataNew } }} className={ "btn btn-primary text-capitalize mb-2 " + author.company}>{author.company}</Link>
                    <CardTitle tag="h5" className="mb-2">{title}</CardTitle>
                    { flag === 'recent' &&
                        <CardSubtitle tag="h6" className="mb-2">{description}</CardSubtitle>
                    }
                    <CardText>{author.name}</CardText>
                    {
                        flag === 'recent' 
                        ?  <Moment fromNow  locale="es" className="text-capitalize text-date">{createdAt}</Moment>
                        :  <Moment format="DD MMMM" locale="es" className="text-capitalize text-date">{createdAt}</Moment>

                    }
                </div>
            </CardBody>
        </Card>
    )
}

export default CardNews