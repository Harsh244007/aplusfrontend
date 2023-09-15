import { Button, Stack } from '@chakra-ui/react';
import { observer } from 'mobx-react';
import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-dropdown-animated';
import CategoriesJSON from '../../Configs/JSON/categories.json';

const DesktopDropdown = observer(() => {
  const [showDD, setShowDD] = useState(true);
  const navigate = useNavigate();

  const options2 = useMemo(() => {
    return CategoriesJSON.data.map(e => ({
      content: e.catname,
      onClick: () => {
        setShowDD(e => false);
        setTimeout(
          setShowDD(e => true),
          1000
        );
        // setShowDD(e=>!e)
        navigate(`/products/${e.catid}/${e.catname}`);
      },
    }));
  }, [navigate, showDD]);
  return (
    <Stack
      direction="row"
      m="10px 10px"
      gap={2}
      justifyContent="space-around"
      align="center"
    >
      <Link to="/">
        <Button variant="ghost">Home</Button>
      </Link>
      <Link to="/about-us">
        <Button variant="ghost">About</Button>
      </Link>
      {showDD === true ? (
        <Dropdown options={options2} initial={50} exit={4} value="Products" />
      ) : (
        ''
      )}
      <Link to="/participation">
        <Button variant="ghost">Our Participation</Button>
      </Link>
      <Link to="/contact">
        <Button variant="ghost">Contact</Button>
      </Link>
    </Stack>
  );
});

export default DesktopDropdown;
