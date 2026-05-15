import { type RouteObject } from "react-router";
import AuthLayout from "../../modules/authentication/views/layout";
import { authRoutes } from "../../modules/authentication/authentication.routes";
import HomePage from "../../modules/Hompage/views/HomePage";
import ApplyToLoan from "../../modules/Hompage/apply-now";
// import UserRecordslayout from "../../modules/user-records/views/layout";
// import { userRecordsRoute } from "../../modules/user-records/user-records.routes";
// import PersonalLoan from "../../modules/Hompage/views/PersonalLoan";
import UserRecordslayout from "../../modules/user-records/views/layout";
import { userRecordsRoute } from "../../modules/user-records/user-records.routes";
import LoanDashboard from "../../Loan-dashboard/dashboard";

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
    path: "/apply-now",
    element: <ApplyToLoan />,
  },
  {
    path: "user-records",
    element: <UserRecordslayout />,
    children: userRecordsRoute,
  },
  {
    path: "dashboard",
    element: <LoanDashboard/>,
  },
  {
    path: "*",
    element: <h1>Oops!, page not found.</h1>,
  },
];
