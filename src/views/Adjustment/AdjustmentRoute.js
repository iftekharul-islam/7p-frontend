// ** React Imports
import { lazy } from 'react'

const AdjustmentList = lazy(() => import('./list'))


const AdjustmentRoute = [  
  {
    element: <AdjustmentList />,
    path: '/adjustment'
  }
]

export default AdjustmentRoute
