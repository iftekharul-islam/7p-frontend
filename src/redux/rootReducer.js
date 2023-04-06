import layout from "./layout";
import navbar from "./navbar";
import Auth from '@src/views/Auth/store'
import users from '@src/views/User/store'
import roles from '@src/views/Role/store'
import permissions from '@src/views/Permission/store'
import products from '@src/views/Product/store'
import vendors from '@src/views/Vendor/store'
import orders from '@src/views/Order/store'
import inventories from '@src/views/Inventory/store'
import adjustments from '@src/views/Adjustment/store'
import sections from '@src/views/Section/store'
import stations from '@src/views/Station/store'
import reasons from '@src/views/RejectionReason/store'
import parameters from '@src/views/Parameters/store'
import categories from '@src/views/ProductionCategories/store'
import manufactures from '@src/views/Manufactures/store'
import templates from '@src/views/RouteTemplates/store'
import routes from '@src/views/Route/store'
import productskus from '@src/views/ProductSKU/store'

const rootReducer = { 
    navbar, 
    layout,
    Auth,
    users,
    roles,
    permissions,
    products,
    vendors,
    orders,
    inventories,
    adjustments,
    sections,
    stations,
    reasons,
    parameters,
    categories,
    manufactures,
    templates,
    routes,
    productskus
 };

export default rootReducer;
