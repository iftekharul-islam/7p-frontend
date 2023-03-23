// ** React Imports
import { lazy } from 'react'

const PermissionList = lazy(() => import('./list'))


const UserRoute = [  
  {
    element: <PermissionList />,
    path: '/permission-list'
  }
]

export default UserRoute
