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
  Stack,
  Text,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import ReviewCarousel from "./carousal"
const Reviews = () => {
  return (
      <Box className="MainReview"  as="section">
        <ReviewCarousel />
      </Box>
  );
};
export default React.memo(Reviews);
