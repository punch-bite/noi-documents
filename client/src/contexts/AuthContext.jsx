import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email, password) => {

    return new Promise((resolve) => {
      setTimeout(() => {
        if (email && password) {
          setUser({ email });
          setIsAuthenticated(true);
          resolve(true);
        }else{
          resolve(false);
        }
      }, 1000);
    });
  }

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

}

// Hook personnalisé pour utiliser le contexte
export function useAuth() {
  return useContext(AuthContext);
}
