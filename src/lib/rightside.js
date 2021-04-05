import { IconOkr,
        Course1,
        Course2,
        Course3 } from '../assets/Index'

export const okrs = {
    title: 'Mis OKRs',
    img: `${IconOkr.default}`,
    classImage: 'icon',
    text: '',
    textButton: 'Consultar mis objetivos'
}

export const goals = {
    title: 'Mis logros',
    link: '/',
    textLink: 'Ver todos',
    goals: true
}

export const courseList = {
    title: 'Mis cursos',
    link: '/',
    textLink: 'Ver todos',
    courses: [{
        title: 'Gestión de equipos',
        image: Course1.default,
        completed: '60'
    },
    {
        title: 'Scrum Agile',
        image: Course2.default,
        completed: '20'
    },
    {
        title: 'Inteligencia emocional',
        image: Course3.default,
        completed: '100'
    }]
}