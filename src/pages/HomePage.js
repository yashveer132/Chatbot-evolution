import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Container,
  Stack,
  Icon,
  useColorModeValue,
  Badge,
  HStack,
  List,
  ListItem,
  ListIcon,
  Flex,
  Image,
  Divider,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaHospital,
  FaRobot,
  FaBrain,
  FaCheckCircle,
  FaChevronRight,
  FaHotel,
  FaPlus,
  FaCode,
} from "react-icons/fa";
import PageTransition from "../components/common/PageTransition";
import { keyframes } from "@emotion/react";
import { useEffect } from "react";
import { useServices } from "../context/ServiceContext";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const glowAnimation = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`;

function HomePage() {
  const navigate = useNavigate();
  const { domainLoader, optimization } = useServices();

  useEffect(() => {
    const preloadDomains = async () => {
      try {
        await domainLoader.preloadDomains(["restaurant", "clinic"]);
        await optimization.preloadData(["commonPhrases", "greetings"], (key) =>
          import(`../data/${key}.js`)
        );
      } catch (error) {
        console.error("Failed to preload domains:", error);
      }
    };

    preloadDomains();
  }, [domainLoader, optimization]);

  const bgGradient = useColorModeValue(
    "linear(to-br, brandPrimary.600, brandPrimary.800)",
    "linear(to-br, gray.700, gray.900)"
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const subtleBg = useColorModeValue("gray.50", "gray.700");
  const heroTextColor = useColorModeValue("gray.800", "white");

  const imageWrapperStyle = {
    position: "relative",
    transform: {
      base: "translateX(0)",
      md: "translateX(20px)",
      lg: "translateX(40px) translateY(-20px)",
    },
    _after: {
      content: '""',
      position: "absolute",
      bottom: "-20px",
      left: "50%",
      transform: "translateX(-50%)",
      width: { base: "70%", md: "80%" },
      height: { base: "15px", md: "20px" },
      filter: "blur(20px)",
      background: useColorModeValue(
        "rgba(66, 153, 225, 0.3)",
        "rgba(154, 230, 180, 0.2)"
      ),
      borderRadius: "full",
    },
  };

  return (
    <PageTransition>
      <Box
        as="section"
        pt={{ base: 6, sm: 8, md: 16, lg: 20 }}
        pb={{ base: 8, sm: 10, md: 16, lg: 24 }}
        px={{ base: 4, md: 6, lg: 8 }}
        bg={bgGradient}
        color={heroTextColor}
        borderRadius={{ base: "md", md: "xl" }}
        mb={{ base: 8, md: 12 }}
        overflow="hidden"
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          bgImage="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPC9zdmc+')"
          opacity={0.6}
        />

        <Container maxW="container.xl" position="relative">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 6, md: 8, lg: 10 }}
            alignItems="center"
          >
            <MotionBox
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <MotionHeading
                as="h1"
                size={{ base: "xl", sm: "2xl" }}
                lineHeight="shorter"
                fontWeight="extrabold"
                variants={fadeIn}
                color={heroTextColor}
                mb={{ base: 3, md: 4 }}
              >
                Intelligent Business Chatbot for{" "}
                <Text as="span" color="accent.300">
                  Modern Enterprises
                </Text>
              </MotionHeading>

              <MotionText
                fontSize={{ base: "md", sm: "lg", md: "xl" }}
                mt={{ base: 4, md: 6 }}
                maxW="lg"
                variants={fadeIn}
                color={heroTextColor}
              >
                A cutting-edge chatbot platform showcasing innovation across
                multiple business domains. Our project demonstrates seamless
                conversational experiences for restaurant ordering, clinic
                bookings, and hotel reservations—all within a unified AI
                framework.
              </MotionText>

              <MotionBox mt={{ base: 6, md: 8 }} variants={fadeIn}>
                <Stack
                  spacing={{ base: 4, sm: 4 }}
                  direction={{ base: "column", sm: "column" }}
                  flexWrap={{ base: "nowrap", md: "wrap" }}
                  justify="center"
                  align="center"
                  width="100%"
                >
                  <HStack
                    spacing={{ base: 2, sm: 4 }}
                    justify="center"
                    flexDirection={{ base: "column", sm: "row" }}
                  >
                    <Button
                      size={{ base: "md", md: "lg" }}
                      colorScheme="accent"
                      rightIcon={<Icon as={FaChevronRight} />}
                      onClick={() => navigate("/restaurant")}
                      minW={{ base: "auto", sm: "160px", md: "200px" }}
                      width={{ base: "full", sm: "auto" }}
                      fontSize={{ base: "sm", md: "md" }}
                      px={{ base: 3, md: 4 }}
                      mb={{ base: 2, sm: 0 }}
                    >
                      Try Restaurant Demo
                    </Button>
                    <Button
                      size={{ base: "md", md: "lg" }}
                      variant="solid"
                      colorScheme="brandPrimary"
                      rightIcon={<Icon as={FaChevronRight} />}
                      onClick={() => navigate("/clinic")}
                      minW={{ base: "auto", sm: "160px", md: "200px" }}
                      width={{ base: "full", sm: "auto" }}
                      fontSize={{ base: "sm", md: "md" }}
                      px={{ base: 3, md: 4 }}
                    >
                      Try Clinic Demo
                    </Button>
                  </HStack>
                  <Tooltip
                    label="Example of extending our chatbot system to additional domains"
                    hasArrow
                    placement="bottom"
                    bg="purple.600"
                    color="white"
                    px={4}
                    py={2}
                    borderRadius="md"
                    fontSize={{ base: "xs", sm: "sm" }}
                    textAlign="center"
                    boxShadow="lg"
                    fontWeight="medium"
                  >
                    <Button
                      size={{ base: "md", md: "lg" }}
                      variant="solid"
                      colorScheme="purple"
                      rightIcon={<Icon as={FaChevronRight} />}
                      onClick={() => navigate("/hotel")}
                      minW={{ base: "auto", md: "200px" }}
                      width={{ base: "full", sm: "auto" }}
                      maxW={{ base: "full", sm: "240px" }}
                      fontSize={{ base: "sm", md: "md" }}
                      px={{ base: 3, md: 4 }}
                      mt={{ base: 0, sm: 3 }}
                    >
                      Try Hotel Demo
                    </Button>
                  </Tooltip>

                  {/* Moved badges below the hotel demo button */}
                  <HStack
                    spacing={{ base: 2, md: 4, lg: 8 }}
                    justify="center"
                    flexWrap="wrap"
                    mt={4}
                  >
                    <Badge
                      colorScheme="accent"
                      px={3}
                      py={1}
                      borderRadius="full"
                      mb={{ base: 2, md: 0 }}
                    >
                      Smart Solutions
                    </Badge>
                    <Badge
                      colorScheme="green"
                      px={3}
                      py={1}
                      borderRadius="full"
                      mb={{ base: 2, md: 0 }}
                    >
                      Multi-Domain
                    </Badge>
                    <Badge
                      colorScheme="purple"
                      px={3}
                      py={1}
                      borderRadius="full"
                      mb={{ base: 2, md: 0 }}
                    >
                      Interactive
                    </Badge>
                  </HStack>
                </Stack>
              </MotionBox>

              {/* Remove the badge section that was here */}
            </MotionBox>

            <MotionBox
              display={{ base: "none", md: "block" }}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              sx={imageWrapperStyle}
              ml={{ base: 0, lg: "auto" }}
              position="relative"
              zIndex={1}
            >
              <Box
                position="relative"
                animation={`${floatAnimation} 6s ease-in-out infinite`}
                transform={{ base: "scale(1)", lg: "scale(1.1)" }}
              >
                <Image
                  src="/Hero-image.jpg"
                  alt="AI Assistant Hero"
                  width="full"
                  height="auto"
                  objectFit="contain"
                  filter={useColorModeValue(
                    "drop-shadow(0 0 20px rgba(66, 153, 225, 0.3))",
                    "drop-shadow(0 0 20px rgba(154, 230, 180, 0.2))"
                  )}
                  transition="transform 0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.02)",
                  }}
                />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  borderRadius="xl"
                  animation={`${glowAnimation} 4s ease-in-out infinite`}
                  bg={useColorModeValue(
                    "linear-gradient(135deg, rgba(66, 153, 225, 0.1) 0%, rgba(66, 153, 225, 0) 100%)",
                    "linear-gradient(135deg, rgba(154, 230, 180, 0.1) 0%, rgba(154, 230, 180, 0) 100%)"
                  )}
                  pointerEvents="none"
                />
              </Box>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      <Container
        maxW="container.xl"
        mb={{ base: 10, md: 20 }}
        px={{ base: 4, md: 6 }}
      >
        <Heading
          as="h2"
          size={{ base: "lg", md: "xl" }}
          mb={{ base: 3, md: 4 }}
          textAlign="center"
        >
          Domain-Adaptable Architecture
        </Heading>
        <Text
          textAlign="center"
          mb={{ base: 6, md: 10 }}
          fontSize={{ base: "md", md: "lg" }}
          color={useColorModeValue("gray.600", "gray.400")}
          px={{ base: 2, md: 0 }}
        >
          Our system is designed to be easily extended to new business domains
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 4, md: 8 }}
          mb={{ base: 10, md: 16 }}
        >
          <Box
            p={{ base: 4, md: 6 }}
            rounded="lg"
            bg={cardBg}
            boxShadow="md"
            textAlign="center"
          >
            <Icon
              as={FaCode}
              boxSize={{ base: 6, md: 8 }}
              color="brandPrimary.500"
              mb={{ base: 3, md: 4 }}
            />
            <Heading size={{ base: "sm", md: "md" }} mb={{ base: 2, md: 4 }}>
              Easy Integration
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
              Simple domain configuration system allows quick integration of new
              business domains
            </Text>
          </Box>

          <Box
            p={{ base: 4, md: 6 }}
            rounded="lg"
            bg={cardBg}
            boxShadow="md"
            textAlign="center"
          >
            <Icon
              as={FaPlus}
              boxSize={{ base: 6, md: 8 }}
              color="brandPrimary.500"
              mb={{ base: 3, md: 4 }}
            />
            <Heading size={{ base: "sm", md: "md" }} mb={{ base: 2, md: 4 }}>
              Extensible Core
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
              Core architecture designed for extensibility with domain-specific
              adapters
            </Text>
          </Box>

          <Box
            p={{ base: 4, md: 6 }}
            rounded="lg"
            bg={cardBg}
            boxShadow="md"
            textAlign="center"
          >
            <Icon
              as={FaBrain}
              boxSize={{ base: 6, md: 8 }}
              color="brandPrimary.500"
              mb={{ base: 3, md: 4 }}
            />
            <Heading size={{ base: "sm", md: "md" }} mb={{ base: 2, md: 4 }}>
              Smart Adaptation
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }}>
              AI responses automatically enhanced with domain-specific knowledge
            </Text>
          </Box>
        </SimpleGrid>

        <Divider my={{ base: 6, md: 10 }} />

        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 6, md: 8 }}
          alignItems="stretch"
        >
          <Card
            overflow="hidden"
            bg={cardBg}
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: "xl",
            }}
            transition="all 0.3s ease"
            height="full"
          >
            <CardHeader bg={subtleBg} py={{ base: 4, md: 6 }}>
              <Flex alignItems="center" justifyContent="center">
                <Icon
                  as={FaUtensils}
                  boxSize={{ base: 5, md: 6 }}
                  color="brandPrimary.500"
                  mr={3}
                />
                <Heading size={{ base: "md", md: "lg" }}>Restaurant</Heading>
              </Flex>
            </CardHeader>
            <CardBody pt={{ base: 4, md: 6 }}>
              <Text mb={{ base: 3, md: 4 }} fontSize={{ base: "sm", md: "md" }}>
                Use our AI assistant to browse restaurant menus, get food
                recommendations, and place orders online with natural language
                queries.
              </Text>
              <List
                spacing={{ base: 2, md: 3 }}
                mb={{ base: 4, md: 6 }}
                fontSize={{ base: "sm", md: "md" }}
              >
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Find dishes based on dietary preferences
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Get recommended meal combos
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Check preparation times and delivery options
                </ListItem>
              </List>
            </CardBody>
            <CardFooter
              bg={subtleBg}
              pt={{ base: 3, md: 4 }}
              pb={{ base: 4, md: 5 }}
            >
              <Button
                colorScheme="brandPrimary"
                rightIcon={<Icon as={FaChevronRight} />}
                onClick={() => navigate("/restaurant")}
                size={{ base: "md", md: "lg" }}
                width="full"
              >
                Explore Restaurant Assistant
              </Button>
            </CardFooter>
          </Card>

          <Card
            overflow="hidden"
            bg={cardBg}
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: "xl",
            }}
            transition="all 0.3s ease"
            height="full"
          >
            <CardHeader bg={subtleBg} py={{ base: 4, md: 6 }}>
              <Flex alignItems="center" justifyContent="center">
                <Icon
                  as={FaHospital}
                  boxSize={{ base: 5, md: 6 }}
                  color="brandSecondary.500"
                  mr={3}
                />
                <Heading size={{ base: "md", md: "lg" }}>Clinic</Heading>
              </Flex>
            </CardHeader>
            <CardBody pt={{ base: 4, md: 6 }}>
              <Text mb={{ base: 3, md: 4 }} fontSize={{ base: "sm", md: "md" }}>
                Book doctor appointments, check physician availability, and get
                information about medical services through conversational AI.
              </Text>
              <List
                spacing={{ base: 2, md: 3 }}
                mb={{ base: 4, md: 6 }}
                fontSize={{ base: "sm", md: "md" }}
              >
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Check doctor availability by date and specialty
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Book appointments with your preferred doctor
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Get information about services and insurance coverage
                </ListItem>
              </List>
            </CardBody>
            <CardFooter
              bg={subtleBg}
              pt={{ base: 3, md: 4 }}
              pb={{ base: 4, md: 5 }}
            >
              <Button
                colorScheme="brandSecondary"
                rightIcon={<Icon as={FaChevronRight} />}
                onClick={() => navigate("/clinic")}
                size={{ base: "md", md: "lg" }}
                width="full"
              >
                Explore Clinic Assistant
              </Button>
            </CardFooter>
          </Card>

          <Card
            overflow="hidden"
            bg={cardBg}
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: "xl",
            }}
            transition="all 0.3s ease"
            gridColumn={{ base: "auto", sm: "span 2", lg: "auto" }}
            height="full"
          >
            <CardHeader bg={subtleBg} py={{ base: 4, md: 6 }}>
              <Flex alignItems="center" justifyContent="center">
                <Icon
                  as={FaHotel}
                  boxSize={{ base: 5, md: 6 }}
                  color="accent.500"
                  mr={3}
                />
                <Heading size={{ base: "md", md: "lg" }}>Hotel</Heading>
              </Flex>
            </CardHeader>
            <CardBody pt={{ base: 4, md: 6 }}>
              <Text mb={{ base: 3, md: 4 }} fontSize={{ base: "sm", md: "md" }}>
                Browse room options, check availability, and book your perfect
                stay through our conversational AI hotel assistant.
              </Text>
              <List
                spacing={{ base: 2, md: 3 }}
                mb={{ base: 4, md: 6 }}
                fontSize={{ base: "sm", md: "md" }}
              >
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Explore room types and amenities
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Learn about hotel services and packages
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Check availability and booking policies
                </ListItem>
              </List>
            </CardBody>
            <CardFooter
              bg={subtleBg}
              pt={{ base: 3, md: 4 }}
              pb={{ base: 4, md: 5 }}
            >
              <Button
                colorScheme="accent"
                rightIcon={<Icon as={FaChevronRight} />}
                onClick={() => navigate("/hotel")}
                size={{ base: "md", md: "lg" }}
                width="full"
              >
                Explore Hotel Assistant
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>

      <Box
        bg={subtleBg}
        py={{ base: 10, md: 16 }}
        borderRadius={{ base: "lg", md: "xl" }}
        px={{ base: 4, md: 0 }}
      >
        <Container maxW="container.lg" textAlign="center">
          <Flex
            justifyContent="center"
            alignItems="center"
            mb={{ base: 4, md: 6 }}
          >
            <Icon
              as={FaRobot}
              boxSize={{ base: 6, md: 8 }}
              mr={3}
              color="brandPrimary.500"
            />
            <Icon
              as={FaBrain}
              boxSize={{ base: 6, md: 8 }}
              color="brandSecondary.500"
            />
          </Flex>

          <Heading size={{ base: "md", md: "lg" }} mb={{ base: 3, md: 4 }}>
            Powered by Advanced Technology
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg" }}
            maxW="2xl"
            mx="auto"
            mb={{ base: 6, md: 8 }}
          >
            Our system combines enterprise-grade technology with domain-specific
            knowledge to provide accurate, contextual solutions across different
            business verticals.
          </Text>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 4, md: 8 }}
            mt={{ base: 6, md: 10 }}
          >
            <Box p={{ base: 4, md: 6 }} rounded="lg" bg={cardBg} boxShadow="md">
              <Heading size={{ base: "sm", md: "md" }} mb={{ base: 2, md: 4 }}>
                Portable Architecture
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }}>
                Easily adapt the system to work with different business domains
                and use cases
              </Text>
            </Box>

            <Box p={{ base: 4, md: 6 }} rounded="lg" bg={cardBg} boxShadow="md">
              <Heading size={{ base: "sm", md: "md" }} mb={{ base: 2, md: 4 }}>
                Domain Knowledge
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }}>
                AI responses enhanced with specific knowledge for more accurate
                assistance
              </Text>
            </Box>

            <Box p={{ base: 4, md: 6 }} rounded="lg" bg={cardBg} boxShadow="md">
              <Heading size={{ base: "sm", md: "md" }} mb={{ base: 2, md: 4 }}>
                Modern Interface
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }}>
                Intuitive chat interface with voice input capability and
                responsive design
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </PageTransition>
  );
}

export default HomePage;
