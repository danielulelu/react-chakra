import { Heading, Text, Container, Box } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyle = {
    p: "10",
    bg: "purple",
    color: "white",
    textAlign: "center",
    filter: "blur(1px)",
    ':hover': {
        color: 'black',
        bg: 'orange'
    }
  };

  return (
    <div>
      <Container as="section" maxWidth="sm" py="20px">
        <Heading my="30px" p={3}>
          Chakra UI Components
        </Heading>
        <Text ml="20px" color="blue" fontWeight="bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
          commodi ab expedita ex aspernatur similique in possimus rem libero
          tenetur suscipit incidunt veritatis, magnam molestiae quisquam ullam,
          illo est doloremque.
        </Text>
        <Box p="20px" my="30px" bg="black">
          <Text color="white">This is a box.</Text>
        </Box>
        <Box sx={boxStyle}>Hello Ninjas</Box>
      </Container>
    </div>
  );
}
