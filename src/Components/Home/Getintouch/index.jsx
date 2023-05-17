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
import image from '../../../assets/woman-writing-on-paper-3228878.png';
const Getintouch = () => {
  return (
    <Box className="MainGetingTouch" as="section">
     
      <Box className="mainget" p={10} mt={5}>
        <Box className="firstofgetintouch" background={`url(${image})`}>
          <Heading className="headerfirsofget">
            We are here to help you in all your needs.
          </Heading>
          <Text className="textfirstofgetTou">
            Our team is happy to answer your sales questions. Fill out the form
            and we'll be in touch as soon as possible
          </Text>
        </Box>

        <Container
          bg={'#001620'}
          className="containergetintouch"
          maxW={'573px'}
          p={'20px 0px'}
        >
          <Box p={10} className="firstBoxGETINTOUCH">
            <Heading className='headeringgetintouch2' fontFamily={"'Dosis','sans-serif'"} fontSize={'48px'} color={'white'} fontWeight={'500px'}>
              Send inquiry
            </Heading>
            <Text
              mb={'20px'}
              fontSize={'16px'}
              fontFamily={"'Inter','sans-serif'"}
              color={'white'}
              fontWeight={'500px'}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </Text>
            <Box className="emailinput" w={'full'}>
              {/* <Text>Your full name</Text> */}
              <InputGroup>
                {/* <InputLeftElement pointerEvents="none" children={<RxAvatar />} /> */}
                <Input
                  variant="filled"
                  h="64px"
                  // borderRadius={'41px'}

                  borderRadius={'41px'}
                  placeholder="Your Name"
                />
              </InputGroup>
            </Box>
            <Box className="emailinput" w={'full'}>
              {/* <Text>Your work email</Text> */}
              <InputGroup>
                {/* <InputLeftElement pointerEvents="none" children={<EmailIcon />} /> */}
                <Input
                  variant="filled"
                  h="64px"
                  borderRadius={'41px'}
                  placeholder="Email"
                />
              </InputGroup>
            </Box>
            {/* <Box className="emailinput" w={"full"}> */}
            {/* <Text>Your mobile</Text> */}
            {/* <InputGroup> */}
            {/* <InputLeftElement pointerEvents="none" children={<PhoneIcon />} /> */}
            {/* <Input
                  borderRadius={'41px'}
                  variant="filled"
                  h="64px"
                  placeholder="Phone Number"
                />
              </InputGroup>
            </Box> */}
            <InputGroup className="nessageinput" w={'full'}>
              {/* <Text>Your message</Text> */}
              {/* <Textarea
              variant="filled"
              borderRadius={0}
              h="150px"
            /> */}
              <Input
                variant="filled"
                className="messagebox"
                h="64px"
                borderRadius={'41px'}
                placeholder="Message"
                // placeholder="Email"
              />
            </InputGroup>
            <Box display="flex" justifyContent="flex-end">
              <Button
                // textAlign="right"
                color="white"
                background="#FF4E00"
                className="buttonSubmit"
                h={'64px'}
                w={'full'}
                m={'auto'}
                // p={'15px 51px'}
                p={'0px'}
                fontSize={'18px'}
                borderRadius={'41px'}
                variant="solid"
              >
                Send an Inquiry
              </Button>
            </Box>
            <Text m={'auto'} color={'white'}>
              Get in touch with us {'-->'}
            </Text>
          </Box>{' '}
        </Container>
      </Box>
    </Box>
  );
};

export default React.memo(Getintouch);
