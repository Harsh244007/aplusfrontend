import React, { useEffect } from 'react';
import './index.css';
import {
  Box,
  // Container,
  // Flex,
  // Heading,
  // Input,
  // InputGroup,
  // InputRightAddon,
  // InputRightElement,
  // SimpleGrid,
  // Stack,
  // Text,
  // useColorModeValue,
} from '@chakra-ui/react';
import CaptionCarousel from './mainCarousal';
const Home = () => {
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
