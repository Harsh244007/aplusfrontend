import React from 'react';
import './index.css';
// import main from '../../../assets/Rectangle 14.png';
import main from "../../../assets/black bg.png"
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import first from '../../../assets/Rectangle 21.png';
import second from '../../../assets/Rectangle 22.png';
import third from '../../../assets/part/1.jpeg';
import fourth from '../../../assets/part/2.jpeg';
const AboutUSMain = () => {
  return (
    <Box className="MainAboutUS" backgroundImage={main} as="section">
      <Box className='secondheaderaboutusBox'  maxW={"1400px"} m="auto">

      <Heading className='secondheaderaboutus' >ABOUT US</Heading>
      </Box>
      <Box maxW='1200px' m="auto">
        <Heading className="titleheaderabout">About A-Plus</Heading>
        <Text className="textabout">
          A–Plus is one of India’s leading manufacturer of sound reinforcement
          products that deliver the most faithful and natural reproduction of
          sound in a variety of applications.
        </Text> 
        <Box className="ImagesAboutUs">
          <Image loading="lazy" className="imagesaboutussa" src={first} />
          <Image loading="lazy" className="imagesaboutussa" src={second} />
          <Image loading="lazy" className="imagesaboutussa" src={third} />
          <Image loading="lazy" className="imagesaboutussa" src={fourth} />
          <Image loading="lazy" className="imagesaboutussa" src={first} />
          <Image loading="lazy" className="imagesaboutussa" src={second} />
          <Image loading="lazy" className="imagesaboutussa" src={third} />
          <Image loading="lazy" className="imagesaboutussa" src={fourth} />
          <Image loading="lazy" className="imagesaboutussa" src={first} />
          <Image loading="lazy" className="imagesaboutussa" src={second} />
          <Image loading="lazy" className="imagesaboutussa" src={third} />
          <Image loading="lazy" className="imagesaboutussa" src={fourth} />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUSMain;
