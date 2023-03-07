
import Homepage from '../../../pages/Homepage';
import DashboardHome from '../../../pages/dashboard/DashboardHome';

export const dashboard_home_route_group = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/dashboard",
    element: <DashboardHome />,
  },
];
