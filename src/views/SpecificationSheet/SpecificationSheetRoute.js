// ** React Imports
import { lazy } from "react";

const SpecificationList = lazy(() => import("./list"));
const SpecificationAdd = lazy(() => import("./add"));
const SpecificationEdit = lazy(() => import("./edit"));

const SpecificationSheetRoute = [
  {
    element: <SpecificationList />,
    path: "/specification-product",
  },
  {
    element: <SpecificationAdd />,
    path: "/specification-product-add",
  },
  {
    element: <SpecificationEdit />,
    path: "/specification-product-edit/:id",
  }
];

export default SpecificationSheetRoute;
