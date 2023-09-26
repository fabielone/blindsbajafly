import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Link,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import logo from "../../public/assets/blindsbajalogo.png"
import { useScrollPosition } from "~/hooks/usescrollposition";
import { servicesData } from './services';
import { AiOutlineWhatsApp as WhatsAppIcon, AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import {Link as LinkRe} from "@remix-run/react"

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
 const scrollpo = useScrollPosition();
 const encodedMessage = encodeURIComponent('Hola, me gustaría recibir más información sobre sus persianas.');
 const handleWhatsAppClick = () => {
  // Create the WhatsApp URL
  const whatsappURL = `https://wa.me/${"+13232060492"}?text=${encodedMessage}`;

  // Open WhatsApp in a new window
  window.open(whatsappURL, '_blank');
};
  return (
    <>
    {/* <Flex 
    color={'#d13232'}
    fontFamily={'monospace'}
    
    >
      <Box
      justifyContent={'flex-end'}
      marginLeft={'auto'}
      display={{ base: 'none' }}
      >
      
      <Link
      pl={'10px'}
      pr={'10px'}        
      >Jobs</Link>
       <Link  
        pl={'10px'}
        pr={'10px'}        
      >Internships</Link>
       <Link  
        pl={'10px'}
        pr={'10px'}      
      >Developer Blog</Link>
       <Link 
        pl={'10px'}
        pr={'10px'}
        href="https://devs.omnitek.dev/signin"      
      >Developer Login</Link>
      </Box>
    </Flex> */}
    <Box position={'fixed'} w={'100%'} zIndex={1000} top={scrollpo>0?'0px':'15px'}>
    
      <Flex
      
        bg={useColorModeValue(scrollpo>0?'white':'transparent', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={scrollpo>0?'80px':'120px'}
          transitionProperty={'all'}
          transitionDuration={'1s'}
        
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={scrollpo>0?  1:'none'}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        boxShadow={scrollpo>0?  '2px 2px 7px light-grey ':'none' }
        >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
           <Link
           as={LinkRe}
           to='/'>
           <Image maxW={scrollpo>0?'150px':['200px','200px','250px','250px','250px']} src={logo}
             transitionProperty={'all'}
             transitionDuration={'1s'}
             marginLeft={{base:'none',xl:'150px'}}></Image>
             </Link>
          
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10} alignItems={'center'}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {/* <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button> */}
      <Link
      color={'green'}
      //as={LinkRe}
      onClick={handleWhatsAppClick}>
          <Button
          bg={'white'}
          color={'green'}
      aria-label="Open WhatsApp"
      leftIcon={<WhatsAppIcon />}
    
      size="lg"
    >whatsapp</Button>
    </Link>
        </Stack> 
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
    </>
  );
}
const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'100%'}
                width={"100%"}>
                <Stack
                flexDirection={'row'}
                width={"100%"}>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
       <Link href='https://facebook.com/blindsbaja' target='_blank' >
        <IconButton bg={'white'} icon={<AiFillFacebook />} aria-label={''} />
      </Link>  
      <Link href='https://instagram.com/blinds.baja' target='_blank' >
        <IconButton bg={'white'} aria-label='' icon={<AiOutlineInstagram/>}/>
      </Link>
    </Stack>
  );
};

const DesktopSubNav = ({ label, children, href, subLabel }: NavItem) => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <Stack spacing={4}
    >
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
      {children && (
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={borderColor}
          align={'start'}>
          {children.map((child) => (
            <DesktopSubNav key={child.label} {...child} />
          ))}
        </Stack>
      )}
      
    </Stack>
  );
};


const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Link href='https://facebook.com/blindsbaja' target='_blank' >
        <IconButton bg={'white'} icon={<AiFillFacebook />} aria-label={''} />
      </Link>  
      <Link href='https://instagram.com/blinds.baja' target='_blank' >
        <IconButton bg={'white'} aria-label='' icon={<AiOutlineInstagram/>}/>
      </Link>
    </Stack>
  );
};
const MobileNavItem: React.FC<NavItem> = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (children) {
      e.stopPropagation();
    }
    onToggle();
  };

  return (
    <Stack spacing={4} onClick={handleClick}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Link href={href ?? '#'}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
        </Link>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <MobileNavItem key={child.label} {...child} />
            ))}
            
        </Stack>
      </Collapse>
    </Stack>
  );
};


interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Servicios",
    children: servicesData.map((service) => ({
      label: service.label,
      children: service.categories.map((category) => ({
        label: category.label,
        href: category.href,
      })),
    })),
  },
  {
    label: "Clientes",
    href: "/we/portfolio",
  },
  {
    label: "Proceso",
    href: "/we/process",
  },
  {
    label: "Nosotros",
    href: "/in/",
  },
  {
    label: "Cotizar en Línea",
    href: "https://learn.omnitek.dev",
  },
  {
    label: "Agendar Presupuesto",
    href: "/contact",
  },
];

