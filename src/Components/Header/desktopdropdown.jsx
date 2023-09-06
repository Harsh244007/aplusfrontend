import { Box, Button, Select, Stack } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Appstore from '../../Store/Appstore';
// import Dropdown from 'react-dropdown';
import Dropdown from 'react-dropdown-animated';
import axios from 'axios';
import { useQuery } from 'react-query';
import { startTransition } from 'react';

const Desktopdropdown = observer(() => {
  //   const options = ['Products', 'Loudspeaker', 'Microphone','Crossover Networks Active Crossover', 'Mixer', 'Amplifier'
  // ,'P.A. Amplifier', 'Wallmount Loudspeaker', 'Loudspeaker System','Compression Drivers'];
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
    }
  ];
  
  let options2=[]
  const url = `${Appstore.apilink}/returncategories`
  const { data, refetch, isLoading } = useQuery(
    ['getCategories'],
    async () => {
      return axios
        .get(url)
        .then(
          response => {
            return response.data.data
          },
   
        )
    }
  )

  if (!data) {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      refetch();
    }, 4000);
  }

  if(!isLoading && data){
data.map((e)=>{
options2.push({content:e.catname,
  onClick: event => {
    toggleDD();
    // startTransition(()=>{
      navigate(`/products/${e.catid}/${e.catname}`);
    // })
  },})
  console.log(e,"data for categories")
})

console.log(options2,"data for categories")
  }
  useEffect(()=>{
    if(!showDD)setShowDD(true)
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
   
      {showDD ? (
       <Dropdown options={data?options2:options} initial={50} exit={4} value="Products" />
        ) : (
          ''
      )}
    

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
