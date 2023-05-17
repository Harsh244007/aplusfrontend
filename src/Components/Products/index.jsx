import React, { useEffect } from 'react';
import './index.css';
import { Box, Button, Heading } from '@chakra-ui/react';
import ProgressBar from '@badrap/bar-of-progress';
import { SingleProductCard } from '../Home/FeaturedProducts/singleproduct';
import { Link, useParams } from 'react-router-dom';

import first from '../../assets/Rectangle 16.svg';
const MainProducts = () => {
  const progress = new ProgressBar({
    size: 2,
    color: '#29e',
    className: 'bar-of-progress',
    delay: 80,
  });
  setTimeout(() => {
    progress.finish();
  }, 2000);
  useEffect(() => {
    window.scrollTo(0, 0);
    // Appstore.setFooter(true)
  }, []);

  let { id } = useParams();
  if (!id) {
    id = 'Loudspeaker';
  }
  console.log(id, 'id of product section');
  return (
    <Box
      className="mainProductsMain"
      as="section"
      p={'20px'}
      maxW={'1220px'}
      m={'auto'}
      mt={'100px'}
      // color={"#fff"}
    >
      <Link className='goBackMain' to={`/`}>
    <Button>Go Back</Button>
      </Link>
      <Heading textAlign={'center'}>{id ? id : 'LoudSpeaker'}</Heading>
      <Box
        display={'flex'}
        gap={'30px'}
        flexWrap={'wrap'}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />

        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />

        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />

        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />

        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />
        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />

        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />

        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />

        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />

        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />
        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />

        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />

        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />

        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />

        <SingleProductCard
          heading={id ? id : 'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />
      </Box>
    </Box>
  );
};
export default React.memo(MainProducts);
