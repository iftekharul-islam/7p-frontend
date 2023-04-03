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
    id: "users",
    title: "Users",
    icon: <Users size={20} />,
    isAccess: check(["user"]),
    navLink: "/user",
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
        navLink: "/order",
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
];
