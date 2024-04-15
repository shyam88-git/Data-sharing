import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AuthLayout from "@/layout/AuthLayout";
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
import { Link } from "react-router-dom";

const formSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  username: z.string(),
  email: z.string(),
  mobile_number: z.string(),
  password: z.string(),
  confirm_password: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;
const Signup = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      mobile_number: "",
      password: "",
      confirm_password: "",
    },
  });
  return (
    <AuthLayout title="Regiser To NepGIS">
      <div className="px-16">
        <Form {...form}>
          <form className="space-y-6">
            <div className=" flex items-center gap-5">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg ml-2 font-semibold">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="First name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg ml-2 font-semibold">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Last name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className=" flex items-center gap-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg ml-2 font-semibold">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="username"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg ml-2 font-semibold">
                      email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="mobile_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg ml-2 font-semibold">
                    Mobile
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="mobile number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className=" flex items-center gap-5">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg ml-2 font-semibold">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirm_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg ml-2 font-semibold">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="border border-slate-200 bg-slate-200 text-white rounded-full bg-transparent cursor-default hover:bg-slate-400 hover:text-white p-x px-6"
            >
              Sign up
            </Button>
            <p>
              Already have account? <Link to="/">Login</Link>
            </p>
          </form>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
