// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));
const Show = lazy(() => import("./show"));

const MoveToProductionRoute = [
  {
    element: <List />,
    path: "/move-to-production",
  },
  {
    element: <Show />,
    path: "/move-to-production/show",
  },
];

export default MoveToProductionRoute;
