import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { AuthContextProvider } from "./AuthContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const Layout = () => {
  return (
    <div className="app">
         <Navbar/>
         <Outlet/>
         <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/signin',
        element:<SignIn/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path:'/account',
        element:<Account/>
      },
    ]
  }
]);

function App() {
  return (
    <div>
       <AuthContextProvider>
      <RouterProvider router={router} />
       </AuthContextProvider>
    </div>
  );
}

export default App;
