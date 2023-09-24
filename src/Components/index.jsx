import { lazy } from 'react';
const Header = lazy(() => import('./Header/index'));
const Goup = lazy(() => import('./Common/Goup/index'));
const Error = lazy(() => import('./Common/Error'));
const Footer = lazy(() => import('./Footer/index'));
const CTAFooter = lazy(() => import('./CTAFooter2/index'));
const Home = lazy(() => import('./Home/index'));
const SubHome = lazy(() => import('./SubHome/index'));
const SubFooter = lazy(() => import('./Footer/subIndex'));
const Trusted = lazy(() => import('./Home/TrustedBy/index'));
const Reviews = lazy(() => import('./Home/Review/index'));
const FeatureProducts = lazy(() => import('./Home/Categories/index'));
const FeatureProducts2 = lazy(() => import('./Home/FeaturedProducts2/index'));
const About = lazy(() => import('./Home/About-us/index'));
const Getintouch = lazy(() => import('./Home/Getintouch/index'));
const AboutMain = lazy(() => import('./Aboutus/index'));
const Contact = lazy(() => import('./Contact/index'));
const Participation = lazy(() => import('./Participation/index'));
const Mumbai = lazy(() => import('./Participation/Mumbai'));
const Dj = lazy(() => import('./Participation/Dj'));
const AboutUSMain = lazy(() => import('./Home/AboutAplus/index'));
const MainProducts = lazy(() => import('./Products/index'));
const  MainProductDetails = lazy(()=> import("./SingleMainProduct/index"))
const Brochure = lazy(()=>import('./Brochure/Brochure'))
export {
  Error,
  MainProducts,
  Contact,
  MainProductDetails,
  Home,
  Brochure,
  Mumbai,
  CTAFooter,
  FeatureProducts2,
  AboutUSMain,
  Dj,
  Participation,
  AboutMain,
  SubHome,
  Trusted,
  FeatureProducts,
  About,
  Getintouch,
  Reviews,
  SubFooter,
  Header,
  Goup,
  Footer,
};
