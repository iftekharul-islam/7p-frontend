// ** React Imports
import { lazy } from "react";

const ChildSKUList = lazy(() => import("./list"));
const ChildSKUAdd = lazy(() => import("./add"));
const ChildSKUEdit = lazy(() => import("./edit"));

const ConfigChildSKURoute = [
  {
    element: <ChildSKUList />,
    path: "/config-child-sku",
  },
  {
    element: <ChildSKUAdd />,
    path: "/config-child-sku-add",
  },
  {
    element: <ChildSKUEdit />,
    path: "/config-child-sku-edit/:id",
  }
];

export default ConfigChildSKURoute;
