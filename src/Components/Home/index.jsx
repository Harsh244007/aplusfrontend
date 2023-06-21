import React, { useEffect } from 'react';
import './index.css';
import { AiOutlineDownCircle } from "react-icons/ai";
import {
  Box,
  Button,
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
import Appstore from '../../Store/Appstore';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleScroll = () => {
    const currentElement = document.querySelector(".MainHome");
    const nextElement = currentElement.nextElementSibling;
    if (nextElement) {
      const offset = nextElement.offsetTop - 90;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  }
  return (
    <Box className="MainHome" as="section">
      <CaptionCarousel />
      {!Appstore.device ?
        <Button className="scroll-button" onClick={handleScroll}>
          <AiOutlineDownCircle />
        </Button>
        : ""}
    </Box>
  );
};
export default React.memo(Home);
