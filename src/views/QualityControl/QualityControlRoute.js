// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));

const QualityControlRoute = [
  {
    element: <List />,
    path: "/quality-control",
  },
];

export default QualityControlRoute;
