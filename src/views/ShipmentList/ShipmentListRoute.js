import { lazy } from 'react'

const ShipmentList = lazy(() => import('./list'))
// const WAPView = lazy(() => import('./view'))

const ShipmentListRoute = [  
  {
    element: <ShipmentList />,
    path: '/shipment-list'
  },
  // {
  //   element: <WAPView />,
  //   path: '/wap/bin'
  // }
]

export default ShipmentListRoute
