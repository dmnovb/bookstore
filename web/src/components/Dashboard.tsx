import { useAuth } from "./context/AuthContext";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <Button onClick={handleLogout}>Log Out</Button>
    </div>
  );
};
