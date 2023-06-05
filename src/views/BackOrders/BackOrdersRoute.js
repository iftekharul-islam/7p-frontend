// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));

const BackOrdersRoute = [
  {
    element: <List />,
    path: "/back-orders",
  },
];

export default BackOrdersRoute;
