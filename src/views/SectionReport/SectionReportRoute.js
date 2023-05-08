// ** React Imports
import { lazy } from "react";

const ItemsList = lazy(() => import("./list"));

const SectionReportRoute = [
  {
    element: <ItemsList />,
    path: "/report-section",
  }
];

export default SectionReportRoute;
