import React, { useEffect } from 'react';
import './index.css';
import { Box, Button, Heading, Skeleton } from '@chakra-ui/react';
import { SingleProductCard } from '../Home/Categories/singleproduct';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import Appstore from '../../Store/Appstore';
import Pagination from '../Common/pagination';
import { useState } from 'react';
const MainProducts = () => {
  //   const [state, updateState] = React.useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);

  let { id, name } = useParams();

  const url = `${Appstore.apilink}/returncategory/${id}`;
  const {
    data,
    status,
    refetch,
    isRefetching,
    isIdle,
    isPreviousData,
    isFetchedAfterMount,
    isLoading,
  } = useQuery(['getMultipleCategories'], async () => {
    return axios.get(url).then(response => {
      return response.data.data;
    });
  });
  useEffect(() => {
    // forceUpdate()
    refetch();
    window.scrollTo(0, 0);
    // Appstore.setFooter(true)
  }, [name, refetch]);
  if (!data) {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      refetch();
    }, 4000);
  }
  useEffect(() => {
    if (data && data.length === 0) refetch();
  });

  console.log(isLoading, status, 'data id of all products');
  if (!id) {
    id = 'Loudspeaker';
  }
  const [cpage, setCpage] = useState(1);
  const postsPerPage = 12;
  const lastposti = cpage * postsPerPage;
  const firstposti = lastposti - postsPerPage;
  let currentposts;
  if (data) {
    currentposts = data.slice(firstposti, lastposti);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cpage]);
  console.log(
    isRefetching,
    isPreviousData,
    status,
    isIdle,
    isFetchedAfterMount,
    'id of product section'
  );
  return (
    <Box
      className="mainProductsMain"
      as="section"
      p={'20px'}
      flexDirection={'column'}
      maxW={'1220px'}
      m={'auto'}
      mt={'100px'}
      // color={"#fff"}
    >
      <Link className="goBackMain" to={`/`}>
        <Button
          loadingText={'Loading'}
          isLoading={data && !isRefetching ? false : true}
        >
          Go Back
        </Button>
      </Link>
      <Heading textAlign={'center'}>{data ? name : `Loading ${name}`}</Heading>
      {data && data.length!==0 && !isRefetching ? (
        <Box
          display={'flex'}
          gap={'30px'}
          flexWrap={'wrap'}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          {currentposts.map(e => {
            console.log(e, 'data for all products');
            return (
              <SingleProductCard
                heading={e.pro_name ? e.pro_name : 'LoudSpeaker'}
                icon={`${Appstore.imageLink}/${e.pro_image}`}
                href={`/productDetails/${e.catid}/${e.showcaseid}/${e.pro_name}/${name}`}
              />
            );
          })}
        </Box>
      ) : (
        <Skeleton height={650} width="100%" />
      )}
      {data && data.length !==0 ? (
        <Pagination
          totalPosts={data && data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCpage}
          currentPage={cpage}
        />
      ) : (
        <Skeleton height={50} width="100%" />
      )}
    </Box>
  );
};
export default React.memo(MainProducts);
