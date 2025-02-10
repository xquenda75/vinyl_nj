import { RiMailFill } from "react-icons/ri";
import { Link } from "react-router-dom";

type Props = {};

function ForgetPassword({}: Props) {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-xl w-auto lg:w-[450px]">
      <h1 className="text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center">
        Recuperar Contraseña
      </h1>
      <form className="mb-8">
        <div className="relative mb-4">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="py-3 px-4 pl-8 pr-4 p bg-secondary-900 w-full outline-none rounded-lg"
          />
        </div>

        <div>
          <button
            type="submit"
            className="py-3 px-4 bg-primary w-full mt-8 rounded-lg text-white text-sm uppercase hover:text-gray-100"
          >
            Enviar Instrucciones
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center gap-4">
        <span className="flex items-center gap-2">
          ¿Ya tienes una cuenta ?
          <Link
            to="/auth"
            className="text-primary/80 hover:text-gray-100 transition-colors"
          >
            Ingresar
          </Link>
        </span>
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

export default ForgetPassword;
