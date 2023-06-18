// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));
const Show = lazy(() => import("./show"));

const MoveToQCRoute = [
  {
    element: <List />,
    path: "/move-to-qc",
  },
  {
    element: <Show />,
    path: "/move-to-qc/show",
  },
];

export default MoveToQCRoute;
