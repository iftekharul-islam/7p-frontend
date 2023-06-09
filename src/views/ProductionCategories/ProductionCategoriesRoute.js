// ** React Imports
import { lazy } from "react";

const CategoryList = lazy(() => import("./list"));
const CategoryAdd = lazy(() => import("./add"));
const CategoryEdit = lazy(() => import("./edit"));

const ProductionCategoriesRoute = [
  {
    element: <CategoryList />,
    path: "/category",
  },
  {
    element: <CategoryAdd />,
    path: "/category-add",
  },
  {
    element: <CategoryEdit />,
    path: "/category-edit/:id",
  }
];

export default ProductionCategoriesRoute;
