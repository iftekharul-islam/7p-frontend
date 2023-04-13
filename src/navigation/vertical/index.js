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
        navLink: "/email_template",
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
        navLink: "/manual-orders",
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
];
