import { lazy } from 'react'

const BatchtList = lazy(() => import('./list'))
// const ProductAdd = lazy(() => import('./add'))
// const ProductEdit = lazy(() => import('./edit'))


const UnbatchableItemsRoute = [  
  {
    element: <BatchtList />,
    path: '/unbatchable-items'
  },
  // {
  //   element: <ProductAdd />,
  //   path: '/product-add',
  // },
  // {
  //   element: <ProductEdit />,
  //   path: '/product-edit/:id',
  // }
]

export default UnbatchableItemsRoute
