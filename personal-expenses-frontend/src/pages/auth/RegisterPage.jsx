import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Field,
  FieldError,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {error: "Username must be at least 2 charcters long."}),
  email: z
    .email({error: "Please enter a valid email address."}),
  password: z
    .string()
    .min(6, {error: "Password must be at least 6 characters long."}),
  confirmPassword: z
    .string()
    .min(6, {error: "Password must be at least 6 characters long."})
})
.refine((data) => data.password === data.confirmPassword, {
    error: "Passwords don't match", 
    path: ["confirmPassword"]
  })

const RegisterPage = () => {

   const form = useForm({
      resolver: zodResolver(formSchema)
    })
  
    function onSubmit(data) { 
      toast("Form has been submitted!");
      console.log(data);
    }
  

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-gray-900">
      <form id="login-form" onSubmit={form.handleSubmit(onSubmit)} className="border border-cyan-900 p-20">
         <div className="text-center mb-5">
           <h1 className="text-gray-200 font-bold text-2xl mb-1">Login to your account</h1>
           <p className="text-gray-400">Enter your credentials below to login to your account</p>
         </div>
        <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="mb-4">
                  <FieldLabel className="text-gray-200">
                    Username
                  </FieldLabel>
                  <Input
                    {...field}
                    id="username"
                    placeholder="Username..."
                    aria-invalid={fieldState.invalid}
                    className="text-gray-200"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
          />
          <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="mb-4">
                  <FieldLabel className="text-gray-200">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    placeholder="Email..."
                    aria-invalid={fieldState.invalid}
                    className="text-gray-200"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
          />
          <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="mb-4">
                  <FieldLabel className="text-gray-200">
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    id="password"
                    placeholder="******"
                    aria-invalid={fieldState.invalid}
                    className="text-gray-200"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="mb-4">
                  <FieldLabel className="text-gray-200">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    {...field}
                    type="password"
                    id="confirmPassword"
                    placeholder="******"
                    aria-invalid={fieldState.invalid}
                    className="text-gray-200"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button type="submit" className="bg-gray-200 text-gray-900 w-full mt-4 mb-3 hover:outline-solid hover:text-gray-200 hover:bg-cyan-700">
              Register
          </Button>
          <FieldDescription className="text-center text-gray-400">
            Already have an account? 
            <span className="inline-block">
              <Link to="/login" className=" hover:text-gray-200 hover:font-semibold transition-colors underline underline-offset-4 pl-2">Sign in</Link>
              </span>
          </FieldDescription>
      </form>
    </div>
  )
}

export default RegisterPage