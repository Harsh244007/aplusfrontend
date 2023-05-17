import { Button, Select, Stack } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Appstore from '../../Store/Appstore';
// import Dropdown from 'react-dropdown';
import Dropdown from 'react-dropdown-animated';
// import 'react-dropdown/style.css';
const Desktopdropdown = observer(() => {
  const location = useNavigate();
  //   const options = ['Products', 'Loudspeaker', 'Microphone','Crossover Networks Active Crossover', 'Mixer', 'Amplifier'
  // ,'P.A. Amplifier', 'Wallmount Loudspeaker', 'Loudspeaker System','Compression Drivers'];
  const [showDD, setShowDD] = useState(true);
  const navigate = useNavigate();
  const toggleDD = () => setShowDD(false);
  let options = [
    {
      content: 'Loudspeakers',
      onClick: event => {
        toggleDD();
        location(`/products/${event.target.innerText}`);
      },
    },
    {
      content: 'Microphones',
      onClick: event => {
        toggleDD();
        location(`/products/${event.target.innerText}`);
      },
    },
    {
      content: 'Crossover Networks Active Crossovers',
      onClick: event => {
        toggleDD();
        location(`/products/${event.target.innerText}`);
      },
    },
    {
      content: 'Mixers',
      onClick: event => {
        toggleDD();
        location(`/products/${event.target.innerText}`);
      },
    },
    {
      content: 'Amplifiers',
      onClick: event => {
        toggleDD();
        location(`/products/${event.target.innerText}`);
      },
    },
    {
      content: 'P.A. Amplifiers',
      onClick: event => {
        toggleDD();
        location(`/products/${event.target.innerText}`);
      },
    },
    {
      content: 'Wallmount Loudspeakers',
      onClick: event => {
        toggleDD();
        location(`/products/${event.target.innerText}`);
      },
    },
    {
      content: 'Loudspeaker Systems',
      onClick: event => {
        toggleDD();
        location(`/products/${event.target.innerText}`);
      },
    },
    {
      content: 'Compression Drivers',
      onClick: event => {
        toggleDD();
        location(`/products/${event.target.innerText}`);
      },
    },
  ];
  useEffect(()=>{
    if(!showDD)
    setShowDD(true)
  },[showDD])
  return (
    <Stack
      direction="row"
      m="10px 10px"
      gap={2}
      justifyContent="space-around"
      align="center"
    >
      <Link to="/">
        <Button
          variant="ghost"
          onClick={() => {
            // Appstore.setLogin(true);
          }}
        >
          Home
        </Button>
      </Link>
      <Link to="/about-us">
        <Button
          variant="ghost"
          onClick={() => {
            // Appstore.setReg(true);
          }}
        >
          About
        </Button>
      </Link>
      {/* <Link> */}
      {/* <Link to="/products"> */}
      {/* <Button
          variant="ghost"
        >
          Products22
        </Button> */}
      {showDD ? (
        <Dropdown options={options} initial={200} exit={4} value="Products" />
      ) : (
        ''
      )}
      {/* </Link> */}
      {/* <Select
        className="productsSection"
        variant="unstyled"
        placeholder="Products"
      /> */}
      {/* </Link> */}

      <Link to="/participation">
        <Button
          variant="ghost"
          // borderColor="black"
          // color="black"
          // backgroundColor="white"
          // variant="outline"
        >
          Our Participation
        </Button>
      </Link>
      <Link to="/contact">
        <Button
          variant="ghost"
          // borderColor="black"
          // color="black"
          // backgroundColor="white"
          // variant="outline"
        >
          Contact
        </Button>
      </Link>
    </Stack>
  );
});

export default React.memo(Desktopdropdown);
