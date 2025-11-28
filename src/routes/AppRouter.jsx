import { Routes, Route, Navigate } from "react-router-dom"
import { useCurrentUser } from "../hooks/useCurrentUser"

import PrivateRoute from "./PrivateRoute"

import AppHeader from "../components/Header/AppHeader"

import AuthLayout from "../layouts/AuthLayout"
import AuthenticatedLayout from "../layouts/AuthenticatedLayout"

import Login from "../pages/Auth/LoginPage"
import Register from "../pages/Auth/RegisterPage"
import EmailForm from "../pages/EmailForm/EmailForm"
import Profile from "../pages/Profile/ProfilePage"

import TemplateGeneratorPage from '../pages/Templates/TemplateGeneratorPage'
import TesteFlex from "../components/teste"
import { Mail, Notebook, Send, SquareUser, Wand2 } from "lucide-react"

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
              header={<AppHeader
                title="Mail CSAT"
                subtitle="Adicione clientes e envie lembretes para responderem à pesquisa de satisfação."
                icon={Send}
                iconSize={22}
                iconColor="#8abcfb"
                animationType="float"
              />}
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
            header={<AppHeader
              title="Criar conta"
              subtitle="Crie sua conta e facilite o envio de pesquisas."
              icon={Notebook}
              iconSize={22}
              iconColor="#8abcfb"
              animationType="float"
            />}
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
            header={<AppHeader
              title="Mail CSAT"
              subtitle="Envie lembretes automáticos para aumentar as respostas do CSAT."
              icon={Mail}
              iconSize={22}
              iconColor="#8abcfb"
              animationType="float"
            />
            }
          >
            <Login />
          </AuthLayout>
        }
      />

      {/* <Route
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
      /> */}

      {/* <Route
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
      /> */}

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <AuthenticatedLayout
              showHeader={true}
              header={<AppHeader
                title="Perfil de usuário"
                subtitle="Gerencie os dados do seu perfil."
                icon={SquareUser}
                iconSize={22}
                iconColor="#ffffff"
                animationType="rotate"
              />
              }
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
              header={<AppHeader
                title="Gerador de Templates"
                subtitle="Crie e-mails automaticamente com auxílio de IA ✨"
                icon={Wand2}
                iconSize={32}
                iconColor="#f4d35e"
                animationType="rotate"
              />
              }
            >
              <TemplateGeneratorPage />
            </AuthenticatedLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/teste"

        element={<TesteFlex />}
      />
    </Routes>
  )
}
