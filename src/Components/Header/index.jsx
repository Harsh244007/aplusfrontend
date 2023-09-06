import React, { useEffect, useState } from 'react';
import {
  Box,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
} from '@chakra-ui/react';
import './index.css';
import Appstore from '../../Store/Appstore';
import DropdownMobile from './dropdown';
import Dropdown from 'react-dropdown-animated';
import { observer } from 'mobx-react';
import Desktopdropdown from './desktopdropdown';
// import { SearchIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import logomain from '../../assets/Aplus-logo-675x324-white.png';
import { CiSearch } from 'react-icons/ci';
import { useQuery } from 'react-query';
import axios from 'axios';
const Header = observer(({ BG = false }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  // useEffect(() => {
  //   Appstore.setMode(localStorage.getItem(colorMode));
  // }, [colorMode]);
  console.log(BG, 'backgroundof header');
  const [showDD, setShowDD] = useState(true);
  const navigate = useNavigate();
  const toggleDD = () => setShowDD(false);
  let options = [
    {
      content: 'Loading Categories Please wait',
      onClick: event => {
        toggleDD();
        // location(`/`);
      },
    },
  ];
  let options2 = [];
  const url = `${Appstore.apilink}/returncategories`;
  const { data, refetch, isLoading } = useQuery(['getCategories'], async () => {
    const cachedCategories = localStorage.getItem('cachedCategories');

    if (cachedCategories) {
      return JSON.parse(cachedCategories);
    } else {
      const response = await axios.get(url);
      const responseData = response.data.data;

      localStorage.setItem('cachedCategories', JSON.stringify(responseData));

      return responseData;
    }
  });

  if (!data) {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      refetch();
    }, 4000);
  }

  if (!isLoading && data) {
    data.forEach(e => {
      options2.push({
        content: e.catname,
        onClick: event => {
          toggleDD();
          navigate(`/products/${e.catid}/${e.catname}`);
        },
      });
      console.log(e, 'data for categories');
    });
  }
  useEffect(() => {
    if (!showDD) setShowDD(true);
  }, [showDD]);
  return (
    <Box
      className={`mainHeader ${
        Appstore.footer || BG ? 'mainHeader2' : 'mainHeader2'
      }`}
      as="section"
    >
      <Box className="header" textAlign="center">
        <HeaderLogo colorMode={colorMode} Logo={logomain} />
        {/* </Box>
      <Box className="secondHeader"> */}
        {Appstore.device ? (
          <Box
            display="flex"
            className="headerSecondPart"
            flexDir={'row'}
            gap={15}
          >
            {/* <InputGroup
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
            </InputGroup> */}
            {/* {showDD ? (
              <Dropdown
                options={data ? options2 : options}
                initial={200}
                exit={4}
                value="Products"
              />
            ) : (
              ''
            )} */}
            <Box className="desktopSlider">
              <DropdownMobile />
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
              <InputRightElement marginBottom={'6px'} right={'6px'}>
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

function HeaderLogo({ colorMode, Logo }) {
  return (
    <Box className="titleText">
      <Link to="/">
        <Image loading="lazy" src={Logo} alt="Aplus Audios" />
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
