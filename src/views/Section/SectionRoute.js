// ** React Imports
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const SectionList = lazy(() => import("./list"));
const SectionAdd = lazy(() => import("./add"));
const SectionEdit = lazy(() => import("./edit"));

const SectionRoute = [
  {
    element: <SectionList />,
    path: "/section",
  },
  {
    element: <SectionAdd />,
    path: "/section-add",
  },
  {
    element: <SectionEdit />,
    path: "/section-edit/:id",
  }
];

export default SectionRoute;
