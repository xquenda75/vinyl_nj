import { RiMailFill } from "react-icons/ri";
import { FaLock } from "react-icons/fa6";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ThreeDot } from "react-loading-indicators";

type Props = {};

function Login({}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  console.log("URL del proyecto: ", import.meta.env.VITE_API_URL);

  const handleSubmit = async function submitLogin(
    values: any,
    { setMessageError, setIsLoading }: any
  ) {
    console.log(values);

    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 3000));
      const urlApiBase = import.meta.env.VITE_API_URL;
      const loginDto = {
        UserName: values.email,
        Password: values.password,
      };
      const response = await axios.post(`${urlApiBase}/login`, loginDto);
      console.log("Status Code: ", response.status);

      if (response.status === 200) {
        console.log("Login correcto");
        navigate("/");
      }

      localStorage.setItem("authToken", response.data.token);

      console.log("token:", response.data.token);
      console.log("Despues del login");
      setMessageError("");
    } catch (error) {
      console.log("Code Error: ", error.response.status);

      if (error.response.status === 401) {
        setMessageError("Correo o contraseña incorrectos");
      } else {
        setMessageError("Error al iniciar sesión");
      }
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-xl w-auto lg:w-[450px]">
      <h1 className="text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center">
        Iniciar Sesión
      </h1>

      <Formik
        className="mb-8"
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) =>
          handleSubmit(values, { setMessageError, setIsLoading })
        }
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Correo electrónico inválido")
            .required("Correo electrónico requerido"),
          password: Yup.string().required("Contraseña requerida"),
        })}
      >
        {(formikProps) => (
          <Form>
            {/* <form className="mb-8"> */}
            <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full mb-8 rounded-full">
              <img
                src="/src/assets/icons/icons8-logo-de-google-48.png"
                className="w-4 h-4"
              />
              Ingresar con Googgle
            </button>
            <div className="relative mb-4">
              <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <Field
                name="email"
                type="email"
                placeholder="Correo electrónico"
                className="py-3 px-4 pl-8 pr-4 p bg-secondary-900 w-full outline-none rounded-lg"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="py-3 px-4 pl-8 pr-8 p bg-secondary-900 w-full outline-none rounded-lg"
              />

              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <AiFillEye
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 w-full ml-8 mb-4  gap-4"
            >
              {(msg) => <div className="text-red-500">{msg}</div>}
            </ErrorMessage>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 w-full ml-4"
            >
              {(msg) => <div className="text-red-500">{msg}</div>}
            </ErrorMessage>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex justify-center py-3 px-4 bg-primary w-full mt-8 rounded-lg text-white text-sm uppercase hover:text-gray-100"
              >
                {formikProps.isSubmitting ? (
                  <div className="flex justify-center ">
                    <ThreeDot
                      color="#eef3ee"
                      size="small"
                      text=""
                      textColor=""
                    />
                  </div>
                ) : (
                  <span>Ingresar</span>
                )}
              </button>
            </div>
            <div className="text-red-500 text-center mt-4">{messageError}</div>
            {/* </form> */}
          </Form>
        )}
      </Formik>
      <div className="flex flex-col items-center gap-4">
        <Link
          to="/auth/recoverpassword"
          className="text-white hover:text-primary transition-colors"
        >
          ¿Olvidaste tu contraseña?
        </Link>
        <span className="flex items-center gap-2">
          ¿No tienes cuenta?
          <Link
            to="/auth/register"
            className="text-primary/80 hover:text-gray-100 transition-colors"
          >
            Registrate
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
