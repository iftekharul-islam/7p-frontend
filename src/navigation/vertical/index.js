import { Circle, Home, User, Users } from "react-feather";

const check = (permission) => {
  const permissions = JSON.parse(localStorage.getItem("permissions"));
  if (permission) {
    if (permissions?.some((value) => permission.includes(value))) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};

export default [
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    isAccess: true,
    navLink: "/home",
  },
  {
    id: "roles",
    title: "Role",
    icon: <User size={20} />,
    isAccess: check(["role"]),
    navLink: "/role",
  },
  {
    id: "inventory",
    title: "Inventory",
    icon: <Circle size={20} />,
    isAccess: check(["product", "vendor"]),
    children: [
      {
        id: "purchase_product",
        title: "Purchase Product",
        icon: <Circle size={20} />,
        isAccess: check(["product"]),
        navLink: "/product",
      },
      {
        id: "vendor",
        title: "Vendor",
        icon: <Circle size={20} />,
        isAccess: check(["vendor"]),
        navLink: "/vendor",
      },
      {
        id: "purchase_order",
        title: "Purchase Order",
        icon: <Circle size={20} />,
        isAccess: check(["order"]),
        navLink: "/purchase-order",
      },
      {
        id: "inventory",
        title: "Inventory",
        icon: <Circle size={20} />,
        isAccess: check(["order"]),
        navLink: "/inventory",
      },
      {
        id: "adjustment",
        title: "Adjustments",
        icon: <Circle size={20} />,
        isAccess: check(["order"]),
        navLink: "/adjustment",
      },
    ],
  },
  {
    id: "product_namgement",
    title: "Product Management",
    icon: <Circle size={20} />,
    isAccess: check(["product", "vendor"]),
    children: [
      {
        id: "config_child_sku",
        title: "Configure SKUs",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/config-child-sku",
      },
      {
        id: "create-child-sku",
        title: "Create Child SKU",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/create-child-sku",
      },
      {
        id: "products_sku",
        title: "Products ( SKUs )",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/sku-product",
      },

      {
        id: "specification-product",
        title: "Specification sheet",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/specification-product",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    icon: <Circle size={20} />,
    isAccess: check(["product", "vendor"]),
    children: [
      {
        id: "users",
        title: "Users",
        icon: <Users size={20} />,
        isAccess: check(["user"]),
        navLink: "/user",
      },
      {
        id: "sections",
        title: "Sections",
        icon: <Circle size={20} />,
        isAccess: check(["product"]),
        navLink: "/section",
      },
      {
        id: "stations",
        title: "Stations",
        icon: <Circle size={20} />,
        isAccess: check(["product"]),
        navLink: "/station",
      },
      {
        id: "route",
        title: "Route",
        icon: <Circle size={20} />,
        isAccess: check(["product"]),
        navLink: "/route",
      },
      {
        id: "template",
        title: "Route Templates",
        icon: <Circle size={20} />,
        isAccess: check(["product"]),
        navLink: "/template",
      },
      {
        id: "reason",
        title: "Rejection Reasons",
        icon: <Circle size={20} />,
        isAccess: check(["product"]),
        navLink: "/reason",
      },
      {
        id: "parameter",
        title: "Parameters",
        icon: <Circle size={20} />,
        isAccess: check(["product"]),
        navLink: "/parameter",
      },
      {
        id: "product_categories",
        title: "Product Categories",
        icon: <Circle size={20} />,
        isAccess: check(["product"]),
        navLink: "/category",
      },
      {
        id: "manufacture",
        title: "Manufactures",
        icon: <Circle size={20} />,
        isAccess: check(["product"]),
        navLink: "/manufacture",
      },
    ],
  },
  {
    id: "graphics",
    title: "Graphics",
    icon: <Circle size={20} />,
    isAccess: check(["product", "vendor"]),
    children: [
      {
        id: "preview_batches",
        title: "Preview Batches",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/preview-batches",
      },
      {
        id: "unbatchable_items",
        title: "Unbatchable Items",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/unbatchable-items",
      },
      {
        id: "create_graphics",
        title: "Create Graphics",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/create-graphics",
      },
      {
        id: "print_sublimation",
        title: "Print Sublimation",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/print-sublimation",
      },
      {
        id: "send_to_printer",
        title: "Send to Printer",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/send-to-printer",
      },
      {
        id: "print_batch_summaries",
        title: "Print Summaries",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/print-batch-summaries",
      },
      {
        id: "move_to_production",
        title: "Move to Production",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/move-to-production",
      },
      {
        id: "move_to_qc",
        title: "Move to QC",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/move-to-qc",
      }
    ]
  },
  {
    id: "customers_service",
    title: "Customers Service",
    icon: <Circle size={20} />,
    isAccess: check(["product", "vendor"]),
    children: [
      {
        id: "orders",
        title: "Orders",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/customer-order",
      },
      {
        id: "items_list",
        title: "Items List",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/items-list",
      },
      {
        id: "items_list_graphic",
        title: "Items List Graphic",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/graphic-items-list",
      },
      {
        id: "customer_service",
        title: "Customer Service",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/customer-service",
      },
      {
        id: "email_template",
        title: "Email Template",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/email-template",
      },
      {
        id: "send_bulk_emails",
        title: "Send Bulk Emails",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/send-bulk-emails",
      },
      {
        id: "manual_orders",
        title: <b>Manual Orders</b>,
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/manual-orders-add",
      },
    ],
  },
  {
    id: "report",
    title: "Report",
    icon: <Circle size={20} />,
    isAccess: check(["product", "vendor"]),
    children: [
      // {
      //   id: "stations_summary",
      //   title: "Stations summary",
      //   icon: <Circle size={20} />,
      //   isAccess: check(["user"]),
      //   navLink: "/stations-summary",
      // },
      {
        id: "reportSection_report",
        title: "Section Report",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/report-section",
      },
      // {
      //   id: "section_report_filter",
      //   title: "Section Report Filter",
      //   icon: <Circle size={20} />,
      //   isAccess: check(["user"]),
      //   navLink: "/section-report-filter",
      // },
      // {
      //   id: "stock_report",
      //   title: "Stock Report",
      //   icon: <Circle size={20} />,
      //   isAccess: check(["user"]),
      //   navLink: "/stock-report",
      // },
      // {
      //   id: "station_logs",
      //   title: "Station logs",
      //   icon: <Circle size={20} />,
      //   isAccess: check(["user"]),
      //   navLink: "/station-logs",
      // },
      // {
      //   id: "reject_report",
      //   title: "Reject Report",
      //   icon: <Circle size={20} />,
      //   isAccess: check(["user"]),
      //   navLink: "/reject-report",
      // },
      {
        id: "ship_date_report",
        title: "Ship Date Report",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/report-ship-date",
      },
      {
        id: "order_items_report",
        title: "Order Items Report",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/report-order-items",
      },
      // {
      //   id: "wap_missing_items",
      //   title: "WAP Missing Items",
      //   icon: <Circle size={20} />,
      //   isAccess: check(["user"]),
      //   navLink: "/wap-missing-items",
      // },
      {
        id: "sales_summary",
        title: "Sales Summary",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/report-sales-summary",
      },
      // {
      //   id: "coupon_report",
      //   title: "Coupon Report",
      //   icon: <Circle size={20} />,
      //   isAccess: check(["user"]),
      //   navLink: "/coupon-report",
      // },
    ],
  },
  {
    id: "market-place",
    title: "Market Place",
    icon: <Circle size={20} />,
    isAccess: check(["product", "vendor"]),
    children: [
      {
        id: "manage-stores",
        title: "Manage Stores",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/stores",
      },
      {
        id: "import-stores",
        title: "Import Orders",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/transfer-import",
      },
      {
        id: "export-hipments",
        title: "Export Shipments",
        icon: <Circle size={20} />,
        isAccess: check(["user"]),
        navLink: "/transfer-export",
      }
    ],
  },
];
