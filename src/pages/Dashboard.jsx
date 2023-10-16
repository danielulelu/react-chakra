import { SimpleGrid, Box, Text } from "@chakra-ui/react";

export default function Dashboard() {
  

  return (
    <SimpleGrid columns={4} p="10px" spacing={10} minChildWidth="250px">
      <Box bg="white" h="200px" border="1px solid">
        <Text color={{ base:  'blue', md: 'red', lg: 'green'}}>Hello to Luwis</Text>
      </Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
    </SimpleGrid>

  );
}
