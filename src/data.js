import { pictures } from './components/Card.jsx';

const data = [
   {  
      id: 1,
      name: 'Rick Sanchez',
      cla: "rick",
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: '',
      },
      image: pictures["1"],
   },
   {
      id: 2,
      cla: "morty",
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'unknown',
         url: '',
      },
      image: pictures["2"],
   },
   {
      id: 3,
      cla: "summer",
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',
      origin: {
         name: 'Earth (Replacement Dimension)',
         url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: pictures["3"],
   },
   {
      id: 4,
      cla: "beth",
      name: 'Beth Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',
      origin: {
         name: 'Earth (Replacement Dimension)',
         url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: pictures["4"],
   },
   {
      id: 5,
      cla: "jerry",
      name: 'Jerry Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (Replacement Dimension)',
         url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: pictures["5"],
   },
];

export default data;