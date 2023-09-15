import React, { useEffect, useState } from 'react';
import './index.css';
import ProductsJSON from '../../Configs/JSON/returnProductDetails.json';
import {
  Box,
  Button,
  Heading,
  Image,
  // List,
  // ListItem,
  Skeleton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { SingleProductCard } from '../Home/Categories/singleproduct';
import { Link, useParams } from 'react-router-dom';
import Pagination from '../Common/pagination';
import Appstore from '../../Store/Appstore';
// import { useQuery } from 'react-query';
// import axios from 'axios';
const MainProductDetails = () => {
  const [desc, setDesc] = useState();
  let { id, catid, name, catName } = useParams();

  useEffect(() => {
    // refetch();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const FilterResult = ProductsJSON.data.filter(e => e.pro_name === name);
  console.log(FilterResult, 'filtered result');
  const [cpage, setCpage] = useState(1);
  const postsPerPage = 4;
  const lastposti = cpage * postsPerPage;
  const firstposti = lastposti - postsPerPage;
  let currentposts;
  if (ProductsJSON.data) {
    currentposts = ProductsJSON.data.slice(firstposti, lastposti);
  }
  let color = useColorModeValue('yellow.500', 'yellow.300');
  if (FilterResult && !desc) {
    const regex = /s:(\d+):"(.*?)";/g;
    let matches = [...FilterResult[0].pro_desc.matchAll(regex)];
    const deserializedObjects = matches.map(match => {
      const array = match[2];
      const deserializedObject = `{${array}}`;
      return deserializedObject;
    });
    setDesc(deserializedObjects);
    console.log(
      FilterResult[0].pro_desc.match(/s:(\d+):"(.*?)";/g)[0],
      'data of single product'
    );
  }
  return (
    <Box
      className="mainSubProductsMain"
      as="section"
      flexDirection={'column'}
      p={'20px'}
      maxW={'1220px'}
      m={'auto'}
      mt={'100px'}
    >
      <Link
        className="goBackMain"
        to={`/products/${catid}/${FilterResult && FilterResult.pro_name}`}
      >
        <Button
          loadingText={'Loading'}
          isLoading={FilterResult && FilterResult.pro_name ? false : true}
        >
          Go Back
        </Button>
      </Link>
      <Heading textAlign={'center'}>
        {FilterResult.length === 0 && !FilterResult[0].pro_name
          ? `Loading ${name}`
          : FilterResult[0].pro_name}
      </Heading>
      {FilterResult.length !== 0 ? (
        <Box
          display={'flex'}
          gap={'30px'}
          flexWrap={'wrap'}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <Box w={'350px'} h={'350px'} border={'2px dashed #dedede'}>
            <Image
              w={'346px'}
              alt={FilterResult[0].pro_image}
              objectFit={'contain'}
              h={'346px'}
              loading="lazy"
              src={`${Appstore.imageLink}/${FilterResult[0].pro_image}`}
            />
          </Box>

          <Box className="secondBox" w={'750px'}>
            <Box>
              <Text
                fontWeight={'bold'}
                fontSize={{ base: '16px', lg: '18px' }}
                color={color}
                // fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Product Details
              </Text>

              <Box spacing={2}>
                {desc ? (
                  <>
                    {desc.map((e, i) => {
                      if (i % 4 == 0 && i != 0) {
                        console.log(e, desc[i - 3], 'main data');
                        return (
                          <Box key={i}>
                            <Text as={'span'} fontWeight={'bold'}>
                              {desc[i - 3].replace(/{|}/g, '')}
                            </Text>{' '}
                            {desc[i - 1].replace(/{|}/g, '')}
                          </Box>
                        );
                      }
                    })}
                  </>
                ) : (
                  ''
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Skeleton height={650} width="100%" />
      )}
      {ProductsJSON.data.length !== 0 ? (
        <Box m={'auto'} gap={'30px'}>
          <Heading>You might be interested in</Heading>
          <Box
            display={'flex'}
            flexWrap={'wrap'}
            gap={'30px'}
            justifyContent={'space-evenly'}
          >
            {currentposts.map(e => {
              console.log(e, 'data for all products');
              let name = e.pro_name.replace(' ', '').replace(' ', '');
              console.log(name, e.pro_name, 'name of single product');
              return (
                <SingleProductCard
                  referLink={false}
                  heading={e.pro_name ? e.pro_name : 'LoudSpeaker'}
                  icon={`${Appstore.imageLink}/${e.pro_image}`}
                  href={`/productDetails/${e.catid}/${e.showcaseid}/${name}/${catName}`}
                />
              );
            })}
          </Box>
          {ProductsJSON.data.length !== 0 ? (
            <Pagination
              totalPosts={ProductsJSON.data.length/8}
              postsPerPage={postsPerPage}
              setCurrentPage={setCpage}
              currentPage={cpage}
            />
          ) : (
            <Skeleton height={50} width="100%" />
          )}
        </Box>
      ) : (
        <Skeleton height={450} width="100%" />
      )}

      {/* <h2 style={{ margin: 'auto', fontSize: '24px' }}>
        This page is under construction
      </h2> */}
    </Box>
  );
};
export default React.memo(MainProductDetails);
{
  /* <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
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
                </ListItem> */
}
