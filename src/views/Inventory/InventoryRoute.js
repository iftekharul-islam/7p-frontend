// ** React Imports
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const InventoryList = lazy(() => import("./list"));
const VendorAdd = lazy(() => import("./add"));
const VendorEdit = lazy(() => import("./edit"));
const VendorView = lazy(() => import("./show"));

const InventoryRoute = [
  {
    element: <InventoryList />,
    path: "/inventory",
  },
  {
    element: <VendorAdd />,
    path: "/vendor-add",
  },
  {
    element: <VendorEdit />,
    path: "/vendor-edit/:id",
  },
  {
    element: <VendorView />,
    path: "/vendor-view/:id",
  },
];

export default InventoryRoute;
