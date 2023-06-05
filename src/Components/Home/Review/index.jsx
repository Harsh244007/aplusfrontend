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
  // Avatar,
  // keyframes,
  // SimpleGrid,
  // Stack,
  // Text,
  // useColorModeValue,
  // Image,
} from '@chakra-ui/react';
import ReviewCarousel from "./carousal"
// import Appstore from '../../../Store/Appstore';
const Reviews = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Appstore.setFooter(true)
  }, []);
  return (
      <Box className="MainReview"  as="section">
        <ReviewCarousel />
      </Box>
  );
};
export default React.memo(Reviews);
