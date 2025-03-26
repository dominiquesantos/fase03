import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function login(email, password) {
    if (email === "professor@email.com" && password === "123456") {
      const userData = { email, role: "professor" };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return true; // ✅ Login bem-sucedido
    } else {
      return false; // ❌ Login falhou
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    
    console.log(user);  // Verifique o valor de 'user'

{user && user.role === "professor" && (
  <Link to="/criarpost">
    <button>Criar Post</button>
  </Link>
)}

  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
} // ✅ Essa chave fecha corretamente a função

