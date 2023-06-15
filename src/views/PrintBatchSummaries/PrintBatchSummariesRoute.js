// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));
const Print = lazy(() => import("./list/print"));

const PrintBatchSummariesRoute = [
  {
    element: <List />,
    path: "/print-batch-summaries",
  },
  {
    element: <Print />,
    path: "/print",
  }
];

export default PrintBatchSummariesRoute;
