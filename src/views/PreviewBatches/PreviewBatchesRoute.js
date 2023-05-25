import { lazy } from 'react'

const BatchtList = lazy(() => import('./list'))
// const ProductAdd = lazy(() => import('./add'))
// const ProductEdit = lazy(() => import('./edit'))


const PreviewBatchesRoute = [  
  {
    element: <BatchtList />,
    path: '/preview-batches'
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

export default PreviewBatchesRoute
