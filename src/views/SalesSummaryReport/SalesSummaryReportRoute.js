// ** React Imports
import { lazy } from "react";

const ItemsList = lazy(() => import("./list"));

const SalesSummaryReportRoute = [
  {
    element: <ItemsList />,
    path: "/report-sales-summary",
  }
];

export default SalesSummaryReportRoute;
