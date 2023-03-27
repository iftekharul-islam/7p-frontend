// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const ProductList = lazy(() => import('./list'))
const ProductAdd = lazy(() => import('./add'))
const ProductEdit = lazy(() => import('./edit'))
const StockAdd = lazy(() => import('./addStock'))


const UserRoute = [  
  {
    element: <ProductList />,
    path: '/product'
  },
  {
    element: <ProductAdd />,
    path: '/product-add',
  },
  {
    element: <ProductEdit />,
    path: '/product-edit/:id',
  },
  {
    element: <StockAdd />,
    path: '/stock-add'
  }
]

export default UserRoute
