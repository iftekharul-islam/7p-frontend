import adjustments from "@src/views/Adjustment/store";
import Auth from "@src/views/Auth/store";
import configchildskus from "@src/views/ConfigChildSKU/store";
import customerServices from "@src/views/CustomerService/store";
import emailTemplate from "@src/views/EmailTemplate/store";
import graphicItemsList from "@src/views/GraphicItemsList/store";
import imports from "@src/views/ImportOrders/store";
import inventories from "@src/views/Inventory/store";
import itemsList from "@src/views/ItemsList/store";
import manualOrders from "@src/views/ManualOrder/store";
import manufactures from "@src/views/Manufactures/store";
import orders from "@src/views/Order/store";
import orderItemsReports from "@src/views/OrderItemsReport/store";
import parameters from "@src/views/Parameters/store";
import permissions from "@src/views/Permission/store";
import products from "@src/views/Product/store";
import productskus from "@src/views/ProductSKU/store";
import categories from "@src/views/ProductionCategories/store";
import purchaseOrders from "@src/views/PurchaseOrder/store";
import reasons from "@src/views/RejectionReason/store";
import roles from "@src/views/Role/store";
import routes from "@src/views/Route/store";
import templates from "@src/views/RouteTemplates/store";
import salesSummaryReports from "@src/views/SalesSummaryReport/store";
import sections from "@src/views/Section/store";
import sectionReports from "@src/views/SectionReport/store";
import bulkEmails from "@src/views/SendBulkEmail/store";
import shipDateReports from "@src/views/ShipDateReport/store";
import productspecifications from "@src/views/SpecificationSheet/store";
import stations from "@src/views/Station/store";
import stores from "@src/views/Stores/store";
import users from "@src/views/User/store";
import vendors from "@src/views/Vendor/store";
import layout from "./layout";
import navbar from "./navbar";

const rootReducer = {
  navbar,
  layout,
  Auth,
  users,
  roles,
  permissions,
  products,
  vendors,
  purchaseOrders,
  inventories,
  adjustments,
  sections,
  stations,
  reasons,
  parameters,
  categories,
  manufactures,
  templates,
  routes,
  productskus,
  productspecifications,
  configchildskus,
  orders,
  emailTemplate,
  bulkEmails,
  manualOrders,
  itemsList,
  graphicItemsList,
  customerServices,
  sectionReports,
  shipDateReports,
  orderItemsReports,
  salesSummaryReports,
  stores,
  imports
};

export default rootReducer;
