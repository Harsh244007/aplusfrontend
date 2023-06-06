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
import first from "../../../assets/Rectangle 16.png"
import second from "../.././../assets/Rectangle 162.svg"
import third from "../../../assets/Rectangle 163.png"
import four from "../.././../assets/Rectangle 164.png"
import fifth from "../../../assets/Rectangle 165.png"
import six from "../.././../assets/Rectangle 166.png"
import seven from "../../../assets/Rectangle 167.svg"
import eight from "../.././../assets/Rectangle 168.png"
import main from "../../../assets/image18.png"
import nine from "../.././../assets/Rectangle 169.svg"
import {CategoriesProductCard, SingleProductCard} from './singleproduct';
const FeatureProducts = () => {
  return (
      <Container p={10} maxW={'6xl'} mt={5} as='section'>
        <Flex
          flexWrap="wrap"
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
            href={'/products/Loudspeaker'}
          />{' '}
          <SingleProductCard
            heading={'Micophone'}
            icon={second}
            href={'/products/Micophone'}
          />{' '}
          <SingleProductCard
            heading={'Crossover Networks Active Crossover'}
            icon={third}
            href={'/products/Crossover Networks Active Crossover'}
          />{' '}
          <SingleProductCard
            heading={'Mixer'}
            icon={four}
            href={'/products/Mixer'}
          />{' '}
          <SingleProductCard
            heading={'Amplifier'}
            icon={fifth}
            href={'/products/Amplifier'}
          />{' '}
          <SingleProductCard
            heading={'P.A. Amplifier'}
            icon={six}
            href={'/products/PA Amplifier'}
          />
          <SingleProductCard
            heading={'Wallmount Loudspeaker'}
            icon={seven}
            href={'/products/Wallmount Loudspeaker'}
          />
          <SingleProductCard
            heading={'Loudspeaker System'}
            icon={eight}
            href={'/products/Loudspeaker System'}
          />
          <SingleProductCard
            heading={'Compression Drivers'}
            icon={nine}
            href={'/products/Compression Drivers'}
          />
        </Flex>
      </Container>
    // </Box>
  );
};

export default React.memo(FeatureProducts);
