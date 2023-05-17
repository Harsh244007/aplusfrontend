import React, { useState, useEffect } from 'react';
import { Button,Box, Link } from '@chakra-ui/react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import './index.css';
import Appstore from '../../../Store/Appstore';
import { observer } from 'mobx-react';

const Goup = observer(() => {
  return (
    <Box as="section">
      {Appstore.footer ? (
        <Button
          className="goupButton"
          variant="solid"
          onClick={() => window.scrollTo(0, 0)}
        >
          <BsFillArrowUpCircleFill />
        </Button>
      ) : (
        ''
      )}
    </Box>
  );
});
export default React.memo(Goup);
