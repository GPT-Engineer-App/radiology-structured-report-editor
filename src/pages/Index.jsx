import React, { useState } from 'react';
import { Container, Text, VStack, Box, Heading, Button } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggablePhrase from '../components/DraggablePhrase';
import TextEditor from '../components/TextEditor';

const Index = () => {
  const [editorContent, setEditorContent] = useState('');
  const phrases = [
    'No acute fracture or dislocation.',
    'Lungs are clear.',
    'Heart size is normal.',
    'No pleural effusion or pneumothorax.',
  ];

  return (
    <Container centerContent maxW="container.lg" py={10} bg="gray.900" color="white">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" color="teal.300">Radiology Structured Report</Heading>
        <Text fontSize="lg" color="teal.100">Drag and drop phrases into the text editor below:</Text>
        <DndProvider backend={HTML5Backend}>
          <Box width="100%" display="flex" flexDirection="row" justifyContent="space-between">
            <Box width="30%" p={4} border="1px" borderColor="teal.500" borderRadius="md" bg="gray.800">
              <Heading as="h2" size="md" mb={4} color="teal.300">Phrases</Heading>
              {phrases.map((phrase, index) => (
                <DraggablePhrase key={index} phrase={phrase} />
              ))}
            </Box>
            <Box width="65%">
              <TextEditor value={editorContent} onChange={setEditorContent} />
            </Box>
          </Box>
        </DndProvider>
        <Button mt={4} colorScheme="teal" size="lg">Submit Report</Button>
      </VStack>
    </Container>
  );
};

export default Index;