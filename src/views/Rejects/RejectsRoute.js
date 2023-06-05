// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));

const RejectsRoute = [
  {
    element: <List />,
    path: "/rejects",
  },
];

export default RejectsRoute;
