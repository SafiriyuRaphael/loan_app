import { Navigate, type RouteObject } from "react-router";
import PersonalDetails from "./views/personal";
import AccountDetails from "./views/account";
import Reviews from "./views/reviews";
import LoanDetailsForm from "./views/loan";

export const userRecordsRoute: RouteObject[] = [
  {
    path: "",
    element: <Navigate to="personal" replace />,
  },
  {
    path: "personal",
    element: <PersonalDetails />,
  },
  {
    path: "account",
    element: <AccountDetails />,
  },
  {
    path: "reviews",
    element: <Reviews />,
  },
  {
    path: "loan",
    element: <LoanDetailsForm />,
  },
];
