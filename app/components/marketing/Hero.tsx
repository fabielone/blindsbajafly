'use client'
import React from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  //Image,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  IconButton,
  //ButtonGroup
} from '@chakra-ui/react'
import { AiOutlineWhatsApp as WhatsAppIcon } from "react-icons/ai";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'


// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })

  // These are the images used in the slide
  const cards = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ]

  return (
    <Box position={'relative'} height={'100%'} width={['100vw','100vw','50vw','50vw','50vw']} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
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
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
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
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider  {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'md'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  )
}

export default function Hero() {
  const encodedMessage = encodeURIComponent('Hola, me gustaría recibir más información sobre sus persianas.');
  const handleWhatsAppClick = () => {
    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/${"+13232060492"}?text=${encodedMessage}`;
  
    // Open WhatsApp in a new window
    window.open(whatsappURL, '_blank');
  };
  return (
    <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={2} flex={1} align={'center'} justify={'center'}
        backgroundImage={'https://res.cloudinary.com/ddcyltsxi/image/upload/v1695912920/blindsbaja/homepagemarketing/pexels-max-rahubovskiy-7061339_oiajzw.jpg'}
        backgroundSize={'cover'}
      >
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',  
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'yellow.400',
                zIndex: -1,
              }}>
              Persianas
            </Text>
            <br />{' '}
            <Text color={'#7C422F'} as={'span'}>
              Blinds Baja
            </Text>{' '}
          </Heading>
          <Box border={'2px solid gold'} padding={["10px","10px","10px","10px","10px"]}
          bgColor={'#00000073'}
          borderRadius={'xl'} width={['90%','90%','90%','90%','90%']}>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'} fontWeight={'semibold'} >
            Persianas de alta calidad para tu hogar o negocio. Perfectas para brindarte privacidad y control de la luz natural.
          </Text>
          </Box>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} alignItems={'center'}>
          <Link
      color={'green'}
      //as={LinkRe}
      onClick={handleWhatsAppClick}>
          <Button
          bg={'white'}
          color={'green'}
      aria-label="Open WhatsApp"
      border='2px solid green'
      borderRadius={'full'}
      leftIcon={<WhatsAppIcon />}
    
      size="lg"
    >Mandar Mensaje</Button>
    </Link>
    <Link
      
      //as={LinkRe}
     href='/cotizar'
     >
          <Button
         variant={'outline'}
         colorScheme='blue'
      
      
        bgColor={'white'}
        borderRadius={'full'}
   
      size="lg"
    >Cotizar en Linea</Button>
    </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Carousel/>
      </Flex>
    </Stack>
  )
}
