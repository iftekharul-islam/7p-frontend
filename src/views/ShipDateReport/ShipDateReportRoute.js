// ** React Imports
import { lazy } from "react";

const ItemsList = lazy(() => import("./list"));

const ShipDateReportRoute = [
  {
    element: <ItemsList />,
    path: "/report-ship-date",
  }
];

export default ShipDateReportRoute;
