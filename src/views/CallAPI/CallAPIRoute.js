// ** React Imports
import { lazy } from "react";

const View = lazy(() => import("./view"));

const CallAPIRoute = [
  {
    element: <View />,
    path: "/api-call",
  }
];

export default CallAPIRoute;
