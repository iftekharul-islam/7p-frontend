// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));
const QCList = lazy(() => import("./qcList"));
const QCOrder = lazy(() => import("./qcOrder"));

const QualityControlRoute = [
  {
    element: <List />,
    path: "/quality-control",
  },
  {
    element: <QCList />,
    path: "/quality-control/list/:id",
  },
  {
    element: <QCOrder />,
    path: "/quality-control/order",
  },
];

export default QualityControlRoute;
