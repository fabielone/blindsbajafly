'use client'

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaFacebook} from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import logo from "../../public/assets/blindsbajalogo.png"




const SocialButton = ({
  children,
  label,
  href,
  target,
}: {
  children: ReactNode
  label: string
  href: string
  target: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={'_blank'}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image maxW={['200px','200px','200px','250px', '250px']} src={logo} ></Image>
            </Box>
            <Text fontSize={'sm'}>© 2023 Blinds Baja. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
             
              <SocialButton label={'Facebook'} href={'https://facebook.com/blindsbaja'} target="_blank">
                <FaFacebook />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://www.instagram.com/blinds.baja'} target="_blank">
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Compañía</ListHeader>
            <Box as="a" href={'#'}>
              Nuestro Equipo
            </Box>
            <Box as="a" href={'#'}>
              Nuestro Proceso
            </Box>
            <Box as="a" href={'#'}>
              Nuestros Clientes
            </Box>
            <Box as="a" href={'#'}>
              Precios
            </Box>
            <Box as="a" href={'#'}>
              Reseñas
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Soporte</ListHeader>
            <Box as="a" href={'#'}>
              Centro Ayuda
            </Box>
            <Box as="a" href={'#'}>
              Terminos y Condiciones
            </Box>
            <Box as="a" href={'#'}>
              Legal
            </Box>
            <Box as="a" href={'#'}>
              Poliza de Privacidad
            </Box>
           
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Obten Ofertas</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Su Email'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('yellow.500', 'yellow.500')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'yello.700',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}