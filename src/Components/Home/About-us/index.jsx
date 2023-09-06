import React from 'react';
import './index.css';
import {
  Box,
  Container,
  // Flex,
  Heading,
  // Input,
  // InputGroup,
  // InputRightAddon,
  // Avatar,
  // keyframes,
  // SimpleGrid,
  Button,
  Image,
  // Icon,
  // Stack,
  Text,
  // useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import image from "../../../assets/aboutus.jpg"
const About = () => {
  return (
    <Box className="MainAbout" as="section">
      <Container p={2} maxW={'6xl'} mt={1}>
        <Box className="mainBoxAbout">
          <Box className="firstBoxAbout">
            <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
              A little bit about us
            </Heading>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              tenetur debitis cumque praesentium adipisci, quod deserunt beatae
              commodi est, temporibus esse assumenda sapiente placeat magnam
              nostrum dicta pariatur laboriosam at.
            </Text>
            {/* <Box display="flex" justifyContent="center"> */}
            <Button
              textAlign="right"
              color="white"
              display="flex"
              gap="13px"
              background="#13e7f5"
              w={150}
              className="buttonSubmit"
              h={50}
              borderRadius={5}
              variant="outline"
            >
              Know more <AiOutlineArrowRight className='svgaioutline' />
            </Button>
            {/* </Box> */}
          </Box>
          <Box className="secondBoxAbout">
            <Image loading="lazy"
              src={image}
              alt="About us product Image"
              className="aboutusImage"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default React.memo(About);
