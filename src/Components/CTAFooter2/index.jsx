import React from 'react';
import './index.css';
import { Box, Button } from '@chakra-ui/react';
import {
  IoIosCall,
  // IoLogoWhatsapp,
} from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Appstore from '../../Store/Appstore';
import { observer } from 'mobx-react';

const CTAFooter = observer(() => {
  return (
    <Box
      className="mainCTAFooter"
      as="section"
      position={'fixed'}
      w={'full'}
      h={'50px'}
      m={'auto'}
      color={'#fff'}
    >
      {/* {Appstore.device2 ? (
        <>
          <a target="_blank" href="tel:09810290979">
            <Button className="callcta">
              <IoIosCall />
              Call Us
            </Button>
          </a>

          <a target="_blank" href="https://wa.me/+919810290979/?text=Hello%20There%20I%20saw%20Your%20products%20in%20your%20website%20I%20would%20like%20to%20know%20more%20about%20it">
            <Button className="whatsappcta">
              <FaWhatsapp />
              Whatsapp
            </Button>
          </a>
        </>
      ) : ( */}
      <Box className='callUsClass'>

          <a target="_blank" href="tel:09810290979">
            <Button className="callcta">
              <IoIosCall />
              Call Us
            </Button>
          </a>
      </Box>
        <a target="_blank" href="https://wa.me/+919810290979/?text=Hello%20There%20I%20saw%20Your%20products%20in%20your%20website%20I%20would%20like%20to%20know%20more%20about%20it">
          <Button className="whatsappcta">
            <FaWhatsapp />
          </Button>
        </a>
        {/* <>
        </> */}
      {/* )} */}
    </Box>
  );
});
export default React.memo(CTAFooter);
