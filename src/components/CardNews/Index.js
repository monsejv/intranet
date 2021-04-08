import React from 'react'

import { Card, Media, CardBody, CardTitle, CardSubtitle, CardText, Button }  from 'reactstrap'


import Moment from 'react-moment';
import 'moment/locale/es';

import './style.scss'

const CardNews = props => {

    const { className } = props
    const {cover, title, description, author, createdAt, flag } = props.dataNew

    return(
        <Card horizontal className={'card-news ' + className}>
            <CardBody className="d-flex">
                <Media src={cover} alt="Card image cap" />
                <div>
                    <Button color="primary" className="text-capitalize">{author.company}</Button>
                    <CardTitle tag="h5">{title}</CardTitle>
                    { flag === 'recent' &&
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{description}</CardSubtitle>
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