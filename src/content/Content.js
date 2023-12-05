import { Box } from '@mui/material';
import React from 'react';
import ContentItems from './ContentItems';
const contentArray = [
  {
    title: 'Software',
    discription:
      'At the lowest programming level, executable code consists of machine language instructions supported by an individual processor—typically a central processing unit (CPU) or a graphics processing unit (GPU). Machine language consists of groups of binary values signifying processor instructions that change the state of the computer from its preceding state. ',
    img: './1.jpg',
  },
  {
    title: 'Hardware',
    discription:
      'At the lowest programming level, executable code consists of machine language instructions supported by an individual processor—typically a central processing unit (CPU) or a graphics processing unit (GPU). Machine language consists of groups of binary values signifying processor instructions that change the state of the computer from its preceding state. ',
    img: './2.jpg',
  },
  {
    title: 'Otherware',
    discription:
      'At the lowest programming level, executable code consists of machine language instructions supported by an individual processor—typically a central processing unit (CPU) or a graphics processing unit (GPU). Machine language consists of groups of binary values signifying processor instructions that change the state of the computer from its preceding state. ',
    img: './3.jpg',
  },
];

const Content = () => {
  return (
    <Box
      bgcolor='#fbf2f2'
      display={'flex'}
      justifyContent={'center'}
      flexDirection='column'
      width='100%'
      height='10%'
    >
      {contentArray.map((cont, index) => (
        <ContentItems
          title={cont.title}
          discription={cont.discription}
          img={cont.img}
          key={index}
          swap={index % 2 === 0}
        />
      ))}
    </Box>
  );
};

export default Content;
