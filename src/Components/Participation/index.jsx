import React, { useEffect } from 'react';
import './index.css';
import {
  Box,
  // Center,
  // Container,
  // Flex,
  Heading,
  Image,
  // Input,
  // InputGroup,
  // InputRightAddon,
  // InputRightElement,
  // SimpleGrid,
  // Stack,
  Text,
  // useColorModeValue,
} from '@chakra-ui/react';
// import Appstore from '../../Store/Appstore';
import { Link, useNavigate } from 'react-router-dom';
import firstImage from '../../assets/part/1.jpeg';
import secondImage from '../../assets/part/2.jpeg';
const Participation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Appstore.setFooter(true)
  }, []);
  const navigate = useNavigate();
  const gotonext = () => {
    navigate('/Mumbai-Expo-2018');
  };

  const gotonext2 = () => {
    navigate('/DJ-Expo-2018');
  };
  return (
    <Box className="MainParticipation" as="section">
      <Heading>Our Participation</Heading>
      <Text maxW="1100px" p={5} m="auto" textAlign="center">
        The reason for our success and devotion to this industry is our
        knowledge of our customer’s expectations and desires. It is our mission
        to look at our business through their eyes, hence . The reason for our
        success and devotion to this industry is our knowledge of our customer’s
        expectations and desires. It is our mission to look at our business
        through their eyes, hence . The reason for our success and devotion to
        this industry is our knowledge of our customer’s expectations and
        desires. It is our mission to look at our business through their eyes,
        hence{' '}
      </Text>
      <Box className="firstBoxparticipation">
        <Box onClick={gotonext}>
          <Image loading="lazy"
            className="firstImagparticipation"
            // boxSize="300px"
            width={'454px'}
            objectFit={'cover'}
            height={'343px'}
            src={firstImage}
            alt="Mumbai Expo, 2018"
          />
          <Text>Mumbai Expo, 2018</Text>
          <Link className="linkinparticipation">View More</Link>
        </Box>
        <Box onClick={gotonext2}>
          <Image loading="lazy"
            className="firstImagparticipation"
            // boxSize="300px"
            width={'454px'}
            objectFit={'cover'}
            height={'343px'}
            src={secondImage}
            alt="DJ Expo, 2018"
          />
          <Text>DJ Expo, 2018</Text>
          <Link className="linkinparticipation">View More</Link>
        </Box>
      </Box>
    </Box>
  );
};
export default React.memo(Participation);
