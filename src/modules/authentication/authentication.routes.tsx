import { Navigate, type RouteObject } from "react-router";
import SignInPage from "./views/sign-in";
import SignUpPage from "./views/sign-up";
import HomePage from "../Hompage/views/HomePage";

export const authRoutes: RouteObject[] = [
  {
    path: "",
    element: <Navigate to="landing" replace />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "signin",
    element: <SignInPage />,
  },
  {
    path: "signup",
    element: <SignUpPage />,
  },
];
