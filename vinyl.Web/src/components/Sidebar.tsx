import { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { IoClose, IoEarth } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

type Props = {};

function Sidebar({}: Props) {
  const [showSubMenuRedesSociales, setShowSubMenuRedesSociales] =
    useState(false);
  const [showBtnMenu, setShowBtnMenu] = useState(false);

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static bg-secondary-100 w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full ${
          showBtnMenu ? "-left-full" : "left-0"
        }  top-0 p-8 flex flex-col justify-between z-50`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold text-white mb-10">
            Admin<span className="text-primary text-4xl">.</span>
          </h1>
          <ul>
            <li>
              <Link
                to="/albums"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <SiGoogleanalytics className="text-primary" /> Albums
              </Link>
            </li>
            <li>
              <button
                onClick={() =>
                  setShowSubMenuRedesSociales(!showSubMenuRedesSociales)
                }
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <IoEarth className="text-primary" /> Redes sociales
                </span>
                <FaChevronRight
                  className={`mt-1 ${
                    showSubMenuRedesSociales && "rotate-90"
                  } transition-all`}
                />
              </button>
              <ul
                className={`my-2 ${
                  !showSubMenuRedesSociales && "hidden"
                } transition-all duration-500`}
              >
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary 
                  before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white hover:transition-colors"
                  >
                    Post red social
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary 
                  before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100  hover:text-white hover:transition-colors"
                  >
                    Estadisticas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary 
                  before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100  hover:text-white hover:transition-colors"
                  >
                    Perfiles
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <BiSupport className="text-primary" /> Soporte técnico
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <FaCalendarAlt className="text-primary" /> Calendarios
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link
            to="/auth"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <FiLogOut className="text-primary" /> Cerrar sesión
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowBtnMenu(!showBtnMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showBtnMenu ? <TiThMenu /> : <IoClose />}
      </button>
    </>
  );
}

export default Sidebar;
