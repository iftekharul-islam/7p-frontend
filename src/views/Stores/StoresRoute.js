// ** React Imports
import { lazy } from "react";

const StoreList = lazy(() => import("./list"));
const StoreAdd = lazy(() => import("./add"));
const StoreEdit = lazy(() => import("./edit"));
const StoreItems = lazy(() => import("./items"));

const StoresRoute = [
  {
    element: <StoreList />,
    path: "/stores",
  },
  {
    element: <StoreAdd />,
    path: "/store-add",
  },
  {
    element: <StoreEdit />,
    path: "/store-edit/:id",
  },
  {
    element: <StoreItems />,
    path: "/store-items/:id",
  },
];

export default StoresRoute;
