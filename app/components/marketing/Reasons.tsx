import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// // Replace test data with your own
// const features = [...Array(8)].map((_, i) => ({
//   id: i,
//   title: 'Lorem ipsum dolor sit amet',
//   text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
// }));

const features = [
  {
    id: 1,
    title: 'Variedad de Estilos',
    text: 'Ofrecemos una amplia variedad de estilos de persianas para que encuentres la perfecta para tu espacio.',
  },
  {
    id: 2,
    title: 'Calidad Superior',
    text: 'Nuestras persianas son de la más alta calidad, diseñadas para durar y resistir el paso del tiempo.',
  },
  {
    id: 3,
    title: 'Personalización',
    text: 'Puedes personalizar tus persianas eligiendo entre diferentes colores, telas y acabados.',
  },
  {
    id: 4,
    title: 'Control de Luz',
    text: 'Controla la cantidad de luz que ingresa a tu espacio con nuestras persianas ajustables.',
  },
  {
    id: 5,
    title: 'Privacidad',
    text: 'Mantén la privacidad de tu hogar u oficina con nuestras persianas diseñadas para bloquear las miradas indiscretas.',
  },
  {
    id: 6,
    title: 'Fácil Mantenimiento',
    text: 'Nuestras persianas son fáciles de limpiar y mantener en perfecto estado.',
  },
  {
    id: 7,
    title: 'Instalación Profesional',
    text: 'Ofrecemos servicios de instalación profesional para garantizar que tus persianas queden perfectas.',
  },
  {
    id: 8,
    title: 'Atención al Cliente',
    text: 'Nuestro equipo de atención al cliente está siempre dispuesto a ayudarte y responder a tus preguntas.',
}];

export default function Reasons() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
      <Heading fontSize={'3xl'}>¿Por qué Elegir Blinds Baja?</Heading>
  <Text color={'gray.600'} fontSize={'xl'}>
    En Blinds Baja, nos enorgullece ofrecer soluciones de tratamiento de ventanas de primera calidad. Nuestro compromiso con la calidad y la excelencia nos distingue del resto. Aquí te presentamos las razones por las que deberías elegirnos para todas tus necesidades de cubiertas de ventanas:
  </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}