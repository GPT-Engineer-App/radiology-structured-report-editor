import React from 'react';
import { useDrag } from 'react-dnd';
import { Box } from '@chakra-ui/react';

const DraggablePhrase = ({ phrase }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PHRASE',
    item: { phrase },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Box
      ref={drag}
      p={2}
      m={1}
      bg={isDragging ? 'gray.300' : 'gray.100'}
      borderRadius="md"
      cursor="move"
      opacity={isDragging ? 0.5 : 1}
    >
      {phrase}
    </Box>
  );
};

export default DraggablePhrase;