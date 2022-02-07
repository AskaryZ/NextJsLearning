import { Formik } from "formik";
import FormInput from "../../components/form-input";
import * as Yup from "yup";
import { authenticateUser } from "../../services/httpServices/auth/index";
import Router from "next/router";

const Login = () => {
  const handleLoginClick = async ({ email, password }, { setSubmitting }) => {
    console.log("button clicked signup");
    const data = { email, password };
    authenticateUser({
      data,
      cbSuccess: (data) => {
        console.log(
          "🚀 ~ file: index.js ~ line 17 ~ handleSignupClick ~ data",
          data
        );
        Router.push("/");
      },
      cbFailure: (error) => {
        console.log(
          "🚀 ~ file: index.js ~ line 21 ~ handleSignupClick ~ error",
          error
        );
      },
    });
    setSubmitting(false);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-1">
        <div className="col-span-3 md:col-span-1 relative w-full md:h-screen">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=916&q=80"
          />
          <img
            className="sm-logo md-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlntjlqEKdN9tNAx78zzo4FMJolHKTwvthVw&usqp=CAU"
          />
          <div className="absolute inset-0 text-center flex justify-center items-center">
            <h1 className="text-white text-lg">Welcome to Element Design</h1>
          </div>
        </div>

        <div className="col-span-3 m-5 md:col-span-2">
          <div className="absolute top-0 right-0 mt-5 mb-15 py-5 px-10 justify-center flex-auto">
            <span className="font-bold text-gray-500">
              Don't have and account yet?
            </span>
            <a className="font-bold ml-2" href="/signup">
              Signup
            </a>
          </div>

          <div className="h-full w-full flex px-1 content-center justify-center items-center">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("email is required"),
                password: Yup.string()
                  .min(8, "Must have 8 characters.")
                  .required("password is required"),
              })}
              onSubmit={handleLoginClick}
            >
              {({
                values: { email, password },
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => {
                return (
                  <form onSubmit={handleSubmit} className="bg-white rounded">
                    <div className="mb-4">
                      <label
                        className="inline-grid grid-cols-3 text-gray-700 text-sm font-bold mb-2"
                        forhtml="email"
                      >
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        iserror={errors.email}
                        istouched={touched.email}
                      />
                      <p>{errors.email && touched.email && errors.email}</p>
                    </div>
                    <div className="mb-6">
                      <label
                        className="inline-grid grid-cols-2 text-gray-700 text-sm font-bold mb-2"
                        forhtml="password"
                      >
                        Password
                      </label>
                      <input
                        className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="******"
                        value={password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        iserror={errors.password}
                        istouched={touched.password}
                      />
                      <p>
                        {errors.password && touched.password && errors.password}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Login
                      </button>
                      <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </form>
                );
              }}
            </Formik>

            {/* <p className="text-center text-gray-500 text-xs">
              &copy;2020 Acme Corp. All rights reserved.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
