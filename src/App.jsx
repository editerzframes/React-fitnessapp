import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Login from "./screens/auth/Login";
import Dashboard from "./screens/main/Dashboard/Dashboard";
import useToken from "./components/useToken";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/layouts/Main";
import Home from "./screens/main/Home/Home";
import AuthComp from "./AuthComp";

function App() {

  let uniqueRoutes = {
    dashbaord: {
      path: "/dashboard",
      name: "Dashboard",
    }
  }

  let routes = [
    {
      name: uniqueRoutes.dashbaord.name,
      path: uniqueRoutes.dashbaord.path,
      component: <Dashboard />,
      public: false,
    },
    {
      name: "Login",
      path: "/login",
      component: <Login />,
      public: true,
    },
    {
      name: "Home",
      path: "/",
      component: <Home />,
      public: true,
    },
  ];

  return (
    <Router>
      <Main>
        <Routes>
          {routes.map((value, index) => {
            return value.public ? (
              <Route key={index} path={value.path} element={value.component} />
            ) : (
              <Route
                key={index}
                path={value.path}
                element={<AuthComp component={value.component} />}
              />
            );
          })}
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
