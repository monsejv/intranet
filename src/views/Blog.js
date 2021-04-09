import React from 'react'
import { Link } from 'react-router-dom'
import { Container,
        Media } from 'reactstrap'

import GeneralNavBar from '../components/GeneralNavBar/Index'

import Moment from 'react-moment';
import 'moment/locale/es';

const Blog = props=> {

    const { data } = props.location.state

    const { author, coverPost, title, description, createdAt, readingTime, post } = data

    return(
        <>
            <GeneralNavBar />
            <Container className="blog-wrapper">
                <Link to="/noticias" className="back">Regresar</Link>
                <h2 className="title-blog">{title}</h2>
                <div className="d-flex mt-4 mb-4">
                    <Media src={ author.photo } className="photo-by"></Media>
                    <div className="data-user AvenirLTStd-Medium">
                        <p class="name">{ author.name }</p>
                        <p className="sub"><Moment format="DD MMMM YYYY" locale="es" className="text-capitalize text-date">{createdAt}</Moment></p>
                        <p className="times">Tiempor de lectura: { readingTime }</p>
                    </div>
                </div>
                <Media src={coverPost} className="w-100 mb-5 mt-5"></Media>
                <p className="post">{post}</p>
                <div className="social d-flex">
                    <a href="/" className="ico linkedin"></a>
                    <a href="/" className="ico facebook"></a>
                    <a href="/" className="ico twitter"></a>
                </div>
                <div className="justify-content-between footer d-flex">
                    <div className="d-flex mt-4">
                        <Media src={ author.photo } className="photo-by"></Media>
                        <div className="data-user AvenirLTStd-Medium">
                            <p class="name">{ author.name }</p>
                            <p className="sub">{author.position}</p>
                        </div>
                    </div>
                    <div className={"mt-4 logo " + author.company}></div>
                </div>
            </Container>
        </>
    )
}

export default Blog