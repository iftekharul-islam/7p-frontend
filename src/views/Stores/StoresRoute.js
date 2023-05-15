// ** React Imports
import { lazy } from "react";

const StoreList = lazy(() => import("./list"));
const StoreAdd = lazy(() => import("./add"));

const StoresRoute = [
  {
    element: <StoreList />,
    path: "/stores",
  },
  {
    element: <StoreAdd />,
    path: "/store-add",
  },
];

export default StoresRoute;
