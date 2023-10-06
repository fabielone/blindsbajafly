import SplitWithImage from "~/components/marketing/Nosotros";
import { Box, Text, Heading, VStack } from '@chakra-ui/react';

export default function Index(){


//and object with props for splitwithimage

const props = {
    
        tag: "General",
        title: "Blinds Baja: Elegancia en Persianas para Comercios y Residencias",
        description: "Somos expertos en cortinas para comercios y residencias en Baja California. ¡Explora nuestro catálogo y descubre nuestras cortinas enrollables! Ofrecemos citas gratuitas y consultas en persona. ¡Haz una cita o utiliza nuestra calculadora en línea!",
      
    image: "https://res.cloudinary.com/ddcyltsxi/image/upload/v1695912911/blindsbaja/homepagemarketing/pexels-avinash-gumber-11097671_ntovcv.jpg"
}

return(<>
<SplitWithImage {...props}></SplitWithImage>

<Box p={6}>
      <Heading as="h1" fontSize="4xl">
        Nuestra Compañía y Servicios
      </Heading>
      <Text fontSize="lg" mt={4} color="gray.600">
        Bienvenidos a Blinds Baja, su destino de confianza para persianas de alta calidad tanto para residencias como negocios. Somos expertos en crear espacios elegantes y funcionales mediante la instalación de persianas enrollables y de otro tipo.
      </Text>
      <Text fontSize="lg" mt={4} color="gray.600">
        Nuestros servicios incluyen:
      </Text>
      <VStack align="start" mt={2} spacing={2}>
        <Text fontSize="lg">- Instalación de persianas enrollables</Text>
        <Text fontSize="lg">- Asesoramiento de diseño</Text>
        <Text fontSize="lg">- Consulta gratuita en persona</Text>
      </VStack>
      <Text fontSize="lg" mt={4} color="gray.600">
        En Blinds Baja, nos enorgullece ofrecer productos de calidad superior y un servicio excepcional. Nuestro equipo de especialistas está listo para ayudarle a encontrar las persianas perfectas para sus necesidades.
      </Text>
    </Box>
</>
)



}