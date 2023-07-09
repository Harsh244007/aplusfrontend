import React, { FC } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  // Heading,
  HStack,
  // LinkProps,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

import Dropdown from 'react-dropdown-animated';
// import Appstore from '../../Store/Appstore';
import { observer } from 'mobx-react';
import Appstore from '../../Store/Appstore';
import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const Navigation = observer(({ onClose }) => {
  // const [showDD, setShowDD] = useState(true);
  const navigate = useNavigate();
  const toggleDD = () => onClose();
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
    return axios.get(url).then(response => {
      return response.data.data;
    });
  });

  if (!data) {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      refetch();
    }, 4000);
  }

  if (!isLoading && data) {
    data.map(e => {
      options2.push({
        content: e.catname,
        onClick: async( event) => {
          await toggleDD();
          console.log(e, 'toggle dd closed');
          return navigate(`/products/${e.catid}/${e.catname}`);
        },
      });
      return false
    });
  }
  return (
    <Stack as="nav">
      <Link to="/" onClick={() => onClose()}>
        Home
      </Link>

      <Dropdown
        options={data ? options2 : options}
        initial={200}
        exit={4}
        value="Products"
      />
      <Link
        to="/about-us"
        onClick={() => {
          // Appstore.setLogin(true);
          onClose();
        }}
      >
        About
      </Link>
      
     
      <Link
        to="/participation"
        onClick={() => {
          // Appstore.setLogin(true);
          onClose();
        }}
      >
        Our Participation
      </Link>

      <Link
        to="/contact"
        onClick={() => {
          // Appstore.setLogin(true);
          onClose();
        }}
      >
        Contact us
      </Link>
    </Stack>
  );
});

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        backgroundColor="unset"
        fontSize="28px"
        padding="5px"
        onClick={onOpen}
      >
        <AiOutlineMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="top"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay className="headerModal">
          <DrawerContent className="mainHeaderDrawer">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Navigation className="dropdownNav" onClose={onClose} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

const LayoutWithMenu = ({ children }) => {
  return (
    <Stack>
      <HStack>
        <Box>
          <DrawerMenu />
        </Box>
      </HStack>
    </Stack>
  );
};

const DropdownMobile = () => {
  return <LayoutWithMenu></LayoutWithMenu>;
};

DropdownMobile.containerSize = 'fill';

export default React.memo(DropdownMobile);
