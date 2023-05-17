import React from 'react';
import './index.css';
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const SubFooter = () => {
  return (
    <Box
      as="section"
      bg={'#001620'}
      // bg="#6876e2"
      // pb={"50px"}
      color={'#fff'}
    >
      <Container maxW={'6xl'} py={2}>
        <Box className="boxmainFooter">
          <Text className="footersublast">
            © {new Date().getFullYear()} A Plus Audios Inc. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
export default React.memo(SubFooter);
