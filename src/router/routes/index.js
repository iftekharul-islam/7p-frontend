// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";
import AdjustmentRoute from "../../views/Adjustment/AdjustmentRoute";
import BackOrdersRoute from "../../views/BackOrders/BackOrdersRoute";
import BatchListRoute from "../../views/BatchList/BatchListRoute";
import CallAPIRoute from "../../views/CallAPI/CallAPIRoute";
import ConfigChildSKURoute from "../../views/ConfigChildSKU/ConfigChildSKURoute";
import CreateGraphicsRoute from "../../views/CreateGraphics/CreateGraphicsRoute";
import CustomerServiceRoute from "../../views/CustomerService/CustomerServiceRoute";
import EmailTemplateRoute from "../../views/EmailTemplate/EmailTemplateRoute";
import ExportShipmentsRoute from "../../views/ExportShipments/ExportShipmentsRoute";
import GraphicItemsListRoute from "../../views/GraphicItemsList/GraphicItemsListRoute";
import ImportOrdersRoute from "../../views/ImportOrders/ImportOrdersRoute";
import InventoryRoute from "../../views/Inventory/InventoryRoute";
import ItemsListRoute from "../../views/ItemsList/ItemsListRoute";
import ManualOrderRoute from "../../views/ManualOrder/ManualOrderRoute";
import ManufacturesRoute from "../../views/Manufactures/ManufacturesRoute";
import MoveBatchesRoute from "../../views/MoveBatches/MoveBatchesRoute";
import MoveToProductionRoute from "../../views/MoveToProduction/MoveToProductionRoute";
import MoveToQCRoute from "../../views/MoveToQC/MoveToQCRoute";
import MustShipReportRoute from "../../views/MustShipReport/MustShipReportRoute";
import OrderRoute from "../../views/Order/OrderRoute";
import OrderItemsReportRoute from "../../views/OrderItemsReport/OrderItemsReportRoute";
import ParametersRoute from "../../views/Parameters/ParametersRoute";
import PermissionRoute from "../../views/Permission/PermissionRoute";
import PreviewBatchesRoute from "../../views/PreviewBatches/PreviewBatchesRoute";
import PrintBatchSummariesRoute from "../../views/PrintBatchSummaries/PrintBatchSummariesRoute";
import PrintSublimationRoute from "../../views/PrintSublimation/PrintSublimationRoute";
import ProductRoute from "../../views/Product/ProductRoute";
import ProductSKURoute from "../../views/ProductSKU/ProductSKURoute";
import ProductionCategoriesRoute from "../../views/ProductionCategories/ProductionCategoriesRoute";
import PurchaseOrderRoute from "../../views/PurchaseOrder/PurchaseOrderRoute";
import QualityControlRoute from "../../views/QualityControl/QualityControlRoute";
import RejectionReasonRoute from "../../views/RejectionReason/RejectionReasonRoute";
import RejectsRoute from "../../views/Rejects/RejectsRoute";
import RoleRoute from "../../views/Role/RoleRoute";
import RouteRoute from "../../views/Route/RouteRoute";
import RouteTemplatesRoute from "../../views/RouteTemplates/RouteTemplatesRoute";
import SalesSummaryReportRoute from "../../views/SalesSummaryReport/SalesSummaryReportRoute";
import SectionRoute from "../../views/Section/SectionRoute";
import SectionReportRoute from "../../views/SectionReport/SectionReportRoute";
import SendBulkEmailRoute from "../../views/SendBulkEmail/SendBulkEmailRoute";
import SentToPrinterRoute from "../../views/SentToPrinter/SentToPrinterRoute";
import ShipDateReportRoute from "../../views/ShipDateReport/ShipDateReportRoute";
import ShipmentListRoute from "../../views/ShipmentList/ShipmentListRoute";
import SpecificationSheetRoute from "../../views/SpecificationSheet/SpecificationSheetRoute";
import StationRoute from "../../views/Station/StationRoute";
import StoresRoute from "../../views/Stores/StoresRoute";
import TaskRoute from "../../views/Tasks/TasksRoute";
import UnbatchableItemsRoute from "../../views/UnbatchableItems/UnbatchableItemsRoute";
import UserRoute from "../../views/User/UserRoute";
import VendorRoute from "../../views/Vendor/VendorRoute";
import WAPRoute from "../../views/WAP/WAPRoute";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/login";

const Home = lazy(() => import("../../views/Home"));
const SecondPage = lazy(() => import("../../views/SecondPage"));
const Login = lazy(() => import("../../views/Auth/Login"));
const Register = lazy(() => import("../../views/Register"));
const ForgotPassword = lazy(() => import("../../views/ForgotPassword"));
const Error = lazy(() => import("../../views/Error"));


// ** Merge Routes
const Routes = [
  ...UserRoute,
  ...RoleRoute,
  ...PermissionRoute,
  ...ProductRoute,
  ...VendorRoute,
  ...PurchaseOrderRoute,
  ...InventoryRoute,
  ...AdjustmentRoute,
  ...SectionRoute,
  ...StationRoute,
  ...RejectionReasonRoute,
  ...ParametersRoute,
  ...ProductionCategoriesRoute,
  ...ManufacturesRoute,
  ...RouteTemplatesRoute,
  ...RouteRoute,
  ...ProductSKURoute,
  ...SpecificationSheetRoute,
  ...ConfigChildSKURoute,
  ...OrderRoute,
  ...EmailTemplateRoute,
  ...SendBulkEmailRoute,
  ...ManualOrderRoute,
  ...ItemsListRoute,
  ...GraphicItemsListRoute,
  ...CustomerServiceRoute,
  ...SectionReportRoute,
  ...ShipDateReportRoute,
  ...OrderItemsReportRoute,
  ...SalesSummaryReportRoute,
  ...StoresRoute,
  ...ImportOrdersRoute,
  ...ExportShipmentsRoute,
  ...PreviewBatchesRoute,
  ...UnbatchableItemsRoute,
  ...CreateGraphicsRoute,
  ...SentToPrinterRoute,
  ...BatchListRoute,
  ...MoveBatchesRoute,
  ...RejectsRoute,
  ...BackOrdersRoute,
  ...MustShipReportRoute,
  ...QualityControlRoute,
  ...PrintSublimationRoute,
  ...PrintBatchSummariesRoute,
  ...MoveToProductionRoute,
  ...MoveToQCRoute,
  ...WAPRoute,
  ...ShipmentListRoute,
  ...TaskRoute,
  ...CallAPIRoute,
  {
    path: "/",
    index: true,
    element: <Navigate replace to={localStorage.getItem('accessToken') ? '/home' : DefaultRoute} />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/second-page",
    element: <SecondPage />,
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/*",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, Routes, TemplateTitle, getRoutes };

