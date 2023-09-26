'use client'

import { useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
 // InputRightElement,
  useToast,
  Radio,
  RadioGroup,
  Stack
} from '@chakra-ui/react'


const Form1 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Gracias por usar nuestra calculadora en línea.
      </Heading>
      <FormControl mt="2%">
        <FormLabel htmlFor="windows" fontWeight={'normal'}>
          ¿Cuántas ventanas estás buscando cubrir con persianas?
        </FormLabel>
        <Input id="windows" type="number" placeholder="Número de ventanas" required />
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="blindType" fontWeight={'normal'}>
          Tipo de persiana
        </FormLabel>
        <RadioGroup id="blindType">
          <Stack direction="row">
            <Radio value="blind1">
              <img src="image_url1" alt="Blind Type 1" />
            </Radio>
            <Radio value="blind2">
              <img src="image_url2" alt="Blind Type 2" />
            </Radio>
            {/* Add more radio options for different blind types */}
          </Stack>
        </RadioGroup>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="fabricType" fontWeight={'normal'}>
          Tipo de tela
        </FormLabel>
        <Select id="fabricType" placeholder="Selecciona el tipo de tela">
          <option value="fabric1">Tela 1</option>
          <option value="fabric2">Tela 2</option>
          {/* Add more fabric options */}
        </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="colorPreference" fontWeight={'normal'}>
          Preferencia de color
        </FormLabel>
        <Select id="colorPreference" placeholder="Selecciona el color">
          <option value="color1">Color 1</option>
          <option value="color2">Color 2</option>
          {/* Add more color options */}
        </Select>
      </FormControl>

      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Nombre
          </FormLabel>
          <Input id="first-name" placeholder="Nombre" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Apellido
          </FormLabel>
          <Input id="last-name" placeholder="Apellido" />
        </FormControl>
      </Flex>

      <FormControl>
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Correo electrónico
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>Nunca compartiremos tu correo electrónico.</FormHelperText>
      </FormControl>
    </>
  );
};

const Form2 = () => {
  //const [show, setShow] = useState(false);
  //const handleClick = () => setShow(!show);

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Gracias por usar nuestra calculadora en línea.
      </Heading>
      <FormControl mt="2%">
        <FormLabel htmlFor="windows" fontWeight={'normal'}>
          ¿Cuántas ventanas estás buscando cubrir con persianas?
        </FormLabel>
        <Input id="windows" type="number" placeholder="Número de ventanas" required/>
      </FormControl>

      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Nombre
          </FormLabel>
          <Input id="first-name" placeholder="Nombre" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Apellido
          </FormLabel>
          <Input id="last-name" placeholder="Apellido" />
        </FormControl>
      </Flex>
      <Flex>
      <FormControl >
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Correo electrónico
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>Nunca compartiremos tu correo electrónico.</FormHelperText>
      </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Apellido
          </FormLabel>
          <Input id="last-name" placeholder="Apellido" />
        </FormControl>
      </Flex>
     
    </>
  );
};


const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Social Handles
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Website
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  )
}

export default function Multistep() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 3) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}