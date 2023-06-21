import React from 'react';
import {
  Box,
  Button, IconButton, useBreakpointValue,
  Text,
  Image,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import firstMainBG from '../../assets/firstmain.svg';
import secondMainBG from '../../assets/secondMainBg.svg';
import seconMain from '../../assets/secondMainHome.svg';
import thirdMainBG from '../../assets/thirdMainBG.png';
import firstMain from '../../assets/firstMain2.png';
import thirdMain from '../../assets/thirdMainHome.svg';
const settings = {
  dots: false,
  arrows: true,
  swipeToSlide: true,
  lazyLoad: true,
  infinite: true,
  adaptiveHeight: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 300000,
  slidesToShow: 1,
  pauseonFocus: false,
  focusOnSelect: false,
  slidesToScroll: 1,
};

const CaptionCarousel = observer(() => {
  // const top = useBreakpointValue({ base: '90%', md: '90%' });
  // const side = useBreakpointValue({ base: '30%', md: '40px' });
  const [slider, setSlider] = React.useState(null);
  const cards = [
    {
      title: 'Design Projects 2',
      text: 'Behind ',
      text2: 'Great Studio Monitor',
      text3: 'Every Great Mix ',
      text4: 'There Is A ',
      image: thirdMain,
      class: 'thirdImage',
      BGimage: thirdMainBG,
      rank: 1,
    },
    {
      title: 'Design Projects 1',
      text: 'Unleash Superior Sound With Our ',
      text2: 'Amplifiers.',
      image: seconMain,
      class: 'secondImage',
      BGimage: secondMainBG,
      rank: 2,
    },
    {
      title: 'Design Projects 11',
      text: 'New level of Sound delivery with ',
      text2: 'Aplus Audios',
      image: firstMain,
      class: 'firstImage',
      BGimage: firstMainBG,
      rank: 3,
    },
  ];
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        // colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        className='side-button'
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        // colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        className='side-button'
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {cards.map((card, index) => {
          return (
            <Box
              position={'relative'}
              height={'90vh'}
              key={index}
              sx={{'--bgimg':`url(${card.BGimage})`}}
              className={`MAINHOME23 ${card.class}`}
              width={'full'}
              overflow={'hidden'}
            >
              <Box
                className="logoimage"
                pt={card.rank == 1 ? '0px' : '0px'}
                pb="10px"
                m="auto"
                maxW={"1200px"}
              >
                <Box
                  className={`firstboxlogo ${
                    card.title == 'Design Projects 11' ? 'firstboxlogo2' : ''
                  }`}
                >
                  {card.text3 ? (
                    <Text className="LOGOTEXT">
                      {card.text}
                      <span className="pink">{card.text3}</span>
                      {card.text}
                      {card.text4}
                      <span className="orange">{card.text2}</span>
                    </Text>
                  ) : (
                    <Text className="LOGOTEXT">
                      {card.text}
                      <span
                        className={card.text2 == 'Aplus Audios' ? 'orange' : ''}
                      >
                        {card.text2}
                      </span>
                    </Text>
                  )}
                  <Link to="/products">
                    <Button
                      display={'block'}
                      background={'white'}
                      color={'black'}
                      fontSize={'18px'}
                      className="buttonOfCTA"
                      p={'5px'}
                    >
                      View All Products
                    </Button>
                  </Link>
                </Box>

                <Image
                  loading="lazy"
                  maxW={"480px"}
                  className={
                    card.title == 'Design Projects 11' ? 'belowImage' : ''
                  }
                  src={card.image}
                />
              </Box>
            </Box>
          );
        })}
     
      </Slider>
    </>
  );
});
export default React.memo(CaptionCarousel);
