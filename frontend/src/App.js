import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Header />
        <Switch>
          
          <Route path={"/products"} component={Products} />
          <Route path={"*"} component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;