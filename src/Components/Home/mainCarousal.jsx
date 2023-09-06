import React, { useEffect, useState } from 'react';
import {
  Box,
  Button, IconButton, useBreakpointValue,
  Text,
  Image,
} from '@chakra-ui/react';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import firstMainBG from '../../assets/firstmain.svg';
import secondMainBG from '../../assets/secondMainBg.svg';
import seconMain from '../../assets/secondMainHome.svg';
import thirdMainBG from '../../assets/thirdMainBG.png';
import firstMain from '../../assets/firstMain2.png';
import thirdMain from '../../assets/thirdMainHome.svg';
import newmainBg1 from "../../assets/newBGHome1.jpg"
import newmainBg2 from "../../assets/newBGHome2.jpg"
import newmainBg3 from "../../assets/newBGHome3.jpg"
import newmainBg4 from "../../assets/newBGHome4.jpg"
import newMain7 from "../../assets/newMainHome1.png"
import newMain8 from "../../assets/newMainHome2.png"
import newMain3 from "../../assets/newMainHome3.png"
import newMain4 from "../../assets/newMainHome4.png"
import newMain5 from "../../assets/newMainHome5.png"
import newMain6 from "../../assets/newMainHome6.png"
import newMain1 from "../../assets/newMainHome7.png"
import newMain2 from "../../assets/newMainHome8.png"
const CaptionCarousel = observer(() => {
  const cards = [
    {
      title: 'Design Projects 2',
      text: 'Behind ',
      url:"/products/4/Mixers",
      text2: 'Great Studio Monitor',
      text3: 'Every Great Mix ',
      text4: 'There Is A ',
      image: newMain1,
      class: 'thirdImage',
      BGimage: newmainBg1,
      rank: 1,
    },
    {
      url:"/products/5/Amplifiers",
      title: 'Design Projects 1',
      text: 'Unleash Superior Sound With Our ',
      text2: 'Amplifiers.',
      image: newMain2,
      class: 'secondImage',
      BGimage: newmainBg2,
      rank: 2,
    },
    {
      url:"/products/1/Loudspeakers",
      title: 'Design Projects 11',
      text: 'New level of Sound delivery with ',
      text2: 'Aplus Audios',
      image: newMain3,
      class: 'firstImage',
      BGimage: newmainBg3,
      rank: 3,
    },
    
    {
      url:"/products/1/Loudspeakers",
      title: 'Design Projects 11',
      text: 'New level of Sound delivery with ',
      text2: 'Aplus Audios',
      image: newMain4,
      class: 'firstImage',
      BGimage: newmainBg4,
      rank: 4,
    },   {
      title: 'Design Projects 2',
      text: 'Behind ',
      url:"/products/4/Mixers",
      text2: 'Great Studio Monitor',
      text3: 'Every Great Mix ',
      text4: 'There Is A ',
      image: newMain5,
      class: 'thirdImage',
      BGimage: newmainBg1,
      rank: 1,
    },
    {
      url:"/products/5/Amplifiers",
      title: 'Design Projects 1',
      text: 'Unleash Superior Sound With Our ',
      text2: 'Amplifiers.',
      image: newMain6,
      class: 'secondImage',
      BGimage: newmainBg2,
      rank: 2,
    },
    {
      url:"/products/1/Loudspeakers",
      title: 'Design Projects 11',
      text: 'blank',
      text2: 'Aplus Audios',
      image: newMain7,
      class: 'firstImage',
      imageClass:'bigImage',
      BGimage: newmainBg3,
      rank: 3,
    },
    
    {
      url:"/products/1/Loudspeakers",
      title: 'Design Projects 11',
      text: 'blank',
      text2: 'Aplus Audios',
      image: newMain8,
      imageClass:'bigImage',
      class: 'firstImage',
      BGimage: newmainBg4,
      rank: 4,
    }
  ];
  const len = cards.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, window.location.href.includes("localhost")?700000:3000);
    return () => clearInterval(interval);
  }, [activeIndex, len]);

  const handleNext = () => {
    activeIndex == len ? setActiveIndex(0) : setActiveIndex((prev) => prev + 1);
  };
  const handlePrevious = () => {
    activeIndex == 0 ? setActiveIndex(len) : setActiveIndex((prev) => prev - 1);
  };
  const [startX, setStartX] = useState(null);
  const handleSwipeStart = (event) => {
    setStartX(event.touches[0].clientX)
  }
  const handleSwipeMove = (event) => {
    if (startX !== null) {
      const currentX = event.touches[0].clientX
      const difference = startX - currentX
      if (difference > 0) {
        // Swiped left
        setActiveIndex((prevIndex) => (prevIndex === len ? 0 : prevIndex + 1))
      }
      if (difference < 0) {
        // Swiped right
        setActiveIndex((prevIndex) => (prevIndex == 0 ? len : prevIndex - 1))
      }
      setStartX(null)
    }
  }
  const top = useBreakpointValue({ base: '92%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  return (
    <>
      <IconButton
        aria-label="left-arrow"
        borderRadius="full"
        position="absolute"
        className='side-button'
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={handlePrevious}
      >
        <AiOutlineLeftCircle />
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
        onClick={handleNext}>
        <AiOutlineRightCircle />
      </IconButton>
      {/* <Slider {...settings} ref={slider => setSlider(slider)}> */}
        {cards.map((card, index) => {
          return (
            <Box
              position={'relative'}
              key={index}
              onTouchStart={handleSwipeStart} onTouchMove={handleSwipeMove}
              height={'80vh'}
              maxHeight={"700px"}
              sx={{'--bgimg':`url(${card.BGimage})`}}
              className={`MAINHOME23 ${card.class} ${activeIndex == index && "active"}`}
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
                {card.text !== "blank"?
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
                  ) : 
                  card.text !== "blank"? (
                    <Text className="LOGOTEXT">
                      {card.text}
                      <span
                        className={card.text2 == 'Aplus Audios' ? 'orange' : ''}
                      >
                        {card.text2}
                      </span>
                    </Text>
                  ):""}
                  
                  <Link className='atagCarousalMain' to={card.url}>
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
                  :""}

                <Image
                  loading="lazy"
                  maxW={"480px"}
                  className={`${
                    card.title == 'Design Projects 11' ? 'belowImage' : ''} ${card.imageClass?card.imageClass:""}
                  `}
                  src={card.image}
                />
              </Box>
            </Box>
          );
        })}
     
      {/* </Slider> */}
    </>
  );
});
export default React.memo(CaptionCarousel);
