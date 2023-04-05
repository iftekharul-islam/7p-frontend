// ** React Imports
import { lazy } from "react";

const TemplateList = lazy(() => import("./list"));
const TemplateEdit = lazy(() => import("./edit"));

const RouteTemplatesRoute = [
  {
    element: <TemplateList />,
    path: "/template",
  },
  {
    element: <TemplateEdit />,
    path: "/template-edit/:id",
  }
];

export default RouteTemplatesRoute;
