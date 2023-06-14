// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));

const PrintSublimationRoute = [
  {
    element: <List />,
    path: "/print-sublimation",
  }
];

export default PrintSublimationRoute;
