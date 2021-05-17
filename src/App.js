import Navbar from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import ContactUs from "./ContactUs";
import Projects from "./Projects";
import ErrorPage from "./ErrorPage";
import { Switch, Route, Redirect } from "react-router";
import Home from "./Home";
import InputForm from "./InputForm";
import Login from "./Login";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/InputForm" component={InputForm} />
        <Route exact path="/Login" component={Login} />
        <Redirect to="/ErrorPage" component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
