import "./App.css";
// import Login from "modules/Authentication/Pages/Login";

import { Routes, Route, Outlet } from "react-router-dom";

import { lazy, Suspense } from "react";
import Register from "modules/Authentication/Pages/Register";
import Home from "./modules/Home/pages/Home";
import Login from "modules/Authentication/Pages/Login";
import AuthLayout from "components/AuthLayout";
import MainLayout from "components/MainLayout";
// const Login = lazy(() => import("modules/Authentication/Pages/Login"));

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* AdminUser, AdminShowtimes */}

          {/* Để các routes có cùng chung 1 layout, ta sử dụng kĩ thuật nested route, route parent đi định nghĩa layout component, bên trong route parent sẽ gọi tới cái children routes */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
