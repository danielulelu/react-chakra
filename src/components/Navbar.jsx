import { Flex, Box, Heading, Text, Button, Spacer, HStack, useToast } from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const toast = useToast();

  const showToast = () => {
    toast({ title: "Logged out", description: "Successfully logged out", duration: 3000, isClosable: true, status: "success", position: 'top', icon: <UnlockIcon />})
  }
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center" gap='10px'>
      <Heading as="h1">My Tasks</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.600" p="10px">
            D
        </Box>
        <Text>danielulelu@gmail.com</Text>
        <Button colorScheme='purple' onClick={showToast}>Logout</Button>
      </HStack>
    </Flex>
  );
}
