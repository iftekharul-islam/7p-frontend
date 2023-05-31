import { lazy } from "react";

const List = lazy(() => import("./list"));

const SentToPrinterRoute = [
  {
    element: <List />,
    path: "/send-to-printer",
  }
];

export default SentToPrinterRoute;
