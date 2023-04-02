// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const ProductList = lazy(() => import('./list'))
const ProductAdd = lazy(() => import('./add'))
const ProductEdit = lazy(() => import('./edit'))


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
  }
]

export default UserRoute
