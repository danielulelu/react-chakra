import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts and a=pages
import RootLayout from "./layouts/RootLayout";
import Dashboard, { tasksLoader } from "./pages/Dashboard";
import Create, { createTask } from "./pages/Create";
import Profile from "./pages/Profile";
import { ChakraProvider } from '@chakra-ui/react';

// router and routes
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Dashboard />} loader={tasksLoader} />
    <Route path="create" element={<Create />} action={createTask} />
    <Route path="profile" element={<Profile />}/>
    </Route>

));

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App;
