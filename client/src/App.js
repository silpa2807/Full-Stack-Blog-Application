import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./styles.scss";
const Layout = ()=>{
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/write",
        element: <Write/>
      },
      {
        path: "/post/:id",
        element: <Single/>
      }
    ]
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  }
]);
function App() {
  return (
   <div className="app">
    <div className="container">
      <RouterProvider router={router} />
    </div>
   
   </div>
  );
}

export default App;
