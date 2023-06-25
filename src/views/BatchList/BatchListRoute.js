// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));
const Show = lazy(() => import("./show"));

const BatchListRoute = [
  {
    element: <List />,
    path: "/batch-list",
  },{
    element: <Show />,
    path: "/batch-list/:id",
  },
];

export default BatchListRoute;
