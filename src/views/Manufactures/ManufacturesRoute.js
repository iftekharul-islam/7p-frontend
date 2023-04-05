// ** React Imports
import { lazy } from "react";

const CategoryList = lazy(() => import("./list"));
const CategoryAdd = lazy(() => import("./add"));
const CategoryEdit = lazy(() => import("./edit"));
const CategoryAccess = lazy(() => import("./access"));

const ManufacturesRoute = [
  {
    element: <CategoryList />,
    path: "/manufacture",
  },
  {
    element: <CategoryAdd />,
    path: "/manufacture-add",
  },
  {
    element: <CategoryEdit />,
    path: "/manufacture-edit/:id",
  },
  {
    element: <CategoryAccess />,
    path: "/manufacture-access/:id",
  }
];

export default ManufacturesRoute;
