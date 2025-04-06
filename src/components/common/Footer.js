import {
  Box,
  Text,
  Flex,
  HStack,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaReact, FaRobot, FaHeart } from "react-icons/fa";

function Footer() {
  const bgColor = useColorModeValue("brandPrimary.600", "gray.800");
  const borderColor = useColorModeValue("brandPrimary.700", "gray.700");

  return (
    <Box
      as="footer"
      py={4}
      px={{ base: 4, md: 8 }}
      bg={bgColor}
      color="white"
      borderTopWidth="4px"
      borderStyle="solid"
      borderTopColor={borderColor}
      width="100vw"
      position="relative"
      left={0}
      right={0}
      marginLeft="calc(-50vw + 50%)"
      marginRight="calc(-50vw + 50%)"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        textAlign={{ base: "center", md: "left" }}
        width="100%"
        maxWidth="container.xl"
        mx="auto"
      >
        <Box mb={{ base: 4, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold" mb={1}>
            <Icon as={FaRobot} mr={2} />
            GenAI Chatbot
          </Text>
          <Text fontSize="sm" opacity={0.8}>
            A versatile AI solution adaptable for multiple domains
          </Text>
        </Box>

        <HStack spacing={4} fontSize="sm">
          <Text opacity={0.8}>
            Made with <Icon as={FaHeart} color="red.400" mx={1} /> for Chatbot
            Evolution
          </Text>
          <Text opacity={0.8}>
            <Icon as={FaReact} mr={1} /> Powered by React & Gemini
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Footer;
