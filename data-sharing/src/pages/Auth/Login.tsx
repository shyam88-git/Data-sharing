import AuthLayout from "@/layout/AuthLayout";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const formSchema = z.object({
  username_or_phone: z.string(),
  password: z.string(),
});

type FormSchemaType = z.infer<typeof formSchema>;
const Login = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username_or_phone: "",
      password: "",
    },
  });
  return (
    <AuthLayout title=" Login To NepGIS">
      <div className=" px-16">
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="username_or_phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">
                    UserName or Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="User name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      className="bg-gray-50 border border-gray-300 w-72 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="border border-slate-200 bg-slate-200 text-white rounded-full bg-transparent cursor-default hover:bg-slate-400 hover:text-white p-x px-6"
            >
              Login
              <MdArrowOutward />
            </Button>
            <p>
              Don't have account ? <Link to="/signup">Register here</Link>
            </p>
          </form>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default Login;
