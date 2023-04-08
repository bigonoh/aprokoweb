
import Homepage from '../../../pages/Homepage';
import DashboardHome from '../../../pages/dashboard/DashboardHome';
import Sell from '../../../pages/dashboard/sell';
import Buy from '../../../pages/dashboard/buy';
import Profile from '../../../pages/dashboard/profile/index';
import Sales from '../../../pages/dashboard/sales/index';
import Transactions from '../../../pages/dashboard/transaction/index';
import Settings from '../../../pages/dashboard/settings';

export const dashboard_home_route_group = [
  {
    path: "/dashboard",
    element: <DashboardHome />,
  },
  {
    path: "/sell",
    element: <Sell />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
  {
    path: "/sales",
    element: <Sales />,
  },
  {
    path: "/transaction",
    element: <Transactions />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
];
