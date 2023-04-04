// ** React Imports
import { lazy } from "react";

const ParametersList = lazy(() => import("./list"));

const ParametersRoute = [
  {
    element: <ParametersList />,
    path: "/parameter",
  }
];

export default ParametersRoute;
