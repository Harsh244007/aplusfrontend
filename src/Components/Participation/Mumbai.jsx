import React, { useEffect } from 'react';
import './index.css';
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Button,
  InputRightAddon,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Appstore from '../../Store/Appstore';
import { Link, useNavigate } from 'react-router-dom';
import firstImage from '../../assets/part/1.jpeg';
import secondImage from '../../assets/part/12.jpeg';
import thirdImage from '../../assets/part/13.jpeg';
import fourthImage from '../../assets/part/14.jpeg';
import fifthImage from '../../assets/part/15.jpeg';
import ProgressBar from '@badrap/bar-of-progress';
const Mumbai = () => {
  const progress = new ProgressBar({
    size: 2,
    color: "#29e",
    className: "bar-of-progress",
    delay: 80,
    });
    setTimeout(() => {
      progress.finish();
    }, 2000);
  useEffect(() => {
    window.scrollTo(0, 0);
    // Appstore.setFooter(true)
  }, []);
  const navigate = useNavigate();
  const gotonext = () => {
    navigate('/participation');
  };
  return (
    <Box className="MainParticipation" as="section">
      <Box display={'flex'} flexDir="column" p={2}>
        <Heading>Mumbai Expo, 2018</Heading>
        <Button
          width="100px"
          float={'left'}
          position={'inherit'}
          onClick={gotonext}
        >
          Go Back
        </Button>
      </Box>
      <Box className="firstBoxparticipationImage">
        <Image loading="lazy"
          className="imagesmumbai"
          src={firstImage}
          alt="Mumbai Expo, 2018"
        />
        <Image loading="lazy"
          className="imagesmumbai"
          src={secondImage}
          alt="Mumbai Expo, 2018"
        />
        <Image loading="lazy"
          className="imagesmumbai"
          src={thirdImage}
          alt="Mumbai Expo, 2018"
        />
        <Image loading="lazy"
          className="imagesmumbai"
          src={fourthImage}
          alt="Mumbai Expo, 2018"
        />
        <Image loading="lazy"
          className="imagesmumbai"
          src={fifthImage}
          alt="Mumbai Expo, 2018"
        />
      </Box>
    </Box>
  );
};
export default React.memo(Mumbai);
