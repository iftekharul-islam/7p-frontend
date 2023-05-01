// ** React Imports
import { lazy } from "react";

const ItemsList = lazy(() => import("./list"));

const GraphicItemsListRoute = [
  {
    element: <ItemsList />,
    path: "/graphic-items-list",
  }
];

export default GraphicItemsListRoute;
