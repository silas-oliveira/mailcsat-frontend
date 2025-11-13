import { Routes, Route, Navigate } from "react-router-dom"
import { useCurrentUser } from "../hooks/useCurrentUser"

import PrivateRoute from "./PrivateRoute"

import PageLayout from "../components/PageLayout"
import PageLayoutRegister from "../components/PageLayoutRegister"
import PageLayoutSendMail from "../components/PageLayoutSendMail"

import HeaderLogin from "../components/Header/HeaderLogin"
import HeaderRegister from "../components/Header/HeaderRegister"
import HeaderDashboard from "../components/Header/HeaderDashboard"
import HeaderAdministrativo from "../components/Header/HeaderAdminstrativo"
import HeaderProfile from "../components/Header/HeaderProfile"

import Login from "../pages/Auth/LoginPage"
import Register from "../pages/Auth/RegisterPage"
import EmailForm from "../pages/EmailForm/EmailForm"
import Dashboard from "../pages/Dashboard/Dashboard"
import Profile from "../pages/Profile/ProfilePage"
import PainelAdmistrativo from "../pages/PainelAdminstrativo/PainelAdmistrativo"

export function AppRouter() {
  const { token } = useCurrentUser()

  return (
    <Routes>

      <Route
        path="/"
        element={
          <Navigate to={token ? "/send-emails" : "/auth/login"} />
        }
      />

      <Route
        path="/send-emails"
        element={
          <PrivateRoute>
            <PageLayoutSendMail
              showHeader={true}
              header={<HeaderDashboard />}
            >
              <EmailForm />
            </PageLayoutSendMail>
          </PrivateRoute>
        }
      />

      <Route
        path="/auth/register"
        element={
          <PageLayoutRegister
            showHeader={true}
            header={<HeaderRegister />}
          >
            <Register />
          </PageLayoutRegister>
        }
      />

      <Route
        path="/auth/login"
        element={
          <PageLayout
            showHeader={true}
            header={<HeaderLogin />}
          >
            <Login />
          </PageLayout>
        }
      />

      <Route
        path="/painel"
        element={
          <PrivateRoute>
            <PageLayoutSendMail
              showHeader={true}
              header={<HeaderAdministrativo />}
            >
              <PainelAdmistrativo />
            </PageLayoutSendMail>
          </PrivateRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <PageLayoutSendMail
              showHeader={true}
              header={<HeaderDashboard />}
            >
              <Dashboard />
            </PageLayoutSendMail>
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <PageLayoutSendMail
              showHeader={true}
              header={<HeaderProfile />}
            >
              <Profile />
            </PageLayoutSendMail>
          </PrivateRoute>
        }
      />
    </Routes>
  )
}
