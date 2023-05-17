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
      w={367}
      // h={390}
      zIndex={100}
      position="relative"
      borderRadius={"24px"}
      maxW={'5xl'}
      // h={190}
      m="auto"
      className='imagereview1'
      spacing={{ base: 4, md: 10 }}
      align={'center'}
      direction={'column'}
    >
      {/* <Box display="flex" flexDir="row" gap={10}> */}

        <Box className="boxofReview2" maxH="320px" minH="210px" maxW="320px">
        
          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            // alignSelf="flex-start"
            className="TEXTOFREVIEW2"
            h={"200px"}
            textAlign={'center'}
          >
            {cards.text}
          </Text>
          <Box
            maxW={'3xl'}
            textAlign={'center'}
            display="flex"
            flexDir="column"
            className="boxofReview3"
            paddingTop="15px"
          >
            <Text fontWeight={600} className="CardsName">
              {cards.name}
            </Text>
            {/* <Text fontWeight={600} className="CardsCity">
              {cards.city}
            </Text> */}
            <span
            className='imagereview'
            // src={Image1}
          />
          </Box>
          
        </Box>
      
      {/* </Box> */}
    </Stack>
  );
};
export default React.memo(SingleReview);
