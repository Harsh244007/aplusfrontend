import './index.css';
import { SingleProductCard } from '../Home/Categories/singleproduct';
import { Link, useParams } from 'react-router-dom';
import Appstore from '../../Store/Appstore';
import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, Skeleton } from '@chakra-ui/react';
import Pagination from '../Common/pagination';
import ProductsJSON from '../../Configs/JSON/returnProductDetails.json';

const MainProducts = () => {
  const { id, name } = useParams();
  const [cpage, setCpage] = useState(1);
  const postsPerPage = 12;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cpage, name]);

  const FilterResult = ProductsJSON.data.filter((e) => e.catid === id);

  const getPaginatedProducts = () => {
    const lastposti = cpage * postsPerPage;
    const firstposti = lastposti - postsPerPage;
    return FilterResult.slice(firstposti, lastposti);
  };

  return (
    <Box
      className="mainProductsMain"
      as="section"
      p={'20px'}
      flexDirection={'column'}
      maxW={'1220px'}
      m={'auto'}
      mt={'100px'}
    >
      <Link className="goBackMain" to={`/`}>
        <Button loadingText={'Loading'} isLoading={!FilterResult}>
          Go Back
        </Button>
      </Link>
      <Heading textAlign={'center'}>
        {FilterResult ? name : `Loading ${name}`}
      </Heading>

      {FilterResult && FilterResult.length !== 0 ? (
        <Box
          display={'flex'}
          gap={'30px'}
          flexWrap={'wrap'}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          {getPaginatedProducts().map((e) => (
            <SingleProductCard
              key={e.showcaseid}
              heading={e.pro_name ? e.pro_name : 'LoudSpeaker'}
              icon={`${Appstore.imageLink}/${e.pro_image}`}
              href={`/productDetails/${e.catid}/${e.showcaseid}/${e.pro_name}/${name}`}
            />
          ))}
        </Box>
      ) : (
        <Skeleton height={650} width="100%" />
      )}

      {FilterResult && FilterResult.length !== 0 ? (
        <Pagination
          totalPosts={FilterResult.length}
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
