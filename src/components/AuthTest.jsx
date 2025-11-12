import { useAuth } from "../hooks/useAuth";

export default function AuthTest() {
  const { token, isAuthenticated } = useAuth()


  return (
    <div style={{ padding: "1rem", background: "#f8f9fa" }}>
      <p><strong>Token:</strong> {token || "nenhum"}</p>
      <p><strong>Autenticado?</strong> {isAuthenticated ? "Sim" : "Não"}</p>
    </div>
  )
}