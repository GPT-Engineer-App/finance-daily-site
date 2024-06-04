import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <HStack spacing={8} justify="space-between">
            <Heading as="h1" size="lg">Financial Times</Heading>
            <HStack spacing={4}>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.xl" mt={8}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {/* Featured Article */}
          <Box gridColumn={{ md: "span 2" }} bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="xl" mb={4}>Featured Article</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>

          {/* Sidebar */}
          <Box bg="gray.50" p={4} borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>Trending Topics</Heading>
            <VStack align="start" spacing={2}>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Topic 1</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Topic 2</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Topic 3</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Topic 4</Link>
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Grid of Smaller Articles */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h4" size="md" mb={2}>Article 1</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h4" size="md" mb={2}>Article 2</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h4" size="md" mb={2}>Article 3</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h4" size="md" mb={2}>Article 4</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h4" size="md" mb={2}>Article 5</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h4" size="md" mb={2}>Article 6</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <HStack spacing={8} justify="center">
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;