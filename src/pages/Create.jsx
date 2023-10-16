import {
  Box,
  Input,
  FormLabel,
  FormHelperText,
  FormControl,
  Textarea,
  Checkbox,
  Button
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description for the task"
            name="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems="centre" mt="20px">
          <Checkbox name="isPriority" size="lg" colorScheme="purple"/>
          <FormLabel ml="15px">Make this a priority task</FormLabel>
        </FormControl>

        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
}

export const createTask = async ({ request }) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === 'true' ? true : false
  }

  console.log(task)

  return redirect('/')
}
