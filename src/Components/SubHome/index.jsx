import { Box } from '@chakra-ui/react';
import React from 'react';
import "./index.css"
const subHome = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Box className="subHomeMain">
      <Box className="subHomeSub">
        {arr.map((e, i) => {
          return <Box className='subclasMainSub' key={i}>{e}</Box>;
        })}
          {arr.map((e, i) => {
          return <Box  className='subclasMainSub' key={i}>{e}</Box>;
        })}
      </Box>
    </Box>
  );
};

export default subHome;
