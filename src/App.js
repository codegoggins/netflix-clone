import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { AuthContextProvider, UserAuth } from "./AuthContext";
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

const ProtectedRoute = ({children}) => {
  const {user} = UserAuth();
  if(!user){
    return <Navigate to = '/'/>
  }else{
    return children;
  }
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
        element:
        <ProtectedRoute>
            <Account/>
        </ProtectedRoute>  
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
