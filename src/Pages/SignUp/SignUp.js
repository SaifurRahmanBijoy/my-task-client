import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, providerLogin } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (data) => {
    setSignUPError("");
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.log(e);
        setSignUPError(e.message);
      });
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignUp = () => {
    providerLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center items-center w-11/12 mx-auto">
      <div className="w-96 p-7 bg-gray-50 dark:bg-slate-800 shadow-lg rounded-lg">
        <h2 className="text-xl text-center dark:text-gray-200">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          {/* --> */}
          <div className="w-full py-2">
            <label className="label">
              <span className="text-sm dark:text-gray-200">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email required",
              })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email.message}</p>
            )}
          </div>
          {/* --< */}
          {/* --> */}
          <div className="form-control w-full py-2">
            <label className="label">
              <span className="text-sm dark:text-gray-200">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password required",
                minLength: {
                  value: 6,
                  message: "Password must be more than 5 Characters",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have an uppercase,number,special case",
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-400 text-xs">{errors.password.message}</p>
            )}
          </div>
          {/* --< */}
          <input
            className="py-2 uppercase font-mono mt-2 w-full px-4 bg-transparent text-green-400 font-semibold border border-green-400 rounded hover:bg-green-400 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
            value="sign up"
            type="submit"
          />
          {signUpError && <p className="text-red-400 text-xs">{signUpError}</p>}
        </form>
        <p className="text-sm text-center pt-3 dark:text-gray-200">
          Already have an account?{" "}
          <Link className="text-blue-400" to="/login">
            Login
          </Link>
        </p>
        <div className="flex items-center justify-center py-2 dark:text-gray-200">
          OR
        </div>
        <button
          onClick={handleGoogleSignUp}
          className="py-2 uppercase text-sm font-mono mt-2 w-full px-4 bg-transparent text-blue-400 font-semibold border border-blue-400 rounded hover:bg-blue-400 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
