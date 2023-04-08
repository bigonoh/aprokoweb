
import AdminPanel from '../../pages/admin';
import Informations from '../../pages/admin/informations';
import Users from '../../pages/admin/users';
import Reports from '../../pages/admin/reports/index';
import Withdrawals from '../../pages/admin/withdrawals/index';

export const admin_panel_route_group = [
  {
    path: "/admin-panel",
    element: <AdminPanel />,
  },
  {
    path: "/admin-panel/informations",
    element: <Informations />,
  },

  {
    path: "/admin-panel/users",
    element: <Users />,
  },

  {
    path: "/admin-panel/reports",
    element: <Reports />,
  },

  {
    path: "/admin-panel/withdrawals",
    element: <Withdrawals />,
  },


];
