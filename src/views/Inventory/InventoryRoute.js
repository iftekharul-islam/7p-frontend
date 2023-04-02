// ** React Imports
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const InventoryList = lazy(() => import("./list"));
const InventoryAdd = lazy(() => import("./add"));
const InventoryEdit = lazy(() => import("./edit"));

const InventoryRoute = [
  {
    element: <InventoryList />,
    path: "/inventory",
  },
  {
    element: <InventoryAdd />,
    path: "/inventory-add",
  },
  {
    element: <InventoryEdit />,
    path: "/inventory-edit/:id",
  }
];

export default InventoryRoute;
