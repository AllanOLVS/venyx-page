import fotoAllan from '../assets/image-profile-team/Foto-Allan-Profissional.jpg';
import fotoGabriel from '../assets/image-profile-team/foto-gabriel-profissional.jpeg';
import fotoLucas from '../assets/image-profile-team/foto-lucas-profissional.jpeg';

export const team = [
    {
        name: 'Allan Oliveira',
        role: 'Co-Founder & Software Engineer',
        github: 'https://github.com/AllanOLVS',
        linkedin: 'https://www.linkedin.com/in/allan-oliveira-224120260',
        image: fotoAllan,
    },
    {
        name: 'Gabriel Leal',
        role: 'Co-Founder & Software Engineer',
        github: 'https://github.com/Gabriellealsantos',
        linkedin: 'https://www.linkedin.com/in/gabriel-leal-santos/',
        image: fotoGabriel,
    },
    {
        name: 'Lucas Torres',
        role: 'Co-Founder & Software Engineer',
        github: 'https://github.com/lucas-torres10',
        linkedin: 'https://www.linkedin.com/in/lucas-torres-05879a221/',
        image: fotoLucas,
    },
    {
        name: 'Uillian Leal',
        role: 'Co-Founder & Software Engineer',
        github: '',
        linkedin: '',
        image: null,
    },
];

// Os quatro sócios são fullstack e dividem a mesma stack.
export const sharedStack = [
    { layer: 'Front-end', techs: ['React', 'JavaScript', 'Tailwind'] },
    { layer: 'Back-end', techs: ['Java', 'Spring', 'Node.js', 'Python'] },
    { layer: 'Dados e nuvem', techs: ['SQL', 'AWS'] },
];

export const initials = (name) =>
    name
        .split(' ')
        .map((part) => part[0])
        .join('');
