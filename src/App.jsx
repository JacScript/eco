import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";
import Success from "./pages/Success";
import Profile from "./pages/Profile";
import RestrictedRoute from "./pages/RestrictedRoute";
import NotFound from "./pages/NotFound";

const App = () => {

  // const notify = () => toast("Wow so easy!");
  return (
    <>
        <ToastContainer className=""/>
     
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:category" component={ProductList} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart" component={Cart} />
       
         {/* Use RestrictedRoute for Login and Register to prevent access when logged in */}
         <RestrictedRoute path="/login" component={Login} redirect="/" />
        <RestrictedRoute path="/register" component={Register} redirect="/" />
        
        {/* Private Route for Profile */}
        <PrivateRoute path="/profile" component={Profile} redirect="/login" />
       
        <Route path="/success" component={Success} />
         {/* Catch-all Route for undefined paths */}
         <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    </>
  );
};

export default App;
