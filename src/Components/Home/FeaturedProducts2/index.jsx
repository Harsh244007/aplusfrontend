import React from 'react';
import './index.css';
import {
  Box,
  Image,
  Text,
} from '@chakra-ui/react';
import first from '../../../assets/firstFeatureImage.svg';
import third from '../../../assets/secondFeatureMainImage.svg';
import four from '../.././../assets/secondFeatureImageBG.svg';
import bfImage2 from "../../../assets/pattern-61.svg"
import nine from '../../../assets/image 20.svg';
import thirdMain from '../../../assets/thirdFeatureMain.svg'
import thirdBg from '../../../assets/thirdFeatureImageBG.svg'
import leftArrow from '../../../assets/LeftArrow.svg'
const FeatureProducts2 = () => {
  return (
    <Box className="MainFeatureProducts2" bgImage={bfImage2} as="section">
      <Text className='featuredproducts'>FEATURED PRODUCTS</Text>
      <Box className="firstFeaturedProducts2">
        <Box justifyContent={"center"} display={"flex"} flexDir={"column"} gap={"10px"}>
          <Text className="firstfeaturedText1">USB 3000</Text>
          {/* <Text className="firstfeaturedText2">
            MP3 Player with USB, SD, MMC Card Reader, FM Tuner and Bluetooth
          </Text> */}
          <Text className='discoverMoreArrowFeature'>Discover More<Image src={leftArrow}/></Text>

          {/* <Button className='buttonoffeaturedproducts' >View</Button> */}
        </Box>
        <Box backgroundImage={thirdBg} className="firstfeaturedImage1 uniqueimage1">
          <Image loading="lazy" src={nine} className="firstImageFeatured" />
        </Box>
      </Box>
      <Box className="firstFeaturedProducts2 firstFeaturedProducts20">
  
        <Box justifyContent={"center"} display={"flex"} flexDir={"column"} gap={"20px"}>
          <Text className="firstfeaturedText1">R-925</Text>
          {/* <Text className="firstfeaturedText2">1200w-1800w Into 4 ohm
          </Text> */}
          <Text className='discoverMoreArrowFeature'>Discover More<Image src={leftArrow}/></Text>

          {/* <Button className='buttonoffeaturedproducts' >View</Button> */}
        </Box>
        <Box backgroundImage={thirdBg} className="firstfeaturedImage1 uniqueimage3">
          <Image loading="lazy" src={third} className="firstImageFeatured" />
        </Box>
      </Box>
    
      <Box className="firstFeaturedProducts2">
        <Box justifyContent={"center"} display={"flex"} flexDir={"column"} gap={"20px"}>
          <Text className="firstfeaturedText1">VAM 6060</Text>
          {/* <Text className="firstfeaturedText2">2*1800W@8OHM /
          2*2400W@4OHM /
          2*3000W@2OHM
          </Text> */}
          <Text className='discoverMoreArrowFeature'>Discover More<Image src={leftArrow}/></Text>
          {/* <Button className='buttonoffeaturedproducts' >View</Button> */}
        </Box>
        <Box bgImage={thirdBg} className="firstfeaturedImage1 uniqueimage2">
          <Image loading="lazy" src={thirdMain} className="firstImageFeatured" />
        </Box>
      </Box>
    
    </Box>
  );
};

export default React.memo(FeatureProducts2);
