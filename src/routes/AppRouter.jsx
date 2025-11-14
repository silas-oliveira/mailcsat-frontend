import { Routes, Route, Navigate } from "react-router-dom"
import { useCurrentUser } from "../hooks/useCurrentUser"

import PrivateRoute from "./PrivateRoute"

import AuthLayout from "../components/layout/AuthLayout"
import AuthenticatedLayout from "../components/layout/AuthenticatedLayout"


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

import TemplateGeneratorPage from '../pages/Templates/TemplateGeneratorPage'

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
            <AuthenticatedLayout
              showHeader={true}
              header={<HeaderDashboard />}
            >
              <EmailForm />
            </AuthenticatedLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/auth/register"
        element={
          <AuthLayout
            showHeader={true}
            header={<HeaderRegister />}
          >
            <Register />
          </AuthLayout>
        }
      />

      <Route
        path="/auth/login"
        element={
          <AuthLayout
            showHeader={true}
            header={<HeaderLogin />}
          >
            <Login />
          </AuthLayout>
        }
      />

      <Route
        path="/painel"
        element={
          <PrivateRoute>
            <AuthenticatedLayout
              showHeader={true}
              header={<HeaderAdministrativo />}
            >
              <PainelAdmistrativo />
            </AuthenticatedLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <AuthenticatedLayout
              showHeader={true}
              header={<HeaderDashboard />}
            >
              <Dashboard />
            </AuthenticatedLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <AuthenticatedLayout
              showHeader={true}
              header={<HeaderProfile />}
            >
              <Profile />
            </AuthenticatedLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/templates"
        element={
          <PrivateRoute>
            <AuthenticatedLayout
              showHeader={true}
              header={<HeaderDashboard />}
            >
              <TemplateGeneratorPage />
            </AuthenticatedLayout>
          </PrivateRoute>
        }
      />
    </Routes>
  )
}
