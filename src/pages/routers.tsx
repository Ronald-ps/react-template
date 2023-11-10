import { createBrowserRouter } from "react-router-dom";

import { DefaultPagesContainer } from "./DefaultPagesContainer";
import { LoginPage } from "./Login";
import { HomePage } from "./Home";
import { ProtectedRoute } from "@components/auth/ProtectedRoute";
import { ContributionsListPage } from "./ContributionsList";

export const ROUTER_PATHS = {
  LOGIN: "/login",
  HOME: "/",
  CONTRIBUTIONS: "/contributions",
};

export const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.LOGIN,
    element: <LoginPage redirectUrl={ROUTER_PATHS.HOME} />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <DefaultPagesContainer />,
        children: [
          { path: ROUTER_PATHS.HOME, element: <HomePage /> },
          { path: ROUTER_PATHS.CONTRIBUTIONS, element: <ContributionsListPage /> },
        ],
      },
    ],
  },
]);
