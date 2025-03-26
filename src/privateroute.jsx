import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/authcontext";

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  // Se o usuário não estiver logado ou não for um professor, redireciona
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== "professor") {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
