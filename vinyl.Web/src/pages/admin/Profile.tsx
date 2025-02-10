import { Switch } from "@headlessui/react";
import { useState } from "react";
import { FaEdit, FaShieldAlt } from "react-icons/fa";
import { GrConnect } from "react-icons/gr";
import { TiWarning } from "react-icons/ti";

type Props = {};

function Profile({}: Props) {
  const [enabledGooglePlan, setEnabledGooglePlan] = useState(false);
  const [enabledGitHub, setEnabledGitHub] = useState(false);
  const [enabledSlack, setEnabledSlack] = useState(false);

  return (
    <>
      {/* Pofile */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Profile</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p>Avatar</p>
            </div>
            <div className="flex-1">
              <div className="relative mb-2">
                <img
                  src="https://img.freepik.com/foto-gratis/animada-entusiasta-decidida-sonriente-confiada-asiatica-lista-abordar-cualquier-tarea-cruzar-dedos-sobre-pecho-asertiva-segura-si-misma-sonriente-satisfecha-parece-profesional-fondo-blanco_176420-51110.jpg?t=st=1724692729~exp=1724696329~hmac=cbd30d20380b03d51beece94851e9e7d8837acfc383647d3a2d99ae86aaf59c0&w=1380"
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <label
                  htmlFor="avatar"
                  className="absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-3 left-24"
                >
                  <FaEdit className="hover:text-primary transition-colors" />
                </label>
                <input type="file" id="avatar" className="hidden" />
              </div>
              <p className="text-gray-400 text-sm">
                Allowed files types: png,jpg, jpeg
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre Completo <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full bg-secondary-900 px-4 py-2 rounded-lg outline-none"
                  placeholder="Nombre(s)"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full bg-secondary-900 px-4 py-2 rounded-lg outline-none"
                  placeholder="Apellido(s)"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-2 md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre de la empresa <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full bg-secondary-900 px-4 py-2 rounded-lg outline-none"
                placeholder="Empresa"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-2 md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Número de contacto <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full bg-secondary-900 px-4 py-2 rounded-lg outline-none"
                placeholder="Numero de contacto"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-2 md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Sitio <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full bg-secondary-900 px-4 py-2 rounded-lg outline-none"
                placeholder="Sitio Web"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row  md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                País <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full bg-secondary-900 px-4 py-2 rounded-lg outline-none">
                <option value="Argentina">Argentina</option>
                <option value="Colombia">Colombia</option>
                <option value="Peru">Peru</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Uruguay">Uruguay</option>
                <option value="México" selected>
                  México
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Ciudad <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full bg-secondary-900 px-4 py-2 rounded-lg outline-none">
                <option value="Bogota">Bogota</option>
                <option value="Lima">Lima</option>
                <option value="Montevideo">Montevideo</option>
                <option value="Caracas">Venezuela</option>
                <option value="CDMX" selected>
                  Ciudad de México
                </option>
              </select>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-primary/80 py-2 px-4 rounded-lg hover:bg-primary transition-colors">
            Guardar
          </button>
        </div>
      </div>
      {/* End Profile */}
      {/* Sign In */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Usuario y contraseña </h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 justify-between">
            <div className="mb-6 md:mb-1">
              <h5 className="text-gray-100 text-xl mb-1">Correo electrónico</h5>
              <p className="text-gray-500 text-sm">jorge.lopez@dock.tech</p>
            </div>
            <div className="">
              <button className="w-full md:w-auto bg-primary/30 py-2 px-4 rounded-lg hover:bg-primary transition-colors hover:text-gray-100">
                Cambiar email
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed mb-8" />
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div className="">
              <h5 className="text-gray-100 text-xl">Contraseña</h5>
              <p className="text-gray-500 text-sm">*****************</p>
            </div>
            <div className="">
              <button className="w-full md:w-auto bg-primary/30 py-2 px-4 rounded-lg hover:bg-primary transition-colors hover:text-gray-100">
                Cambiar contraseña
              </button>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col md:flex-row border border-dashed border-blue-700/90 items-center bg-blue-500/20 p-4 rounded-lg gap-4">
          <div className="flex justify-center">
            <FaShieldAlt className="text-4xl mr-5" />
          </div>
          <div className="md:col-span-6">
            <h5 className="text-gray-100 text-xl">Asegura tu cuenta</h5>
            <p>
              Two-factor authentication add an extra layer of security to your
              account, To log in, in addition to your password, you will need a
              code generated by the Google Authenticator app on your phone.
            </p>
          </div>
          <div>
            <button className="bg-primary/80 py-2 px-4 rounded-lg hover:bg-primary transition-colors">
              Activar
            </button>
          </div>
        </div>
      </div>
      {/* End Sign In */}
      {/* Connect Accounts */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Conectar con cuentas </h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="border border-dashed border-blue-700/90 flex flex-col md:flex-row items-center justify-between bg-blue-500/20 p-4 rounded-lg mb-8 gap-4">
          <div>
            <GrConnect className="text-4xl mr-5" />
          </div>
          <div>
            <p>
              Two-factor authentication add an extra layer of security to your
              account, To log in, in addition to your password, you will need a
              code generated by the Google Authenticator app on your phone.{" "}
              <span className="text-primary font-bold cursor-pointer">
                Learn More
              </span>
            </p>
          </div>
          <div>
            <button
              className="bg-primary/80 py-2 px-4 rounded-lg hover:bg-primary transition-colors"
              onClick={async () => {
                const res = await fetch("http://localhost:3000/activate");
                const data = await res.json();
                console.log(data);
              }}
            >
              Activar
            </button>
          </div>
        </div>
        <form className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                className="w-8 h-8 object-cover"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">Google</h5>
                <p className="text-sm text-gray-500">
                  Plan property your workflow
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabledGooglePlan}
                onChange={setEnabledGooglePlan}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-secondary-900 transition data-[checked]:bg-blue-600"
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
            </div>
          </div>
          <hr className="my-6 border-gray-500/30" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/src/assets/icons/logoGitHub.png"
                className="w-8 h-8 object-cover"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">Git Hub</h5>
                <p className="text-sm text-gray-500">
                  Plan property your workflow
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabledGitHub}
                onChange={setEnabledGitHub}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-secondary-900 transition data-[checked]:bg-blue-600"
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
            </div>
          </div>
          <hr className="my-6 border-gray-500/30" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/src/assets/icons/logoSlack.png"
                className="w-8 h-8 object-cover"
              />
              <div className="flex flex-col gap-y-1">
                <h5 className="text-gray-100">Slack</h5>
                <p className="text-sm text-gray-500">
                  Plan property your workflow
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabledSlack}
                onChange={setEnabledSlack}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-secondary-900 transition data-[checked]:bg-blue-600"
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
            </div>
          </div>
        </form>
      </div>
      {/* End Connect Accounts */}
      {/* Emails Preferents */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">
          Notificaciones por correo electrónico
        </h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <input
                id="chkNotifEmail"
                type="checkbox"
                className="accent-primary"
              />
              <div className="flex flex-col gap-y-1">
                <label htmlFor="chkNotifEmail" className="text-gray-100">
                  Succesful Payments
                </label>
                <p className="text-sm text-gray-500">
                  Receive a notification for every successful payment
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <hr className="my-6 border-gray-500/30" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <input
                id="chkNotifPayouts"
                type="checkbox"
                className="accent-primary"
              />
              <div className="flex flex-col gap-y-1">
                <label className="text-gray-100" htmlFor="chkNotifPayouts">
                  Payouts
                </label>
                <p className="text-sm text-gray-500">
                  Receive a notification for every initiated payout
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <hr className="my-6 border-gray-500/30" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <input
                id="chkNotifCustomer"
                type="checkbox"
                className="accent-primary"
              />
              <div className="flex flex-col gap-y-1">
                <label className="text-gray-100" htmlFor="chkNotifCustomer">
                  Customer Payment Dispute
                </label>
                <p className="text-sm text-gray-500">
                  Receive a notification if a payment is disputed by a customer
                  and for dispute purposes
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </form>
      </div>
      {/* End Email Preferents */}
      {/*  Desactivar cuenta */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Desactivar cuenta</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col md:flex-row items-center justify-between border border-dashed border-yellow-700/90  bg-yellow-500/20 p-4 rounded-lg mb-8 gap-4">
          <div>
            <TiWarning className="text-4xl mr-5" />
          </div>
          <div>
            <p>
              Two-factor authentication add an extra layer of security to your
              account, To log in, in addition to your password, you will need a
              code generated by the Google Authenticator app on your phone.{" "}
              <span className="text-primary font-bold cursor-pointer">
                Learn More
              </span>
            </p>
          </div>
        </div>
        <form className="mb-8 flex items-center gap-4">
          <input type="checkbox" className="accent-primary" id="idInactive" />
          <label htmlFor="idInactive" className="text-gray-500">
            I confirm that I want to deactivate my account
          </label>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-red-500/80 py-2 px-4 rounded-lg hover:bg-red-500 text-gray-100 transition-colors">
            Desactivar
          </button>
        </div>
      </div>
      {/* End Email Preferents */}
    </>
  );
}

export default Profile;
