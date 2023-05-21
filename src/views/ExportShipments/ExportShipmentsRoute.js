// ** React Imports
import { lazy } from 'react'

const Index = lazy(() => import('./index'))


const ExportShipmentsRoute = [  
  {
    element: <Index />,
    path: '/transfer-export'
  }
]

export default ExportShipmentsRoute
