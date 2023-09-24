import React from 'react';
import './index.css';
import {
  // Box,
  Container,
  Flex,
  // Heading,
  // Input,
  // InputGroup,
  // InputRightAddon,
  // Avatar,
  // keyframes,
  // SimpleGrid,
  // Button,
  // Image,
  // Icon,
  // Stack,
  // Text,
  // useColorModeValue,
} from '@chakra-ui/react';
import first from "../../../assets/showcaseproduct2019-05-2887109266.jpg"
import activeSpeaker from "../../../assets/showcaseproduct2019-05-2921343588.jpg"
import second from "../.././../assets/showcaseproduct2019-05-2983048629.jpg"
import third from "../../../assets/Rectangle 163.png"
import four from "../.././../assets/Rectangle 164.png"
import fifth from "../../../assets/Rectangle 165.png"
import six from "../.././../assets/Rectangle 166.png"
import seven from "../../../assets/Rectangle 167.svg"
import eight from "../.././../assets/Rectangle 168.png"
import main from "../../../assets/image18.svg"
import nine from "../.././../assets/Rectangle 169.svg"
import {CategoriesProductCard, SingleProductCard} from './singleproduct';
const FeatureProducts = () => {
  return (
      <Container p={10} maxW={'6xl'} mt={5} as='section'>
        <Flex
          flexWrap="wrap"
          className='MainCategories'
          // gridGap={2}
          justifyContent="space-around"
          alignItems="center"
          w="full"
          gap={2}
          // justify="center"
        >
          <CategoriesProductCard icon={main}/>
          <SingleProductCard
            heading={'Loudspeaker'}
            icon={first}
            href={'/products/1/Loudspeakers'}
          />{' '}
          <SingleProductCard
            heading={'Active Speakers'}
            icon={activeSpeaker}
            href={'/products/11/Active Speakers'}
          />{' '}
          <SingleProductCard
            heading={'Micophone'}
            icon={second}
            href={'/products/3/Microphones'}
          />{' '}
          <SingleProductCard
            heading={'Crossover Networks Active Crossover'}
            icon={third}
            href={'/products/7/Crossover Networks'}
          />{' '}
          <SingleProductCard
            heading={'Mixer'}
            icon={four}
            href={'/products/4/Mixers'}
          />{' '}
          <SingleProductCard
            heading={'Amplifier'}
            icon={fifth}
            href={'/products/5/Amplifiers'}
          />{' '}
          <SingleProductCard
            heading={'P.A. Amplifier'}
            icon={six}
            href={'/products/5/Amplifiers'}
          />
          <SingleProductCard
            heading={'Wallmount & install Loudspeaker'}
            icon={seven}
            href={'/products/8/Wallmount Speakers'}
          />
          <SingleProductCard
            heading={'Loudspeaker System'}
            icon={eight}
            href={'/products/2/Loudspeaker System'}
          />
          <SingleProductCard
            heading={'Compression Drivers'}
            icon={nine}
            href={'/products/6/Compression Drivers'}
          />
        </Flex>
      </Container>
    // </Box>
  );
};

export default React.memo(FeatureProducts);
