'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Button } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function OurProcessMini() {
  return (
    <Box p={4}>
      <Heading as="h2" fontSize="2xl" mb={4}>
        Nuestro Proceso de un Vistazo
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Medición Maestra'}
          text={
            'En esta etapa, tomamos medidas precisas para que tus persianas encajen a la perfección.'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Instalación Impecable'}
          text={
            'Nuestros expertos instalan tus persianas con precisión y cuidado, para que funcionen como por arte de magia.'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Siempre a tu Servicio'}
          text={
            'Nos aseguramos de que ames tus nuevas persianas y estamos aquí para cualquier cosa que necesites.'
          }
        />
      </SimpleGrid>
      <Button mt={4} colorScheme="teal">
        Leer más
      </Button>
    </Box>
  )
}
