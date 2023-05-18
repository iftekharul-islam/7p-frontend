// ** React Imports
import { lazy } from 'react'

const Index = lazy(() => import('./index'))


const ImportOrdersRoute = [  
  {
    element: <Index />,
    path: '/transfer-import'
  }
]

export default ImportOrdersRoute
