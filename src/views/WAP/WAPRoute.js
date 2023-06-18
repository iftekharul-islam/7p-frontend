import { lazy } from 'react'

const WAPtList = lazy(() => import('./list'))

const WAPRoute = [  
  {
    element: <WAPtList />,
    path: '/wap'
  }
]

export default WAPRoute
