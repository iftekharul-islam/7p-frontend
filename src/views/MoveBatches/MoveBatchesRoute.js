// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));

const MoveBatchesRoute = [
  {
    element: <List />,
    path: "/move-batches",
  },
];

export default MoveBatchesRoute;
