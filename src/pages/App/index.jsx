import { useRoutes, BrowserRouter } from "react-router-dom"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import Navbar from "../../components/Navbar"
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/',element: <Home /> },
    { path: '/my-account',element: <MyAccount /> },
    { path: '/my-order',element: <MyOrder /> },
    { path: '/my-orders',element: <MyOrders /> },
    { path: '/not-found',element: <NotFound /> },
    { path: '/sign-In',element: <SignIn /> }
  ])
  return routes
}

const App = () => {
  return (
        <BrowserRouter>
        <Navbar/>
          <AppRoutes />
          
        </ BrowserRouter>
  )
}

export default App
