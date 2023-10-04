import React, { useEffect } from 'react';
import './index.css';
import {
  Box, Heading,
} from '@chakra-ui/react';
import CATELOGUE from "../../assets/Aplus Catalog July 2023.pdf"
const Brochure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Appstore.setFooter(true)
  }, []);
  return (
    <Box className="MainBrochureMain"  as="section">
      <Heading className='headeraboutusmain2' mb={"20px"}>Our Catalogue</Heading>
      <iframe src={CATELOGUE} width={"100%"} height={"1000px"}  />
    </Box>
  );
};
export default React.memo(Brochure);
