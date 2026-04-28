import { Navigate, type RouteObject } from "react-router";
import PersonalDetails from "./views/personal";
import AccountDetails from "./views/Account";
import Reviews from "./views/Reviews";
import LoanDetailsForm from "./views/Loan";

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
