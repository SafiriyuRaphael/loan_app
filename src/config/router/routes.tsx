import { type RouteObject } from "react-router";
import AuthLayout from "../../modules/authentication/views/layout";
import { authRoutes } from "../../modules/authentication/authentication.routes";
import HomePage from "../../modules/Hompage/views/HomePage";
import ApplyToLoan from "../../modules/Hompage/apply-now";
import UserRecordslayout from "../../modules/user-records/views/layout";
import { userRecordsRoute } from "../../modules/user-records/user-records.routes";
import LoanDashboard from "../../Loan-dashboard/dashboard";
import StudentLoan from "../../modules/Hompage/views/StudentLoan";
import BusinessLoan from "../../modules/Hompage/views/BussinessLoan";
import AgriculturalLoan from "../../modules/Hompage/views/AgriculturalLoan";

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
    element: <LoanDashboard />,
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
  // {
  //   path: "dashboard",
  //   element: <LoanDashboard />,
  // },
  {
    path: "student",
    element: <StudentLoan />,
  },
  {
    path: "business",
    element: <BusinessLoan />,
  },
  {
    path: "agric",
    element: <AgriculturalLoan />,
  },
  {
    path: "*",
    element: <h1>Oops!, page not found.</h1>,
  },
];
