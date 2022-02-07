import { Formik } from "formik";
import FormInput from "../../components/form-input";
import * as Yup from "yup";
import { createUser } from "../../services/httpServices/auth/index";
import Router from 'next/router';
//import auth from "../../utils/firebaseConfig/index";

const Signup = () => {

    const handleSignupClick = ({ username, email, password }, { setSubmitting }) => {
        console.log("button clicked signup");
        const data = { email, password };
        try {
            createUser({
                data,
                cbSuccess: (data) => {
                    console.log("🚀 ~ file: index.js ~ line 17 ~ handleSignupClick ~ data", data)
                    Router.push('/login');
                },
                cbFailure: (error) => {
                    console.log("🚀 ~ file: index.js ~ line 21 ~ handleSignupClick ~ error", error)

                }
            });
            setSubmitting(false);
        } catch (err) {
            console.log(err);
            setSubmitting(false);
        }
    };

    return (
        <>
            <div class="grid grid-cols-3 gap-1">

                <div class="col-span-3 md:col-span-1 relative w-full md:h-screen">
                    <img
                        class="w-full h-full"
                        src="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=916&q=80"
                    />
                    <img
                        class="sm-logo md-logo"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlntjlqEKdN9tNAx78zzo4FMJolHKTwvthVw&usqp=CAU"
                    />
                    <div class="absolute inset-0 text-center flex justify-center items-center">
                        <h1 class="text-white text-lg">Welcome to Element Design</h1>
                    </div>
                </div>


                <div class="col-span-3 m-5 md:col-span-2">
                    <div class="absolute top-0 right-0 mt-5 mb-15 py-5 px-10 justify-center flex-auto">
                        <span class="font-bold text-gray-500">
                            Go back to
                        </span>
                        <a class="font-bold ml-2" href="/login">
                            Login
                        </a>
                    </div>

                    <div class="h-full w-full flex px-1 content-center justify-center items-center">
                        <Formik
                            initialValues={{ username: '', email: '', password: '', confirmpassword: '' }}
                            validationSchema={Yup.object({
                                username: Yup.string().max(15, "Must be 15 characters or less").required("username is required"),
                                email: Yup.string().email('Invalid email address').required('email is required'),
                                password: Yup.string()
                                    .min(8, 'Must have 8 characters.')
                                    .required('password is required'),
                                confirmpassword: Yup.string().when("password", {
                                    is: val => (val && val.length > 0 ? true : false),
                                    then: Yup.string().oneOf(
                                        [Yup.ref("password")],
                                        "both password need to be the same"
                                    )
                                }),
                            })}

                            onSubmit={handleSignupClick}
                        >
                            {
                                ({
                                    values: { username, email, password, confirmpassword },
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    /* and other goodies */
                                }) => {
                                    return <form class="bg-white rounded" onSubmit={handleSubmit}>
                                        <div class="mb-4">
                                            <label
                                                class="inline-grid grid-cols-3 text-gray-700 text-sm font-bold mb-2"
                                                for="username"
                                            >
                                                Username
                                            </label>
                                            <input
                                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="username"
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                                value={username}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isError={errors.username}
                                                isTouched={touched.username}
                                            />
                                            <p>{errors.username && touched.username && errors.username}</p>
                                        </div>
                                        <div class="mb-4">
                                            <label
                                                class="inline-grid grid-cols-3 text-gray-700 text-sm font-bold mb-2"
                                                for="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                id="email"
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                value={email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isError={errors.email}
                                                isTouched={touched.email}
                                            />
                                            <p>{errors.email && touched.email && errors.email}</p>
                                        </div>

                                        <div class="mb-4">
                                            <label
                                                class="inline-grid grid-cols-2 text-gray-700 text-sm font-bold mb-2"
                                                for="password"
                                            >
                                                Password
                                            </label>
                                            <input
                                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="password"
                                                type="password"
                                                placeholder="*******"
                                                name="password"
                                                value={password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isError={errors.password}
                                                isTouched={touched.password}
                                            />
                                            <p>{errors.password && touched.password && errors.password}</p>
                                        </div>
                                        <div class="mb-6">
                                            <label
                                                class="inline-grid grid-cols-2 text-gray-700 text-sm font-bold mb-2"
                                                for="confirmpassword"
                                            >
                                                Confirm Password
                                            </label>
                                            <input
                                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                id="confirmpassword"
                                                type="password"
                                                name="confirmpassword"
                                                placeholder="*******"
                                                value={confirmpassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                isError={errors.confirmpassword}
                                                isTouched={touched.confirmpassword}
                                            />
                                            <p>{errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}</p>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <button
                                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                Sign Up
                                            </button>

                                        </div>
                                    </form>
                                }
                            }
                        </Formik>
                        {/* <p class="text-center text-gray-500 text-xs">
              &copy;2020 Acme Corp. All rights reserved.
            </p> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
