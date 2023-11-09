import { createBrowserRouter } from "react-router-dom";

import { DefaultPagesContainer } from "./DefaultPagesContainer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPagesContainer />,
    children: [
      { path: "/", element: <div>Teste</div> },
      { path: "/about", element: <div>about</div> },
    ]
  },
]);
