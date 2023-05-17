import React, { useEffect } from 'react';
import './index.css';
import { Box, Button, Heading, Image, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';
import ProgressBar from '@badrap/bar-of-progress';
import { SingleProductCard } from '../Home/FeaturedProducts/singleproduct';
import { Link, useParams } from 'react-router-dom';

import first from '../../assets/Rectangle 16.svg';
const MainProductDetails = () => {
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
  return (
    <Box
      className="mainSubProductsMain"
      as="section"
      p={'20px'}
      maxW={'1220px'}
      m={'auto'}
      mt={'100px'}
    >
      {/* <Box> */}

      <Link className="goBackMain" to={`/products`}>
        <Button>Go Back</Button>
      </Link>
      <Heading textAlign={'center'}>{id}</Heading>
      {/* </Box> */}
      <Box
        display={'flex'}
        gap={'30px'}
        flexWrap={'wrap'}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <Box w={'350px'} h={'350px'} border={'2px dashed #dedede'}>
          <Image w={'346px'} h={'346px'} loading="lazy" src={first} />
        </Box>

        <Box className='secondBox' w={'750px'}>
        <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
        </Box>
      </Box>
      <Box m={"auto"} gap={'30px'}>
        <Heading>You might be interested in</Heading>
        <Box display={'flex'} flexWrap={'wrap'} gap={'30px'}>
          
        <SingleProductCard
          heading={'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />
             <SingleProductCard
          heading={'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />
             <SingleProductCard
          heading={'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />
             <SingleProductCard
          heading={'LoudSpeaker'}
          icon={first}
          href={`/productDetails/1`}
        />
      </Box>
      
      </Box>
    </Box>
  );
};
export default React.memo(MainProductDetails);
