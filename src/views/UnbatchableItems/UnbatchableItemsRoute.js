import { lazy } from 'react'

const BatchtList = lazy(() => import('./list'))
const AddChildSKU = lazy(() => import('./addChildSKU'))
// const ProductAdd = lazy(() => import('./add'))
// const ProductEdit = lazy(() => import('./edit'))


const UnbatchableItemsRoute = [  
  {
    element: <BatchtList />,
    path: '/unbatchable-items'
  },
  {
    element: <AddChildSKU />,
    path: '/add-child-sku',
  },
  // {
  //   element: <ProductEdit />,
  //   path: '/product-edit/:id',
  // }
]

export default UnbatchableItemsRoute
