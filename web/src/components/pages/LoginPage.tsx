import { useState } from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { EyeOff, Eye } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export const formSchema = z.object({
  email: z.string().email().min(3).max(50),
  password: z.string().min(5).max(50),
});

export const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const handlePasswordReveal = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await login(values);
      if (isLoggedIn) {
        navigate("/");
      }
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-md p-4 mt-12">
      <Label className="text-4xl mb-10 font-extrabold tracking-tight">
        The Bookstore
      </Label>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type={isPasswordVisible ? "password" : "text"}
                  />
                </FormControl>
                {form.getValues().password && (
                  <Button
                    onClick={handlePasswordReveal}
                    variant={null}
                    className="absolute top-[37%] left-[88%]"
                    type="button"
                  >
                    {isPasswordVisible ? (
                      <Eye className="h-5 w-5" />
                    ) : (
                      <EyeOff className="h-5 w-5" />
                    )}
                  </Button>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
      <div className="flex items-center justify-center">
        <Separator className="my-4" />
        <Label className="p-4 font-medium">OR</Label>
        <Separator className="my-4" />
      </div>
      <Button type="submit" className="w-full" variant="ghost">
        Sign Up
      </Button>
    </div>
  );
};
