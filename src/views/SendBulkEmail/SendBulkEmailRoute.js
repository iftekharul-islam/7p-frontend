import { lazy } from "react";

const SendBulkEmail = lazy(() => import("./send"));

const SendBulkEmailRoute = [
  {
    element: <SendBulkEmail />,
    path: "/send-bulk-emails",
  }
];

export default SendBulkEmailRoute;
