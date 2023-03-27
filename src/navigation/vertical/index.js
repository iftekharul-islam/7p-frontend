import { Circle, Home, User, Users } from "react-feather";


const check = (permission) => {
  const permissions = JSON.parse(localStorage.getItem('permissions'))
  if (permission) {    
    if (permissions?.some(value => permission.includes(value))) {      
      console.log("🚀 ~ file: index.js:7 ~ check ~ permission: true", permission)
      return true
    } else {
      console.log("🚀 ~ file: index.js:7 ~ check ~ permission: false", permission)

      return false
    }
  }    
  return true
}

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
    isAccess: check([
      "user",
    ]),
    navLink: "/user",
  },
  {
    id: "roles",
    title: "Role",
    icon: <User size={20} />,
    isAccess: check([
      "role",
    ]),
    navLink: "/role",
  },
  // {
  //   id: "permission-list",
  //   title: "Permission List",
  //   icon: <Circle size={20} />,
  //   navLink: "/permission-list",
  // },
  {
    id: "product",
    title: "Purchase Product",
    icon: <Circle size={20} />,
    isAccess: check([
      "product",
    ]),
    navLink: "/product",
  }
];
