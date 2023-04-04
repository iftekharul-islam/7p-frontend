// ** React Imports
import { lazy } from "react";

const CategoryList = lazy(() => import("./list"));
const CategoryAdd = lazy(() => import("./add"));
const CategoryEdit = lazy(() => import("./edit"));

const ProductionCategoriesRoute = [
  {
    element: <CategoryList />,
    path: "/product-category",
  },
  {
    element: <CategoryAdd />,
    path: "/product-category-add",
  },
  {
    element: <CategoryEdit />,
    path: "/product-category-edit/:id",
  }
];

export default ProductionCategoriesRoute;
