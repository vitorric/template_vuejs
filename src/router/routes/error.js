import { authenticated } from '@/router/middlewares'

import Error403 from '@/views/errors/403.vue'
import Error404 from '@/views/errors/404.vue'
import Error500 from '@/views/errors/500.vue'

export default [
  {
    path: '/erro-403',
    name: 'error-403',
    component: Error403,
    beforeEnter: authenticated,
    meta: {
      title: 'NomeSite | 403'
    }
  },
  {
    path: '/erro-500',
    name: 'error-500',
    component: Error500,
    beforeEnter: authenticated,
    meta: {
      title: 'NomeSite | 500'
    }
  },
  {
    path: '/*',
    name: 'error-404',
    component: Error404,
    beforeEnter: authenticated,
    meta: {
      title: 'NomeSite | 404'
    }
  }
]
