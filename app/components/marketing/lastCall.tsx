import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

export default function LastCall() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://res.cloudinary.com/ddcyltsxi/image/upload/v1695912928/blindsbaja/homepagemarketing/pexels-gustavo-galeano-maz-9760216_i4jyan.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Encuentra las persianas perfectas para tu hogar o negocio en Blinds Baja
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Ver más
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Contáctanos
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
