import React from 'react';
import './index.css';
import {
  Box,
  // Container,
  // Flex,
  Heading,
  // Input,
  // InputGroup,
  // InputRightAddon,
  // Avatar,
  // keyframes,
  // SimpleGrid,
  // Button,
  Image,
  // Icon,
  Stack,
  Text,
  // useColorModeValue,
} from '@chakra-ui/react';

import Appstore from '../../../Store/Appstore';
import { AiOutlineArrowRight, AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const SingleProductCard = React.memo(({ heading, description, icon, href ,referLink=false,onClick}) => {
// if(onClick == undefine) onClick=()={()=>{}}
  return (
    <>
    {!referLink?
    <Link to={href} >
    <Box
      maxW="200px"
      // w={'full'}
      className="featueProductsCard1"
      // borderWidth="1px"
      borderRadius="6px"
      h={285}
      w="219px"
      // h="236px"
      overflow="hidden"
      // p={5}
    >
      <Stack className='featueProductsCard1FirstBox'  p={4} background={`#F8FBFD`} rowGap={5}>
        <Image loading="lazy"
          src={icon}
          w="179px"
          height="196px"
          objectFit="contain"
          alt={heading}
          borderRadius={0}
          // className="featuredprocutsimage"
        />
      </Stack>
      <Box className="overlay"></Box>
      <Box className='featueProductsCard1SecondBox' mt={2}>
        <Heading overflow={"visible"} height={"auto"} fontSize={18} fontWeight={600} size="md" position={"relative"} zIndex={5}>
          {heading}
        </Heading>
      </Box>
    </Box>
    </Link>:
    
    <a href={href} target="_blank">
      <Box
      maxW="200px"
      // w={'full'}
      className="featueProductsCard1"
      // borderWidth="1px"
      borderRadius="6px"
      h={285}
      w="219px"
      // h="236px"
      overflow="hidden"
      // p={5}
    >
      <Stack align={'center'} p={4} background={`#F8FBFD`} rowGap={5}>
        <Image loading="lazy"
          src={icon}
          w="179px"
          height="196px"
          objectFit="contain"
          alt={heading}
          borderRadius={0}
          // className="featuredprocutsimage"
        />
        {/* <Button variant={'solid'} size={'md'}>
          View Product
        </Button> */}
      </Stack>

      <Box mt={2}>
        <Heading fontSize={20} fontWeight={600} size="md">
          {heading}
        </Heading>
      </Box>
    </Box>
      </a>}
    </>
  );
});
const CategoriesProductCard = React.memo(({ icon }) => {

  return (
    <Box
      maxW="219px"
      // w={'full'}
      className="featueProductsCard2"
      // borderWidth="1px"
      borderRadius="16px"
      w="219px"
      // h="236px"
      overflow="hidden"
      // p={5}
    >
      <Heading className="headerfeatureprod">All Categories</Heading>
      <Text className="textfeatureprod">
        View All{' '}
        {Appstore.device ? <AiOutlineArrowRight /> : <AiOutlineArrowDown />}
      </Text>
      {/* <Stack align={'center'} p={5} background={`#F8FBFD`} rowGap={5}> */}
      <Image loading="lazy"
        src={icon}
        w="219px"
        height="284px"
        objectFit="contain"
        // alt={heading}
        borderRadius={0}
        // className="featuredprocutsimage"
      />
      {/* <Button variant={'solid'} size={'md'}>
          View Product
        </Button> */}
      {/* </Stack> */}

      {/* <Box mt={2}> */}

      {/* <Heading fontSize={20} fontWeight={600} size="md">{heading}</Heading> */}
      {/* </Box> */}
    </Box>
  );
});

export { SingleProductCard, CategoriesProductCard };
