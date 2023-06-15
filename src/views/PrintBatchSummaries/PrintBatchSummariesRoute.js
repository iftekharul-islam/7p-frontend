// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));

const PrintBatchSummariesRoute = [
  {
    element: <List />,
    path: "/print-batch-summaries",
  }
];

export default PrintBatchSummariesRoute;
