// ** React Imports
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const RejectionReasonList = lazy(() => import("./list"));

const RejectionReasonRoute = [
  {
    element: <RejectionReasonList />,
    path: "/reason",
  }
];

export default RejectionReasonRoute;
