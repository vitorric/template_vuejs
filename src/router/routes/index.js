'use strict'

import store from '@/store'

// Modules
import auth from '@/router/routes/auth'
import main from '@/router/routes/main'
import error from '@/router/routes/error'

const reference = {
  main
}

let content = []

// if (store.getters && store.getters.getAuthAdmin && store.getters.getAuthAdmin.user.role) {
//   main = reference[store.getters.getAuthAdmin.user.role] || []
// }

content = main

export default [
  ...auth,
  ...content,
  ...error
]
