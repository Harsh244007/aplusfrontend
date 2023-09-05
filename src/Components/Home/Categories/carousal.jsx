import React from 'react';
import {
  Box,
  // IconButton,
  useBreakpointValue,
  // Stack,
  // Heading,
  // Text,
  // Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import SingleReview from './singleReview';
import './index.css';
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  adaptiveHeight: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ReviewCarousel = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Design Projects 1',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://www.aplusaudios.com/assets/images/banner/webslides/WebSlide_02.jpg',
    },
    {
      title: 'Design Projects 2',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://www.aplusaudios.com/assets/images/banner/webslides/WebSlide_07.jpg',
    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://www.aplusaudios.com/assets/images/banner/webslides/WebSlide_03.jpg',
    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://www.aplusaudios.com/assets/images/banner/webslides/WebSlide_05.jpg',
    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://www.aplusaudios.com/assets/images/banner/webslides/WebSlide_06.jpg',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'500px'}
      width={'full'}
      overflow={'hidden'}
    >
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {cards.map((card, index) => (
          <SingleReview key={index} />
        ))}
      </Slider>
    </Box>
  );
};
export default React.memo(ReviewCarousel);
