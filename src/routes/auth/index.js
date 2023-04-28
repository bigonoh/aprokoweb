import Login from '../../pages/auth/login/Login'
import Register from '../../pages/auth/register/Register'
import Homepage from '../../pages/Homepage'
import PublicPosts from '../../pages/public/Posts'

export const auth_routes_group = [
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },

  {
    path: '/informations',
    element: <PublicPosts />,
  },
]
