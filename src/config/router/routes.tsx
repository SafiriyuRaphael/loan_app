import { type RouteObject } from "react-router";
import AuthLayout from "../../modules/authentication/views/layout";
import { authRoutes } from "../../modules/authentication/authentication.routes";
import HomePage from "../../modules/Hompage/views/HomePage";
import ApplyToLoan from "../../modules/Hompage/apply-now";
import UserRecordslayout from "../../modules/user-records/views/layout";
import { userRecordsRoute } from "../../modules/user-records/user-records.routes";
import DashboardPage from "../../modules/Hompage/views/DashboardPage";

export const routes: RouteObject[] = [
  {
    path: "auth",
    element: <AuthLayout />,
    children: authRoutes,
  },
  {
    path: "/",
    element: <HomePage />,
    index: true,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    index: true,
  },
  {
    path: "/apply-now",
    element: <ApplyToLoan />,
  },
  {
    path: "user-records",
    element: <UserRecordslayout />,
    children: userRecordsRoute,
  },
  {
    path: "*",
    element: <h1>Oops!, page not found.</h1>,
  },
];
