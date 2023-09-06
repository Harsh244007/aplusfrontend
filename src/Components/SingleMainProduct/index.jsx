import React, { useEffect, useState } from 'react';
import './index.css';
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
import { useQuery } from 'react-query';
import axios from 'axios';
const MainProductDetails = () => {
  const [desc, setDesc] = useState();
  let { id, catid, name, catName } = useParams();
  const url = `${Appstore.apilink}/returnProductDetails/${id}`;
  const {
    data,
    refetch,
    // status,
    isRefetching,
    // isPreviousData,
    // isFetchedAfterMount,
    // isLoading,
  } = useQuery(['getSingleProducts'], async () => {
    return axios.get(url).then(response => {
      return response.data.data[0];
    });
  });
  useEffect(() => {
    refetch();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name,refetch]);
  if (!data) {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      refetch();
    }, 4000);
  }
  if (!id) {
    id = 50;
  }
  const url2 = `${Appstore.apilink}/returncategory/${catid}`;
  const {
    data: data2,
    refetch: refetch2,
    // isLoading: isloading2,
  } = useQuery(['getMultipleCategories'], async () => {
    return axios.get(url2).then(response => {
      return response.data.data;
    });
  });

  if (!data2) {
    let timer2;
    clearTimeout(timer2);
    timer2 = setTimeout(() => {
      refetch2();
    }, 4000);
  }
  const [cpage, setCpage] = useState(1);
  const postsPerPage = 4;
  const lastposti = cpage * postsPerPage;
  const firstposti = lastposti - postsPerPage;
  let currentposts;
  if (data2) {
    currentposts = data2.slice(firstposti, lastposti);
  }
  let color = useColorModeValue('yellow.500', 'yellow.300');
  if (data && !desc) {
    const regex = /s:(\d+):"(.*?)";/g;
    let matches = [...data.pro_desc.matchAll(regex)];
    const deserializedObjects = matches.map(match => {
      const array = match[2];
      const deserializedObject = `{${array}}`;
      return deserializedObject;
    });
    setDesc(deserializedObjects);
    console.log(
      data.pro_desc.match(/s:(\d+):"(.*?)";/g)[0],
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
        to={`/products/${catid}/${data && data.pro_name}`}
      >
        <Button
          loadingText={'Loading'}
          isLoading={data && !isRefetching && data.pro_name ? false : true}
        >
          Go Back
        </Button>
      </Link>
      {/* <Heading textAlign={'center'}>
        {data && !isRefetching ? data.pro_name : `Loading ${name}`}
      </Heading>
      {data && data.length !==0 && !isRefetching ? (
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
              alt={data.pro_image}
              objectFit={'contain'}
              h={'346px'}
              loading="lazy"
              src={`${Appstore.imageLink}/${data.pro_image}`}
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
      {data2 && data2.length != 0 ? (
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
          {data2 && data2 != [] ? (
            <Pagination
              totalPosts={data2 && data2.length}
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
      )} */}
      

      <h2 style={{margin:"auto",fontSize:"24px"}}>This page is under construction</h2>
    </Box>
  );
};
export default React.memo(MainProductDetails);
 {/* <ListItem>
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
                </ListItem> */}