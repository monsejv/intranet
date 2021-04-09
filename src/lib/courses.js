import { EventCover, Person1, CoursesCoverModal } from '../assets/Index'

export const coursesList = {
    courses: true,
    list: [{
        name: 'Comunicación efectiva',
        legend: '¡Vence tus miedos y aprende a expresar tus ideas!',
        organized: 'prototype',
        totalQuote: 50,
        hoursDuration: 20,
        date: '2020-07-22',
        hourStart: '18:00',
        hourFinish: '20:00',
        days: 'Martes y Jueves',
        location: 'En línea',
        description: 'La comunicación es la herramienta principal para cualquier profesional. En este curso, te enseñaremos cómo incrementar tu seguridad al hablar, cómo mejorar tu expresión corporal y el poder de la persuasión.',
        cover: EventCover.default,
        image: CoursesCoverModal.default,
        impartedBy: {
            name: 'Verónica García Bernal',
            ocupation: 'Comunicólogo',
            photo: Person1.default,
        }
    },
    {
        name: 'Fundamentos de UX',
        legend: '¡Vence tus miedos y aprende a expresar tus ideas!',
        organized: 'prototype',
        totalQuote: 50,
        hoursDuration: 14,
        date: '2020-07-25',
        hourStart: '18:00',
        hourFinish: '20:00',
        days: 'Viernes',
        location: 'En línea',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum sapien lorem, quis suscipit dolor pulvinar ac. Maecenas mattis arcu maximus, pulvinar magna eget, lacinia odio. Phasellus porttitor, libero a laoreet dictum, ipsum velit venenatis eros, in fringilla neque mi id urna.',
        cover: EventCover.default,
        image: CoursesCoverModal.default,
        impartedBy: {
            name: 'Jesús Valdéz García',
            ocupation: 'Comunicólogo',
            photo: Person1.default,
        }
    },
    {
        name: 'Transformación digital',
        legend: '¡Vence tus miedos y aprende a expresar tus ideas!',
        organized: 'prototype',
        totalQuote: 50,
        hoursDuration: 8,
        date: '2020-07-25',
        hourStart: '19:00',
        hourFinish: '20:00',
        days: 'Lunes y Viernes',
        location: 'En línea',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum sapien lorem, quis suscipit dolor pulvinar ac. Maecenas mattis arcu maximus, pulvinar magna eget, lacinia odio. Phasellus porttitor, libero a laoreet dictum, ipsum velit venenatis eros, in fringilla neque mi id urna.',
        cover: EventCover.default,
        image: CoursesCoverModal.default,
        impartedBy: {
            name: 'Sandra Estrada Soriano',
            ocupation: 'Comunicólogo',
            photo: Person1.default,
        }
    }],
    inProgress: [{
        name: 'Gestión de equipos',
        cover: EventCover.default,
        completed: '60',
        impartedBy: {
            name: 'Verónica García Bernal',
            ocupation: '-',
            photo: Person1.default,
        }
    },
    {
        name: 'Scrum Agile',
        cover: EventCover.default,
        completed: '20',
        impartedBy: {
            name: 'Javier González Salazar',
            ocupation: '-',
            photo: Person1.default,
        }
    },
    {
        name: 'Inteligencia emocional',
        cover: EventCover.default,
        completed: '100',
        impartedBy: {
            name: 'Gabriel Díaz Flores',
            ocupation: '-',
            photo: Person1.default,
        }
    }]
}