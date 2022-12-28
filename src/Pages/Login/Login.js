import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, providerLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e.message);
        setLoginError(e.message);
      });
  };
  return (
    <div className="flex justify-center items-center w-11/12 mx-auto">
      <div className="w-96 p-7 bg-gray-50 dark:bg-slate-800 shadow-lg rounded-lg">
        <h2 className="text-xl text-center dark:text-gray-200">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          {/* --> */}
          <div className="form-control w-full py-2">
            <label className="label">
              <span className="text-sm dark:text-gray-200">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full "
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email?.message}</p>
            )}
          </div>
          {/* --< */}
          {/* --> */}
          <div className="form-control w-full">
            <label className="label">
              <span className="text-sm dark:text-gray-200">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-400 text-xs">{errors.password?.message}</p>
            )}
          </div>
          {/* --< */}
          <input
            className="py-2 uppercase font-mono mt-4 w-full px-4 bg-transparent text-green-400 font-semibold border border-green-400 rounded hover:bg-green-400 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
            value="login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-400 text-xs">{loginError}</p>}
          </div>
        </form>
        <p className="text-sm text-center pt-3 dark:text-gray-200">
          New here?{" "}
          <Link className="text-primary" to="/signup">
            Create new account
          </Link>
        </p>
        <div className="flex items-center justify-center py-2 dark:text-gray-200">
          OR
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="py-2 uppercase text-sm font-mono mt-2 w-full px-4 bg-transparent text-blue-400 font-semibold border border-blue-400 rounded hover:bg-blue-400 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
