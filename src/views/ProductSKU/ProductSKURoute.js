// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const ProductList = lazy(() => import('./list'))
const ProductAdd = lazy(() => import('./add'))
const ProductEdit = lazy(() => import('./edit'))


const ProductSKURoute = [  
  {
    element: <ProductList />,
    path: '/sku-product'
  },
  {
    element: <ProductAdd />,
    path: '/sku-product-add',
  },
  {
    element: <ProductEdit />,
    path: '/sku-product-edit/:id',
  }
]

export default ProductSKURoute
