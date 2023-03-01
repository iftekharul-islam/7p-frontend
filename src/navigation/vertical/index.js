// ** Navigation imports
import dashboards from './dashboards'
import user_management from './user_management'
import demo from './demo'

// import pages from './pages'
// import apps from './apps'
// import forms from './forms'
// import tables from './tables'
// import others from './others'
// import charts from './charts'
// import uiElements from './ui-elements'

// ** Merge & Export
export default [
    ...dashboards, 
    ...user_management,
    ...demo
    // ...pages,
    // ...apps,     
    // ...uiElements, 
    // ...forms, 
    // ...tables, 
    // ...charts, 
    // ...others
]

