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
    <Box ref={drop} p={4} border="1px" borderColor="gray.200" borderRadius="md">
      <ReactQuill value={value} onChange={onChange} />
    </Box>
  );
};

export default TextEditor;