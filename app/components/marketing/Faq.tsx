import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Faq() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">¿Cuáles son los tipos de persianas disponibles?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Ofrecemos una amplia gama de persianas, incluyendo persianas enrollables, persianas de madera, persianas de tela, persianas verticales, y más. Cada tipo de persiana tiene sus propias ventajas y características únicas. Puedes obtener más detalles sobre cada tipo de persiana en nuestra página de productos.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">¿Cómo puedo solicitar un presupuesto gratuito?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Solicitar un presupuesto gratuito es fácil. Simplemente completa nuestro formulario en línea con los detalles de tu proyecto y tus datos de contacto. Uno de nuestros expertos se pondrá en contacto contigo para proporcionarte un presupuesto personalizado.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">¿Cuál es el tiempo de entrega promedio de las persianas?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                El tiempo de entrega promedio de las persianas varía según el tipo y la cantidad de persianas que necesitas. Nuestro equipo te proporcionará un plazo de entrega estimado cuando solicites un presupuesto. Hacemos todo lo posible para entregar tus persianas de manera oportuna.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">¿Ofrecen instalación profesional?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Sí, ofrecemos servicios de instalación profesional. Nuestro equipo de expertos se encargará de instalar tus persianas de manera precisa y cuidadosa, asegurándose de que funcionen perfectamente. La instalación profesional garantiza resultados óptimos.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">¿Puedo programar una consulta en persona para obtener más información?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Sí, estamos encantados de programar consultas en persona. Comunícate con nosotros para coordinar una cita conveniente. Nuestros especialistas estarán disponibles para responder a todas tus preguntas y proporcionarte información detallada sobre nuestros productos y servicios.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">¿Ofrecen descuentos para proyectos comerciales?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Sí, ofrecemos descuentos especiales para proyectos comerciales y proyectos de gran envergadura. Contáctanos para discutir tus necesidades comerciales y cómo podemos ayudarte a obtener las mejores soluciones de persianas para tu negocio.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          {/* Add more FAQ items here */}
        </Accordion>
      </Container>
    </Flex>
  )
}
