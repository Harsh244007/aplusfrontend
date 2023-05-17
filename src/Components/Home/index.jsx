import React, { useEffect } from 'react';
import './index.css';
import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Appstore from '../../Store/Appstore';
import CaptionCarousel from './mainCarousal';
import Header from '../Header';

import ProgressBar from "@badrap/bar-of-progress";
const Home = () => {
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
  }, []);
  return (
    <Box className="MainHome" as="section">
      <CaptionCarousel />
    </Box>
  );
};
export default React.memo(Home);
