import React from "react";
import { Box, Text, Image, Button, Grid, GridItem, Stack, Flex, Icon } from "@chakra-ui/react";
import Logo from "../components/Logo";
import logoGif from "../assets/logo.gif";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Silk Scrunchie",
    price: "$25",
    rating: 5,
    image: "https://images.unsplash.com/photo-1606772016409-d4a55e32be6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2NydW5jaGllfGVufDB8fHx8MTcxMTk4ODEyNnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Velvet Scrunchie",
    price: "$20",
    rating: 4,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2ZWx2ZXQlMjBzY3J1bmNoaWV8ZW58MHx8fHwxNzExOTg4MTI3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Satin Scrunchie",
    price: "$22",
    rating: 5,
    image: "https://images.unsplash.com/photo-1605619082574-e92eee603b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYXRpbiUyMHNjcnVuY2hpZXxlbnwwfHx8fDE3MTE5ODgxMjd8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Lace Scrunchie",
    price: "$28",
    rating: 5,
    image: "https://images.unsplash.com/photo-1605619082574-e92eee603b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYWNlJTIwc2NydW5jaGllfGVufDB8fHx8MTcxMTk4ODEyN3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box>
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding={6} bg="gray.800" color="white">
        <Logo src="/assets/logo.gif" boxSize="50px" />
        <Button leftIcon={<FaShoppingCart />} colorScheme="pink" size="lg">
          Cart
        </Button>
      </Flex>

      <Box backgroundImage="https://images.unsplash.com/photo-1604937455095-ef2fe3d46fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxMTk4ODEyOHww&ixlib=rb-4.0.3&q=80&w=1080" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" paddingY={20}>
        <Stack spacing={6} align="center">
          <Text as="h2" size="2xl" mt={6} mb={6}>
            Elevate Your Hair Game
          </Text>
          <Text fontSize="xl">Discover our collection of luxurious scrunchies, crafted from the finest materials for a touch of elegance in your everyday style.</Text>
          <Button colorScheme="pink" size="lg">
            Shop Now
          </Button>
        </Stack>
      </Box>

      <Grid templateColumns="repeat(4, 1fr)" gap={6} padding={10}>
        {products.map((product) => (
          <GridItem key={product.id}>
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={product.image} alt={product.name} />
              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" mr="2">
                    {product.name}
                  </Box>
                  <Box>
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <Icon as={FaStar} key={i} color={i < product.rating ? "pink.500" : "gray.300"} />
                      ))}
                  </Box>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                  {product.price}
                </Box>

                <Button colorScheme="pink" size="sm" mt={4}>
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Box as="footer" bg="gray.800" color="white" py={10} textAlign="center">
        <Text>&copy; 2023 Frenchie and CO. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
