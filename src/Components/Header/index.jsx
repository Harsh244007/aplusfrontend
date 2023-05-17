import React, { useEffect, useRef, useState } from 'react';
import { ColorModeSwitcher } from '../Common/ColorModeSwitcher';
import {
  Box,
  Heading,
  IconButton,
  Image,
  Img,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import './index.css';
import Appstore from '../../Store/Appstore';
import Dropdown from './dropdown';
import { observer } from 'mobx-react';
import Desktopdropdown from './desktopdropdown';
import { SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
// import Logo from '../../assets/logo.svg';

import logomain from "../../assets/Aplus-logo-225x108.svg"
// import Logo2 from '../../assets/logo2.svg';
import { CiSearch } from 'react-icons/ci';
const Header = observer(({ BG = false }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    Appstore.setMode(localStorage.getItem(colorMode));
  }, [colorMode]);
  console.log(BG, 'backgroundof header');
  const searchIconColor = 'gray.700';
  const inputBg = 'gray.800';

  const targetRef = useRef('');

  return (
    <Box className={`mainHeader ${Appstore.footer || BG ? 'mainHeader2' : ''}`} as='section'>
      <Box className="header" textAlign="center">
        <HeaderLogo colorMode={colorMode} Logo={logomain} />
        {/* </Box>
      <Box className="secondHeader"> */}
        {Appstore.device === 0 ? (
          <Box display="flex" flexDir={'row'} gap={15}>
            <InputGroup
              display={'flex'}
              alignItems={'center'}
              className="inputheaderSearchMain"
              size="xl"
            >
              <Input
                pr=".5rem"
                className="inputheaderSearch"
                type={'text'}
                w={'280px'}
                placeholder="Search"
              />
              <InputRightElement marginBottom={'6px'} right={'6px'}>
                <CiSearch className="inputheaderSearchIcon" />
              </InputRightElement>
            </InputGroup>
            <Box className="desktopSlider">
              <Dropdown />
            </Box>
          </Box>
        ) : (
          <>
            <Desktopdropdown />
            <InputGroup className="inputheaderSearchMain" size="xl">
              <Input
                pr=".5rem"
                className="inputheaderSearch"
                type={'text'}
                w={'230px'}
                placeholder="Search"
              />
              <InputRightElement  marginBottom={'6px'} right={'6px'}>
                <CiSearch className="inputheaderSearchIcon" />
              </InputRightElement>
            </InputGroup>
          </>
        )}
      </Box>
    </Box>
  );
});

export default React.memo(Header);

function HeaderLogo({ colorMode, Logo}) {
  return (
    <Box className="titleText">
      <Link to="/">
        <Image loading="lazy"
          src={Logo}
          alt="Aplus Audios"/>
        {/* //   <Heading className={`HeaderText`} */}
          {/* // src={`${colorMode != 'dark' ? Logo : Logo2}`}
          // alt="Aplus Audios"
        // >
        //   A-Plus */}
        {/* // </Heading> */}
      </Link>
    </Box>
  );
}
