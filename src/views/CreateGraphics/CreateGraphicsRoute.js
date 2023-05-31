
import { lazy } from "react";

const RouteList = lazy(() => import("./list"));

const CreateGraphicsRoute = [
  {
    element: <RouteList />,
    path: "/create-graphics",
  },
];

export default CreateGraphicsRoute;
