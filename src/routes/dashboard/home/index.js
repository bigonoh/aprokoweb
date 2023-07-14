import Homepage from '../../../pages/Homepage'
import DashboardHome from '../../../pages/dashboard/DashboardHome'
import Sell from '../../../pages/dashboard/sell'
import Profile from '../../../pages/dashboard/profile/index'
import Sales from '../../../pages/dashboard/sales/index'
import Transactions from '../../../pages/dashboard/transaction/index'
import Settings from '../../../pages/dashboard/settings'
import UserInformation from '../../../pages/dashboard/information'
import Ask from '../../../pages/dashboard/buy'
import Advert from '../../../pages/dashboard/advert'

export const dashboard_home_route_group = [
  {
    path: '/dashboard',
    element: <DashboardHome />,
  },
  {
    path: '/sell',
    element: <Sell />,
  },
  {
    path: '/ask',
    element: <Ask />,
  },
  {
    path: '/sales',
    element: <Sales />,
  },
  {
    path: '/transaction',
    element: <Transactions />,
  },
  {
    path: '/information-collection',
    element: <UserInformation />,
  },
  {
    path: '/place-an-ad',
    element: <Advert />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
]
