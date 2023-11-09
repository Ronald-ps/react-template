import { createBrowserRouter } from "react-router-dom";

import { DefaultPagesContainer } from "./DefaultPagesContainer";
import { LoginPage } from "./Login";
import { ProtectedRoute } from "@components/auth/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [{ path: "/", element: <DefaultPagesContainer /> }],
  },
]);
