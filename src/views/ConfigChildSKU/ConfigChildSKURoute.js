// ** React Imports
import { lazy } from "react";

const InventoryList = lazy(() => import("./list"));
const InventoryAdd = lazy(() => import("./add"));
const InventoryEdit = lazy(() => import("./edit"));

const ConfigChildSKURoute = [
  {
    element: <InventoryList />,
    path: "/config-child-sku",
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

export default ConfigChildSKURoute;
