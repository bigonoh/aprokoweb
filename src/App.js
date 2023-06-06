import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { auth_routes_group } from './routes/auth'
import { dashboard_route_group } from './routes/dashboard'
import React, { useEffect } from 'react'
import store from './redux/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import setAuthToken from './utils/auth'
import PrivateRoute from './components/auth/PrivateRoute'
// import { getUser } from "./redux/user";
// import { ToastContainer } from "react-toastify";
import { Helmet } from 'react-helmet'
import { RavenToast } from 'raven-bank-ui'
import Homepage from './pages/Homepage'
import DashboardHome from './pages/dashboard/DashboardHome'
import { admin_panel_route_group } from './routes/admin/index'
require('./App.css')
function App() {
  const location = useLocation()
  setAuthToken()

  const { user } = useSelector((state) => state?.user)

  //initialize electricity bill on time confirmation

  return (
    <>
      {/* <ElectricityOntime /> */}
      <div className="App">
        {/* <Helmet>
          <title>Aprokopay || Sell & Buy Information </title>
          <meta
            name="description"
            content="Sell and buy informations."
          />
          <meta
            property="og:description"
            content="Aprokopay allows you sell and buy informations."
          />
          <meta
            name="keywords"
            content="marketplace, buy, sell"
          />
          <meta name="page-topic" content="eCommerce" />
          <meta name="page-type" content="Landing" />
          <meta name="audience" content="Everyone" />
          <meta
            property="og:image"
            content="https://pbs.twimg.com/profile_images/1485498638973517826/aX6F2jHy_400x400.jpg"
          />
          <meta property="og:url" content="https://getravenbank.com" />
          <meta name="robots" content="index, follow" />
          <meta
            property="twitter:image:src"
            content="https://pbs.twimg.com/profile_images/1485498638973517826/aX6F2jHy_400x400.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="GetRavenBank" />
          <meta
            name="twitter:site"
            content="https://www.twitter.com/theravenbank"
          />
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;"
          />
        </Helmet> */}
        <Routes location={location}>
          {/* riderect to login on load start */}
          <Route location={location} path="/" element={<Homepage />}></Route>
          <Route
            location={location}
            path="*"
            element={<Navigate to="/" />}
          ></Route>

          {/*  */}
          {/* auth route group start */}
          {auth_routes_group.map((route, idx) => {
            return <Route location={location} key={idx} exact {...route} />
          })}
          {/* auth route group end */}
          {/* auth route group start */}
          {dashboard_route_group.map((route, idx) => {
            return (
              <Route element={<PrivateRoute />} key={idx}>
                <Route location={location} key={idx} exact {...route} />;
              </Route>
            )
          })}
          {/* auth route group end */}

          {/* admin route group start */}
          {admin_panel_route_group.map((route, idx) => {
            if (user?.role !== 'admin') return
            return (
              <Route element={<PrivateRoute />} key={idx}>
                <Route location={location} key={idx} exact {...route} />;
              </Route>
            )
          })}
          {/* admin route group end */}
        </Routes>
      </div>
      <RavenToast />
    </>
  )
}

export default App
