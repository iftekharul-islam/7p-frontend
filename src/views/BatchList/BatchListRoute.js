// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));

const BatchListRoute = [
  {
    element: <List />,
    path: "/batch-list",
  },
];

export default BatchListRoute;
