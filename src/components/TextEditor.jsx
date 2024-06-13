import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box } from '@chakra-ui/react';
import { useDrop } from 'react-dnd';

const TextEditor = ({ value, onChange }) => {
  const [, drop] = useDrop(() => ({
    accept: 'PHRASE',
    drop: (item) => {
      onChange(value + ' ' + item.phrase);
    },
  }));

  return (
    <Box ref={drop} p={4} border="1px" borderColor="teal.500" borderRadius="md" bg="gray.800" color="white">
      <ReactQuill value={value} onChange={onChange} theme="snow" />
    </Box>
  );
};

export default TextEditor;