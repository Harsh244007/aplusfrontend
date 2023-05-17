import React, { Suspense, useEffect, useLayoutEffect } from 'react';
import { ChakraProvider, Box, theme, Skeleton } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Appstore from './Store/Appstore';
import { hot } from 'react-hot-loader/root';
import { observer } from 'mobx-react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
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
  Header,MainProductDetails,
  Dj,
  MainProducts,
  Home,
  Participation,
  SubHome,
  CTAFooter,
  FeatureProducts,
  Contact,
  AboutUSMain,
  Products,
  Reviews,
  SubFooter,
} from './Components';
import './App.css';
const App = observer(() => {
  useLayoutEffect(() => {
    const handleresize = async e => {
      const width = window.innerWidth;
      if (width < 1021) {
        Appstore.setDevice(0);
      } else {
        Appstore.setDevice(1);
      }
      if (width < 1021) {
        Appstore.setDevice2(0);
      } else {
        Appstore.setDevice2(1);
      }
    };

    if (!Appstore.isTesting) {
      console.log = () => {};
      console.info = () => {};
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

    window.addEventListener('resize', handleresize, { passive: true });
    window.addEventListener('scroll', scroller, { passive: true });
    return () => {
      window.removeEventListener('resize', handleresize);
      window.removeEventListener('scroll', scroller);
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

  return (
    <ChakraProvider theme={theme}>
      <Suspense fallback={<Skeleton height={50} width="100%" />}>
    
      </Suspense>
      <Suspense fallback={<Skeleton height={50} width="100%" />}>
        <Goup onClick={goupOnclick} />
      </Suspense>
      <Suspense fallback={<Skeleton height={450} width="100%" />}>
        <Routes>
          <Route path="*" element={<Error />} />

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

          <Route path="/about-us" element={
            
            <Suspense fallback={<Skeleton height={450} width="100%" />}>

        
           <Header BG={true} />
          <AboutMain />
          </Suspense>
          } />

          <Route
            path="/contact"
            element={
              <Suspense fallback={<Skeleton height={450} width="100%" />}>
                  <Header BG={true} />
                <Box className="contactgetintouchmain" as="sections">
                  <Getintouch />
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
            path="/products/:id"
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
            path="/productDetails/:id"
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
        </Routes>
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
