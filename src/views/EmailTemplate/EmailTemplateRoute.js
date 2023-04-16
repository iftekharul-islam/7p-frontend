// ** React Imports
import { lazy } from "react";

const EmailTemplateList = lazy(() => import("./list"));
const EmailTemplateAdd = lazy(() => import("./add"));
const EmailTemplateEdit = lazy(() => import("./edit"));

const EmailTemplateRoute = [
  {
    element: <EmailTemplateList />,
    path: "/email-template",
  },
  {
    element: <EmailTemplateAdd />,
    path: "/email-template-add",
  },
  {
    element: <EmailTemplateEdit />,
    path: "/email-template-edit/:id",
  }
];

export default EmailTemplateRoute;
