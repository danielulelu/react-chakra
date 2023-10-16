import { Flex, Box, Heading, Text, Button, Spacer, HStack } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center" gap='10px'>
      <Heading as="h1">My Tasks</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.600" p="10px">
            D
        </Box>
        <Text>danielulelu@gmail.com</Text>
        <Button colorScheme='purple'>Logout</Button>
      </HStack>
    </Flex>
  );
}
