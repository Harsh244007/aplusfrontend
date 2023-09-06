import React, { useEffect } from 'react';
import './index.css';
import {
  Box,
  Heading,
  Image,
  // Input,
  // InputGroup,
  // InputRightAddon,
  // InputRightElement,
  // SimpleGrid,
  // Stack,
  Text,
  // useColorModeValue,
} from '@chakra-ui/react';
import first from '../../assets/Rectangle 21.png';

import fourth from '../../assets/part/2.jpeg';
import third from '../../assets/part/1.jpeg';
const AboutMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Appstore.setFooter(true)
  }, []);
  return (
    <Box className="MainAboutMain"  as="section">
      <Heading className='headeraboutusmain2'>Discover Our Story</Heading>
      <Box className="firstBoxAbout">
        <Box>
          {/* <Text>Who We Are</Text> */}
          <Text>
            A–Plus is one of India’s leading manufacturer of sound reinforcement
            products that deliver the most faithful and natural reproduction of
            sound in a variety of applications.<br/> Established in 2002, A–Plus
            quickly established itself as a trusted brand in the sound
            reinforcement industry by developing products through continuous
            research & development that perform with absolute reliability even
            in the most extreme operating & climatic conditions.{' '}
          </Text>
        </Box>
        <Box className='firstImagClass' centered>
          <Box className='firstImagsubClass'>

        <Image loading="lazy"
          className="firstImag"
          // boxSize="200px"
          src={first}
          alt="Dan Abramov"
          />
          </Box>
        </Box>
      </Box>
      <Heading className='headeraboutusmain2'>Sonic Mastery: Our Unparalleled Specialty</Heading>
      
      <Box className="SecondBoxAbout">
    
        <Box className='secondImagClass' centered>
          {/* <Center> */}
          
          <Box className='secondImagsubClass'>

        <Image loading="lazy"
          className="firstImag"
          // boxSize="200px"
          src={third}
          alt="Dan Abramov"
          />
          </Box>
        {/* </Center> */}
        </Box>
        <Box>
          {/* <Text>Who We Are</Text> */}
          <Text>
          The diverse portfolio of products comprises of Loud Speakers, Loud Speakers Systems, Amplifiers, Microphones, Mixers, etc. 
          
          <br/>Apart from offering a wide range of acoustic products, we also provide customized solutions to our clients through our team of qualified personnel so that they can enjoy the most remarkable sound just as they want. 
          </Text>
        </Box>
      </Box>
      <Heading className='headeraboutusmain2'>Our Winning Formula</Heading>
      
      <Box className="thirdBoxAbout">
        <Box>
          {/* <Text>Who We Are</Text> */}
          <Text>
          The reason for our success and devotion to this industry is our knowledge of customer’s expectations and desires.<br/> It is our mission to look at our business through their eyes, hence making us the market leader.<br/> We make better products which drives continuous business growth for our partners. 
          </Text>
        </Box>
        <Box className='thirdImagClass' centered>
          {/* <Center> */}
          <Box className='thirdImagsubClass'>

        <Image loading="lazy"
          className="firstImag"
          // boxSize="200px"
          src={fourth}
          alt="Dan Abramov"
          />
        </Box>
          </Box>
      </Box>
      {/* <Box className="SecondBoxAbout">
        <Box className='secondImagClass' centered>
          <Center>
        <Image loading="lazy"
          className="firstImag"
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        </Center>
        </Box>
        <Box>
          <Text>Who We Are</Text>
          <Text>
            A–Plus is one of India’s leading manufacturer of sound reinforcement
            products that deliver the most faithful and natural reproduction of
            sound in a variety of applications. Established in 2002, A–Plus
            quickly established itself as a trusted brand in the sound
            reinforcement industry by developing products through continuous
            research & development that perform with absolute reliability even
            in the most extreme operating & climatic conditions.{' '}
          </Text>
        </Box>
      
      </Box>
      <Box className="thirdBoxAbout">
        {' '}
        <Box>
          <Text>Who We Are</Text>
          <Text>
            A–Plus is one of India’s leading manufacturer of sound reinforcement
            products that deliver the most faithful and natural reproduction of
            sound in a variety of applications. Established in 2002, A–Plus
            quickly established itself as a trusted brand in the sound
            reinforcement industry by developing products through continuous
            research & development that perform with absolute reliability even
            in the most extreme operating & climatic conditions.{' '}
          </Text>
        </Box>
        <Box className='thirdImagClass' centered>
          <Center>
        <Image loading="lazy"
          className="firstImag"
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        </Center>
        </Box>
      </Box> */}
    </Box>
  );
};
export default React.memo(AboutMain);
