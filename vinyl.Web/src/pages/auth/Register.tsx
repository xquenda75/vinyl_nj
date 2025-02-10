import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { RiMailFill } from "react-icons/ri";
import { Link } from "react-router-dom";

type Props = {};
function Register({}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-xl w-auto lg:w-[450px]">
      <h1 className="text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center">
        Crear Cuenta
      </h1>
      <form className="mb-8">
        <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full mb-8 rounded-full">
          <img
            src="/src/assets/icons/icons8-logo-de-google-48.png"
            className="w-4 h-4"
          />
          Registrate con Googgle
        </button>
        <div className="relative mb-4">
          <FaRegUser className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="text"
            placeholder="Nombre(s)"
            className="py-3 px-4 pl-8 pr-4 p bg-secondary-900 w-full outline-none rounded-lg"
          />
        </div>
        <div className="relative mb-4">
          <FaRegUser className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="text"
            placeholder="Apellidos"
            className="py-3 px-4 pl-8 pr-4 p bg-secondary-900 w-full outline-none rounded-lg"
          />
        </div>
        <div className="relative mb-4">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="py-3 px-4 pl-8 pr-4 p bg-secondary-900 w-full outline-none rounded-lg"
          />
        </div>
        <div className="relative mb-4">
          <FaLock className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
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
        <div className="relative">
          <FaLock className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirmar Contraseña"
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
        <div>
          <button
            type="submit"
            className="py-3 px-4 bg-primary w-full mt-8 rounded-lg text-white text-sm uppercase hover:text-gray-100"
          >
            Registrar
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center gap-4">
        <span className="flex items-center gap-2">
          ¿Ya tienes una cuenta?
          <Link
            to="/auth/"
            className="text-primary/80 hover:text-gray-100 transition-colors"
          >
            Ingresar
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
