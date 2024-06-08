import Men from '../Pages/Men'
import Women from '../Pages/Women'
import Beauty from '../Pages/Beauty'
import HomeLiving from '../Pages/HomeLiving'
import Studio from '../Pages/Studio'
import Login from '../Pages/Login'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Navbar from '../components/Navbar'
import Footer from '../Pages/Footer'


export default function AllRoutes () {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/men' element={<Men />} />

        <Route
          path='/women'
          element={
            <PrivateRoute>
              <Women />
            </PrivateRoute>
          }
        />
        <Route
          path='/beauty'
          element={
            <PrivateRoute>
              <Beauty />
            </PrivateRoute>
          }
        />
        <Route
          path='/homeliving'
          element={
            <PrivateRoute>
              <HomeLiving />
            </PrivateRoute>
          }
        />
        <Route
          path='/studio'
          element={
            <PrivateRoute>
              <Studio />
            </PrivateRoute>
          }
        />
      </Routes>
     
      <Footer />
    </div>
  )
}
