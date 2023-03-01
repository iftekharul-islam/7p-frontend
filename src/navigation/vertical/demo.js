// ** Icons Import
import { Circle, TrendingUp } from "react-feather"

// const check = (permission) => {
//   const user = JSON.parse(localStorage.getItem('userData'))
//   const permissions = JSON.parse(localStorage.getItem('userPermission'))
//   if (permission) {    
//     if (permissions?.some(value => permission.includes(value)) || user?.role === "Admin") {      
//       return true
//     } else {
//       return false
//     }
//   }    
//   return true
// }

export default [
  {
    header: "Demo",
    isAccess: true
  },
  {
    id: "demo1",
    title: "DEMO 1",
    icon: <TrendingUp size={20} />,
    isAccess: true,
    children: [
      {
        id: "demo",
        title: "Demo 1.1",
        icon: <Circle size={20} />,
        isAccess: true,
        navLink: "/apps/kpi/profile"
      },
      
      {
        id: "demo2",
        title: "DEMO 2",
        icon: <Circle size={20} />,
        // isAccess: check([
        //   "period_access",
        //   "master_settings_access"
        // ]),
        isAccess:true,
        children: [
          {
            id: "demo-2",
            title: "Demo 2.1",
            icon: <Circle size={12} />,
            isAccess: true,
            navLink: "/apps/kpi/periods"
          },
          {
            id: "sub-demo-1",
            title: "Sub Demo",
            icon: <Circle size={12} />,
            isAccess: true,
            children: [
              {
                id: "sub-demo-1.1",
                title: "Sub demo 1.1",
                icon: <Circle size={12} />,
                isAccess: true,
                navLink: "/apps/kpi/master-settings/preference"
              }
            ]
          }
        ]
      }
    ]
  }
]