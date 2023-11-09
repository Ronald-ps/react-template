// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routers";

function App() {
  return (
    <>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
