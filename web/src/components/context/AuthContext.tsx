import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios, { AxiosError } from "axios";
import * as z from "zod";
import { formSchema } from "../pages";
import { omit } from "lodash";
import { useToast } from "../ui/use-toast";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  children: ReactNode;
}

type User = {
  email: string;
  username: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  user: User | null;
  login: (credentials: z.infer<typeof formSchema>) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState<User | null | any>(null);
  const [isLoggedIn, setIsLoggenIn] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
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
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      setIsLoggenIn(true);
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message;
      console.log(errorMessage);
      toast({
        title: "Something went wrong",
        description: errorMessage,
      });
    }
  };

  const logout = async () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
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
