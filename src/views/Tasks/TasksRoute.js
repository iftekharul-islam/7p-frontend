// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));

const TasksRoute = [
  {
    element: <List />,
    path: "/tasks",
  },
];

export default TasksRoute;
