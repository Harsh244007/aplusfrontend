import React, { useEffect } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Button,
  Heading,
  Text,
  Container,
  Image,
} from '@chakra-ui/react';
// import BGIMG from '../../assets/homeBg.svg';
// import BGIMG2 from '../../assets/image133.svg';
// import BGIMG3 from '../../assets/image132.svg';
import Slider from 'react-slick';
// import logoimage from '../../assets/image14.png';
// import logoimage from '../../assets/Group15426.svg';
import { Link } from 'react-router-dom';
import MainBG2 from '../../assets/mainbg2.svg';
import MainBG3 from '../../assets/MainBG4.svg';
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// import MainBG3 from '../../assets/Group15427.png';
import Appstore from '../../Store/Appstore';
import { observer } from 'mobx-react';
// import Header from '../Header';
import firstMainBG from '../../assets/firstmain.svg';
import secondMainBG from '../../assets/secondMainBg.svg';
import seconMain from '../../assets/secondMainHome.svg';
import thirdMainBG from '../../assets/thirdMainBG.svg';
import firstMain from '../../assets/firstMain2.svg';
import thirdMain from '../../assets/thirdMainHome.svg';
const settings = {
  dots: true,
  arrows: true,
  swipeToSlide: true,
  lazyLoad: true,
  infinite: true,
  adaptiveHeight: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 300000,
  slidesToShow: 1,
  pauseonFocus: false,
  focusOnSelect: false,
  slidesToScroll: 1,
};

const CaptionCarousel = observer(() => {
  const top = useBreakpointValue({ base: '90%', md: '90%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
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

  return (
    <>
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {cards.map((card, index) => {
          return (
            <Box
              position={'relative'}
              height={'475px'}
              key={index}
              className={`MAINHOME23 ${card.class}`}
              backgroundSize={'cover'}
              backgroundImage={`url(${card.BGimage})`}
              backgroundPosition={'bottom'}
              width={'full'}
              overflow={'hidden'}
            >
              <Box
                className="logoimage"
                pt={card.rank == 1 ? '0px' : '0px'}
                pb="10px"
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
                  maxW={"380px"}
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
