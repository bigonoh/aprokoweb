
import Homepage from '../../../pages/Homepage';
import DashboardHome from '../../../pages/dashboard/DashboardHome';
import Sell from '../../../pages/dashboard/sell';
import Buy from '../../../pages/dashboard/buy';
import Profile from '../../../pages/dashboard/profile/index';

export const dashboard_home_route_group = [
  {
    path: "/",
    element: <Homepage />,
  },
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
    path: "/profile",
    element: <Profile />,
  },
];
