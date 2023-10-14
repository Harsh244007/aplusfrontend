import React, { useEffect, useMemo, useState } from 'react';
import './index.css';
import ProductsJSON from '../../Configs/JSON/returnProductDetails.json';
import {
  Box,
  Button,
  Heading,
  Image,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { SingleProductCard } from '../Home/Categories/singleproduct';
import { Link, useParams } from 'react-router-dom';
import Pagination from '../Common/pagination';
import Appstore from '../../Store/Appstore';
// import { useQuery } from 'react-query';
// import axios from 'axios';
import ImageModal from './../Common/ImageModal';
const MainProductDetails = () => {
  const [desc, setDesc] = useState('');
  let { id, catid, name } = useParams();

  useEffect(() => {
    // refetch();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const FilterResult = ProductsJSON.data.filter(e => e.pro_name == name);
  // console.log('filtered results1', FilterResult);
  if (FilterResult.length === 0) {
    const newFilterResult2 = ProductsJSON.data.filter(e => e.showcaseid == id);
    FilterResult.push(newFilterResult2[0]);
    // console.log('filtered results2', newFilterResult2);
  }
  console.log('filtered results3', FilterResult);
  const [cpage, setCpage] = useState(1);
  const postsPerPage = 4;
  const lastposti = cpage * postsPerPage;
  const firstposti = lastposti - postsPerPage;
  let currentposts;
  const shuffledData = useMemo(() => {
    if (ProductsJSON.data) {
      const copyOfData = [...ProductsJSON.data];
      for (let i = copyOfData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copyOfData[i], copyOfData[j]] = [copyOfData[j], copyOfData[i]];
      }
      return copyOfData;
    }
  }, [id, cpage]);
  if (ProductsJSON.data) {
    currentposts = shuffledData.slice(firstposti, lastposti);
  }
  // let color = useColorModeValue('yellow.500', 'yellow.300');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openImageModal = imageUrl => {
    setSelectedImage(imageUrl);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImage('');
  };
  useEffect(() => setDesc(''), [id]);
  useEffect(() => {
    if (FilterResult.length !== 0 && desc == '') {
      if (
        FilterResult[0].pro_desc &&
        FilterResult[0].pro_desc == '0' &&
        FilterResult[0].description &&
        FilterResult[0].description != ''
      ) {
        setDesc(FilterResult[0].description);
        // Instead of setting desc here, you can directly render the data in your component
      } else {
        console.log(FilterResult, 'inside of useffect');
        const regex = /s:(\d+):"(.*?)";/g;
        let matches = [...FilterResult[0].pro_desc.matchAll(regex)];
        const deserializedObjects = matches.map(match => {
          const array = match[2];
          const deserializedObject = `{${array}}`;
          return deserializedObject;
        });
        setDesc(deserializedObjects);
      }
    }
  }, [FilterResult]);
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
      <Link className="goBackMain" to={`/products/${catid}`}>
        <Button
          onClick={() => setDesc('')}
          loadingText={'Loading'}
          isLoading={FilterResult.length !== 0 ? false : true}
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
          className="singleProductMainContainer"
          flexWrap={'wrap'}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <Box
            className="singleProductImage"
            w={'350px'}
            h={'350px'}
            border={'2px dashed #dedede'}
          >
            <Image
              w={'346px'}
              alt={FilterResult[0].pro_image}
              objectFit={'contain'}
              h={'346px'}
              onClick={() =>
                openImageModal(
                  `${Appstore.imageLink}/${FilterResult[0].pro_image}`
                )
              }
              loading="lazy"
              src={`${Appstore.imageLink}/${FilterResult[0].pro_image}`}
            />
          </Box>

          <Box className="secondBox" w={'750px'}>
            <Box>
              <Text
                fontWeight={'bold'}
                fontSize={{ base: '20px', lg: '20px' }}
                color={'#1bacc4'}
                // fontWeight={'500'}
                className="productDetailsText"
                textTransform={'uppercase'}
                mb={'4'}
              >
                Product Details
              </Text>

              <Box spacing={2}>
                {desc && !desc.includes('\r\n') && !desc.includes(' | ') ? (
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
                ) : desc.includes('\r\n') && !desc.includes(' | ') ? (
                  desc.split('\r\n').map((e, i) => {
                    return (
                      <Box key={i}>
                        <Text as={'span'} fontWeight={'bold'}>
                          {e}
                        </Text>{' '}
                      </Box>
                    );
                  })
                ) : desc.includes(' | ') ? (
                  desc.split(' | ').map((e, i) => {
                    return (
                      <Box key={i}>
                        <Text as={'span'} fontWeight={'bold'}>
                          {e}
                        </Text>{' '}
                      </Box>
                    );
                  })
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
        <Box m={'auto'} gap={'30px'} mt="40px">
          <Heading mb="15px">You might be interested in</Heading>
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
                  onClick={() => setDesc('')}
                  heading={e.pro_name ? e.pro_name : 'LoudSpeaker'}
                  icon={`${Appstore.imageLink}/${e.pro_image}`}
                  href={`/productDetails/${e.catid}/${e.showcaseid}/${name}`}
                />
              );
            })}
          </Box>
          {ProductsJSON.data.length !== 0 ? (
            <Pagination
              totalPosts={ProductsJSON.data.length / 8}
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
      <ImageModal
        isOpen={isImageModalOpen}
        imageUrl={selectedImage}
        onClose={closeImageModal}
      />
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
