import { lazy } from 'react'

const WAPList = lazy(() => import('./list'))
const WAPView = lazy(() => import('./view'))

const WAPRoute = [  
  {
    element: <WAPList />,
    path: '/wap'
  },
  {
    element: <WAPView />,
    path: '/wap/details/:id'
  }
]

export default WAPRoute
