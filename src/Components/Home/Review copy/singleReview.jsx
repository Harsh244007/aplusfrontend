import {
  Avatar,
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import './index.css';

import Appstore from '../../../Store/Appstore';

const SingleReview = ({ cards }) => {
  const maxh1=420
  const maxh2=420
  const minh1=420
  const minh2=420
  
  // console.log(cards, 'cards on');
  return (
    <Stack
      py={5}
      px={8}
      minH={200}
      zIndex={100}
      position="relative"
      maxW={'5xl'}
      m="auto"
      spacing={{ base: 4, md: 10 }}
      align={'center'}
      direction={'column'}
    >
      <Box display="flex" flexDir="row" gap={10}>

        <Box className="boxofReview2" maxH="440px" minH="410px" maxW="320px">
          <Avatar
            loading="lazy"
            name="Dan Abrahmov"
            className='imagereview'
            src="https://bit.ly/dan-abramov"
          />
          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            // alignSelf="flex-start"
            textAlign={'center'}
          >
            <q>{cards.text}</q>
          </Text>
          <Box
            maxW={'3xl'}
            textAlign={'center'}
            display="flex"
            flexDir="column"
            className="boxofReview3"
            marginTop="20px"
          >
            <Text fontWeight={600} className="CardsName">
              {cards.name}
            </Text>
            <Text fontWeight={600} className="CardsCity">
              {cards.city}
            </Text>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
export default React.memo(SingleReview);
