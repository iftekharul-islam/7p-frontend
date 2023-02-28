// ** Reducers Imports

import global from './globalStore'

//user-management
import users from '@src/views/pages/user-management/user/store'
import permissions from '@src/views/pages/user-management/roles/store'
import division from '@src/views/pages/user-management/hrms/division/store'
import department from '@src/views/pages/user-management/hrms/department/store'
import designation from '@src/views/pages/user-management/hrms/designation/store'

import calendar from '@src/views/apps/calendar/store'
import chat from '@src/views/apps/chat/store'
import ecommerce from '@src/views/apps/ecommerce/store'
import email from '@src/views/apps/email/store'
import invoice from '@src/views/apps/invoice/store'
import kanban from '@src/views/apps/kanban/store'
import todo from '@src/views/apps/todo/store'
import dataTables from '@src/views/tables/data-tables/store'
import auth from './authentication'
import layout from './layout'
import navbar from './navbar'

const rootReducer = {
  auth,
  global,
  users,
  permissions,
  division,
  department,
  designation, 

  todo,
  chat,
  email,
  kanban,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables
}

export default rootReducer
