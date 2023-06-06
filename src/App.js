import React, { Suspense, useEffect, useLayoutEffect } from 'react';
import { ChakraProvider, Box, theme, Skeleton } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Appstore from './Store/Appstore';
import { hot } from 'react-hot-loader/root';
import { observer } from 'mobx-react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { HideLandingLoader } from './Components/Common/commonfn';
import {
  Error,
  Getintouch,
  Mumbai,
  Footer,
  About,
  Goup,
  FeatureProducts2,
  AboutMain,
  Header,
  MainProductDetails,
  Dj,
  MainProducts,
  Home,
  Participation,
  // SubHome,
  CTAFooter,
  FeatureProducts,
  // Contact,
  AboutUSMain,
  Products,
  Reviews,
  SubFooter,
} from './Components';
import './App.css';
import { useQuery } from 'react-query';
import axios from 'axios';
import CustomSwitch from './CustomProgressBar';
const App = observer(() => {
  useLayoutEffect(() => {
    const handleresize = async e => {
      const width = window.innerWidth;
      if (width < 1021) {
        Appstore.setDevice(0);
      } else {
        Appstore.setDevice(1);
      }
    };

    if (!Appstore.isTesting) {
      console.log = () => {};
      console.info = () => {};
      // console.error = () => {};
      // console.warn = () => {};
      console.debug = () => {};
    }
    handleresize();
    const scroller = async e => {
      const element = document.getElementsByClassName('mainHeader')[0];
      if (window.scrollY > (element.offsetTop + element.offsetHeight) * 2) {
        console.log('scroller');
        Appstore.setFooter(true);
      } else {
        Appstore.setFooter(false);
      }
    };
    const handleDelay = e => {
      let flag = true;
      return () => {
        if (flag) {
          flag = false;
          e();
          setTimeout(() => {
            flag = true;
          }, 200);
        }
      };
    };
    window.addEventListener('resize', handleDelay(handleresize), { passive: true });
    window.addEventListener('scroll', scroller, { passive: true });
    return () => {
      window.removeEventListener('resize', handleresize);
      // window.removeEventListener('scroll', scroller);
    };
  }, []);
  useEffect(() => {
    setTimeout(HideLandingLoader, 5000);
    window.scrollTo(0, 0);
  }, []);
  const goupOnclick = async () => {
    await document
      .getElementsByClassName('mainHeader')
      .scrollIntoView({ block: 'end', behavior: 'smooth' });
  };

  const url = `${Appstore.apilink}/returncategories`;
  const { data, refetch, isLoading } = useQuery(['getCategories'], async () => {
    return axios.get(url).then(response => {
      return response.data.data;
    });
  });
  if (!data) {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      refetch();
    }, 4000);
  }

  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={<Skeleton height={50} width="100%" />}></Suspense>
      <Suspense fallback={<Skeleton height={50} width="100%" />}>
        <Goup onClick={goupOnclick} />
      </Suspense>
      <Suspense fallback={<Skeleton height={450} width="100%" />}>
        <CustomSwitch>
          <Route
            path="*"
            element={
              <>
                <Header BG={true} />
                <Error />
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <Header />
                  <Home />
                </Suspense>

                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <FeatureProducts />
                </Suspense>

                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <AboutUSMain />
                </Suspense>
                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <FeatureProducts2 />
                </Suspense>
                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <Getintouch />
                </Suspense>
                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <Reviews />
                </Suspense>
                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <Products />
                </Suspense>
              </>
            }
          />
          <Route
            path="/aplusfrontend/build/index.html"
            element={
              <>
                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <Header />
                  <Home />
                </Suspense>

                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <FeatureProducts />
                </Suspense>

                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <AboutUSMain />
                </Suspense>
                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <FeatureProducts2 />
                </Suspense>
                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <Getintouch />
                </Suspense>
                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <Reviews />
                </Suspense>
                <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <Products />
                </Suspense>
              </>
            }
          />

          <Route
            path="/about-us"
            element={
              <Suspense fallback={<Skeleton height={450} width="100%" />}>
                <Header BG={true} />
                <AboutMain />
              </Suspense>
            }
          />

          <Route
            path="/contact"
            element={
              <Suspense fallback={<Skeleton height={450} width="100%" />}>
                <Header BG={true} />
                <Box className="contactgetintouchmain" as="sections">
                  <Box mt="50px">
                    <Getintouch />
                  </Box>
                </Box>
              </Suspense>
            }
          />
          <Route
            path="/products"
            element={
              <Suspense fallback={<Skeleton height={450} width="100%" />}>
                <Header BG={true} />
                <MainProducts />
              </Suspense>
            }
          />
          <Route
            path="/products/:id/:name"
            element={
              <Suspense fallback={<Skeleton height={450} width="100%" />}>
                <Header BG={true} />
                <MainProducts />
              </Suspense>
            }
          />
          <Route
            path="/products/:id/:name/:catName"
            element={
              <Suspense fallback={<Skeleton height={450} width="100%" />}>
                <Header BG={true} />
                <MainProducts />
              </Suspense>
            }
          />
          <Route
            path="/productDetails"
            element={
              <Suspense fallback={<Skeleton height={450} width="100%" />}>
                <Header BG={true} />
                <MainProductDetails />
              </Suspense>
            }
          />
          <Route
            path="/productDetails/:catid/:id/:name/:catName"
            element={
              <Suspense fallback={<Skeleton height={450} width="100%" />}>
                <Header BG={true} />
                <MainProductDetails />
              </Suspense>
            }
          />
          <Route
            path="/productDetails/:catid/:id/:name/:catName/:subName"
            element={
              <Suspense fallback={<Skeleton height={450} width="100%" />}>
                <Header BG={true} />
                <MainProductDetails />
              </Suspense>
            }
          />
          <Route
            path="/participation"
            element={
              <Suspense fallback={<Skeleton height={450} width="100%" />}>
                <Header BG={true} />
                <Participation />
              </Suspense>
            }
          />

          <Route
            path="/Mumbai-Expo-2018"
            element={
              <Suspense fallback={<Skeleton height={450} width="100%" />}>
                <Header BG={true} />
                <Mumbai />
              </Suspense>
            }
          />

          <Route
            path="/DJ-Expo-2018"
            element={
              <Suspense fallback={<Skeleton height={450} width="100%" />}>
                <Header BG={true} />
                <Dj />
              </Suspense>
            }
          />
        </CustomSwitch>
      </Suspense>
      <Suspense fallback={<Skeleton height={450} width="100%" />}>
        <Footer />
      </Suspense>
      <Suspense fallback={<Skeleton height={450} width="100%" />}>
        <SubFooter />

        <CTAFooter />
      </Suspense>
    </ChakraProvider>
  );
});

export default hot(App);
