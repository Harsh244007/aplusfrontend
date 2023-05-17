import React from 'react';
import './index.css';
import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Avatar,
  keyframes,
  SimpleGrid,
  Button,
  Image,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Textarea,
  InputLeftElement,
} from '@chakra-ui/react';
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { RxAvatar } from 'react-icons/rx';
const Getintouch = () => {
  return (
    <Box className="MainGetingTouch" as="section">
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Contact our sales team
        </Heading>
        <Text>
          Our team is happy to answer your sales questions. Fill out the form
          and we'll be in touch as soon as possible
        </Text>
      </Stack>
      <Container p={5} maxW={'2xl'} mt={5}>
        <Box p={10} className="firstBoxGETINTOUCH">
          <Box className="emailinput">
            <Text>Your full name</Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<RxAvatar />} />
              <Input
                variant="filled"
                h="40px"
                placeholder="Yogesh Mehndiratta"
              />
            </InputGroup>
          </Box>
          <Box className="emailinput">
            <Text>Your work email</Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
              <Input
                variant="filled"
                h="40px"
                placeholder="sound_solutions2002@yahoo.com"
              />
            </InputGroup>
          </Box>
          <Box className="emailinput">
            <Text>Your mobile</Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<PhoneIcon />} />
              <Input variant="filled" h="40px" placeholder="9810290979" />
            </InputGroup>
          </Box>
          <InputGroup className="nessageinput">
            <Text>Your message</Text>
            <Textarea
              variant="filled"
              borderRadius={0}
              h="150px"
              placeholder="Tell us in brief what your query is about."
            />
          </InputGroup>
          <Box display="flex" justifyContent="flex-end">
            <Button
              textAlign="right"
              color="white"
              background="#6876e2"
              className="buttonSubmit"
              w={100}
              borderRadius={5}
              variant="solid"
            >
              Submit
            </Button>
          </Box>
        </Box>{' '}
      </Container>
    </Box>
  );
};

export default React.memo(Getintouch);
