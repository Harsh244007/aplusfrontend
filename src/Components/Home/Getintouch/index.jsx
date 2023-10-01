import React, { useState } from 'react';
import './index.css';
import {
  Box,
  Container,
  Heading,
  Input,
  InputGroup,
  Button,
  Text,
} from '@chakra-ui/react';
import image from '../../../assets/woman-writing-on-paper-3228878.png';

const Getintouch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
      setError('');
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSendInquiry = () => {
    if (!name || !email || !message) {
      setError('Please fill in all fields');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    let nameChar = '';
    const newCharSpace = name.split(' ');
      for (let i = 0; i < newCharSpace.length; i++) {
        nameChar = nameChar+newCharSpace[i] + '%20';
      }
    let messageChar = '';
    const newMessageSpace = message.split(' ');
      for (let i = 0; i < newMessageSpace.length; i++) {
        messageChar = messageChar+newMessageSpace[i] + '%20';
      }

    const url = `https://wa.me/+919811670799/?text=Hello%20There%0a%0aI%20Have%20visited%20your%20website%20and%0a%0aI%20have%20a%20query%20regarding%20your%20products%20In%20your%20website%0a%0aName%20:%20${nameChar}%0aEmail%20:%20${email}%0aMessage%20:%20${messageChar}`;
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    window.open(url);
  };

  const isValidEmail = email => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <Box className="MainGetingTouch" as="section">
      <Box className="mainget" p={10}>
        <Box className="firstofgetintouch" background={`url(${image})`}>
          <Heading className="headerfirsofget">
            We are here to help you in all your needs.
          </Heading>
        </Box>
        <Container
          bg={'#001620'}
          className="containergetintouch"
          maxW={'503px'}
          p={'20px 0px'}
        >
          <Box p={10} className="firstBoxGETINTOUCH">
            <Heading
              className="sendInquiryDesktop"
              fontFamily={"'Dosis','sans-serif'"}
              color={'white'}
            >
              Send Inquiry
            </Heading>
            <Text
              mb={'20px'}
              className="contactUsExtraText"
              color={'white'}
              fontWeight={'500px'}
            >
              Our team is happy to answer your sales questions. Fill out the
              form and we'll be in touch as soon as possible.
            </Text>
            <Box className="emailinput" w={'full'}>
              <InputGroup>
                <Input
                  variant="filled"
                  h="64px"
                  borderRadius={'41px'}
                  placeholder="Your Name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Box>
            <Box className="emailinput" w={'full'}>
              <InputGroup>
                <Input
                  variant="filled"
                  h="64px"
                  borderRadius={'41px'}
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </Box>
            <InputGroup className="nessageinput" w={'full'}>
              <Input
                variant="filled"
                className="messagebox"
                h="64px"
                borderRadius={'41px'}
                placeholder="Message"
                name="message"
                value={message}
                onChange={handleInputChange}
              />
            </InputGroup>
            {error && <Text color="red.500">{error}</Text>}
            <Box display="flex" justifyContent="flex-end">
              <Button
                color="black"
                background="#13e7f5"
                className="buttonSubmit"
                h={'64px'}
                w={'full'}
                m={'auto'}
                p={'0px'}
                fontSize={'18px'}
                borderRadius={'41px'}
                variant="solid"
                onClick={handleSendInquiry}
              >
                Send an Inquiry
              </Button>
            </Box>
            <Text m={'auto'} color={'white'}>
              Get in touch today
            </Text>
          </Box>{' '}
        </Container>
      </Box>
    </Box>
  );
};

export default React.memo(Getintouch);
