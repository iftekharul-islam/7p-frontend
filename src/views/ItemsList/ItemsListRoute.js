// ** React Imports
import { lazy } from "react";

const ItemsList = lazy(() => import("./list"));

const ItemsListRoute = [
  {
    element: <ItemsList />,
    path: "/items-list",
  }
];

export default ItemsListRoute;
