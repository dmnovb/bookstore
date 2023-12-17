import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import * as z from "zod";
import { formSchema } from "../pages";
import { omit } from "lodash";

interface AuthContextProps {
  children: ReactNode;
}

type User = {
  email: string;
  username: string;
};

type AuthContextType = {
  user: User | null;
  login: (credentials: z.infer<typeof formSchema>) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User | null | any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (credentials: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(
        "http://localhost:1337/auth/login",
        credentials,
        {
          withCredentials: true,
        }
      );

      const userData = omit(response.data as User, ["authentication", "_id"]);
      console.log(userData);
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const logout = async () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
