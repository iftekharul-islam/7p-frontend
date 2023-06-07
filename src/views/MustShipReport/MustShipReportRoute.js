// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));

const MustShipReportRoute = [
  {
    element: <List />,
    path: "/must-ship-report",
  },
];

export default MustShipReportRoute;
